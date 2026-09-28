'use strict';
(() => {
const D=window.REPORT_DATA;
const $=id=>document.getElementById(id);
const pct=x=>(x*100).toFixed(2)+'%';
const labels={fire:'FireRed',qwen:'AuT · Qwen / A2R',wavlm:'WavLM · 第12层',wavlm_mid:'WavLM · 第6层',encodec:'EnCodec · Q8',speech:'SpeechTokenizer · Q8',encodec_low:'EnCodec · Q2',speech_low:'SpeechTokenizer · Q1'};
const order=['fire','qwen','wavlm','wavlm_mid','encodec','speech'];
const colors={fire:'#3465a4',qwen:'#cc6929',wavlm:'#218a79',wavlm_mid:'#7b9730',encodec:'#8355a6',speech:'#c34768'};
const group=(tag,mode,m,kind)=>D.groups.find(r=>r.encoder===tag&&r.mode===mode&&r.budget===m&&(!kind||r.kind===kind));
const options=order.map(tag=>`<option value="${tag}">${labels[tag]}</option>`).join('');
$('example-model').innerHTML=options;
function digits(values,gold){return ['A','B'].map((s,k)=>`<div class="digits-line"><strong class="${k?'b-text':'a-text'}">${s}</strong>${values.slice(k*3,k*3+3).map((v,j)=>`<span class="digit ${gold?(v===gold[k*3+j]?'correct':'wrong'):''}">${v}${gold?`<small>${v===gold[k*3+j]?'对':'错'}</small>`:''}</span>`).join('')}</div>`).join('');}
function showExample(changeAudio=true){
 const e=D.examples.find(r=>r.id===$('example-select').value),tag=$('example-model').value,mode=$('example-mode').value;
 if(changeAudio){[['audio-mix','mix'],['audio-a','source-A'],['audio-b','source-B'],['audio-walk','walkthrough-A-B-mix']].forEach(([id,f])=>{$(id).pause();$(id).src=`audio/${e.id}/${f}.wav`;});}
 const pred=e.predictions[`${tag}/${mode}`],correct=pred.reduce((n,v,i)=>n+Number(v===e.gold[i]),0);
 $('example-answer').innerHTML=`<div class="answer-group"><div class="answer-label">正确答案</div>${digits(e.gold)}</div><div class="answer-group"><div class="answer-label">${labels[tag]} · ${mode} 的实际预测</div>${digits(pred,e.gold)}</div><div class="scoreline"><span>逐数字 <strong>${correct}/6</strong></span><span>这一条六项全对 <strong>${correct===6?'是':'否'}</strong></span></div>`;
 $('example-explanation').textContent=e.id==='test-00009'&&tag==='fire'?(mode==='B0'?'最后的6和9都被识别出来了，却分给了错误的来源：A应为9，B应为6。':'同一编码器、同样8位置，B2在这条样本上恢复了正确的来源归属。'):e.id==='test-00005'?'这条更难的示例含较高有效发声重叠。改变编码器或读取方案，错误可能落在不同位置。':'先检查两个来源，再检查每路的顺序；仅识别声音中出现过哪些数字还不够。';
 const onsets=[[0,1.7,2.8],[.6,1.7,2.8]];
 $('timeline').innerHTML=['A','B'].map((s,k)=>`<div class="timeline-row"><strong class="${k?'b-text':'a-text'}">${s}</strong><div class="time-track">${onsets[k].map((t,j)=>`<span class="time-clip ${k?'b':'a'}" style="left:${t/3.8*100}%;width:${.92/3.8*100}%">${e.gold[k*3+j]}</span>`).join('')}</div></div>`).join('')+'<div class="time-labels"><span>0 s</span><span>1.7 s</span><span>2.8 s</span><span>3.8 s</span></div>';
 $('overlap-note').textContent=`${e.id} · 色块示意数字片段的位置，不是实际发声边界。这条的有效发声重叠为${(e.active_overlap*100).toFixed(1)}%；完整测试集中位数约31.9%。`;
}
$('example-select').addEventListener('change',()=>showExample(true));
['example-model','example-mode'].forEach(id=>$(id).addEventListener('change',()=>showExample(false)));
document.querySelectorAll('audio').forEach(a=>a.addEventListener('play',()=>document.querySelectorAll('audio').forEach(other=>{if(other!==a)other.pause();})));
showExample();

const schemes={
 B0:{title:'一份联合特征，直接写短笔记',path:['共享特征 R','压到合计 M 个位置','读出 A、B 六个数字'],body:'用六个数字的答案监督整个可训练路径。模型自行学会把混音中的信息整理到联合表示里。'},
 B1:{title:'训练时额外要求“每一路都能读出来”',path:['共享特征 R','压到合计 M 个位置','读出 A、B 六个数字'],body:'训练时从共享特征接出两条辅助分支，分别预测 A、B 的三个数字；辅助损失也更新保留的共享模块。推理时删除这些分支，主路径与 B0 一样。',aux:'仅训练：共享特征 → A辅助分支＋B辅助分支 → 各自三个数字'},
 B2:{title:'把两路特征变换也留到推理阶段',path:['共享特征 R','两路特征变换＋来源嵌入','两路合计压到 M','读出 A、B 六个数字'],body:'训练仍有按来源的辅助监督；推理保留两路特征变换，拼接后再压缩。M=4是两路加在一起4个位置，不是每路4个。辅助识别头在推理时删除。'}
};
function showScheme(name){const s=schemes[name];document.querySelectorAll('[data-scheme]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.scheme===name)));$('scheme-content').innerHTML=`<div class="scheme-view"><h3>${s.title}</h3><div class="scheme-path">${s.path.map((p,i)=>`${i?'→':''}<span class="${name==='B2'&&i===1?'retained':''}">${p}</span>`).join('')}</div>${s.aux?`<div class="scheme-path"><span class="aux">${s.aux}</span></div>`:''}<p>${s.body}</p></div>`;}
document.querySelectorAll('[data-scheme]').forEach(b=>b.addEventListener('click',()=>showScheme(b.dataset.scheme)));showScheme('B0');

const architectures={
 fire:{title:'FireRed · 理解编码器',tag:'连续特征 · 主表取 adapter 前',nodes:[['16 kHz 波形','log-mel频谱'],['卷积＋Transformer','Whisper-large-v3 编码器初始化',true],['Audio Adapter','降采样＋映射到语言模型维度'],['共享 LLM','完整模型的回答环节；本轮未运行',false,true]],purpose:'原模型把理解和生成通路分开：这一条把声音变成适合识别、分析的连续特征。',advantage:'卷积先提取局部模式，Transformer联系不同时间；adapter再减少时间位置并对齐语言模型。已有语言相关预训练。',tap:'主实验取 adapter 前的190×1280特征；adapter后48×4096另做诊断。随后接我们的 R、P、D，不接原LLM。',foot:'完整模型另有 RedAE／Patch Encoder／DiT 生成通路，本轮没有使用。蓝色框为主比较的取出位置。',links:[['FireRedAudio §2.2.1','https://arxiv.org/html/2608.24168#S2.SS2.SSS1']]},
 qwen:{title:'AuT · Qwen3-Omni / A2R',tag:'连续特征 · 约0.65B参数',nodes:[['16 kHz 波形','128通道 mel 频谱'],['Conv2D 降采样','先把时间序列缩短8倍'],['窗口 Transformer＋投影','本轮取出：49×2048',true],['Thinker LLM','完整模型理解环节；本轮未运行',false,true]],purpose:'大规模语音识别与音频理解预训练，同时考虑流式处理和输入长度。',advantage:'在注意力处理之前就缩短序列。模型输入音频编码率约12.5 Hz；本轮3.8秒得到49个原生位置。',tap:'取音频塔输出投影后的特征，接相同的小读取路径。投影前49×1280另作诊断。',foot:'AuT 是输入理解编码器，不能与 Talker 输出端的语音 codec 混为一谈。本轮固定版本 Qwen/A2R 音频塔完全相同，只算一组权重。',links:[['Qwen3-Omni §2.2','https://arxiv.org/html/2509.17765v1#S2.SS2']]},
 wavlm:{title:'WavLM Base+ · 通用语音表示',tag:'连续特征 · 约94M参数',nodes:[['16 kHz 原始波形','不先转换成 mel'],['7层时域卷积','提取局部声学帧'],['12层 Transformer','带相对位置信息；取第6／12层',true],['下游任务头','本轮换成我们的 R、P、D']],purpose:'通过自监督学习获得可用于内容、说话人等不同任务的表示；训练包含遮挡预测与混音干扰。',advantage:'提供多个层的连续特征，便于检查内容和来源线索。不是只能使用最后一层。',tap:'第6和第12层均为189×768。我们没有使用离散训练目标作为推理 token，也没有训练一个新的 WavLM。',foot:'混音预训练主要监督主说话人的目标，不能等同于等权保存所有来源。第6层的选择依据见下一节。',links:[['WavLM §4 与层分析','https://arxiv.org/html/2110.13900v2#S4']]},
 encodec:{title:'EnCodec 24 kHz · 声学压缩',tag:'原生离散码 · Q8 / Q2',nodes:[['24 kHz 波形','本轮由16 kHz重采样'],['卷积＋LSTM','下采样、整合时序'],['残差向量量化 RVQ','每帧多个码本编号',true],['波形解码器','原模型重建声音；本轮未运行',false,true]],purpose:'在有限码率下，让重建声音保留较好的声学质量。训练目标包含重建与感知质量。',advantage:'Q可控制码率；不仅表示词义，也可能保留音色、节奏等细节。后一本码本补前面未描述的残差。',tap:'285帧，Q=8或2，每本1024项；对应6或1.5 kbps。ID查回冻结码本、逐帧求和成128维向量，再接读取器。',foot:'查回码本只还原隐藏向量，没有生成波形。声学重建好不等于本任务的多来源内容容易读取。',links:[['EnCodec 论文','https://arxiv.org/abs/2210.13438'],['官方 SEANet 架构','https://github.com/facebookresearch/encodec/blob/main/encodec/modules/seanet.py']]},
 speech:{title:'SpeechTokenizer · 语义＋声学离散表示',tag:'hubert_avg · Q8 / Q1',nodes:[['16 kHz 波形','与主数据采样率一致'],['卷积＋双向 LSTM','结合前后时序'],['RVQ：语义引导首层＋残差层','本轮取 Q8／Q1',true],['波形解码器','原模型重建声音；本轮未运行',false,true]],purpose:'在一套离散表示里兼顾语言内容与声学细节。训练时，HuBERT教师引导第一量化层偏向内容。',advantage:'可以比较第一码本与全部码本，观察增加声学细节的得失。双向LSTM同时参考前后时间。',tap:'190帧；8本为4 kbps，1本为0.5 kbps。查码本后逐帧求和为1024维向量，再接读取器。',foot:'这里使用 hubert_avg checkpoint。HuBERT 是原始预训练的教师，本次编码无需另跑教师。第一码本不是A、第二码本也不是B。',links:[['SpeechTokenizer §3 与附录D','https://arxiv.org/html/2308.16692v2#S3'],['官方实现','https://github.com/ZhangXInFD/SpeechTokenizer']]},
 mel:{title:'log-mel · 透明的频谱前端',tag:'没有预训练编码网络',nodes:[['波形分窗','每窗100 ms'],['短时频谱 → mel频带','80个频带，取对数'],['连续频谱值','20／40帧每秒',true],['学习投影＋R、P、D','与其他候选使用同类小读取器']],purpose:'把声音在不同时间、不同频带的强弱变成规则数值表。它本身不识别词，也不区分说话人。',advantage:'时间间隔、频带与数值精度可以单独控制；适合作为理解预训练增益的前端对照。',tap:'20 Hz时76×80，40 Hz时152×80。幅度仍连续；后面的学习投影把80维转成128维。',foot:'mel频带不是给不同context分配的专用频道。加密或人工频带编码没有在本轮执行。',links:[['dMel 的频谱前端参照','https://arxiv.org/html/2407.15835v2']]},
 dmel:{title:'dMel · 频谱格子的幅值量化',tag:'Inkling式20 Hz设置的前端对照',nodes:[['波形 → log-mel','与连续mel同样分窗'],['每个频带数值分16档','每格一个4-bit编号',true],['本轮映回档位中心','统一线性投影接口'],['R、P、D','本轮没有运行完整Inkling']],purpose:'将连续频谱数值变成简单的离散声学表示。这里分开检查时间采样与幅值精度。',advantage:'可直接计算载荷：20 Hz × 80频带 × 4 bit = 6.4 kbps。每一帧包含80个ID，不能只算一个4-bit token。',tap:'测试20／40 Hz、16档，分析窗固定100 ms。这里的20 Hz是tokenizer前端的帧率，不是生成端200 ms分块。',foot:'本次按档位中心使用公共投影，不等于完整 Inkling 的嵌入与预训练模型。40 Hz对照也不是原dMel论文的全部配置。',links:[['dMel 论文','https://arxiv.org/html/2407.15835v2']]}
};
const archLabels={fire:'FireRed',qwen:'AuT / A2R',wavlm:'WavLM',encodec:'EnCodec',speech:'SpeechTokenizer',mel:'log-mel',dmel:'dMel'};
$('architecture-tabs').innerHTML=Object.keys(architectures).map(tag=>`<button data-architecture="${tag}" aria-pressed="${tag==='fire'}">${archLabels[tag]}</button>`).join('');
function showArchitecture(tag){const m=architectures[tag];document.querySelectorAll('[data-architecture]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.architecture===tag)));$('architecture-card').innerHTML=`<div class="architecture-title"><div><p class="eyebrow">HIGH-LEVEL ARCHITECTURE</p><h3>${m.title}</h3></div><span class="tag">${m.tag}</span></div><div class="arch-flow">${m.nodes.map(n=>`<div class="arch-node ${n[2]?'tap':''} ${n[3]?'off':''}"><b>${n[0]}</b><small>${n[1]}</small>${n[2]?'<small style="display:block;color:#295ed7">本轮取出的位置</small>':''}</div>`).join('')}</div><div class="arch-facts"><div><h4>为什么这样设计</h4><p>${m.purpose}</p></div><div><h4>这种结构的潜在优势</h4><p>${m.advantage}</p></div><div><h4>本轮怎样测它</h4><p>${m.tap}</p></div></div><div class="arch-foot"><p>${m.foot}</p>${m.links.map(([label,href])=>`<a href="${href}">${label} ↗</a>`).join('')}</div>`;}
document.querySelectorAll('[data-architecture]').forEach(b=>b.addEventListener('click',()=>showArchitecture(b.dataset.architecture)));showArchitecture('fire');

function drawChart(mode,metric,budget){
 const W=940,H=315,L=60,R=40,T=18,B=45,px=m=>L+(m-4)/12*(W-L-R),py=v=>T+(110-v)/115*(H-T-B);
 let svg=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${mode}在4、8、16位置的${metric==='digit_accuracy'?'逐数字正确率':'六项全对率'}曲线；精确值见下表"><title>同一测试任务，不同最终位置预算</title>`;
 [0,20,40,60,80,100].forEach(v=>{svg+=`<line x1="${L}" y1="${py(v)}" x2="${W-R}" y2="${py(v)}" stroke="#e3e9ef"/><text x="${L-13}" y="${py(v)+4}" text-anchor="end" fill="#607581" font-size="11">${v}%</text>`;});
 svg+=`<line x1="${px(budget)}" y1="${T}" x2="${px(budget)}" y2="${H-B}" stroke="#ccd8e9" stroke-dasharray="4 4"/>`;
 [4,8,16].forEach(m=>{svg+=`<text x="${px(m)}" y="${H-20}" text-anchor="middle" fill="${m===budget?'#295ed7':'#607581'}" font-size="12" font-weight="${m===budget?'700':'400'}">${m} 位置</text>`;});
 for(const tag of order){const pts=[4,8,16].map(m=>[px(m),py(group(tag,mode,m).metrics_mean[metric]*100)]);svg+=`<polyline points="${pts.map(x=>x.join(',')).join(' ')}" fill="none" stroke="${colors[tag]}" stroke-width="2.5"/>`;[4,8,16].forEach(m=>{const g=group(tag,mode,m),mean=g.metrics_mean[metric]*100,sd=g.metrics_seed_sd[metric]*100,x=px(m),top=py(mean+sd),bottom=py(mean-sd);svg+=`<path d="M${x},${top}V${bottom}M${x-4},${top}H${x+4}M${x-4},${bottom}H${x+4}" stroke="${colors[tag]}" fill="none" opacity=".7"/><circle cx="${x}" cy="${py(mean)}" r="${m===budget?5:3.5}" fill="${colors[tag]}"><title>${labels[tag]}，${m}位置：${mean.toFixed(2)}%，种子标准差${sd.toFixed(2)}个百分点</title></circle>`;});}
 svg+=`<path d="M${px(4)},${py(100)}L${px(8)},${py(metric==='digit_accuracy'?99.95:99.67)}" fill="none" stroke="#52616b" stroke-width="2" stroke-dasharray="6 5"/></svg>`;
 $('result-chart').innerHTML=svg+`<div class="chart-legend">${order.map(tag=>`<span><i style="background:${colors[tag]}"></i>${labels[tag]}</span>`).join('')}<span><i style="background:#52616b"></i>已知文字的学习压缩</span></div>`;
}
function showResults(){const mode=$('result-mode').value,metric=$('result-metric').value,budget=Number($('result-budget').value);drawChart(mode,metric,budget);const metricName=metric==='digit_accuracy'?'逐数字正确率':'六项全对率';$('results-table').querySelector('caption').textContent=`${mode} · ${metricName} · 三个种子均值`;$('results-table').querySelector('thead').innerHTML='<tr><th>表示</th>'+[16,8,4].map(m=>`<th class="${m===budget?'chosen':''}">${m} 位置</th>`).join('')+'</tr>';$('results-table').querySelector('tbody').innerHTML=order.map(tag=>`<tr><td>${labels[tag]}</td>${[16,8,4].map(m=>`<td class="${m===budget?'chosen':''}">${pct(group(tag,mode,m).metrics_mean[metric])}</td>`).join('')}</tr>`).join('')+`<tr class="text-baseline"><td>学习文字压缩 · 参考</td><td>未测</td><td>${metric==='digit_accuracy'?'99.95%':'99.67%'}</td><td>100.00%</td></tr>`;
 $('seeds-table').querySelector('tbody').innerHTML=order.map(tag=>`<tr><td>${labels[tag]}</td>${[0,1,2].map(s=>`<td>${pct(group(tag,mode,budget).per_seed[String(s)][metric])}</td>`).join('')}</tr>`).join('');
 $('budget-note').textContent=`当前高亮 M=${budget}：两路共${budget}×128个float32数，载荷${budget/2} KiB；占原文字11个位置的${(budget/11*100).toFixed(2)}%。${budget===16?'16个位置比原文字位置更多。':''}不同M各自训练，因此曲线不必单调；不能把这种波动解释成信息容量规律。`;
}
['result-mode','result-metric','result-budget'].forEach(id=>$(id).addEventListener('change',showResults));showResults();
const pair=r=>pct(r.metrics_mean.digit_accuracy)+' / '+pct(r.metrics_mean.all_labeled_correct);
$('codec-table').querySelector('tbody').innerHTML=['encodec_low','encodec','speech_low','speech'].map(tag=>`<tr><td>${labels[tag]}</td><td>${D.rates.find(r=>r.encoder===tag).nominal_kbps.toFixed(1)} kbps</td><td>${pair(group(tag,'B0',8))}</td><td>${pair(group(tag,'B2',8))}</td></tr>`).join('');
$('mel-table').querySelector('tbody').innerHTML=['mel20','dmel20','mel40','dmel40'].map(kind=>`<tr><td>${kind}</td>${[16,8,4].map(m=>`<td>${pair(group('controls','B0',m,kind))}</td>`).join('')}</tr>`).join('');
function nativeLabel(r){if(r.kind==='single')return '单来源（评分3项）';if(r.kind==='oracle')return '两来源分开编码后拼接';if(r.kind==='mix_pre')return {wavlm:'第6层 · 原生帧',fire:'adapter前',qwen:'输出投影前',encodec:'量化前',speech:'量化前'}[r.encoder];return r.encoder==='wavlm'?'第12层 · 原生帧':'主表示 · 原生帧';}
$('native-table').querySelector('tbody').innerHTML=D.native.map(r=>`<tr><td>${r.encoder==='wavlm'?'WavLM Base+':labels[r.encoder]}</td><td>${nativeLabel(r)}</td><td>${pct(r.test.digit_accuracy)}</td><td>${pct(r.test.all_labeled_correct)}</td></tr>`).join('');
$('resource-summary').innerHTML=`<p>两个训练阶段合计墙钟约${D.audit.training_wall_minutes.toFixed(1)}分钟，两个小训练进程并行。174个张量的重放与4个离散文件的解包均通过逐值检查。</p><div class="table-wrap"><table><thead><tr><th>在线路径，B2 / M8</th><th>每样本</th><th>进程峰值显存</th><th>缓存与在线差值</th></tr></thead><tbody>${D.live.map(r=>`<tr><td>${labels[r.encoder]}</td><td>${r.ms_per_example.toFixed(2)} ms</td><td>${r.peak_allocated_GiB.toFixed(3)} GiB</td><td>0</td></tr>`).join('')}</tbody></table></div>`;
})();
