// Four worlds share the same lessons; the lab links to existing hands-on tasks.
const exploreTopics={
 digest:{title:'一口飯的旅行',emoji:'🍚',question:'吃下去的飯，都跑到哪裡？',action:'跟著食物走一趟',color:'peach'},
 organs:{title:'人體器官探險',emoji:'🫀',question:'心臟、肺和大腦怎麼合作？',action:'找身體裡的夥伴',color:'peach'},
 weather:{title:'窗外的天氣',emoji:'🌦️',question:'雲、雨、風、颱風和雷聲從哪裡來？',action:'觀察天空找線索',color:'blue'},
 moon:{title:'月亮的光影',emoji:'🌙',question:'月亮為什麼一下圓、一下彎？',action:'轉轉月亮看亮面',color:'night'},
 tides:{title:'潮汐變化',emoji:'🌊',question:'海水怎麼一下高、一下低？',action:'看看同一片海岸',color:'blue'},
 light:{title:'光與影',emoji:'🔦',question:'同一個玩偶，影子為什麼變大？',action:'玩一次影子劇場',color:'peach'},
 sound:{title:'聲音與振動',emoji:'🥁',question:'聲音從哪裡來？',action:'摸摸喉嚨感覺振動',color:'green'},
 ice:{title:'冰品科學',emoji:'🍧',question:'刨冰與雪花冰，為什麼長得不一樣？',action:'比冰片、觀察融化',color:'blue'},
 swim:{title:'游泳與水的科學',emoji:'🏊',question:'水會托住我，也會擋住我？',action:'變黏土船、比水的阻力',color:'blue'},
 experiments:{title:'生活小實驗',emoji:'🧪',question:'只改一件事，結果會一樣嗎？',action:'選一個親子比較任務',color:'green'}
};
const exploreWorlds={
 body:{title:'我的身體',emoji:'🫀',color:'peach',question:'身體裡，誰在幫忙？',intro:'從吃進一口飯開始，認識身體裡互相合作的夥伴。',topics:['digest','organs']},
 sky:{title:'天空與海洋',emoji:'🌦️',color:'blue',question:'抬頭看天，低頭看海。',intro:'選一個你看過的現象，帶著問題找線索。',topics:['weather','moon','tides']},
 daily:{title:'生活裡的科學',emoji:'🔦',color:'green',question:'玩水、吃冰，也能找發現。',intro:'生活中遇到的小問題，就是探索的起點。今天先選一個就好。',topics:['light','sound','ice','swim']},
 lab:{title:'動手實驗室',emoji:'🧪',color:'peach',question:'先猜一猜，再親手試試。',intro:'挑一個家裡方便做的任務，先和大人準備材料。這些入口會帶你到原本的主題。',topics:['experiments','light','ice','swim']}
};
const exploreLabLabels={experiments:['生活小實驗','火山、浮蛋、牛奶彩虹或靜電，選一個比較任務。'],light:['影子劇場','固定手電筒，移動玩偶，影子怎麼變？'],ice:['兩盤冰的任務','同樣的冰，整塊和碎冰誰先融化？'],swim:['水盆裡的小船','同一塊黏土，換個形狀能浮起來嗎？']};
let activeExploreWorld=null;
function todayExplore(){const dates=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Taipei',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());const part=t=>dates.find(p=>p.type===t).value;const day=Math.floor(Date.UTC(+part('year'),+part('month')-1,+part('day'))/86400000);return ['ice','light','digest','weather','sound','swim','moon','organs','tides'][day%9]}
function exploreCard(id,world){const t=exploreTopics[id],label=world==='lab'?exploreLabLabels[id]:null;return `<button type="button" class="world-topic ${t.color}" data-explore-topic="${id}"><div class="topic-picture" aria-hidden="true">${t.emoji}</div><h2>${label?label[0]:t.title}</h2><p>${label?label[1]:t.question}</p><b>${label?'到主題裡動手試試':t.action} →</b></button>`}
renderDiscoveryHub=function(){const id=todayExplore(),today=exploreTopics[id];document.getElementById('discoveryHub').innerHTML=`<div class="world-welcome"><span class="world-kicker">小小科學家・跟著好奇心出發</span><h1>今天，探索一個小問題。</h1><p>先猜、找線索，再去生活裡試一試。</p></div><section class="explore-today" aria-labelledby="todayTitle"><span class="today-emoji" aria-hidden="true">${today.emoji}</span><div><span class="world-kicker">今天探索</span><h2 id="todayTitle">${today.question}</h2><p>今天先玩這一個，也可以自己選。</p><button type="button" class="world-primary" id="startToday">開始探索 →</button></div></section><h2 class="explore-section-title">或選一個探索世界</h2><div class="world-topics explore-worlds">${Object.entries(exploreWorlds).map(([key,w])=>`<button type="button" class="world-topic ${w.color}" data-explore-world="${key}"><div class="topic-picture" aria-hidden="true">${w.emoji}</div><h2>${w.title}</h2><p>${w.question}</p><b>${key==='lab'?'找一個動手任務':'進去看看'} →</b></button>`).join('')}</div><div class="world-parent"><b>給陪玩的你</b><p>一次追一個孩子真的好奇的問題。看一小段、試一個想法，就可以放下平板去觀察；不需要一次看完，也不用每次答題。</p></div>`;document.getElementById('startToday').onclick=()=>showWorldPage(id);document.querySelectorAll('[data-explore-world]').forEach(b=>b.onclick=()=>showWorldPage('world:'+b.dataset.exploreWorld))};
function renderExploreWorld(key){const w=exploreWorlds[key];document.getElementById('discoveryTopic').innerHTML=`<button type="button" class="world-back" id="backExploreHome">← 回四個探索世界</button><div class="world-heading"><span class="world-kicker">${w.emoji} ${w.title}</span><h1>${key==='lab'?'今天想動手試什麼？':'先選一個好奇的問題'}</h1><p>${w.intro}</p></div><div class="world-topics explore-lessons">${w.topics.map(id=>exploreCard(id,key)).join('')}</div>`;document.getElementById('backExploreHome').onclick=()=>showWorldPage('hub');document.querySelectorAll('[data-explore-topic]').forEach(b=>b.onclick=()=>showWorldPage(b.dataset.exploreTopic))}
const showWorldBeforeExplore=showWorldPage;
showWorldPage=function(page){if(page.startsWith('world:')){const key=page.slice(6);if(!exploreWorlds[key]){showWorldPage('hub');return}stopThunder();if(physicsAudio&&physicsAudio.state==='running')physicsAudio.suspend().catch(()=>{});if('speechSynthesis'in window)window.speechSynthesis.cancel();activeExploreWorld=key;discoveryPage=page;document.getElementById('discoveryHub').hidden=true;document.getElementById('discoveryTopic').hidden=false;document.getElementById('experimentApp').hidden=true;renderExploreWorld(key);window.scrollTo({top:0,behavior:'instant'});return}if(page==='hub')activeExploreWorld=null;else if(!activeExploreWorld||!exploreWorlds[activeExploreWorld].topics.includes(page))activeExploreWorld=Object.keys(exploreWorlds).find(k=>exploreWorlds[k].topics.includes(page))||null;showWorldBeforeExplore(page)};
wireBack=function(){const b=document.getElementById('backWorld');b.textContent=activeExploreWorld?'← 回'+exploreWorlds[activeExploreWorld].title:'← 回探索首頁';b.addEventListener('click',()=>showWorldPage(activeExploreWorld?'world:'+activeExploreWorld:'hub'))};
