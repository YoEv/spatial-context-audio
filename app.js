'use strict';
const $=s=>document.querySelector(s);
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const types={time_localization:'时间定位',speaker_content:'谁说了什么',content_context_A:'会议内容',content_context_B:'晚餐内容',speaker_counts:'各组人数'};
let data,meta,resultData,answers=null,current='SC001';
const selections=new Map(),submitted=new Set();
async function loadJSON(path){const r=await fetch(path);if(!r.ok)throw new Error(`${path}: HTTP ${r.status}`);return r.json();}
const sample=()=>data.samples.find(s=>s.id===current);
function route(){const raw=location.hash.slice(1);const parts=raw.split('/');const view=['results','about'].includes(parts[0])?parts[0]:'listen';if(parts[1]&&data.samples.some(s=>s.id===parts[1]))current=parts[1];for(const v of ['listen','results','about']){$(`#${v}-view`).hidden=v!==view;$(`#nav-${v}`).classList.toggle('active',v===view);}if(view==='listen')renderSample();if(view==='results')renderResults();}
function renderList(){$('#sample-list').innerHTML=data.samples.map((s,i)=>`<button class="sample-button ${s.id===current?'selected':''}" data-sample="${s.id}" aria-pressed="${s.id===current}"><span class="sample-number">${String(i+1).padStart(2,'0')}</span><span class="sample-name">${esc(meta.samples[i].title)}<small>${s.id} · 60 秒</small></span></button>`).join('');$('#sample-list').querySelectorAll('button').forEach(b=>b.onclick=()=>{location.hash=`listen/${b.dataset.sample}`;});}
function roomSVG(m){let s='<svg class="room" viewBox="0 0 240 170" role="img" aria-label="虚拟房间俯视图：蓝色会议组 A，橙色晚餐组 B，听者面向前方"><defs><pattern id="grid" width="22" height="22" patternUnits="userSpaceOnUse"><path d="M22 0H0V22" fill="none" stroke="#e6ecf2" stroke-width=".5"/></pattern></defs><rect x="15" y="12" width="210" height="145" rx="5" fill="url(#grid)" stroke="#c9d6e3"/><path d="M120 105L113 119H127Z" fill="#283f52"/><text x="105" y="139" fill="#60727c" font-size="9">听者</text>';
for(const [ctx,p] of Object.entries(m.room.source_xyz_m)){const x=15+p[0]/6*210,y=157-p[1]/5*145,color=ctx==='A'?'#295eda':'#b7683b';s+=`<path d="M120 112L${x} ${y}" stroke="${color}" opacity=".35" stroke-dasharray="3 3"/><circle cx="${x}" cy="${y}" r="14" fill="${color}" opacity=".1"/><circle cx="${x}" cy="${y}" r="6" fill="${color}"/><text x="${x-13}" y="${y-20}" font-size="10" fill="${color}">组 ${ctx}</text>`;}return s+'</svg>';}
function renderSample(){renderList();const s=sample(),m=meta.samples.find(x=>x.id===s.id);const done=submitted.has(current);$('#sample-content').innerHTML=`<section class="panel"><div class="sample-header"><div><span class="sample-id">${s.id} / TWO CONTEXTS</span><h2>${esc(m.title)}</h2><div class="tags"><span class="tag">60 秒</span><span class="tag">48 kHz · 双声道</span><span class="tag">5 道题</span></div></div><button class="share-btn" id="share">分享此样例 ↗</button></div><div class="room-row">${roomSVG(m)}<div class="room-copy"><p><span class="legend-a">● 会议组 A</span>　NOTSOFAR</p><p><span class="legend-b">● 晚餐组 B</span>　CHiME-6</p><p>两个组级声源，左右方位 ${Math.abs(m.room.azimuth_deg.A)}°。<br>对照版两组都位于正前方。</p></div></div><div class="players">${[['spatial','空间版','两个不同方位 · 建议耳机'],['colocated','同位置对照','同一正前方 · 音量匹配']].map(([c,title,sub])=>`<div class="player"><h3>${title}</h3><p>${sub}</p><audio controls preload="none" src="${esc(s.audio[c])}" aria-label="${s.id} ${title}"></audio><a href="${esc(s.audio[c])}" download>↓ 下载原始 WAV</a></div>`).join('')}</div></section><section class="panel"><div class="questions-top"><h3>听完，试着回答</h3><small>每题四选一 · 两版共用题目</small></div><form id="quiz">${s.questions.map((q,i)=>`<section class="question" id="${q.id}"><div class="q-meta"><span>QUESTION ${i+1} / 5</span><span class="q-type">${types[q.type]}</span></div><p class="q-text">${esc(q.question)}</p><div class="options">${q.options.map((o,j)=>`<label class="option"><input type="radio" name="${q.id}" value="${j}" ${selections.get(q.id)===j?'checked':''}><span class="letter">${'ABCD'[j]}</span><span>${esc(o)}</span></label>`).join('')}</div><div class="answer-slot"></div></section>`).join('')}<div class="quiz-actions"><button class="primary" type="submit">检查我的答案</button><button class="secondary" id="reveal" type="button">查看答案与证据</button><span class="score" id="score" role="status"></span></div></form><p class="note">作答仅在当前浏览器页面中保留。查看答案后仍可重新选择并评分。</p></section>`;
$('#share').onclick=async()=>{const url=new URL(location.href);url.hash=`listen/${current}`;try{await navigator.clipboard.writeText(url.href);$('#share').textContent='链接已复制';}catch{$('#share').textContent='复制地址栏即可分享';}};
$('#quiz').onchange=e=>{if(e.target.type==='radio')selections.set(e.target.name,Number(e.target.value));};
$('#quiz').onsubmit=async e=>{e.preventDefault();try{await showAnswers(true);}catch{$('#score').textContent='答案加载失败，请重试。';}};
$('#reveal').onclick=async()=>{try{await showAnswers(false);}catch{$('#score').textContent='答案加载失败，请重试。';}};
document.querySelectorAll('audio').forEach(a=>a.onplay=()=>document.querySelectorAll('audio').forEach(b=>{if(a!==b)b.pause();}));
if(done&&answers)showAnswers(true);
}
async function showAnswers(score){if(!answers)answers=await loadJSON('answers.json');const s=sample();const g=answers.samples.find(x=>x.id===s.id);let correct=0,answered=0;for(const a of g.answers){const q=document.getElementById(a.id),selected=selections.get(a.id);if(selected!==undefined){answered++;if(selected===a.answer_index)correct++;}q.querySelectorAll('.option').forEach((label,i)=>{label.classList.toggle('correct',i===a.answer_index);label.classList.toggle('wrong',score&&i===selected&&i!==a.answer_index);});q.querySelector('.answer-slot').innerHTML=`<details class="evidence"><summary>答案 ${a.answer} · 展开逐句证据</summary>${a.evidence.map(e=>`<p><small>${esc(e.row_id)} · ${Number(e.start).toFixed(2)}–${Number(e.end).toFixed(2)} 秒 · ${esc(e.speaker)}</small><br>${esc(e.clean_text)}</p>`).join('')}</details>`;}if(score){submitted.add(current);$('#score').textContent=`答对 ${correct} / 5 · 已作答 ${answered} / 5${answered<5?'（未答题尚未选择）':''}`;}else $('#score').textContent='已显示参考答案。';}
function getLatestRuns(condition){const latest=new Map();for(const r of [...resultData.runs].sort((a,b)=>Date.parse(a.created_at)-Date.parse(b.created_at))){if(r.condition===condition)latest.set(r.model_id+'|'+r.sample_id,r);}return [...latest.values()];}
function renderResults(){const condition=$('#result-condition').value;const runs=getLatestRuns(condition);$('#results-note').textContent=runs.length?`当前条件已记录 ${runs.length} 个模型 × 样例结果。下表仅统计本题集，每个组合展示最新 attempt。`:'本题集尚未运行模型。结果区已准备好：接入真实结果后，这里会显示逐题选择、正确率、耗时和输入声道处理方式。';
$('#model-table').innerHTML=`<div class="table-wrap"><table><thead><tr><th>模型</th><th>状态</th><th>已运行样例</th><th>有效答题 / 正确数</th><th>准确率</th><th>输入说明</th></tr></thead><tbody>${resultData.models.map(m=>{const rs=runs.filter(r=>r.model_id===m.id),valid=rs.flatMap(r=>r.questions).filter(q=>q.prediction!==null),n=valid.length,c=valid.filter(q=>q.correct).length;return `<tr><td>${esc(m.name)}<small>${esc(m.kind)}</small></td><td><span class="pill">${rs.length?'已记录 '+rs.length+' 条':'未运行'}</span></td><td>${rs.length} / 10</td><td>${n?`${n} 题 / ${c} 正确`:'—'}</td><td>${n?Math.round(c/n*100)+'%':'—'}</td><td>${rs.length?esc([...new Set(rs.map(r=>r.channel_handling))].join(' / ')):'待核验'}</td></tr>`;}).join('')}</tbody></table></div>`;
initBoard();renderBoard();}
function initBoard(){
    if($('#board-model').options.length)return;
    $('#board-model').innerHTML=resultData.models.map(m=>`<option value="${esc(m.id)}">${esc(m.name)}</option>`).join('');
    const first=resultData.models.find(m=>resultData.runs.some(r=>r.model_id===m.id&&r.status==='completed'));
    if(first)$('#board-model').value=first.id;
    $('#board-sample').innerHTML+=data.samples.map(s=>`<option value="${esc(s.id)}">${esc(s.id)} · ${esc(meta.samples.find(m=>m.id===s.id)?.title)}</option>`).join('');
    $('#board-type').innerHTML+=Object.entries(types).map(([id,name])=>`<option value="${id}">${name}</option>`).join('');
    for(const id of ['model','sample','type','filter'])$('#board-'+id).onchange=renderBoard;
    $('#board-reset').onclick=()=>{for(const id of ['sample','type','filter'])$('#board-'+id).value='all';renderBoard();};
}
function boardRows(model){
    const runs={};
    for(const c of ['spatial','colocated'])runs[c]=new Map(getLatestRuns(c).filter(r=>r.model_id===model).map(r=>[r.sample_id,r]));
    return data.samples.flatMap(s=>s.questions.map(q=>{
        const row={sample:s,question:q};
        for(const c of ['spatial','colocated']){
            const run=runs[c].get(s.id),answer=run?.questions.find(a=>a.id===q.id);
            const valid=run?.status==='completed'&&['A','B','C','D'].includes(answer?.prediction)&&typeof answer?.correct==='boolean';
            row[c]={run,answer,valid,correct:valid?answer.correct:null};
        }
        row.gold=row.spatial.answer?.gold??row.colocated.answer?.gold??null;
        return row;
    }));
}
function score(rows,c){const valid=rows.filter(r=>r[c].valid),correct=valid.filter(r=>r[c].correct).length;return {valid:valid.length,correct,accuracy:valid.length?Math.round(correct/valid.length*100)+'%':'—'};}
function outcome(cell){return !cell.run?'未运行':cell.run.status==='failed'?'运行失败':!cell.valid?'无法解析':cell.correct?'正确':'错误';}
function resultCell(cell){const state=cell.valid?(cell.correct?'right':'wrong'):'missing';return `<span class="answer-badge ${state}"><span>${cell.valid?(cell.correct?'✓':'✕'):'—'}</span> ${cell.valid?esc(cell.answer.prediction)+' · ':''}${outcome(cell)}</span>`;}
function optionText(q,letter){return ['A','B','C','D'].includes(letter)?q.options['ABCD'.indexOf(letter)]:'未提供';}
function renderBoard(){
    const rows=boardRows($('#board-model').value),total=rows.length;
    $('#board-summary').innerHTML=[['spatial','空间版','不同方位'],['colocated','同位置对照版','同一正前方']].map(([c,label,sub])=>{
        const s=score(rows,c);return `<div class="score-card ${c}"><div class="score-card-top"><h3>${label}</h3><span>${sub}</span></div><strong>${s.accuracy}</strong><p>答对 <b>${s.correct}</b> / ${s.valid} 道有效答案</p><div class="coverage"><span style="width:${total?s.valid/total*100:0}%"></span></div><small>答题覆盖 ${s.valid} / ${total} · 未评分 ${total-s.valid}</small></div>`;
    }).join('');
    const paired=[['两版都答对',r=>r.spatial.correct===true&&r.colocated.correct===true,'right'],['两版都答错',r=>r.spatial.correct===false&&r.colocated.correct===false,'wrong'],['仅空间版答对',r=>r.spatial.correct===true&&r.colocated.correct===false,''],['仅对照版答对',r=>r.spatial.correct===false&&r.colocated.correct===true,''],['存在未评分',r=>!r.spatial.valid||!r.colocated.valid,'missing']];
    $('#paired-summary').innerHTML=paired.map(([label,match,cls])=>`<div class="pair-stat ${cls}"><strong>${rows.filter(match).length}</strong><span>${label}</span></div>`).join('');
    $('#type-summary').innerHTML=`<div class="table-wrap"><table><caption class="sr-only">各题型的两版正确数和有效答题数</caption><thead><tr><th scope="col">题型</th><th scope="col">空间版 · 正确 / 有效</th><th scope="col">同位置版 · 正确 / 有效</th><th scope="col">每版题数</th></tr></thead><tbody>${Object.entries(types).map(([id,name])=>{const subset=rows.filter(r=>r.question.type===id),a=score(subset,'spatial'),b=score(subset,'colocated');return `<tr><th scope="row">${name}</th><td>${a.correct} / ${a.valid} · ${a.accuracy}</td><td>${b.correct} / ${b.valid} · ${b.accuracy}</td><td>${subset.length}</td></tr>`;}).join('')}</tbody></table></div>`;
    const sampleFilter=$('#board-sample').value,typeFilter=$('#board-type').value,filter=$('#board-filter').value;
    const visible=rows.filter(r=>{
        if(sampleFilter!=='all'&&r.sample.id!==sampleFilter)return false;
        if(typeFilter!=='all'&&r.question.type!==typeFilter)return false;
        const a=r.spatial.correct,b=r.colocated.correct;
        return filter==='all'||filter==='wrong'&&(a===false||b===false)||filter==='different'&&a!==null&&b!==null&&a!==b||filter==='both-correct'&&a===true&&b===true||filter==='both-wrong'&&a===false&&b===false||filter==='missing'&&(a===null||b===null);
    });
    $('#board-count').textContent=`显示 ${visible.length} / ${total} 题 · 上方汇总始终统计完整题集`;
    if(!visible.length){$('#question-board').innerHTML='<div class="empty"><strong>没有符合筛选条件的题目</strong><p>可切换筛选，或点击“重置筛选”。</p></div>';return;}
    $('#question-board').innerHTML=data.samples.map(s=>{
        const group=visible.filter(r=>r.sample.id===s.id);if(!group.length)return '';
        const all=rows.filter(r=>r.sample.id===s.id),a=score(all,'spatial'),b=score(all,'colocated');
        return `<section class="board-group"><div class="board-group-heading"><a href="#listen/${s.id}">${s.id} · ${esc(meta.samples.find(m=>m.id===s.id)?.title)} ↗</a><span>空间 ${a.correct}/${a.valid} · 对照 ${b.correct}/${b.valid}</span></div><div class="board-columns" aria-hidden="true"><span>题目 / 参考答案</span><span>空间版</span><span>同位置对照版</span></div>${group.map(r=>{
            const q=r.question,different=r.spatial.valid&&r.colocated.valid&&r.spatial.correct!==r.colocated.correct;
            return `<details class="board-question ${different?'different':''}"><summary><span class="board-question-label"><b>${esc(q.id)}</b><span class="question-kind">${types[q.type]}</span><small>参考答案 ${esc(r.gold??'—')}${different?' · 两版对错不同':''}</small><span class="question-preview">${esc(q.question)}</span></span><span class="board-result"><span class="mobile-condition">空间版</span>${resultCell(r.spatial)}</span><span class="board-result"><span class="mobile-condition">同位置版</span>${resultCell(r.colocated)}</span></summary><div class="board-detail"><p>${esc(q.question)}</p><ol class="board-options" type="A">${q.options.map((o,i)=>`<li class="${'ABCD'[i]===r.gold?'gold-option':''}">${esc(o)}${'ABCD'[i]===r.gold?' <b>← 参考答案</b>':''}</li>`).join('')}</ol><div class="choice-details">${[['spatial','空间版'],['colocated','同位置对照版']].map(([c,label])=>{const cell=r[c];return `<div><h4>${label} ${resultCell(cell)}</h4><p>${cell.valid?esc(optionText(q,cell.answer.prediction)):'本题没有可评分的选择。'}</p>${cell.run?`<small>本段 5 题合计耗时 ${cell.run.latency_seconds==null?'未知':Number(cell.run.latency_seconds).toFixed(2)+' 秒'}<br>${esc(cell.run.created_at)}<br>输入：${esc(cell.run.channel_handling)}</small>`:''}</div>`;}).join('')}</div><a href="#listen/${s.id}">试听本样例并查看答案证据 ↗</a></div></details>`;
        }).join('')}</section>`;
    }).join('');
}
async function init(){try{[data,meta,resultData]=await Promise.all([loadJSON('questions.json'),loadJSON('provenance.json'),loadJSON('results.json')]);$('#result-condition').onchange=renderResults;window.addEventListener('hashchange',route);route();}catch(e){$('#sample-content').innerHTML=`<div class="error">页面数据未能载入。请刷新重试。<br><small>${esc(e.message)}</small></div>`;}}
init();
