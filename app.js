// ==================== EXPERIMENT DATA (5-7 YO TAILORED) ====================
    const EXPERIMENTS = {
      volcano: {
        id: 'volcano',
        title: '彩虹火山大爆發',
        emoji: '🌋',
        badgeTitle: '火山氣泡大師',
        badgeIcon: '🌋',
        kikiIntro: '歡迎來到彩虹火山島！當白色的小蘇打粉遇上酸酸的白醋，會發生什麼神奇的事呢？快選顏色加進火山裡試試看！',
        stageHint: '👆 點選左邊按鈕加小蘇打、洗碗精，最後倒進白醋！也可以點火山口噴發喔！',
        prediction: {
          question: '猜猜看：把「酸酸的白醋」倒進「小蘇打粉」裡面，火山口會發生什麼事呢？',
          options: [
            { text: '🫧 冒出好多彩色泡泡噴出來！', correct: true, reply: '答對了！小蘇打遇到醋會產生好多「二氧化碳」氣泡，像火山一樣噴出來喔！' },
            { text: '🧊 瞬間結成硬梆梆的冰塊！', correct: false, reply: '哈哈，不會變成冰塊喔！它們相遇會冒出超多氣泡，快去右邊試試看！' }
          ]
        },
        principle: '白色的小蘇打粉是「鹼性」，白醋是「酸性」。它們手牽手碰到一起時，會變出好多看不見的「二氧化碳」小氣泡！加上洗碗精就會把氣泡包起來，變成綿密的彩虹泡泡火山！',
        safety: '白醋聞起來酸酸刺刺的，千萬不要揉眼睛或喝下去喔！實驗結束後記得用清水把小手洗乾淨。',
        materials: [
          { icon: '🥄', name: '小蘇打粉 2 大匙（廚房烘焙或清潔用的都可以）' },
          { icon: '🍶', name: '白醋 半杯（酸酸的透明醋）' },
          { icon: '🧴', name: '洗碗精 幾滴（讓泡泡變多變綿密！）' },
          { icon: '🎨', name: '食用色素或水彩顏料（紅、黃、藍都可以）' },
          { icon: '🥛', name: '塑膠杯或空布丁盒 1 個、大托盤 1 個（接泡泡用）' }
        ],
        steps: [
          { title: '放好火山杯', desc: '把空杯子放在大托盤中間，這樣待會泡泡噴出來才不會弄髒桌子喔！' },
          { title: '加入魔法白粉與顏色', desc: '用湯匙舀 2 大匙小蘇打粉放進杯子，再擠 3 滴洗碗精和喜歡的食用色素。' },
          { title: '倒進白醋！大爆發！', desc: '數一、二、三，把白醋慢慢倒進杯子裡，哇！看彩色泡泡湧出來啦！' }
        ],
        quiz: {
          question: '在彩虹火山實驗裡，小蘇打粉加白醋冒出來的泡泡，裡面裝的是什麼氣體呢？',
          options: [
            { text: '🫧 二氧化碳（跟汽水裡的泡泡一樣喔！）', correct: true },
            { text: '🪨 小石頭灰塵', correct: false },
            { text: '❄️ 冷氣機的冰風', correct: false }
          ],
          explanation: '太棒了！小蘇打加白醋產生的氣體叫做「二氧化碳」，我們喝的汽水裡面也是這種刺刺的氣泡喔！'
        },
        parentQuestions: [
          '如果我們不加洗碗精，只加小蘇打和醋，泡泡看起來會有什麼不一樣？',
          '湊近用耳朵聽聽看，泡泡冒出來的時候有什麼聲音？',
          '泡泡噴完之後，再倒一點點醋進去還會繼續冒泡泡嗎？為什麼？'
        ],
        cleanupTip: '建議將杯子放在烤盤、洗臉盆或洗澡時的浴缸內進行，實驗結束後直接沖水即可輕鬆清潔（小蘇打加醋還能順便清潔排水孔）！'
      },

      egg: {
        id: 'egg',
        title: '會游泳的魔法雞蛋',
        emoji: '🥚',
        badgeTitle: '浮力航海王',
        badgeIcon: '⛵',
        kikiIntro: '生雞蛋放進清水裡會沉到杯底睡覺，但只要加入廚房裡的一種白色魔法粉，雞蛋就會自己浮起來游泳喔！',
        stageHint: '👆 點選「加一匙鹽巴」並攪拌，觀察水裡的雞蛋高度變化！',
        prediction: {
          question: '猜猜看：當我們往水杯裡加入越來越多「鹽巴」並攪拌融化，杯底的雞蛋會怎麼樣？',
          options: [
            { text: '🏊 慢慢浮到水面上像在游泳！', correct: true, reply: '好聰明！鹽水比清水更有力氣（密度變大），可以把重重的雞蛋托起來喔！' },
            { text: '🐣 雞蛋會在水裡立刻孵出小雞！', correct: false, reply: '真有想像力！不過鹽水不會孵出小雞，而是會把雞蛋托起來浮在水面喔！' }
          ]
        },
        principle: '生雞蛋比普通的清水還要重（密度比較大），所以一開始會沉到水底。但是當水裡融化了好多鹽巴，鹽水變得比雞蛋還要「緊密有力」，浮力變大，就把雞蛋托起來浮在水面上了！死海也是因為鹽分超高，人躺在上面不會沉下去喔！',
        safety: '生雞蛋圓滾滾很容易滑破，拿雞蛋時要兩隻手輕輕捧著；濃鹽水鹹鹹的不能喝喔！',
        materials: [
          { icon: '🥚', name: '新鮮生雞蛋 1 顆' },
          { icon: '🧂', name: '食鹽 4～6 大匙' },
          { icon: '🥛', name: '透明高水杯 1 個（裝約八分滿溫水）' },
          { icon: '🥄', name: '長湯匙 1 支（攪拌鹽水用）' }
        ],
        steps: [
          { title: '雞蛋進清水潛水', desc: '把生雞蛋輕輕放進裝了清水的透明杯子裡，觀察看看：雞蛋沉在最底下！' },
          { title: '一匙一匙加鹽巴', desc: '每次加 1 大匙鹽巴進水裡，用湯匙溫柔攪拌，小心不要敲破雞蛋喔。' },
          { title: '雞蛋浮起來跳舞', desc: '加到第 4～5 匙鹽巴後，哇！原本沉睡的雞蛋慢慢離開杯底，浮到水面上了！' }
        ],
        quiz: {
          question: '為什麼加了很多鹽巴之後，原本沉在水底的雞蛋會浮起來呢？',
          options: [
            { text: '🌊 鹽水的密度變大，浮力變得更有力氣把雞蛋托起來！', correct: true },
            { text: '🎈 雞蛋偷吃鹽巴變輕了！', correct: false },
            { text: '🔥 水變熱把雞蛋往上推！', correct: false }
          ],
          explanation: '答對囉！當鹽巴融化在水裡，鹽水的密度變得比雞蛋還大，就像有一雙無形的大手把雞蛋托起來一樣！'
        },
        parentQuestions: [
          '如果我們把浮起來的鹽水慢慢倒掉一半，再輕輕從杯壁加入清水，雞蛋會停在杯子中間嗎？',
          '除了雞蛋之外，試試看把小番茄或葡萄放進清水和鹽水，結果也一樣嗎？',
          '為什麼去海邊游泳比在游泳池裡感覺更容易浮起來呢？'
        ],
        cleanupTip: '使用微溫的水可以讓鹽巴融化得更快，5–7 歲孩子攪拌時建議先將雞蛋撈出，等鹽融化後再放回雞蛋，最不容易打破！'
      },

      milk: {
        id: 'milk',
        title: '牛奶裡的跳舞彩虹',
        emoji: '🎨',
        badgeTitle: '彩虹魔術師',
        badgeIcon: '🌈',
        kikiIntro: '白白的牛奶盤子裡滴上彩色顏料，只要拿沾了洗碗精的棉花棒輕輕碰一下，顏料就會像煙火一樣自己跑開跳舞喔！',
        stageHint: '👆 先點選顏色滴在牛奶盤上，再點選「洗碗精棉花棒」直接點盤子中間！',
        prediction: {
          question: '猜猜看：用沾了「洗碗精」的棉花棒輕輕碰一下牛奶上的彩色顏料，顏料會怎麼動？',
          options: [
            { text: '🎆 像煙火一樣迅速往四面八方散開跳舞！', correct: true, reply: '完全正確！洗碗精會打破表面的拉手力氣（表面張力），還會去追牛奶裡的油脂，讓顏色大奔跑！' },
            { text: '🕳️ 顏料全部躲進棉花棒裡面消失！', correct: false, reply: '顏料不會躲進棉花棒裡喔！它們會像放煙火一樣往四周散開，快去點點看！' }
          ]
        },
        principle: '牛奶裡面有水，還有好多小小看不見的「脂肪油滴」。原本水面像一張拉緊的彈簧床（表面張力）；當洗碗精一碰上去，不但把彈簧床鬆開，洗碗精分子還會到處追著牛奶裡的脂肪跑，推動彩色顏料一起轉圈圈跳舞！',
        safety: '滴過洗碗精的彩色牛奶已經變成泡泡水囉，絕對不能喝進肚子裡！',
        materials: [
          { icon: '🥛', name: '全脂鮮奶 半杯（全脂牛奶油脂多，效果最明顯！）' },
          { icon: '🍽️', name: '淺平盤 1 個' },
          { icon: '🎨', name: '食用色素 3～4 種顏色（或稀釋水彩）' },
          { icon: '🧴', name: '洗碗精 少許 ＋ 棉花棒 2 支' }
        ],
        steps: [
          { title: '倒一層薄薄的牛奶', desc: '把全脂牛奶倒進平盤裡，只要蓋住盤子底部就可以囉，靜置一下讓牛奶不晃動。' },
          { title: '滴上彩色小水滴', desc: '在牛奶中間附近，分別滴上紅、黃、藍、綠各 1～2 滴色素，先不要搖晃盤子喔！' },
          { title: '棉花棒魔法一碰！', desc: '把棉花棒頭沾滿洗碗精，輕輕垂直碰一下色素正中央（不用攪拌！），看彩虹煙火炸開！' }
        ],
        quiz: {
          question: '為什麼棉花棒沾了「洗碗精」碰牛奶，顏色就會往四周跑開呢？',
          options: [
            { text: '🧼 洗碗精打破水的表面張力，還追著牛奶裡的脂肪跑！', correct: true },
            { text: '💨 棉花棒會吹出隱形的風！', correct: false },
            { text: '🧲 盤子底下有磁鐵在吸顏料！', correct: false }
          ],
          explanation: '太厲害了！這就是「表面張力」與洗碗精親油端追逐牛奶脂肪的奇妙科學現象，這也是洗碗精能把油膩碗盤洗乾淨的原因喔！'
        },
        parentQuestions: [
          '如果改用「白開水」代替全脂牛奶，煙火散開之後還會一直轉圈圈跳舞嗎？',
          '為什麼我們說「不要拿棉花棒攪拌」，只輕輕停在一個點反而更好看呢？',
          '平常洗手塗肥皂的時候，肥皂是不是也在幫我們把小手上的油油趕走呢？'
        ],
        cleanupTip: '滴食用色素時由大人協助控制 1～2 滴即可，色素太多容易混成深咖啡色；用淺底白盤子視覺對比最鮮明！'
      },

      static: {
        id: 'static',
        title: '氣球吸紙花魔法',
        emoji: '🎈',
        badgeTitle: '靜電小超人',
        badgeIcon: '⚡',
        kikiIntro: '不用膠水也不用磁鐵，只要把氣球在頭髮或毛衣上嚕一嚕，氣球就能隔空把桌上的小紙花吸起來跳舞喔！',
        stageHint: '👆 先按「摩擦毛衣充電」或直接在畫面上摩擦氣球，再拖曳氣球靠近底下的彩色小紙花！',
        prediction: {
          question: '猜猜看：把吹好的氣球在乾乾的頭髮或毛衣上摩擦 10 下，再靠近桌上的碎紙花，會發生什麼事？',
          options: [
            { text: '🎊 小紙花會自己跳起來黏在氣球上！', correct: true, reply: '答對啦！摩擦會讓氣球帶上滿滿的「靜電」，把輕飄飄的小紙花吸上來！' },
            { text: '💥 氣球會變成一顆重重的大鐵球！', correct: false, reply: '哈哈，氣球還是輕飄飄的喔！但是它會帶上神奇的靜電把紙花吸起來！' }
          ]
        },
        principle: '萬物裡面都有超級小的「電荷小精靈」。當氣球跟毛衣或頭髮摩擦時，氣球搶走了好多「負電荷（-）」，變成了帶電的魔法氣球！當它靠近輕輕的小紙花時，正負電荷互相吸引，紙花就咻一下跳起來吸在氣球上了！',
        safety: '請把紙張撕成指甲大小的小紙花就好，不要拿尖尖的剪刀奔跑；對乳膠氣球過敏的小朋友可以改用「塑膠尺」或「塑膠扁梳」摩擦毛衣，效果一模一樣喔！',
        materials: [
          { icon: '🎈', name: '氣球 1 顆（或塑膠尺、塑膠梳子）' },
          { icon: '🧣', name: '乾毛衣、刷毛外套或自己的乾頭髮' },
          { icon: '🎊', name: '衛生紙或色紙撕成的超小碎紙花（越輕越好！）' }
        ],
        steps: [
          { title: '撕出輕飄飄小紙花', desc: '把薄薄的衛生紙或色紙撕成米粒到小指甲大小，平鋪在桌面上。' },
          { title: '氣球嚕一嚕充電', desc: '拿氣球在乾毛衣或頭髮上同一方向快速摩擦 10～15 下，讓氣球充滿靜電！' },
          { title: '隔空吸引紙花跳舞', desc: '把氣球慢慢移到距離紙花上方約 2～3 公分處，看紙花自己飛起來黏住氣球！' }
        ],
        quiz: {
          question: '冬天脫毛衣時聽到「劈啪」聲，或是氣球摩擦後能吸起小紙花，這是因為什麼科學力量呢？',
          options: [
            { text: '⚡ 摩擦產生的「靜電」吸引力！', correct: true },
            { text: '🍯 氣球表面流出了甜甜的膠水！', correct: false },
            { text: '🌪️ 氣球裡面有小吸塵器！', correct: false }
          ],
          explanation: '完全正確！摩擦會讓物體表面累積「靜電」，冬天溜滑梯頭髮飛起來、脫毛衣劈啪響，全部都是靜電小精靈在作怪喔！'
        },
        parentQuestions: [
          '如果把摩擦過充滿靜電的氣球靠近水龍頭「細細小小的水流」，水流會被吸過去彎曲嗎？',
          '為什麼用厚厚的硬卡紙做紙花吸不起來，用薄薄的衛生紙卻跳得超級高呢？',
          '摸一摸剛摩擦完氣球的頭髮，頭髮是不是也跟著氣球飛起來了？'
        ],
        cleanupTip: '用乾燥的衛生紙撕成小碎片比一般色紙更輕，靜電吸引跳躍的效果會好上 3 倍！實驗完可以用同一顆靜電氣球把桌上的紙屑通通吸起來丟進垃圾桶！'
      }
    };

    // ==================== STATE MANAGEMENT ====================
    const state = {
      currentExpId: 'volcano',
      currentMode: 'mission', // 'lab' | 'steps' | 'quiz'
      audioEnabled: true,
      unlockedBadges: {
        volcano: false,
        egg: false,
        milk: false,
        static: false
      },
      checkedMaterials: {},
      predictionsMade: {},
      // Simulation state per experiment
      sim: {
        volcano: {
          sodaScoops: 0,
          soapDrops: 0,
          vinegarPoured: 0,
          selectedColor: '#F43F5E',
          erupting: false,
          eruptionPower: 0,
          particles: [],
          foamLevel: 0
        },
        egg: {
          saltSpoons: 0,
          stirCount: 0,
          eggY: 0, // computed dynamically
          targetRatio: 0, // 0 = bottom, 1 = floating top
          currentRatio: 0,
          saltGrains: [],
          extraObject: 'none', // 'none' | 'pingpong' | 'coin'
          ripples: []
        },
        milk: {
          drops: [],
          swabRipples: [],
          swabX: 180,
          swabY: 90,
          swabActive: false,
          selectedDye: '#EC4899'
        },
        static: {
          charge: 0, // 0 to 100
          balloonX: 260,
          balloonY: 110,
          dragging: false,
          confetti: [],
          sparks: []
        }
      }
    };

    // Load saved badges safely
    try {
      const saved = localStorage.getItem('kiki_science_badges_v1');
      if (saved) {
        const parsed = JSON.parse(saved);
        Object.assign(state.unlockedBadges, parsed);
      }
    } catch (e) {
      // Ignore storage restrictions in sandboxed environments
    }

    function saveBadges() {
      try {
        localStorage.setItem('kiki_science_badges_v1', JSON.stringify(state.unlockedBadges));
      } catch (e) {}
    }

    // ==================== WEB AUDIO SYNTHESIZER & SPEECH ====================
    let audioCtx = null;

    function ensureAudioCtx() {
      if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          audioCtx = new AudioContextClass();
        }
      }
      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
    }

    function playSound(type) {
      if (!state.audioEnabled) return;
      try {
        ensureAudioCtx();
        if (!audioCtx) return;
        const now = audioCtx.currentTime;

        if (type === 'pop') {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(320, now);
          osc.frequency.exponentialRampToValueAtTime(680, now + 0.11);
          gain.gain.setValueAtTime(0.18, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(now);
          osc.stop(now + 0.12);
        } else if (type === 'fizz') {
          // Soft bubbly sequence
          for (let i = 0; i < 6; i++) {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'triangle';
            const start = now + i * 0.06;
            osc.frequency.setValueAtTime(240 + Math.random() * 420, start);
            osc.frequency.exponentialRampToValueAtTime(750 + Math.random() * 250, start + 0.08);
            gain.gain.setValueAtTime(0.12, start);
            gain.gain.exponentialRampToValueAtTime(0.01, start + 0.09);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(start);
            osc.stop(start + 0.09);
          }
        } else if (type === 'magic') {
          const notes = [523.25, 659.25, 783.99, 1046.5];
          notes.forEach((freq, idx) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sine';
            const t = now + idx * 0.08;
            osc.frequency.setValueAtTime(freq, t);
            gain.gain.setValueAtTime(0.16, t);
            gain.gain.exponentialRampToValueAtTime(0.008, t + 0.25);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(t);
            osc.stop(t + 0.26);
          });
        } else if (type === 'zap') {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(620, now);
          osc.frequency.linearRampToValueAtTime(180, now + 0.14);
          gain.gain.setValueAtTime(0.1, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(now);
          osc.stop(now + 0.15);
        }
      } catch (e) {}
    }

    function speakText(text) {
      if (!state.audioEnabled) {
        showToast('🔇', '目前聲音已關閉，點右上角「聲音」可開啟語音喔！');
        return;
      }
      playSound('pop');
      try {
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          const utter = new SpeechSynthesisUtterance(text);
          utter.lang = 'zh-TW';
          utter.rate = 0.95; // Slightly slower & clearer for 5-7yo kids
          utter.pitch = 1.15;
          window.speechSynthesis.speak(utter);
        }
      } catch (e) {}
    }

    // ==================== TOAST & BADGE HELPERS ====================
    let toastTimer = null;
    function showToast(emoji, text) {
      const banner = document.getElementById('toastBanner');
      document.getElementById('toastEmoji').textContent = emoji;
      document.getElementById('toastText').textContent = text;
      banner.classList.remove('hidden');
      if (toastTimer) clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        banner.classList.add('hidden');
      }, 3200);
    }

    function unlockBadge(expId) {
      if (!state.unlockedBadges[expId]) {
        state.unlockedBadges[expId] = true;
        saveBadges();
        updateBadgeCounters();
        playSound('magic');
        const exp = EXPERIMENTS[expId];
        showToast('🏅', `太棒了！獲得「${exp.badgeTitle}」閃亮徽章！`);
      }
    }

    function updateBadgeCounters() {
      const count = Object.values(state.unlockedBadges).filter(Boolean).length;
      document.getElementById('badgeCountText').textContent = `${count}/4`;
      Object.keys(EXPERIMENTS).forEach(id => {
        const starEl = document.getElementById(`tabBadge-${id}`);
        if (starEl) {
          if (state.unlockedBadges[id]) {
            starEl.classList.remove('hidden');
          } else {
            starEl.classList.add('hidden');
          }
        }
      });
    }

    // ==================== INITIALIZE SIMULATION ITEMS ====================
    function initStaticConfetti(w, h) {
      const colors = ['#F43F5E', '#F59E0B', '#10B981', '#38BDF8', '#A855F7', '#EC4899'];
      const list = [];
      for (let i = 0; i < 26; i++) {
        list.push({
          x: 40 + (i / 26) * (w - 80) + (Math.random() * 14 - 7),
          baseY: h - 32 - (i % 3) * 6,
          y: h - 32 - (i % 3) * 6,
          vx: 0,
          vy: 0,
          color: colors[i % colors.length],
          angle: Math.random() * Math.PI,
          stuck: false,
          offsetX: (Math.random() - 0.5) * 52,
          offsetY: 32 + Math.random() * 24
        });
      }
      state.sim.static.confetti = list;
    }

    function initMilkDrops(w, h) {
      state.sim.milk.drops = [];
      state.sim.milk.swabRipples = [];
    }

    function resetCurrentSim() {
      delete predictionsObserved[state.currentExpId];
      delete discoveriesRevealed[state.currentExpId];
      delete state.predictionsMade[state.currentExpId];
      const id = state.currentExpId;
      const canvas = document.getElementById('simCanvas');
      const w = canvas.width || 500;
      const h = canvas.height || 360;

      if (id === 'volcano') {
        state.sim.volcano = {
          sodaScoops: 0,
          soapDrops: 0,
          vinegarPoured: 0,
          selectedColor: state.sim.volcano.selectedColor || '#F43F5E',
          erupting: false,
          eruptionPower: 0,
          particles: [],
          foamLevel: 0
        };
      } else if (id === 'egg') {
        state.sim.egg = {
          saltSpoons: 0,
          stirCount: 0,
          targetRatio: 0,
          currentRatio: 0,
          saltGrains: [],
          extraObject: 'none',
          ripples: []
        };
      } else if (id === 'milk') {
        initMilkDrops(w, h);
      } else if (id === 'static') {
        state.sim.static.charge = 0;
        state.sim.static.balloonX = w * 0.55;
        state.sim.static.balloonY = h * 0.34;
        state.sim.static.sparks = [];
        initStaticConfetti(w, h);
      }
      renderAll();
    }

    // ==================== RENDER UI SECTIONS ====================
    function renderAll() {
      const exp = EXPERIMENTS[state.currentExpId];

      // Update Kiki Speech
      document.getElementById('kikiSpeechText').textContent = exp.kikiIntro;

      // Update Experiment Tabs active styling
      document.querySelectorAll('.exp-tab-btn').forEach(btn => {
        const isCurrent = btn.getAttribute('data-exp-id') === state.currentExpId;
        btn.className = `exp-tab-btn kid-card p-3.5 text-left border-4 transition flex items-center gap-3 ${
          isCurrent
            ? 'bg-amber-50 border-amber-400 scale-[1.02]'
            : 'bg-white border-slate-200 hover:border-amber-300 opacity-90'
        }`;
      });

      // Update Mode Buttons
      document.querySelectorAll('.mode-btn').forEach(btn => {
        const isCurrent = btn.getAttribute('data-mode') === state.currentMode;
        btn.className = `mode-btn kid-btn flex-1 sm:flex-initial px-4 py-2.5 font-black text-sm sm:text-base flex items-center justify-center gap-2 ${
          isCurrent
            ? 'bg-indigo-600 text-white border-2 border-indigo-700'
            : 'bg-white text-slate-700 border-2 border-slate-300 hover:bg-slate-50'
        }`;
      });

      // Toggle Views
      document.getElementById('view-lab').classList.toggle('hidden', state.currentMode !== 'lab');
      document.getElementById('view-steps').classList.toggle('hidden', state.currentMode !== 'steps');
      document.getElementById('view-quiz').classList.toggle('hidden', state.currentMode !== 'quiz');

      // Render Prediction Section
      renderPredictionSection(exp);

      // Render Lab Controls & Stage Headers
      document.getElementById('stageEmoji').textContent = exp.emoji;
      document.getElementById('stageTitle').textContent = `${exp.title}・互動實驗台`;
      document.getElementById('stageHint').textContent = exp.stageHint;
      syncJourney();
      renderLabControls();
      updateLabMeter();
      syncJourney();

      // Render Real-World Steps View
      renderStepsView(exp);

      // Render Quiz View
      renderQuizView(exp);

      // Update Parent Modal Content for current experiment
      renderParentModalContent(exp);

      updateBadgeCounters();
    }

    function renderPredictionSection(exp) {
      document.getElementById('predictionQuestion').textContent = exp.prediction.question;
      const list = document.getElementById('predictionOptions'); list.innerHTML = '';
      const chosen = state.predictionsMade[exp.id];
      document.getElementById('predictionStatusBadge').textContent = chosen === undefined ? '先猜猜看' : '已記住你的想法';
      document.getElementById('predictionFeedback').classList.add('hidden');
      exp.prediction.options.forEach((opt, i) => {
        const b = document.createElement('button'); b.type='button'; b.className='kid-btn prediction-choice';
        b.textContent=opt.text; b.setAttribute('aria-pressed',String(chosen===i));
        b.addEventListener('click',()=>{ state.predictionsMade[exp.id]=i; renderPredictionSection(exp); syncJourney(); speakText('已記住你的想法！現在動手試試，看結果是不是一樣。'); }); list.appendChild(b);
      });
    }

    function renderLabControls() {
      const container = document.getElementById('labControlPanel');
      container.innerHTML = '';
      const id = state.currentExpId;

      if (id === 'volcano') {
        const v = state.sim.volcano;
        const colors = [
          { hex: '#F43F5E', name: '草莓紅' },
          { hex: '#F59E0B', name: '陽光橘' },
          { hex: '#10B981', name: '翡翠綠' },
          { hex: '#38BDF8', name: '海洋藍' },
          { hex: '#A855F7', name: '葡萄紫' }
        ];

        const colorRow = document.createElement('div');
        colorRow.className = 'space-y-1.5';
        colorRow.innerHTML = `<div class="text-xs font-extrabold text-slate-600">🎨 選擇火山顏料顏色：</div>`;
        const colorBtns = document.createElement('div');
        colorBtns.className = 'flex flex-wrap gap-2';
        colors.forEach(c => {
          const b = document.createElement('button');
          b.type = 'button';
          const active = v.selectedColor === c.hex;
          b.className = `kid-btn px-3 py-1.5 text-xs font-black text-white flex items-center gap-1 border-2 ${
            active ? 'ring-4 ring-amber-300 scale-105 border-white' : 'opacity-85 border-transparent'
          }`;
          b.style.backgroundColor = c.hex;
          b.textContent = c.name;
          b.addEventListener('click', () => {
            v.selectedColor = c.hex;
            playSound('pop');
            renderLabControls();
          });
          colorBtns.appendChild(b);
        });
        colorRow.appendChild(colorBtns);
        container.appendChild(colorRow);

        // Action Buttons
        const actionGrid = document.createElement('div');
        actionGrid.className = 'grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1';

        const sodaBtn = document.createElement('button');
        sodaBtn.type = 'button';
        sodaBtn.className = 'kid-btn bg-amber-100 hover:bg-amber-200 border-2 border-amber-400 p-3 text-left flex items-center justify-between';
        sodaBtn.innerHTML = `
          <div>
            <div class="font-black text-sm text-amber-950">🥄 1. 加小蘇打粉</div>
            <div class="text-xs font-bold text-amber-800">目前已加：${v.sodaScoops} 匙</div>
          </div>
          <span class="text-2xl font-black text-amber-600">+1</span>
        `;
        sodaBtn.addEventListener('click', () => {
          v.sodaScoops = Math.min(5, v.sodaScoops + 1); v.spent = false;
          playSound('pop');
          renderLabControls();
          updateLabMeter();
        });

        const soapBtn = document.createElement('button');
        soapBtn.type = 'button';
        soapBtn.className = 'kid-btn bg-sky-100 hover:bg-sky-200 border-2 border-sky-400 p-3 text-left flex items-center justify-between';
        soapBtn.innerHTML = `
          <div>
            <div class="font-black text-sm text-sky-950">🧴 2. 擠洗碗精</div>
            <div class="text-xs font-bold text-sky-800">目前已加：${v.soapDrops} 滴</div>
          </div>
          <span class="text-2xl font-black text-sky-600">+1</span>
        `;
        soapBtn.addEventListener('click', () => {
          v.soapDrops = Math.min(5, v.soapDrops + 1);
          playSound('pop');
          renderLabControls();
          updateLabMeter();
        });

        actionGrid.appendChild(sodaBtn);
        actionGrid.appendChild(soapBtn);
        container.appendChild(actionGrid);

        // Pour Vinegar Big Button
        const vinegarBtn = document.createElement('button');
        vinegarBtn.type = 'button';
        vinegarBtn.className = 'kid-btn w-full bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-black py-3.5 px-4 text-base flex items-center justify-center gap-2 border-2 border-rose-700';
        vinegarBtn.innerHTML = `<span>🍶</span><span>3. 倒進酸酸白醋！（點我大爆發）</span>`;
        vinegarBtn.addEventListener('click', () => {
          triggerVolcanoEruption();
        });
        container.appendChild(vinegarBtn);

      } else if (id === 'egg') {
        const eg = state.sim.egg;

        const saltBtn = document.createElement('button');
        saltBtn.type = 'button';
        saltBtn.className = 'kid-btn w-full bg-amber-400 hover:bg-amber-500 text-slate-900 font-black py-3 px-4 text-base flex items-center justify-between border-2 border-amber-600';
        saltBtn.innerHTML = `
          <span class="flex items-center gap-2"><span class="text-2xl">🧂</span><span>加入 1 大匙鹽巴並攪拌</span></span>
          <span class="bg-white/90 px-3 py-1 rounded-full text-xs font-black text-amber-900">目前已加 ${eg.saltSpoons} / 6 匙</span>
        `;
        saltBtn.addEventListener('click', () => {
          addSaltSpoon();
        });
        container.appendChild(saltBtn);

        // Quick water buttons
        const row2 = document.createElement('div');
        row2.className = 'grid grid-cols-2 gap-2.5';

        const freshBtn = document.createElement('button');
        freshBtn.type = 'button';
        freshBtn.className = 'kid-btn bg-sky-100 hover:bg-sky-200 border-2 border-sky-300 p-2.5 font-extrabold text-xs sm:text-sm text-sky-950';
        freshBtn.textContent = '💧 加清水稀釋（減鹽）';
        freshBtn.addEventListener('click', () => {
          eg.saltSpoons = Math.max(0, eg.saltSpoons - 1);
          eg.targetRatio = saltHeight(eg.saltSpoons);
          playSound('pop');
          renderLabControls();
          updateLabMeter();
        });

        const compareBtn = document.createElement('button');
        compareBtn.type = 'button';
        compareBtn.className = 'kid-btn bg-purple-100 hover:bg-purple-200 border-2 border-purple-300 p-2.5 font-extrabold text-xs sm:text-sm text-purple-950';
        const nextMap = { none: 'pingpong', pingpong: 'coin', coin: 'none' };
        const labelMap = {
          none: '🏓 放乒乓球比比看',
          pingpong: '🪙 換放硬幣比比看',
          coin: '🧹 收起比較物品'
        };
        compareBtn.textContent = labelMap[eg.extraObject];
        compareBtn.addEventListener('click', () => {
          eg.extraObject = nextMap[eg.extraObject];
          playSound('pop');
          renderLabControls();
        });

        row2.appendChild(freshBtn);
        row2.appendChild(compareBtn);
        container.appendChild(row2);

      } else if (id === 'milk') {
        const m = state.sim.milk;
        const dyes = [
          { hex: '#F43F5E', name: '紅色素' },
          { hex: '#FACC15', name: '黃色素' },
          { hex: '#38BDF8', name: '藍色素' },
          { hex: '#10B981', name: '綠色素' },
          { hex: '#A855F7', name: '紫色素' }
        ];

        const dyeRow = document.createElement('div');
        dyeRow.className = 'space-y-1.5';
        dyeRow.innerHTML = `<div class="text-xs font-extrabold text-slate-600">💧 1. 點選顏色滴進牛奶盤：</div>`;
        const dyeBtns = document.createElement('div');
        dyeBtns.className = 'flex flex-wrap gap-2';
        dyes.forEach(d => {
          const b = document.createElement('button');
          b.type = 'button';
          b.className = 'kid-btn px-3 py-1.5 text-xs font-black text-white border-2 border-white shadow';
          b.style.backgroundColor = d.hex;
          b.textContent = `＋滴${d.name}`;
          b.addEventListener('click', () => {
            const canvas = document.getElementById('simCanvas');
            const cx = (canvas.width || 480) / 2 + (Math.random() - 0.5) * 110;
            const cy = (canvas.height || 340) / 2 + (Math.random() - 0.5) * 80;
            m.drops.push({
              x: cx,
              y: cy,
              r: 18 + Math.random() * 8,
              baseR: 20,
              color: d.hex,
              vx: 0,
              vy: 0
            });
            playSound('pop');
            updateLabMeter();
          });
          dyeBtns.appendChild(b);
        });
        dyeRow.appendChild(dyeBtns);
        container.appendChild(dyeRow);

        const swabBtn = document.createElement('button');
        swabBtn.type = 'button';
        swabBtn.className = 'kid-btn w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-black py-3.5 px-4 text-base flex items-center justify-center gap-2 border-2 border-purple-700';
        swabBtn.innerHTML = `<span>🧼</span><span>2. 棉花棒沾洗碗精碰一下！（或直接點畫布）</span>`;
        swabBtn.addEventListener('click', () => {
          const canvas = document.getElementById('simCanvas');
          triggerMilkSwab((canvas.width || 480) / 2, (canvas.height || 340) / 2);
        });
        container.appendChild(swabBtn);

      } else if (id === 'static') {
        const st = state.sim.static;

        const rubBtn = document.createElement('button');
        rubBtn.type = 'button';
        rubBtn.className = 'kid-btn w-full bg-amber-400 hover:bg-amber-500 text-slate-900 font-black py-3.5 px-4 text-base flex items-center justify-between border-2 border-amber-600';
        rubBtn.innerHTML = `
          <span class="flex items-center gap-2"><span class="text-2xl">🧣</span><span>1. 在毛衣上嚕一嚕充電！</span></span>
          <span class="bg-white px-3 py-1 rounded-full text-xs font-black text-amber-900">電量 ${Math.round(st.charge)}%</span>
        `;
        rubBtn.addEventListener('click', () => {
          rubBalloonCharge(25);
        });
        container.appendChild(rubBtn);

        const moveRow = document.createElement('div');
        moveRow.className = 'grid grid-cols-2 gap-2.5';

        const lowerBtn = document.createElement('button');
        lowerBtn.type = 'button';
        lowerBtn.className = 'kid-btn bg-indigo-600 hover:bg-indigo-700 text-white font-black py-3 px-3 text-xs sm:text-sm';
        lowerBtn.textContent = '⬇️ 2. 氣球靠近小紙花';
        lowerBtn.addEventListener('click', () => {
          const canvas = document.getElementById('simCanvas');
          st.balloonY = (canvas.height || 340) * 0.56;
          playSound('pop');
          if (st.charge >= 40) {
            markObserved('static');
          }
          updateLabMeter();
        });

        const liftBtn = document.createElement('button');
        liftBtn.type = 'button';
        liftBtn.className = 'kid-btn bg-sky-100 hover:bg-sky-200 text-sky-950 border-2 border-sky-300 font-black py-3 px-3 text-xs sm:text-sm';
        liftBtn.textContent = '⬆️ 把氣球舉高高';
        liftBtn.addEventListener('click', () => {
          const canvas = document.getElementById('simCanvas');
          st.balloonY = (canvas.height || 340) * 0.28;
          playSound('pop');
        });

        moveRow.appendChild(lowerBtn);
        moveRow.appendChild(liftBtn);
        container.appendChild(moveRow);
      }
    }

    function updateLabMeter() {
      const id = state.currentExpId;
      const bar = document.getElementById('meterBar');
      const valText = document.getElementById('meterValueText');

      if (id === 'volcano') {
        const v = state.sim.volcano;
        if (v.vinegarPoured > 0) {
          bar.style.width = '100%';
          valText.textContent = '🌋 彩虹泡泡噴發成功！獲得徽章！';
        } else {
          const pct = Math.min(75, (v.sodaScoops > 0 ? 40 : 10) + (v.soapDrops > 0 ? 35 : 0));
          bar.style.width = `${pct}%`;
          valText.textContent = v.sodaScoops === 0 ? '先加小蘇打粉吧！' : '準備好倒進白醋囉！';
        }
      } else if (id === 'egg') {
        const eg = state.sim.egg;
        const pct = Math.min(100, Math.round((eg.saltSpoons / 5) * 100));
        bar.style.width = `${Math.max(10, pct)}%`;
        if (eg.saltSpoons === 0) {
          valText.textContent = '清水：雞蛋沉在杯底睡覺';
        } else if (eg.saltSpoons < 4) {
          valText.textContent = `已加 ${eg.saltSpoons} 匙鹽：雞蛋開始往上浮囉！`;
        } else {
          valText.textContent = '🎉 鹽水浮力超強！雞蛋浮在水面游泳了！';
        }
      } else if (id === 'milk') {
        const m = state.sim.milk;
        if (m.swabRipples.length > 0) {
          bar.style.width = '100%';
          valText.textContent = '🌈 表面張力煙火綻放成功！';
        } else {
          bar.style.width = '45%';
          valText.textContent = `盤中有 ${m.drops.length} 滴顏料，快用洗碗精棉花棒碰一下！`;
        }
      } else if (id === 'static') {
        const st = state.sim.static;
        bar.style.width = `${Math.max(10, st.charge)}%`;
        if (st.charge === 0) {
          valText.textContent = '氣球還沒充電，先在毛衣上嚕一嚕！';
        } else if (st.charge < 50) {
          valText.textContent = `靜電累積中 (${Math.round(st.charge)}%)，再多嚕幾下更有力！`;
        } else {
          valText.textContent = '⚡ 靜電滿滿！快把氣球移到紙花上方吸起來！';
        }
      }
    }

    function renderStepsView(exp) {
      // Materials Checklist
      const matContainer = document.getElementById('materialsChecklist');
      matContainer.innerHTML = '';
      exp.materials.forEach((mat, idx) => {
        const key = `${exp.id}-mat-${idx}`;
        const checked = !!state.checkedMaterials[key];
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `kid-btn w-full text-left p-3 flex items-center justify-between border-2 ${
          checked ? 'bg-emerald-50 border-emerald-400 text-emerald-950' : 'bg-slate-50 border-slate-200 text-slate-800'
        }`;
        btn.innerHTML = `
          <div class="flex items-center gap-2.5">
            <span class="text-xl">${mat.icon}</span>
            <span class="text-xs sm:text-sm font-extrabold ${checked ? 'line-through opacity-75' : ''}">${mat.name}</span>
          </div>
          <span class="text-lg">${checked ? '✅' : '⬜'}</span>
        `;
        btn.addEventListener('click', () => {
          state.checkedMaterials[key] = !checked;
          playSound('pop');
          renderStepsView(exp);
        });
        matContainer.appendChild(btn);
      });

      document.getElementById('safetyReminderText').textContent = exp.safety;

      // Steps List
      const stepsContainer = document.getElementById('realWorldStepsList');
      stepsContainer.innerHTML = '';
      exp.steps.forEach((st, idx) => {
        const card = document.createElement('div');
        card.className = 'bg-sky-50/70 border-2 border-sky-200 rounded-2xl p-3.5 flex items-start gap-3';
        card.innerHTML = `
          <div class="w-8 h-8 rounded-xl bg-sky-500 text-white font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
            ${idx + 1}
          </div>
          <div class="flex-1 space-y-1">
            <div class="font-black text-sky-950 text-sm sm:text-base">${st.title}</div>
            <p class="text-xs sm:text-sm font-bold text-slate-700 leading-relaxed">${st.desc}</p>
          </div>
        `;
        stepsContainer.appendChild(card);
      });
    }

    function renderQuizView(exp) {
      document.getElementById('quizHeaderTitle').textContent = `${exp.emoji} ${exp.title}・秘密小問答`;
      document.getElementById('quizQuestionText').textContent = exp.quiz.question;
      const listEl = document.getElementById('quizOptionsList');
      const resultBox = document.getElementById('quizResultBox');
      const resultText = document.getElementById('quizResultText');

      listEl.innerHTML = '';
      resultBox.classList.add('hidden');

      exp.quiz.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'kid-btn w-full text-left p-4 bg-slate-50 hover:bg-purple-50 border-2 border-slate-300 font-extrabold text-sm sm:text-base text-slate-800 flex items-center justify-between';
        btn.innerHTML = `<span>${opt.text}</span><span>👉</span>`;
        btn.addEventListener('click', () => {
          resultBox.classList.remove('hidden');
          if (opt.correct) {
            resultBox.className = 'rounded-2xl p-4 border-2 bg-emerald-50 border-emerald-400 text-emerald-950 space-y-3';
            resultText.textContent = `🎉 答對了！${exp.quiz.explanation}`;
            showToast("🌱", "你正在回想觀察到的現象！");
            speakText(`答對了！${exp.quiz.explanation}`);
          } else {
            playSound('pop');
            resultBox.className = 'rounded-2xl p-4 border-2 bg-amber-50 border-amber-400 text-amber-950 space-y-3';
            resultText.textContent = '💡 差一點點喔！再想一想剛剛在實驗室看到的現象，再點選另一個答案試試看！';
            speakText('差一點點喔，再選另一個答案試試看！');
          }
        });
        listEl.appendChild(btn);
      });
    }

    function renderParentModalContent(exp) {
      const qList = document.getElementById('parentQuestionsList');
      qList.innerHTML = '';
      exp.parentQuestions.forEach(q => {
        const li = document.createElement('li');
        li.textContent = q;
        qList.appendChild(li);
      });
      document.getElementById('parentCleanupTip').textContent = exp.cleanupTip;
    }

    function renderPassportModal() {
      const grid = document.getElementById('passportGrid');
      grid.innerHTML = '';
      let unlockedCount = 0;

      Object.values(EXPERIMENTS).forEach(exp => {
        const isUnlocked = !!state.unlockedBadges[exp.id];
        if (isUnlocked) unlockedCount++;

        const card = document.createElement('div');
        card.className = `rounded-2xl p-3.5 border-2 flex items-center gap-3 ${
          isUnlocked ? 'bg-amber-50 border-amber-400' : 'bg-slate-100 border-slate-300 opacity-70'
        }`;
        card.innerHTML = `
          <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0 ${
            isUnlocked ? 'bg-amber-400 text-white shadow' : 'bg-slate-200 text-slate-400'
          }">
            ${isUnlocked ? exp.badgeIcon : '🔒'}
          </div>
          <div>
            <div class="font-black text-sm text-slate-900">${exp.badgeTitle}</div>
            <div class="text-xs font-bold ${isUnlocked ? 'text-emerald-700' : 'text-slate-500'}">
              ${isUnlocked ? '✨ 已成功獲得！' : `完成「${exp.title}」即可解鎖`}
            </div>
          </div>
        `;
        grid.appendChild(card);
      });

      const summaryEl = document.getElementById('passportSummaryText');
      if (unlockedCount === 4) {
        summaryEl.textContent = '👑 恭喜你收集滿全部 4 枚徽章！你已成為「超級科學探險家」！';
      } else {
        summaryEl.textContent = `目前已經收集了 ${unlockedCount} 枚徽章，再完成 ${4 - unlockedCount} 個實驗就能成為超級科學探險家喔！`;
      }
    }

    // ==================== INTERACTIVE SIMULATION ACTIONS ====================
    function triggerVolcanoEruption() {
      const v = state.sim.volcano;
      if (!requirePrediction()) return;
      if (v.sodaScoops === 0) { showToast('🔍', '只有白醋，沒有出現反應氣泡。試著先加小蘇打！'); return; }
      if (v.spent) { showToast('🥄', '材料反應過了！再加小蘇打，或重新做一次。'); return; }
      v.spent = true;
      v.vinegarPoured++;
      v.erupting = true;
      const power = 1 + v.sodaScoops * 0.35;
      v.eruptionPower = power;
      v.foamLevel = v.soapDrops > 0 ? Math.min(100, v.foamLevel + 35) : 0;

      const canvas = document.getElementById('simCanvas');
      const cx = (canvas.width || 480) / 2;
      const craterY = (canvas.height || 340) * 0.45;

      const count = Math.floor(20 + v.sodaScoops * 8 + v.soapDrops * 14);
      for (let i = 0; i < count; i++) {
        const spread = (Math.random() - 0.5) * 4.8 * Math.min(1.8, power * 0.6);
        const upSpeed = -3.2 - Math.random() * 4.8 * Math.min(1.7, power * 0.55);
        v.particles.push({
          x: cx + (Math.random() - 0.5) * 34,
          y: craterY + (Math.random() - 0.5) * 10,
          vx: spread,
          vy: upSpeed,
          r: 6 + Math.random() * (8 + v.soapDrops * 2.2),
          color: v.selectedColor,
          alpha: 0.95,
          life: 1.0
        });
      }

      playSound('fizz');
      markObserved('volcano');
      renderLabControls();
      updateLabMeter();
    }

    function addSaltSpoon() {
      if (!requirePrediction()) return;
      const eg = state.sim.egg;
      eg.saltSpoons = Math.min(6, eg.saltSpoons + 1);
      eg.stirCount++;
      eg.targetRatio = saltHeight(eg.saltSpoons);

      const canvas = document.getElementById('simCanvas');
      const cx = (canvas.width || 480) / 2;
      for (let i = 0; i < 22; i++) {
        eg.saltGrains.push({
          x: cx + (Math.random() - 0.5) * 90,
          y: 75 + Math.random() * 25,
          vy: 1.3 + Math.random() * 1.5,
          alpha: 0.95
        });
      }
      eg.ripples.push({ x: cx, y: 120, r: 8, alpha: 0.9 });

      playSound('pop');
      if (eg.saltSpoons >= 4) {
        markObserved('egg');
      }
      renderLabControls();
      updateLabMeter();
    }

    function triggerMilkSwab(x, y) {
      if (!requirePrediction()) return;
      if (!state.sim.milk.drops.length) { showToast("🎨", "白牛奶裡還沒有色素，先滴入一種顏色再觀察！"); return; }
      const m = state.sim.milk;
      m.swabX = x;
      m.swabY = y;
      m.swabActive = true;

      const palette = [...new Set(m.drops.map(d => d.color))];
      palette.forEach((col, i) => {
        m.swabRipples.push({
          x,
          y,
          r: 4 + i * 6,
          maxR: 135 + i * 12,
          color: col,
          alpha: 0.9
        });
      });

      // Push existing drops radially outward
      m.drops.forEach(d => {
        const dx = d.x - x;
        const dy = d.y - y;
        const dist = Math.max(12, Math.hypot(dx, dy));
        const force = Math.min(6.5, 190 / dist);
        d.vx += (dx / dist) * force;
        d.vy += (dy / dist) * force;
      });

      playSound('magic');
      markObserved('milk');
      updateLabMeter();
    }

    function rubBalloonCharge(amount) {
      if (!requirePrediction()) return;
      const st = state.sim.static;
      st.charge = Math.min(100, st.charge + amount);
      for (let i = 0; i < 6; i++) {
        st.sparks.push({
          angle: Math.random() * Math.PI * 2,
          dist: 42 + Math.random() * 20,
          life: 1.0
        });
      }
      playSound('zap');
      renderLabControls();
      updateLabMeter();
    }

    // ==================== HTML5 CANVAS ANIMATION LOOP ====================
    let animFrameId = null;

    function resizeCanvas() {
      const container = document.getElementById('canvasContainer');
      const canvas = document.getElementById('simCanvas');
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      const w = Math.max(300, Math.floor(rect.width));
      const h = Math.max(260, Math.floor(rect.height));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        if (state.sim.milk.drops.length === 0) initMilkDrops(w, h);
        if (state.sim.static.confetti.length === 0) initStaticConfetti(w, h);
      }
    }

    function drawVolcanoScene(ctx, w, h) {
      const v = state.sim.volcano;
      const cx = w / 2;
      const baseY = h - 28;
      const craterY = h * 0.44;

      // Sky & warm island background
      ctx.fillStyle = '#0F172A';
      ctx.fillRect(0, 0, w, h);

      // Tray at bottom
      ctx.fillStyle = '#CBD5E1';
      ctx.beginPath();
      ctx.roundRect(cx - 165, baseY - 10, 330, 20, 10);
      ctx.fill();

      // Volcano Cone
      const grad = ctx.createLinearGradient(cx, craterY, cx, baseY);
      grad.addColorStop(0, '#78350F');
      grad.addColorStop(1, '#451A03');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(cx - 38, craterY);
      ctx.lineTo(cx + 38, craterY);
      ctx.lineTo(cx + 125, baseY - 6);
      ctx.lineTo(cx - 125, baseY - 6);
      ctx.closePath();
      ctx.fill();

      // Inner Cup Preview (Cutaway indicator)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.22)';
      ctx.fillRect(cx - 26, craterY + 4, 52, 68);

      // Baking soda layer inside cup
      if (v.sodaScoops > 0) {
        const sodaH = Math.min(28, v.sodaScoops * 6);
        ctx.fillStyle = '#F8FAFC';
        ctx.fillRect(cx - 24, craterY + 70 - sodaH, 48, sodaH);
      }

      // Dish soap layer inside cup
      if (v.soapDrops > 0) {
        ctx.fillStyle = '#38BDF8';
        ctx.fillRect(cx - 24, craterY + 40, 48, Math.min(12, v.soapDrops * 3));
      }

      // Update & Draw Foam Particles
      for (let i = v.particles.length - 1; i >= 0; i--) {
        const p = v.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.14; // gravity

        // Slide along volcano slope or rest on tray
        if (p.y > baseY - 14) {
          p.y = baseY - 14;
          p.vy *= -0.2;
          p.vx *= 0.85;
        }
        p.life -= 0.006;

        if (p.life <= 0) {
          v.particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0.15, p.life);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        // Highlight bubble shine
        ctx.fillStyle = 'rgba(255,255,255,0.55)';
        ctx.beginPath();
        ctx.arc(p.x - p.r * 0.3, p.y - p.r * 0.3, p.r * 0.28, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Labels on screen for 5-7yo kids
      ctx.fillStyle = '#F8FAFC';
      ctx.font = 'bold 14px "Noto Sans TC", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`🥄 小蘇打：${v.sodaScoops} 匙   🧴 洗碗精：${v.soapDrops} 滴   🍶 白醋噴發：${v.vinegarPoured} 次`, cx, 28);
    }

    function drawEggScene(ctx, w, h) {
      const eg = state.sim.egg;
      const cx = w / 2;
      const cupW = 190;
      const cupH = 230;
      const cupTop = 64;
      const cupBottom = cupTop + cupH;

      // Smooth interpolation of egg float position
      eg.currentRatio += (eg.targetRatio - eg.currentRatio) * 0.06;

      // Beaker Water Fill (Color shifts slightly more opaque/turquoise as salt increases)
      const waterTop = cupTop + 34;
      const saltAlpha = Math.min(0.45, eg.saltSpoons * 0.07);
      ctx.fillStyle = `rgba(56, 189, 248, ${0.28 + saltAlpha})`;
      ctx.beginPath();
      ctx.roundRect(cx - cupW / 2 + 6, waterTop, cupW - 12, cupBottom - waterTop - 6, [0, 0, 22, 22]);
      ctx.fill();

      // Falling Salt Grains
      ctx.fillStyle = '#FFFFFF';
      for (let i = eg.saltGrains.length - 1; i >= 0; i--) {
        const g = eg.saltGrains[i];
        g.y += g.vy;
        g.alpha -= 0.015;
        if (g.y > cupBottom - 16 || g.alpha <= 0) {
          eg.saltGrains.splice(i, 1);
          continue;
        }
        ctx.globalAlpha = g.alpha;
        ctx.beginPath();
        ctx.arc(g.x, g.y, 2.6, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // Calculate Egg Y (bottom = cupBottom - 36, top = waterTop + 26)
      const bottomY = cupBottom - 36;
      const floatY = waterTop + 28;
      const bobbing = Math.sin(Date.now() * 0.004) * 3.5;
      const eggY = bottomY - eg.currentRatio * (bottomY - floatY) + bobbing;

      // Draw Egg
      ctx.save();
      ctx.translate(cx, eggY);
      ctx.fillStyle = '#FDE68A';
      ctx.strokeStyle = '#F59E0B';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.ellipse(0, 0, 24, 31, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Cute smiling face on the Egg!
      ctx.fillStyle = '#1E293B';
      ctx.beginPath();
      ctx.arc(-8, -4, 3, 0, Math.PI * 2);
      ctx.arc(8, -4, 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#1E293B';
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      if (eg.saltSpoons >= 4) {
        // Happy big smile when floating!
        ctx.arc(0, 2, 7, 0.1 * Math.PI, 0.9 * Math.PI);
      } else {
        // Sleepy mouth at bottom
        ctx.arc(0, 4, 4, 0, Math.PI);
      }
      ctx.stroke();
      ctx.restore();

      // Optional comparison object (Ping Pong Ball always floats, Coin always sinks)
      if (eg.extraObject === 'pingpong') {
        const py = waterTop + 14 + Math.cos(Date.now() * 0.005) * 3;
        ctx.fillStyle = '#FB923C';
        ctx.beginPath();
        ctx.arc(cx - 56, py, 16, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 17px "Noto Sans TC", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('乒乓球：浮', cx - 56, py - 22);
      } else if (eg.extraObject === 'coin') {
        const cyCoin = cupBottom - 16;
        ctx.fillStyle = '#FACC15';
        ctx.strokeStyle = '#CA8A04';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx + 58, cyCoin, 14, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#FEF08A';
        ctx.font = 'bold 17px "Noto Sans TC", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('硬幣：沉', cx + 58, cyCoin - 20);
      }

      // Beaker Glass Outline
      ctx.strokeStyle = '#E0F2FE';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.roundRect(cx - cupW / 2, cupTop, cupW, cupH, [4, 4, 26, 26]);
      ctx.stroke();

      // Top status label
      ctx.fillStyle = '#F8FAFC';
      ctx.font = 'bold 17px "Noto Sans TC", sans-serif';
      ctx.textAlign = 'center';
      const statusText = eg.saltSpoons >= 5 ? '鹽水夠濃了，雞蛋浮起來！' : eg.saltSpoons >= 3 ? '觀察：雞蛋逐漸離開杯底' : '鹽還不夠多，雞蛋仍在杯底';
      ctx.fillText(statusText, cx, 34);
    }

    function drawMilkScene(ctx, w, h) {
      const m = state.sim.milk;
      const cx = w / 2;
      const cy = h / 2 + 8;
      const dishRadius = Math.min(w, h) * 0.41;

      // Outer Rim of Dish
      ctx.fillStyle = '#E2E8F0';
      ctx.beginPath();
      ctx.arc(cx, cy, dishRadius + 10, 0, Math.PI * 2);
      ctx.fill();

      // White Milk Surface
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, dishRadius, 0, Math.PI * 2);
      ctx.clip();

      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(cx - dishRadius, cy - dishRadius, dishRadius * 2, dishRadius * 2);

      // Update & Draw Dye Drops
      m.drops.forEach(d => {
        d.x += d.vx;
        d.y += d.vy;
        d.vx *= 0.95;
        d.vy *= 0.95;

        // Keep inside milk dish boundary
        const dx = d.x - cx;
        const dy = d.y - cy;
        const dist = Math.hypot(dx, dy);
        if (dist > dishRadius - d.r) {
          const angle = Math.atan2(dy, dx);
          d.x = cx + Math.cos(angle) * (dishRadius - d.r);
          d.y = cy + Math.sin(angle) * (dishRadius - d.r);
          d.vx *= -0.6;
          d.vy *= -0.6;
        }

        ctx.fillStyle = d.color;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Update & Draw Expanding Soap Ripples
      for (let i = m.swabRipples.length - 1; i >= 0; i--) {
        const rp = m.swabRipples[i];
        rp.r += 2.6;
        rp.alpha = Math.max(0, 1 - rp.r / rp.maxR);
        if (rp.r >= rp.maxR) {
          m.swabRipples.splice(i, 1);
          continue;
        }
        ctx.strokeStyle = rp.color;
        ctx.globalAlpha = rp.alpha;
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      ctx.restore();

      // Top instruction text
      ctx.fillStyle = '#F8FAFC';
      ctx.font = 'bold 14px "Noto Sans TC", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('先滴色素，再碰一碰觀察！', cx, 26);
    }

    function drawStaticScene(ctx, w, h) {
      const st = state.sim.static;

      // Left side wool sweater zone for rubbing
      ctx.fillStyle = '#7C2D12';
      ctx.strokeStyle = '#FDBA74';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(22, 64, 96, 120, 18);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#FFEDD5';
      ctx.font = 'bold 13px "Noto Sans TC", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('🧣 毛衣充電區', 70, 118);
      ctx.font = 'bold 17px "Noto Sans TC", sans-serif';
      ctx.fillText('(移過來摩擦)', 70, 140);

      // Table surface at bottom
      ctx.fillStyle = '#334155';
      ctx.fillRect(0, h - 24, w, 24);

      // Balloon coordinates
      const bx = st.balloonX;
      const by = st.balloonY;

      // Update & Draw Confetti Pieces
      const attractRadius = 55 + st.charge * 1.45;
      st.confetti.forEach(c => {
        const targetX = bx + c.offsetX;
        const targetY = by + c.offsetY;
        const dx = targetX - c.x;
        const dy = targetY - c.y;
        const dist = Math.hypot(dx, dy);

        if (st.charge >= 25 && dist < attractRadius) {
          // Pulled toward the charged balloon!
          c.x += dx * 0.14;
          c.y += dy * 0.14;
          c.stuck = true;
        } else {
          c.stuck = false;
          // Fall gently back to table
          c.y += (c.baseY - c.y) * 0.12;
        }

        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate(c.angle);
        ctx.fillStyle = c.color;
        ctx.fillRect(-7, -5, 14, 10);
        ctx.restore();
      });

      // Draw Balloon String
      ctx.strokeStyle = '#CBD5E1';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(bx, by + 48);
      ctx.quadraticCurveTo(bx + 15, by + 75, bx - 5, by + 100);
      ctx.stroke();

      // Draw Balloon Body
      const bGrad = ctx.createRadialGradient(bx - 14, by - 14, 8, bx, by, 50);
      bGrad.addColorStop(0, '#FDE047');
      bGrad.addColorStop(1, '#EAB308');
      ctx.fillStyle = bGrad;
      ctx.beginPath();
      ctx.ellipse(bx, by, 42, 48, 0, 0, Math.PI * 2);
      ctx.fill();

      // Draw negative charge symbols (-) on balloon proportional to charge
      const minusCount = Math.floor(st.charge / 14);
      ctx.fillStyle = '#0284C7';
      ctx.font = '900 14px sans-serif';
      ctx.textAlign = 'center';
      for (let i = 0; i < minusCount; i++) {
        const ang = (i / Math.max(1, minusCount)) * Math.PI * 2;
        const mx = bx + Math.cos(ang) * 26;
        const my = by + Math.sin(ang) * 30;
        ctx.fillText('⚡-', mx, my);
      }

      // Draw static sparks
      for (let i = st.sparks.length - 1; i >= 0; i--) {
        const sp = st.sparks[i];
        sp.life -= 0.05;
        if (sp.life <= 0) {
          st.sparks.splice(i, 1);
          continue;
        }
        const sx = bx + Math.cos(sp.angle) * sp.dist;
        const sy = by + Math.sin(sp.angle) * sp.dist;
        ctx.fillStyle = `rgba(56, 189, 248, ${sp.life})`;
        ctx.beginPath();
        ctx.arc(sx, sy, 4, 0, Math.PI * 2);
        ctx.fill();
      }

      // Top instruction
      ctx.fillStyle = '#F8FAFC';
      ctx.font = 'bold 14px "Noto Sans TC", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`⚡ 氣球靜電電力：${Math.round(st.charge)}%（用手指拖曳氣球去磨毛衣，再靠近紙花！）`, w / 2, 28);
    }

    function animateLoop() {
      const canvas = document.getElementById('simCanvas');
      if (canvas) {
        const ctx = canvas.getContext('2d');
        const w = canvas.width;
        const h = canvas.height;
        ctx.clearRect(0, 0, w, h);

        if (state.currentExpId === 'volcano') {
          drawVolcanoScene(ctx, w, h);
        } else if (state.currentExpId === 'egg') {
          drawEggScene(ctx, w, h);
        } else if (state.currentExpId === 'milk') {
          drawMilkScene(ctx, w, h);
        } else if (state.currentExpId === 'static') {
          drawStaticScene(ctx, w, h);
        }
      }
      animFrameId = requestAnimationFrame(animateLoop);
    }

    // ==================== CANVAS POINTER INTERACTION ====================
    function setupCanvasEvents() {
      const canvas = document.getElementById('simCanvas');

      function getPos(e) {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return {
          x: (clientX - rect.left) * (canvas.width / rect.width),
          y: (clientY - rect.top) * (canvas.height / rect.height)
        };
      }

      function onDown(e) {
        if (!requirePrediction()) return;
        const pos = getPos(e);
        if (state.currentExpId === 'volcano') {
          triggerVolcanoEruption();
        } else if (state.currentExpId === 'egg') {
          addSaltSpoon();
        } else if (state.currentExpId === 'milk') {
          triggerMilkSwab(pos.x, pos.y);
        } else if (state.currentExpId === 'static') {
          state.sim.static.dragging = true;
          state.sim.static.balloonX = pos.x;
          state.sim.static.balloonY = pos.y;
          // Check if rubbing near sweater area
          if (pos.x < 135 && pos.y > 55 && pos.y < 195) {
            rubBalloonCharge(18);
          }
        }
      }

      function onMove(e) {
        if (state.currentExpId === 'static' && state.sim.static.dragging) {
          const pos = getPos(e);
          state.sim.static.balloonX = Math.max(40, Math.min(canvas.width - 40, pos.x));
          state.sim.static.balloonY = Math.max(55, Math.min(canvas.height - 65, pos.y));
          if (pos.x < 135 && pos.y > 55 && pos.y < 195) {
            rubBalloonCharge(2.2);
          }
          if (state.sim.static.charge >= 40 && pos.y > canvas.height * 0.45) {
            markObserved('static');
          }
        }
      }

      function onUp() {
        state.sim.static.dragging = false;
      }

      canvas.addEventListener('mousedown', onDown);
      canvas.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onUp);

      canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        onDown(e);
      }, { passive: false });
      canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        onMove(e);
      }, { passive: false });
      window.addEventListener('touchend', onUp);
    }

    // ==================== WIRE GLOBAL EVENT LISTENERS ====================
    window.onload = function () {
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      const canvas = document.getElementById('simCanvas');
      initMilkDrops(canvas.width, canvas.height);
      initStaticConfetti(canvas.width, canvas.height);
      setupCanvasEvents();

      // Experiment Tab clicks
      document.querySelectorAll('.exp-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          state.currentMode = 'mission';
          const expId = btn.getAttribute('data-exp-id');
          if (expId && EXPERIMENTS[expId]) {
            state.currentExpId = expId;
            playSound('pop');
            renderAll();
            setTimeout(resizeCanvas, 20);
          }
        });
      });

      // Mode Tab clicks
      document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const mode = btn.getAttribute('data-mode');
          if (mode) {
            state.currentMode = mode;
            playSound('pop');
            renderAll();
            if (mode === 'lab') {
              setTimeout(resizeCanvas, 20);
            }
          }
        });
      });

      // Home button resets to volcano lab view
      document.getElementById('navHomeBtn').addEventListener('click', () => {
        state.currentMode = 'mission';
        playSound('pop');
        renderAll();
      });

      // Audio Toggle
      document.getElementById('toggleAudioBtn').addEventListener('click', () => {
        state.audioEnabled = !state.audioEnabled;
        document.getElementById('audioIcon').textContent = state.audioEnabled ? '🔊' : '🔇';
        document.getElementById('audioLabel').textContent = state.audioEnabled ? '聲音開' : '靜音中';
        if (!state.audioEnabled && 'speechSynthesis' in window) {
          window.speechSynthesis.cancel();
        } else {
          playSound('pop');
        }
      });

      // Speak Buttons
      document.getElementById('speakKikiBtn').addEventListener('click', () => {
        speakText(state.currentMode === 'mission' ? familyMissions[state.currentExpId].title + '。先猜一猜，和大人動手比較，再回來說說你的發現。' : EXPERIMENTS[state.currentExpId].kikiIntro);
      });

      document.getElementById('speakPrincipleBtn').addEventListener('click', () => {
        speakText(EXPERIMENTS[state.currentExpId].principle);
      });

      document.getElementById('speakStepsBtn').addEventListener('click', () => {
        const exp = EXPERIMENTS[state.currentExpId];
        const allSteps = exp.steps.map((s, i) => `第${i + 1}步，${s.title}：${s.desc}`).join('。');
        speakText(`現在來聽${exp.title}的步驟。${allSteps}`);
      });

      document.getElementById('speakQuizBtn').addEventListener('click', () => {
        const exp = EXPERIMENTS[state.currentExpId];
        speakText(exp.quiz.question);
      });

      // Reset Lab Button
      document.getElementById('resetLabBtn').addEventListener('click', () => {
        playSound('pop');
        resetCurrentSim();
      });

      // Go to Quiz from Steps
      document.getElementById('goToQuizFromStepsBtn').addEventListener('click', () => {
        state.currentMode = 'quiz';
        playSound('pop');
        renderAll();
      });

      // Next Experiment after Quiz
      document.getElementById('nextExpAfterQuizBtn').addEventListener('click', () => {
        const order = ['volcano', 'egg', 'milk', 'static'];
        const nextIdx = (order.indexOf(state.currentExpId) + 1) % order.length;
        state.currentExpId = order[nextIdx];
        state.currentMode = 'mission';
        playSound('pop');
        renderAll();
      });

      // Passport Modal Open/Close
      document.getElementById('openPassportBtn').addEventListener('click', () => {
        playSound('pop');
        renderPassportModal();
        document.getElementById('passportModal').classList.remove('hidden');
      });

      document.getElementById('viewBadgesAfterQuizBtn').addEventListener('click', () => {
        playSound('pop');
        renderPassportModal();
        document.getElementById('passportModal').classList.remove('hidden');
      });

      document.getElementById('closePassportBtn').addEventListener('click', () => {
        playSound('pop');
        document.getElementById('passportModal').classList.add('hidden');
      });

      // Parent Modal Open/Close
      document.getElementById('openParentModalBtn').addEventListener('click', () => {
        playSound('pop');
        renderParentModalContent(EXPERIMENTS[state.currentExpId]);
        document.getElementById('parentModal').classList.remove('hidden');
      });

      document.getElementById('closeParentModalBtn').addEventListener('click', () => {
        playSound('pop');
        document.getElementById('parentModal').classList.add('hidden');
      });

      renderAll();
      if (animFrameId) cancelAnimationFrame(animFrameId);
      animFrameId = requestAnimationFrame(animateLoop);
    };

// Exploration flow: predictions remain unanswered until the child observes.
const predictionsObserved = {}, discoveriesRevealed = {};
function requirePrediction(){if(state.predictionsMade[state.currentExpId]===undefined){showToast('🤔','先選一個猜想，再動手試試！');document.getElementById('predictionQuestion').scrollIntoView({block:'center',behavior:'smooth'});return false}return true}
function saltHeight(n){return n<3?0:n===3?.18:n===4?.65:1}
function markObserved(id){predictionsObserved[id]=true;syncJourney()}
function syncJourney(){
 const id=state.currentExpId, chosen=state.predictionsMade[id]!==undefined, seen=!!predictionsObserved[id], revealed=!!discoveriesRevealed[id];
 document.getElementById('journey').innerHTML=['先猜','操作','觀察','發現'].map((s,i)=>`<span class="${i===(revealed?3:seen?2:chosen?1:0)?'current':''}">${i+1} ${s}</span>`).join('');
 document.getElementById('labControlPanel').querySelectorAll('button,select').forEach(b=>{b.disabled=!chosen});
 document.getElementById('labPrincipleText').textContent = revealed?EXPERIMENTS[id].principle:seen?'你看見了什麼？先說說看，再按「收下我的發現」。':'先保留好奇心，完成操作後再一起找原因。';
 document.getElementById('speakPrincipleBtn').disabled=!revealed;
 const prompts={volcano:'有沒有洗碗精，泡泡看起來一樣嗎？',egg:'加鹽之後，雞蛋的位置有什麼變化？',milk:'色素被碰到之後，往哪個方向移動？',static:'沒有摩擦的氣球，也能吸起紙屑嗎？'};
 document.getElementById('observationPanel').innerHTML=seen?`<h3>🔍 我看到了……</h3><p>${prompts[id]}</p><button type="button" id="collectDiscovery" class="kid-btn collect">${revealed?'✓ 已收下發現，再玩一次也可以！':'✦ 收下我的發現'}</button>`:'<h3>🔍 觀察小任務</h3><p>先猜一猜，再試著改變一個條件。猜錯也沒關係！</p>';
 document.getElementById('collectDiscovery')?.addEventListener('click',()=>{discoveriesRevealed[id]=true;unlockBadge(id);syncJourney();speakText(EXPERIMENTS[id].principle)});
}
// Clear, comparable predictions rather than implausible distractors.
EXPERIMENTS.volcano.prediction.question='小蘇打遇到白醋，你猜會出現什麼？';
EXPERIMENTS.volcano.prediction.options=[{text:'🫧 出現很多氣泡',correct:true},{text:'💧 沒有明顯變化',correct:false}];
EXPERIMENTS.egg.prediction.question='在水量相同的杯子裡，加鹽並攪拌後，雞蛋會怎麼樣？';
EXPERIMENTS.egg.prediction.options=[{text:'🥚 鹽夠多時，雞蛋浮起來',correct:true},{text:'🥚 無論加多少鹽，都沉在杯底',correct:false}];
EXPERIMENTS.milk.prediction.question='沾洗碗精的棉花棒碰到牛奶中的色素，會怎麼樣？';
EXPERIMENTS.milk.prediction.options=[{text:'🌈 色素往外移動',correct:true},{text:'🎨 色素留在原地',correct:false}];
EXPERIMENTS.static.prediction.question='氣球摩擦毛衣後再靠近小紙屑，會怎麼樣？';
EXPERIMENTS.static.prediction.options=[{text:'🎈 紙屑會被吸過來',correct:true},{text:'📄 紙屑都留在桌上',correct:false}];
EXPERIMENTS.volcano.cleanupTip='請大人協助把少量實驗液體加水沖洗，擦乾桌面；不要混入其他清潔劑。';
EXPERIMENTS.egg.principle='在雞蛋還沒離開杯底時，少量加鹽不一定看得出變化。當鹽水的密度比雞蛋的平均密度更大，雞蛋就能浮起來。畫面是簡化示意，實際所需的鹽量會受水量、鹽匙大小和雞蛋影響。';
EXPERIMENTS.egg.steps[2].desc='持續少量加鹽並充分攪拌，觀察雞蛋何時離開杯底。不要固定以第幾匙判斷；水量和雞蛋不同，結果也會不同。';
EXPERIMENTS.egg.materials[2].name='透明容器 1 個、水約 250 mL（預留放雞蛋和攪拌的空間）';
EXPERIMENTS.egg.parentQuestions[0]='如果把同一杯鹽水倒掉一半，再補入同量清水並攪勻，雞蛋會怎麼變？';
EXPERIMENTS.egg.safety='請大人處理生雞蛋，避免敲破；完成後洗手並清潔桌面，實驗用的水與雞蛋不食用。';
EXPERIMENTS.static.cleanupTip='把衛生紙撕成小片，和大小相近的色紙比較；乾燥程度、紙片大小都會影響結果。';
EXPERIMENTS.milk.safety='牛奶、色素與洗碗精混合後不可飲用，棉花棒不放入口鼻，完成後洗手。';
EXPERIMENTS.static.safety='全程由大人陪同；破氣球碎片立即收走，不放嘴裡，遠離眼睛。';
EXPERIMENTS.volcano.kikiIntro='歡迎來到小小科學家！先猜小蘇打遇到白醋會發生什麼，再選顏色、加材料。沒有洗碗精也能試喔！';
EXPERIMENTS.egg.kikiIntro='雞蛋在清水裡沉下去。先猜加鹽之後會怎樣，再一匙一匙試，仔細看位置變化！';
EXPERIMENTS.milk.kikiIntro='先猜一猜，再把你喜歡的色素滴進牛奶。用沾洗碗精的棉花棒碰一碰，看看顏色往哪裡跑！';
EXPERIMENTS.volcano.stageHint='先猜，再加材料；可比較有無洗碗精';
EXPERIMENTS.egg.stageHint='簡化示意：匙數不是實際配方';
EXPERIMENTS.milk.stageHint='先加色素，再碰棉花棒';
EXPERIMENTS.static.stageHint='摩擦毛衣後，拖氣球靠近紙屑';
// Keep observation text consistent with the schematic threshold.
const originalMeter=updateLabMeter;
updateLabMeter=function(){originalMeter();if(state.currentExpId==='egg'){const n=state.sim.egg.saltSpoons;document.getElementById('meterValueText').textContent=n<3?'雞蛋仍在杯底，再觀察看看':n<5?'鹽水漸濃，雞蛋離開杯底':'雞蛋浮起來了！實際用量依材料而異'}if(state.currentExpId==='volcano'&&predictionsObserved.volcano)document.getElementById('meterValueText').textContent='看到了反應氣泡！比較有沒有洗碗精的差別。'};
// Stop drawing when another view is open or the page is in the background.
const originalAnimation=animateLoop;
animateLoop=function(){if(document.hidden||state.currentMode!=='lab'){animFrameId=requestAnimationFrame(animateLoop);return}originalAnimation()};
EXPERIMENTS.milk.principle='洗碗精碰到牛奶，會讓接觸處的表面張力降低。表面張力的差異使液體流動，帶著色素往外跑；牛奶裡的脂肪與蛋白質，也會影響後續的花紋。色素幫我們看見原本不容易看到的流動。';
EXPERIMENTS.milk.quiz.options=[{text:'🧼 洗碗精改變表面張力，帶動液體和色素流動',correct:true},{text:'🥄 棉花棒必須一直用力攪拌，色素才會移動',correct:false},{text:'🎨 顏色越深，推動色素的力量一定越大',correct:false}];
EXPERIMENTS.milk.quiz.explanation='洗碗精改變接觸處的表面張力，造成液體流動；色素讓我們看見了這個變化。';
EXPERIMENTS.static.principle='摩擦會讓電荷在不同材料之間轉移，使氣球帶電。氣球靠近原本不帶淨電荷的小紙屑時，會使紙屑內的電荷分布稍微改變，因此產生吸引力。紙屑夠輕、距離夠近時，就可能被吸起來。';

// Curated external examples; playback stays on the creator's YouTube page.
const exampleVideos = {
 volcano:{id:'nrNpaDdTywI',title:'親子在家玩：蘇打粉科學實驗',channel:'TopKidz 兒童樂園',watch:'看白醋倒入之後的氣泡，再比較有沒有洗碗精的差別。'},
 egg:{id:'r9xbwaO4ZBY',title:'幼兒科學實驗：密度與浮力，雞蛋浮在鹽水上',channel:'耶穌是世界的光',watch:'比較雞蛋在清水與鹽水中的位置。'},
 milk:{id:'dK6-9RkBusE',title:'在牛奶中遇見彩虹',channel:'好奇動物・兒童科普',watch:'棉花棒碰下去的瞬間，觀察色素往哪裡移動。'},
 static:{id:'H7cUiBoyDyY',title:'巧連智科學小實驗：氣球的實驗',channel:'巧虎TV・台灣巧連智官方頻道',watch:'看摩擦後的氣球，怎麼吸引頭髮和紙條。'}
};
const renderStepsWithVideo=renderStepsView;
renderStepsView=function(exp){renderStepsWithVideo(exp);const v=exampleVideos[exp.id];document.getElementById('exampleVideo').innerHTML=`<article class="video-example"><div class="video-symbol" aria-hidden="true">${exp.emoji}<span>▶</span></div><div><div class="video-label">看別人怎麼做</div><h2>一起看示範影片</h2><h3>${v.title}</h3><p class="video-channel">頻道：${v.channel}</p><p><b>觀察任務：</b>${v.watch}</p><a class="video-link" href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener noreferrer">▶ 和大人到 YouTube 觀看 ↗</a><p class="video-note">需連線，將開啟外部頁面。影片可能含廣告或推薦內容；請大人陪同，實驗時以本頁步驟與提醒為準。</p></div></article>`};

// Real-world exploration: one comparison, then the child's own account.
const familyMissions={
 volcano:{title:'有洗碗精，泡泡會不一樣嗎？',a:'A 杯：不加洗碗精',b:'B 杯：加少量洗碗精',compare:'泡沫的高度或留下來的時間',same:'兩個相同的敞口杯、同量小蘇打、同量白醋、相同托盤。只改變有沒有洗碗精。',materials:'兩個敞口塑膠杯、大托盤、小蘇打、白醋、洗碗精、同一支量匙。色素可不加。',steps:['請大人把兩杯放在托盤上，各加入相同少量的小蘇打；只在 B 杯加幾滴洗碗精。','先猜一猜，再由大人在兩杯各倒入同量白醋，不蓋杯蓋。','比較兩杯有沒有冒氣泡，以及泡沫的高度或停留時間。'],next:'這次兩杯都不加洗碗精，只比較白醋多一點和少一點。你想先猜什麼？',parent:'讓孩子分開描述「氣泡」和「堆起來的泡沫」。不用急著說出氣體名稱。',safety:'大人全程陪同，使用敞口容器，絕不可密封；不入口、不混其他清潔劑，完成後洗手。'},
 egg:{title:'清水和鹽水，雞蛋的位置一樣嗎？',a:'A 杯：清水',b:'B 杯：加入並溶解食鹽的水',compare:'雞蛋離開杯底的程度',same:'兩個相同容器、相同起始水量，各一顆大小相近的新鮮雞蛋。只改變加不加鹽。',materials:'兩個透明容器、兩顆大小相近的新鮮雞蛋、清水、食鹽、湯匙。預留攪拌空間。',steps:['大人先確認兩顆蛋在清水裡都沉下去；若不是，先記下不同，換合適的蛋再比較。','A 杯保留清水；B 杯分次加鹽、充分攪拌後再輕放雞蛋，觀察位置。','鹽夠多時再比較。若沒有變化，記「暫時看不出來」，不用為了成功一直加鹽。'],next:'請大人把 B 杯的蛋取出，倒掉一半鹽水、補回同量清水並攪勻，再放蛋比較。',parent:'雞蛋本身也可能不同；可以讓大人交換兩顆蛋再看一次，確認差別是否跟水有關。',safety:'生蛋由大人處理，避免敲破；實驗用蛋與水不食用，完成後洗手、清潔桌面。'},
 milk:{title:'乾棉花棒和洗碗精棉花棒，哪個讓顏色跑？',a:'A 盤：乾棉花棒輕碰',b:'B 盤：沾少量洗碗精的棉花棒輕碰',compare:'色素移動的明顯程度',same:'兩個相同淺盤、同量牛奶、同種色素與滴數、相近接觸位置。只改變棉花棒有沒有洗碗精。',materials:'兩個白色淺盤、少量牛奶、食用色素、兩支棉花棒、洗碗精。',steps:['兩盤各倒一樣厚的牛奶，靜置後各滴同樣滴數的食用色素。','先用乾棉花棒輕碰 A 盤的色素，再用沾少量洗碗精的另一支棉花棒輕碰 B 盤。都不要攪拌。','看接觸後的前幾秒：哪盤的顏色移動比較明顯？不要把兩支棉花棒混用。'],next:'換新的牛奶，只比較洗碗精接觸中央或邊緣，花紋會一樣嗎？',parent:'鼓勵孩子用「往外跑、轉圈、幾乎不動」描述；不需要背表面張力。',safety:'實驗後牛奶不可飲用，棉花棒不入口鼻；色素由大人協助，完成後洗手。'},
 static:{title:'同一顆氣球，摩擦前後有差別嗎？',a:'A 次：未摩擦',b:'B 次：摩擦乾毛衣後',compare:'被吸起的紙屑數量',same:'同一顆氣球、同一批小紙屑、相同靠近距離。只改變是否先摩擦。',materials:'由大人吹好的氣球、乾毛衣、少量薄紙屑、平整桌面。',steps:['先把未摩擦的氣球靠近紙屑，不碰到紙，觀察有沒有吸起來。','拿開氣球，重新鋪好紙屑；在乾毛衣上摩擦氣球，再從相近距離靠近。','比較兩次吸起的紙屑。若沒有明顯差別，也把這個結果留下來。'],next:'保持摩擦方式一樣，改變氣球和紙屑的距離，哪個距離比較容易吸起？',parent:'潮濕天氣、紙屑大小和氣球材質都可能影響結果。「沒成功」也是可以追問的觀察。',safety:'大人全程陪同；破氣球與紙屑立刻收妥，不放嘴裡。乳膠過敏者改由大人準備塑膠尺測試。'}
};
let familyRecords={};try{const saved=JSON.parse(localStorage.getItem('little-science-family-v1')||'{}');if(saved&&typeof saved==='object'&&!Array.isArray(saved))familyRecords=saved}catch{}
function persistFamily(){try{localStorage.setItem('little-science-family-v1',JSON.stringify(familyRecords))}catch{showToast('📝','目前瀏覽器無法儲存；這次仍可以繼續探索。')}}
function escapeMission(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function missionRecord(){return familyRecords[state.currentExpId]||(familyRecords[state.currentExpId]={})}
const missionOptions=['A 比較明顯','B 比較明顯','兩邊差不多','還看不出來'];
function setMissionGuess(i){const r=missionRecord();r.guess=i;persistFamily();renderMission()}
function startFamilyTry(){const r=missionRecord();if(r.guess===undefined)return;r.started=true;persistFamily();renderMission()}
function markFamilyTried(checked){const r=missionRecord();r.tried=checked;if(!checked){delete r.observation;delete r.completed}persistFamily();renderMission()}
function setFamilyObservation(i){const r=missionRecord();if(!r.tried)return;r.observation=i;delete r.completed;persistFamily();renderMission()}
function saveFamilyDiscovery(){const r=missionRecord();if(!r.tried||r.guess===undefined||r.observation===undefined)return;const note=document.getElementById('familyNote');r.note=(note?.value||'').trim().slice(0,280);r.completed=true;r.date=new Date().toLocaleDateString('zh-TW');persistFamily();unlockBadge(state.currentExpId);renderMission();showToast('🌱','已留下你的發現！結果不同也很值得記錄。')}
function openFamilyVideo(){if(!missionRecord().tried)return;state.currentMode='steps';renderAll();document.getElementById('exampleVideo').scrollIntoView({block:'start',behavior:'smooth'})}
function renderMission(){
 const id=state.currentExpId,m=familyMissions[id],r=missionRecord();const labels=['先猜一猜','放下平板去試','回來說發現'];
 document.getElementById('view-mission').innerHTML=`<div class="family-intro"><span class="family-eyebrow">親子科學探索助手</span><h1>${m.title}</h1><p>今天只改一件事。自己先試，再看看別人怎麼做。</p><button type="button" class="family-read" id="readFamilyMission">🔊 唸任務給我聽</button><div class="family-path">${labels.map((s,i)=>`<span class="${i===(r.tried?2:r.started?1:0)?'active':''}">${i+1} ${s}</span>`).join('')}</div></div>
 <div class="family-pair"><div><strong>A</strong><h2>${m.a}</h2></div><div><strong>B</strong><h2>${m.b}</h2></div></div>
 <section class="family-card"><h2>① 先猜：${m.compare}，哪邊比較明顯？</h2><p>先留下想法，猜錯也沒關係。</p><div class="family-choices">${missionOptions.map((s,i)=>`<button type="button" data-guess="${i}" aria-pressed="${r.guess===i}">${s}</button>`).join('')}</div><button id="startFamily" type="button" class="family-primary" ${r.guess===undefined?'disabled':''}>${r.started?'再看一次操作方法':'我猜好了，準備動手！ →'}</button></section>
 ${r.started?`<section class="family-card family-do"><span class="family-eyebrow">② 和大人一起，把平板放旁邊</span><h2>只改變一個條件，比較才清楚</h2><p><b>保持相同：</b>${m.same}</p><details><summary>🧺 需要準備什麼？</summary><p>${m.materials}</p></details><ol>${m.steps.map(s=>`<li>${s}</li>`).join('')}</ol><p class="family-safety">👐 ${m.safety}</p><label class="family-check"><input type="checkbox" id="familyTried" ${r.tried?'checked':''}>我們已經做過比較，準備回來說發現</label></section>`:''}
 ${r.tried?`<section class="family-card"><span class="family-eyebrow">③ 不用找標準答案</span><h2>你真的看到了什麼？</h2><p>剛才比較的是「${m.compare}」。現在留下觀察結果。</p><div class="family-choices">${missionOptions.map((s,i)=>`<button type="button" data-observation="${i}" aria-pressed="${r.observation===i}">${s}</button>`).join('')}</div><label for="familyNote">💬 孩子說，我來幫忙記（可以留白）</label><textarea id="familyNote" maxlength="280" rows="3" placeholder="例如：兩杯都有泡泡，但這杯比較高。">${escapeMission(r.note||'')}</textarea><p class="family-note">請先聽孩子描述，不急著補上科學名詞。</p><button type="button" id="saveFamily" class="family-primary" ${r.observation===undefined?'disabled':''}>✦ ${r.completed?'更新這次發現':'收下這次發現'}</button>${r.completed?`<div class="family-saved" role="status"><b>🌱 ${r.date} · 已留下發現</b><p>我猜：${missionOptions[r.guess]}<br>我看到：${missionOptions[r.observation]}</p><p>${r.guess===r.observation?'這次結果和你的預測一樣。下次換一個條件，再看看！':'結果和原本的猜想不同，也是一個值得記住的發現。'}</p></div>`:''}</section>
 <section class="family-card"><h2>再問一個「如果……」</h2><p>${m.next}</p><details><summary>給大人的陪玩提示</summary><p>${m.parent}</p></details><button type="button" id="familyVideo" class="family-secondary">▶ 試過了，再看別人的影片</button></section>`:'<p class="family-wait">🌱 做完比較再回來，不必一直看著螢幕。</p>'}
 <p class="family-note">探索紀錄只保存在目前的瀏覽器；重新做一次可更新同一主題的紀錄。</p>`;
 document.getElementById('view-mission').querySelectorAll('[data-guess]').forEach(b=>b.addEventListener('click',()=>setMissionGuess(Number(b.dataset.guess))));
 document.getElementById('view-mission').querySelectorAll('[data-observation]').forEach(b=>b.addEventListener('click',()=>{const note=document.getElementById('familyNote');if(note)r.note=note.value;setFamilyObservation(Number(b.dataset.observation))}));
 document.getElementById('readFamilyMission').addEventListener('click',()=>speakText(m.title+'。'+m.a+'。'+m.b+'。先猜一猜：'+m.compare+'，哪邊比較明顯？'));
 document.getElementById('startFamily').addEventListener('click',startFamilyTry);
 document.getElementById('familyTried')?.addEventListener('change',e=>markFamilyTried(e.target.checked));
 document.getElementById('saveFamily')?.addEventListener('click',saveFamilyDiscovery);
 document.getElementById('familyVideo')?.addEventListener('click',openFamilyVideo);
 document.getElementById('familyNote')?.addEventListener('input',e=>{r.note=e.target.value;persistFamily()});
}
const renderWithMissions=renderAll;
renderAll=function(){renderWithMissions();const active=state.currentMode==='mission';document.getElementById('view-mission').hidden=!active;document.getElementById('journey').style.display=state.currentMode==='lab'?'flex':'none';if(active){renderMission();document.getElementById('kikiSpeechText').textContent='看一下平板，放下平板去試，再回來說說你的發現。不必猜對，也不用背名詞！'}else if(state.currentMode==='lab'){document.getElementById('kikiSpeechText').textContent='這裡是簡化的模擬練習。想知道真實結果，回到親子探索任務，和大人動手試。'}};
const renderStepsBeforeFamilyGate=renderStepsView;
renderStepsView=function(exp){renderStepsBeforeFamilyGate(exp);if(!familyRecords[exp.id]?.tried){document.getElementById('exampleVideo').innerHTML='<div class="family-video-gate"><h2>先自己試，再看示範影片</h2><p>保留一點好奇心！先和大人完成親子探索任務，再來比較別人的做法。</p><button type="button" class="family-secondary" id="returnFamilyMission">🌱 回到親子探索任務</button></div>';document.getElementById('returnFamilyMission').addEventListener('click',()=>{state.currentMode='mission';renderAll()})}};
const renderPassportBeforeFamily=renderPassportModal;
renderPassportModal=function(){renderPassportBeforeFamily();const block=document.createElement('section');block.className='family-card';block.style.gridColumn='1 / -1';const completed=Object.keys(familyMissions).filter(id=>familyRecords[id]?.completed);block.innerHTML='<h2>🌱 我的親子實驗紀錄</h2>'+(completed.length?completed.map(id=>{const r=familyRecords[id];return `<details><summary>${EXPERIMENTS[id].emoji} ${escapeMission(familyMissions[id].title)}</summary><p>${escapeMission(r.date)}<br>我猜：${missionOptions[r.guess]}<br>我看到：${missionOptions[r.observation]}</p>${r.note?`<p>我說：${escapeMission(r.note)}</p>`:''}</details>`}).join(''):'<p>和大人完成親子探索任務，留下第一個真實觀察吧！</p>');document.getElementById('passportGrid').appendChild(block)};
