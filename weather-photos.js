// Curated, locally hosted photographs; attribution travels with every image.
const WEATHER_PHOTOS=[
  {
    "id": "mawar",
    "topic": "typhoon",
    "title": "從太空看瑪娃颱風",
    "alt": "2023 年 5 月 24 日瑪娃颱風衛星影像，大片白色雲帶盤旋在海洋上",
    "caption": "這是 2023 年瑪娃颱風的衛星觀測影像。找找看：雲帶像不像動畫裡彎曲的手臂？",
    "look": "沿著一條雲帶往中心找；單張照片看不出旋轉方向，動態變化要對照動畫。",
    "author": "NASA Earth Observatory / Allison Nussbaum；NOAA-20 VIIRS 資料",
    "source": "https://science.nasa.gov/earth/earth-observatory/typhoon-mawar-151388/",
    "license": "NASA 地球觀測影像使用規範",
    "licenseUrl": "https://earthobservatory.nasa.gov/image-use-policy",
    "kind": "衛星觀測影像"
  },
  {
    "id": "eye",
    "topic": "typhoon",
    "title": "風暴中心的「眼睛」",
    "alt": "從國際太空站拍攝的多利安颶風眼，中心四周被厚厚的雲牆包圍",
    "caption": "太空人從國際太空站拍下多利安颶風的風暴眼。颶風和颱風屬於同類型的熱帶氣旋，因海域而有不同名稱。",
    "look": "找出中心與四周的雲牆。不是每個颱風都能看到這麼清楚的眼睛。",
    "author": "NASA / Nick Hague，2019-09-02",
    "source": "https://www.nasa.gov/image-article/hurricane-dorians-eye-seen-from-international-space-station/",
    "license": "NASA 影像使用規範",
    "licenseUrl": "https://www.nasa.gov/nasa-brand-center/images-and-media/",
    "kind": "太空人實拍"
  },
  {
    "id": "cloud",
    "topic": "cloud",
    "title": "白雲不是一團棉花",
    "alt": "藍天中一朵白色積雲，下方較平坦，上方呈蓬鬆凸起",
    "caption": "真實的積雲有明亮的邊緣，也有較暗的地方。雲中可見的是小水滴或冰晶，水蒸氣本身看不見。",
    "look": "找找雲的邊緣和底部：它們的形狀一樣嗎？",
    "author": "Hoodedwarbler12",
    "source": "https://commons.wikimedia.org/wiki/File:Cumulus_Cloud.jpg",
    "license": "公有領域",
    "licenseUrl": "https://commons.wikimedia.org/wiki/File:Cumulus_Cloud.jpg",
    "kind": "實景照片"
  },
  {
    "id": "rain",
    "topic": "rain",
    "title": "雨滴來到窗戶上",
    "alt": "雨天窗戶玻璃上有許多大小不同的水珠，窗外景物模糊",
    "caption": "從室內看雨，窗上留下大大小小的水滴。這張照片觀察的是落到窗上的雨水，不是雲裡的水滴。",
    "look": "找一顆大水滴和一顆小水滴；下雨時也可以和大人從安全的室內觀察。",
    "author": "Kitabc12345，2020-09-21",
    "source": "https://commons.wikimedia.org/wiki/File:Water_on_the_windows.jpg",
    "license": "CC0 1.0",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "kind": "實景照片"
  },
  {
    "id": "rainbow",
    "topic": "rainbow",
    "title": "天空真的有兩道彩虹",
    "alt": "阿拉斯加山谷上空出現雙彩虹，內側彩虹較明亮，外側較淡",
    "caption": "照片裡有一道明亮的彩虹，外面還有一道較淡的。先找出最清楚的一道，再比較兩道的顏色排列。",
    "look": "內側和外側的彩虹，紅色都在同一邊嗎？",
    "author": "Eric Rolph",
    "source": "https://commons.wikimedia.org/wiki/File:Double-alaskan-rainbow.jpg",
    "license": "CC BY-SA 2.5",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/",
    "kind": "實景照片"
  },
  {
    "id": "lightning",
    "topic": "thunder",
    "title": "閃電分出好多岔路",
    "alt": "夜空中明亮的閃電分出多條分支，延伸在雲層之間",
    "caption": "照片捕捉到雲間閃電的分支。照片可以留下閃光，卻不能讓我們直接看見雷聲。",
    "look": "找找最亮的線與較細的分支。遇到雷雨要待在安全室內，不到戶外追拍。",
    "author": "M. Müller / Imaguncula，2006-07-05",
    "source": "https://commons.wikimedia.org/wiki/File:Cloud-to-cloud_lightning.jpg",
    "license": "公有領域",
    "licenseUrl": "https://commons.wikimedia.org/wiki/File:Cloud-to-cloud_lightning.jpg",
    "kind": "實景照片"
  },
  {
    "id": "wind",
    "topic": "wind",
    "title": "看不見風，看得見風向袋",
    "alt": "橘色風向袋被風吹起，寬袋口連著支架，尾端伸向另一側",
    "caption": "空氣看不見，但風吹起的風向袋提供線索。對照動畫裡的旗子，想想看兩者有什麼相似。",
    "look": "找出袋口和袋尾：風從寬的袋口吹入，較窄的尾端朝下風處伸出。",
    "author": "Richard Horne，2017-05-31",
    "source": "https://commons.wikimedia.org/wiki/File:Windsock_blowing_in_the_breeze_(Unsplash).jpg",
    "license": "CC0 1.0",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "kind": "實景照片"
  }
];

function weatherPhotoEsc(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function weatherPhotoCredit(p){return `<details class="weather-photo-credit"><summary>照片來源與授權</summary><p>${weatherPhotoEsc(p.author)}<br><a href="${p.source}" target="_blank" rel="noopener">查看原始照片 ↗</a> · <a href="${p.licenseUrl}" target="_blank" rel="noopener">${weatherPhotoEsc(p.license)}</a><br>本頁版本僅縮小尺寸、轉為 WebP；未改變照片內容。</p></details>`}
function weatherPhotoSection(topic){
 const items=WEATHER_PHOTOS.filter(p=>p.topic===topic);if(!items.length)return '';
 return `<section class="world-card weather-photo-section"><span class="world-kicker">📷 動畫連到真實世界</span><h2>真的看起來是這樣！</h2><p>先看照片，再回頭找動畫裡的線索。點照片可以放大。</p><div class="weather-photo-grid">${items.map(p=>`<figure class="weather-photo-card"><button type="button" class="weather-photo-open" data-weather-photo="${p.id}" aria-label="放大：${weatherPhotoEsc(p.title)}"><img src="assets/weather/${p.id}.webp" alt="${weatherPhotoEsc(p.alt)}" width="1400" height="1000" loading="lazy" decoding="async"><span>🔍 點照片放大</span></button><figcaption><span class="weather-photo-kind">${p.kind}</span><h3>${p.title}</h3><p>${p.caption}</p><p class="weather-photo-look"><strong>找找看：</strong>${p.look}</p>${weatherPhotoCredit(p)}</figcaption></figure>`).join('')}</div><dialog class="weather-photo-dialog" id="weatherPhotoDialog" aria-labelledby="weatherPhotoDialogTitle"><button type="button" class="world-secondary weather-photo-close" id="weatherPhotoClose" autofocus>✕ 關閉照片</button><div id="weatherPhotoDetail"></div></dialog></section>`;
}
function wireWeatherPhotos(){
 const dialog=document.getElementById('weatherPhotoDialog');if(!dialog)return;
 let resume=false;
 document.querySelectorAll('[data-weather-photo]').forEach(button=>button.onclick=()=>{
  const p=WEATHER_PHOTOS.find(p=>p.id===button.dataset.weatherPhoto);if(!p)return;
  resume=typeof processActive!=='undefined'&&processActive==='weather'&&processGet('weather').playing;
  if(resume){processStop();processSync()}
  document.getElementById('weatherPhotoDetail').innerHTML=`<h2 id="weatherPhotoDialogTitle">${p.title}</h2><img src="assets/weather/${p.id}.webp" alt="${weatherPhotoEsc(p.alt)}"><p>${p.caption}</p><p class="weather-photo-look"><strong>找找看：</strong>${p.look}</p>${weatherPhotoCredit(p)}`;
  dialog.showModal();
 });
 document.getElementById('weatherPhotoClose').onclick=()=>dialog.close();
 dialog.onclick=e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}};
 dialog.addEventListener('close',()=>{if(resume&&processActive==='weather'&&!document.hidden){processGet('weather').playing=true;processSync();processSchedule()}resume=false});
 document.querySelectorAll('.weather-photo-open img').forEach(img=>img.onerror=()=>{img.hidden=true;img.nextElementSibling.textContent='照片暫時無法載入，請連線後重試。'});
}
