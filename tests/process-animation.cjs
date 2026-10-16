const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=fs.readFileSync('process-lab.js','utf8');const nodes=new Map();let pauses=0,resumes=0,reduced=false,timer=null;
const node=id=>{if(!nodes.has(id))nodes.set(id,{textContent:'',innerHTML:'',dataset:{},attributes:{},classList:{toggle(k,v){this[k]=v}},setAttribute(k,v){this.attributes[k]=v},pauseAnimations(){pauses++},unpauseAnimations(){resumes++}});return nodes.get(id)};
const ctx=vm.createContext({console,document:{getElementById:node,querySelectorAll:()=>[]},window:{matchMedia:()=>({matches:reduced})},setTimeout:fn=>(timer=fn,1),clearTimeout:()=>timer=null,speakText:()=>{}});
vm.runInContext(source.slice(0,source.indexOf('const digestionProcess='))+`function processLesson(){return {steps:[['one','a','b'],['two','a','b'],['three','a','b']],model:''}};processSVG=()=>'<svg>test</svg>';`,ctx);
const run=s=>vm.runInContext(s,ctx);
run("wireProcess('weather')");assert.equal(node('processPlay').textContent,'Ⅱ 暫停觀察');assert.ok(resumes>0);assert.ok(timer);
node('processNext').onclick();assert.equal(run("processGet('weather').step"),1);assert.equal(run("processGet('weather').playing"),true);
node('processPlay').onclick();assert.equal(run("processGet('weather').playing"),false);assert.equal(timer,null);assert.ok(pauses>0);
node('processVisual').innerHTML='retained-frame';node('processPlay').onclick();assert.equal(node('processVisual').innerHTML,'retained-frame');assert.equal(run("processGet('weather').step"),1);
node('processNext').onclick();assert.equal(run("processGet('weather').step"),2);assert.equal(run("processGet('weather').playing"),true);assert.equal(timer,null);
node('processPlay').onclick();node('processPrev').onclick();assert.equal(run("processGet('weather').playing"),false);assert.equal(timer,null);
reduced=true;run("wireProcess('ice')");assert.equal(run("processGet('ice').playing"),false);assert.match(node('processStatus').textContent,/減少動態/);
reduced=false;run("wireProcess('swim')");assert.ok(timer);const tick=timer;timer=null;tick();assert.equal(run("processGet('swim').step"),1);
// Real typhoon markup: moving inflow particles and independently rotating clouds.
const scene=source.slice(source.indexOf('function weatherProcessScene('),source.indexOf('const iceProcess='));
vm.runInContext("let weatherConcept='typhoon';"+scene,ctx);const svg=run('weatherProcessScene(2)');assert.match(svg,/process-vortex/);assert.equal((svg.match(/animateMotion/g)||[]).length,15);assert.match(svg,/rotate="auto"/);assert.match(fs.readFileSync('process-lab.css','utf8'),/rotate\(-360deg\)/);
console.log('PASS: autoplay, pause, resume without SVG reset, step navigation, last-step animation, reduced motion, timers, and 15 inflow markers.');
