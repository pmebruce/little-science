const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const nodes=new Map(),buttons=[];let stopped=0,resumed=0,schedules=0;const state={playing:true};
const dialog={open:false,showModal(){this.open=true},close(){this.open=false;this.onclose?.()},addEventListener(type,fn){this['on'+type]=fn}};
nodes.set('weatherPhotoDialog',dialog);nodes.set('weatherPhotoClose',{});nodes.set('weatherPhotoDetail',{innerHTML:''});
buttons.push({dataset:{weatherPhoto:'mawar'}});
const ctx=vm.createContext({document:{hidden:false,getElementById:id=>nodes.get(id),querySelectorAll:s=>s==='[data-weather-photo]'?buttons:[]},processActive:'weather',processGet:()=>state,processStop:()=>{stopped++;state.playing=false},processSync:()=>resumed++,processSchedule:()=>schedules++});
vm.runInContext(fs.readFileSync('weather-photos.js','utf8'),ctx);
const rows=vm.runInContext('WEATHER_PHOTOS',ctx);assert.equal(rows.length,7);
const sw=fs.readFileSync('sw.js','utf8');
for(const p of rows){assert.ok(fs.statSync(`assets/weather/${p.id}.webp`).size>1000);assert.ok(sw.includes(`./assets/weather/${p.id}.webp`));assert.match(p.source,/^https:\/\//);assert.ok(p.alt&&p.author&&p.license&&p.look);}
for(const topic of ['typhoon','cloud','rain','rainbow','thunder','wind']){const html=vm.runInContext(`weatherPhotoSection('${topic}')`,ctx);assert.ok(html.includes('data-weather-photo'));assert.ok(html.includes('照片來源與授權'));}
vm.runInContext('wireWeatherPhotos()',ctx);buttons[0].onclick();assert.equal(dialog.open,true);assert.equal(state.playing,false);assert.equal(stopped,1);assert.match(nodes.get('weatherPhotoDetail').innerHTML,/mawar.webp/);nodes.get('weatherPhotoClose').onclick();assert.equal(dialog.open,false);assert.equal(state.playing,true);assert.equal(schedules,1);
state.playing=false;buttons[0].onclick();dialog.close();assert.equal(state.playing,false,'Do not resume a previously paused animation');
const html=fs.readFileSync('index.html','utf8');assert.ok(html.indexOf('weather-photos.js?v=17')<html.indexOf('process-lab.js?v=17'));assert.ok(sw.includes('weather-photos.js?v=17'));
console.log('PASS: seven local assets, six topic galleries, source credits, cache coverage, modal opening, animation pause/resume, and script loading order.');
