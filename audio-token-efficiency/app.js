'use strict';
(() => {
  const data = window.REPORT_DATA;
  const $ = id => document.getElementById(id);
  const modes = ['B0', 'B1', 'B2'];
  const order = ['qwen', 'fire', 'wavlm_mid', 'wavlm', 'encodec', 'speech'];
  const names = {qwen:'AuT · Qwen / A2R', fire:'FireRed', wavlm_mid:'WavLM · 第6层', wavlm:'WavLM · 第12层', encodec:'EnCodec · 8级量化', speech:'SpeechTokenizer · 8级量化', encodec_low:'EnCodec · 2级量化', speech_low:'SpeechTokenizer · 1级量化'};
  const pct = n => (100 * n).toFixed(2) + '%';
  const group = (tag, mode, budget, kind) => data.groups.find(r => r.encoder === tag && r.mode === mode && r.budget === budget && (!kind || r.kind === kind));
  let metric = 'digit_accuracy';

  function updateSeeds() {
    const mode = $('seed-mode').value, budget = Number($('seed-budget').value);
    $('seeds-table').querySelector('tbody').innerHTML = order.map(tag => `<tr><th>${names[tag]}</th>${[0,1,2].map(seed => `<td>${pct(group(tag,mode,budget).per_seed[String(seed)][metric])}</td>`).join('')}</tr>`).join('');
  }
  function updateResults() {
    const label = metric === 'digit_accuracy' ? '逐数字准确率' : '六项全对率';
    document.querySelectorAll('[data-metric]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.metric === metric)));
    $('metric-heading').textContent = label + '（%）';
    modes.forEach(mode => {
      $('chart-'+mode).src = `bars-${metric}-${mode}.svg`;
      $('chart-'+mode).alt = `${mode}：各编码器在16、8、4个向量的${label}；准确值见完整数值表`;
    });
    $('figure-download').href = `bars-${metric}.svg`;
    $('figure-png').href = `bars-${metric}.png`;
    const table = $('results-table');
    table.querySelector('caption').textContent = `${label} · 三次训练均值`;
    table.querySelector('thead').innerHTML = '<tr><th rowspan="2">表示</th>' + modes.map(mode=>`<th colspan="3">${mode}</th>`).join('') + '</tr><tr>' + modes.map(()=>[16,8,4].map(m=>`<th>${m}向量</th>`).join('')).join('') + '</tr>';
    table.querySelector('tbody').innerHTML = order.map(tag=>`<tr><th>${names[tag]}</th>${modes.map(mode=>[16,8,4].map(m=>`<td>${pct(group(tag,mode,m).metrics_mean[metric])}</td>`).join('')).join('')}</tr>`).join('') + '<tr class="text-control"><th>BPE＋学习压缩（公共基准）</th>' + modes.map(()=>[16,8,4].map(m=>{const r=data.text_controls.find(r=>r.budget===m);return `<td>${r ? pct(r.metrics_mean[metric]) : '未测'}</td>`;}).join('')).join('') + '</tr>';
    updateSeeds();
  }
  document.querySelectorAll('[data-metric]').forEach(button=>button.addEventListener('click',()=>{metric=button.dataset.metric;updateResults();}));
  ['seed-mode','seed-budget'].forEach(id=>$(id).addEventListener('change',updateSeeds));
  updateResults();
  const pair = r => pct(r.metrics_mean.digit_accuracy) + ' / ' + pct(r.metrics_mean.all_labeled_correct);
  $('mel-table').querySelector('tbody').innerHTML = ['mel20','dmel20','mel40','dmel40'].map(kind=>`<tr><th>${kind.replace('dmel','dMel · ').replace(/^mel/,'log-mel · ')} Hz</th>${[16,8,4].map(m=>`<td>${pair(group('controls','B0',m,kind))}</td>`).join('')}</tr>`).join('');
  $('codec-table').querySelector('tbody').innerHTML = ['encodec_low','encodec','speech_low','speech'].map(tag=>`<tr><th>${names[tag]}</th><td>${data.rates.find(r=>r.encoder===tag).nominal_kbps.toFixed(1)} kbps</td><td>${pair(group(tag,'B0',8))}</td><td>${pair(group(tag,'B2',8))}</td></tr>`).join('');

  $('example-model').innerHTML = ['fire','qwen','wavlm_mid','wavlm','encodec','speech'].map(tag=>`<option value="${tag}">${names[tag]}</option>`).join('');
  function digits(values,gold) {
    return ['A','B'].map((source,k)=>`<div class="digits-line"><strong>${source}</strong>${values.slice(k*3,k*3+3).map((v,j)=>`<span class="digit ${gold?(v===gold[k*3+j]?'correct':'wrong'):''}">${v}${gold?`<small>${v===gold[k*3+j]?'对':'错'}</small>`:''}</span>`).join('')}</div>`).join('');
  }
  function showExample(changeAudio) {
    const e = data.examples.find(r=>r.id===$('example-select').value);
    if(changeAudio) [['audio-mix','mix'],['audio-a','source-A'],['audio-b','source-B'],['audio-walk','walkthrough-A-B-mix']].forEach(([id,name])=>{$(id).pause();$(id).src=`audio/${e.id}/${name}.wav`;});
    const tag=$('example-model').value, mode=$('example-mode').value;
    const budget=$('example-budget').value, seed=$('example-seed').value;
    const prediction=e.predictions_by_run[`${tag}/${mode}/M${budget}/seed${seed}`];
    const correct=prediction.reduce((n,v,i)=>n+Number(v===e.gold[i]),0);
    $('example-answer').innerHTML=`<p class="example-config">${names[tag]} · ${mode} · ${budget}个向量 · 第${Number(seed)+1}次训练</p><div class="answers"><div><div class="answer-label">正确答案</div>${digits(e.gold)}</div><div><div class="answer-label">实际预测</div>${digits(prediction,e.gold)}</div></div><p class="scoreline">正确 ${correct}/6；六项全对：${correct===6?'是':'否'}</p>`;
  }
  $('example-select').addEventListener('change',()=>showExample(true));
  ['example-model','example-mode','example-budget','example-seed'].forEach(id=>$(id).addEventListener('change',()=>showExample(false)));
  document.querySelectorAll('audio').forEach(a=>a.addEventListener('play',()=>document.querySelectorAll('audio').forEach(other=>{if(other!==a)other.pause();})));
  showExample(true);
})();
