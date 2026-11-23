/*
 * 物理先別勿理吧｜資料檔
 * ------------------------------------------------------------
 * 只要改這個檔案就能新增或修改物理學家，不用動程式碼。
 *
 * 每位物理學家（physicists）的欄位：
 *   id          英文代號，不可重複
 *   name / en   中文名／原文名
 *   years       生卒年（依 Beiser 傳記欄）
 *   series      系列代號（見 series）
 *   era         時代代號（見 eras），依「關鍵發現年份」分類
 *   keyYear     關鍵發現年份
 *   equation    卡面上的代表式（LaTeX 語法），可留空 ""
 *   portrait    肖像圖檔路徑（例：assets/portraits/planck.png），沒有就留空 ""，會顯示預設剪影
 *   ready       true＝可以解謎；false＝顯示「尚未開放」
 *   verified    true＝內容已對照課本確認
 *   summary     一句話介紹（卡冊上顯示）
 *   clues       研究室三處線索：board 黑板／desk 書桌／shelf 書架
 *                 { title, image（圖檔，可省略）, text（文字，可省略）, kind:"note"|"quote"|"figure", source（可省略）}
 *   hints       推理答錯時的提示 { theory, era }
 *   candidates  召喚時的候選人代號（含正解，3～4 位）
 *   bio         生平段落 [ ... ]
 *   contributions 主要貢獻 [ ... ]
 *   derivation  延伸推導 { title, steps:[ { text, tex } ] }，tex 為 LaTeX
 *   sources     來源 [ { title, url } ]，url 可留空
 */

window.PHYSICS_DATA = {
  "siteName": "物理先別勿理吧",
  "series": [
    {
      "id": "relativity",
      "name": "相對論",
      "chapter": "Beiser Ch.1",
      "color": "#4a6fa5",
      "glyph": "時",
      "desc": "空間與時間不是絕對的"
    },
    {
      "id": "photon",
      "name": "波的粒子性",
      "chapter": "Beiser Ch.2",
      "color": "#c08a2d",
      "glyph": "光",
      "desc": "光也是一顆一顆的能量"
    },
    {
      "id": "matterwave",
      "name": "粒子的波動性",
      "chapter": "Beiser Ch.3",
      "color": "#3f7f6e",
      "glyph": "波",
      "desc": "電子也會像波一樣繞射"
    },
    {
      "id": "atom",
      "name": "原子結構",
      "chapter": "Beiser Ch.4",
      "color": "#a3483c",
      "glyph": "核",
      "desc": "原子大部分是空的"
    },
    {
      "id": "quantum",
      "name": "量子力學",
      "chapter": "Beiser Ch.5",
      "color": "#6b4f8f",
      "glyph": "ψ",
      "desc": "用波函數描述一切"
    }
  ],
  "eras": [
    {
      "id": "classic",
      "name": "古典的黃昏",
      "range": "1860–1899"
    },
    {
      "id": "dawn",
      "name": "量子曙光",
      "range": "1900–1919"
    },
    {
      "id": "revo",
      "name": "量子革命",
      "range": "1920–1939"
    },
    {
      "id": "modern",
      "name": "新時代",
      "range": "1940–"
    }
  ],
  "achievementNames": {
    "series-relativity": "時空旅人",
    "series-photon": "光之收藏家",
    "series-matterwave": "波粒同行",
    "series-atom": "原子探險家",
    "series-quantum": "波函數之主",
    "era-classic": "古典守望者",
    "era-dawn": "創世紀",
    "era-revo": "革命同志",
    "era-modern": "新時代先鋒",
    "all": "近代物理全圖鑑"
  },
  "eraAchievementMin": 2,
  "physicists": [
    {
      "id": "michelson",
      "name": "邁克生",
      "en": "Albert A. Michelson",
      "years": "1852–1931",
      "series": "relativity",
      "era": "classic",
      "keyYear": 1887,
      "equation": "",
      "portrait": "assets/portraits/michelson.jpg",
      "ready": true,
      "verified": true,
      "summary": "用干涉儀精密測量光速。",
      "clues": {
        "board": {
          "kind": "figure",
          "title": "黑板上的實驗裝置",
          "image": "assets/clues/michelson-interferometer.svg",
          "text": "用半鍍銀鏡把一道光分成互相垂直的兩束，再讓它們回到同一個觀察屏。如果地球在「以太」中移動，兩束光回來的時間應該不一樣。"
        },
        "desk": {
          "kind": "note",
          "title": "書桌上的聘書與筆記",
          "text": "一張海軍學院的科學教官聘書，壓著一本寫滿光速測量數據的筆記，數字精確到小數點後好幾位。"
        },
        "shelf": {
          "kind": "note",
          "title": "書架上的設計圖",
          "text": "一張設計圖標題寫著：「用干涉儀量出恆星的直徑」。旁邊的便條：「改用某條光譜線的波長來定義『公尺』」。"
        }
      },
      "hints": {
        "theory": "這個實驗想找的是「地球相對於某種絕對參考系的運動」。",
        "era": "這個實驗比普朗克提出量子假說還早十多年。"
      },
      "candidates": [
        "michelson",
        "lorentz",
        "maxwell",
        "hubble"
      ],
      "bio": [
        "邁克生生於德國，兩歲時隨父母移民美國內華達州。他就讀美國海軍學院，出海服役兩年後成為科學教官，之後到柏林與巴黎進修光學。",
        "離開海軍後，他先後任教於凱斯應用科學學院、克拉克大學，最後在芝加哥大學主持物理系（1892–1929）。他的專長是高精密度量測，他測出的光速數值在數十年間都是最準確的。他也用光譜線的波長重新定義了公尺，並設計出能測量恆星直徑的干涉儀。",
        "他最重要的成就是 1887 年與莫雷（Edward Morley）合作的實驗：想測出地球穿過「以太」的運動。結果兩束光沒有出現預期的時間差，這個「失敗」的實驗後來成為狹義相對論的重要基礎。"
      ],
      "contributions": [
        "光速的高精密度量測",
        "以光譜線波長重新定義公尺",
        "測量恆星直徑的干涉儀",
        "邁克生-莫雷實驗（1887）"
      ],
      "derivation": {
        "title": "如果以太存在，應該看到多大的時間差？",
        "steps": [
          {
            "text": "設干涉儀的兩臂長度都是 L，以太風速度為 v。光沿著平行以太風的臂來回一趟的時間是：",
            "tex": "t_{\\parallel} = \\dfrac{2L/c}{1 - v^2/c^2}"
          },
          {
            "text": "沿著垂直以太風的臂來回一趟的時間是：",
            "tex": "t_{\\perp} = \\dfrac{2L/c}{\\sqrt{1 - v^2/c^2}}"
          },
          {
            "text": "因為 v ≪ c，用近似展開可得兩者的時間差：",
            "tex": "\\Delta t = t_{\\parallel} - t_{\\perp} \\approx \\dfrac{L}{c}\\,\\dfrac{v^2}{c^2}"
          },
          {
            "text": "地球公轉速度約 3 × 10⁴ m/s，所以 v²/c² ≈ 10⁻⁸。這個差距雖小，但干涉條紋足以偵測得到。實驗結果卻是條紋完全沒有移動——以太並不存在。",
            "tex": ""
          }
        ]
      },
      "sources": [
        {
          "title": "Beiser, Concepts of Modern Physics 6th ed.，§1.1 Special Relativity 與傳記欄",
          "url": ""
        }
      ]
    },
    {
      "id": "lorentz",
      "name": "勞侖茲",
      "en": "Hendrik A. Lorentz",
      "years": "1853–1928",
      "series": "relativity",
      "era": "classic",
      "keyYear": 1895,
      "equation": "x' = \\gamma (x - vt)",
      "portrait": "assets/portraits/lorentz.jpg",
      "ready": true,
      "verified": true,
      "summary": "勞侖茲轉換以他命名。",
      "clues": {
        "board": {
          "kind": "figure",
          "title": "黑板上的三把尺",
          "image": "assets/clues/lorentz-contraction.svg",
          "text": "同一把尺，跑得越快，量起來越短。旁邊有人寫：「也許這能解釋邁克生-莫雷實驗為什麼沒有看到條紋移動？」"
        },
        "desk": {
          "kind": "note",
          "title": "書桌上的論文草稿",
          "text": "一份博士論文草稿，題目是把馬克士威的電磁理論延伸到光的折射與反射。"
        },
        "shelf": {
          "kind": "note",
          "title": "書架上的合照",
          "text": "一張和學生塞曼（Zeeman）的合照，背面寫著：「磁場會讓原子的光譜線分裂成好幾條——我們的理論被證實了！」"
        }
      },
      "hints": {
        "theory": "這把尺的長度和「運動速度」有關。",
        "era": "他的轉換式比愛因斯坦的狹義相對論早了十年。"
      },
      "candidates": [
        "lorentz",
        "einstein",
        "michelson",
        "maxwell"
      ],
      "bio": [
        "勞侖茲生於荷蘭阿納姆，就讀萊頓大學。十九歲回到家鄉的高中任教，同時撰寫博士論文，把馬克士威的電磁理論延伸到光的折射與反射。1878 年他成為萊頓大學的理論物理教授，這是荷蘭第一個理論物理教席。",
        "他重新整理並簡化了馬克士威的理論，提出電磁場是由原子層級的電荷產生的，並認為原子發光等光學現象都來自原子中電子的運動。1896 年他的學生塞曼發現磁場會使光譜線分裂，證實了他的理論，兩人在 1902 年共同獲得諾貝爾獎。",
        "1895 年，他找到了把電磁量從一個參考系轉換到另一個運動參考系的方程式，也就是今天的勞侖茲轉換。他也和愛爾蘭物理學家費茲傑羅（Fitzgerald）各自提出「運動方向的長度會收縮」來解釋邁克生-莫雷實驗。後來證明這種收縮確實存在，但真正的原因是以太根本不存在。"
      ],
      "contributions": [
        "電子論：光學現象來自原子中電子的運動",
        "勞侖茲轉換（1895）",
        "長度收縮假說",
        "1902 年諾貝爾物理學獎（與塞曼共同獲得）"
      ],
      "derivation": {
        "title": "勞侖茲轉換與長度收縮",
        "steps": [
          {
            "text": "參考系 S′ 以速度 v 沿 x 方向運動，兩個參考系的座標關係是：",
            "tex": "x' = \\gamma\\,(x - vt), \\qquad t' = \\gamma\\left(t - \\dfrac{vx}{c^2}\\right), \\qquad \\gamma = \\dfrac{1}{\\sqrt{1 - v^2/c^2}}"
          },
          {
            "text": "一根尺在 S′ 中靜止，長度是 L₀ = x′₂ − x′₁。在 S 中「同一時刻 t」量它兩端的位置：",
            "tex": "x'_2 - x'_1 = \\gamma\\,(x_2 - x_1) \\;\\Rightarrow\\; L = x_2 - x_1 = \\dfrac{L_0}{\\gamma}"
          },
          {
            "text": "也就是長度收縮公式。例如 v = 0.6c 時，尺只剩原本的 0.8 倍：",
            "tex": "L = L_0\\sqrt{1 - v^2/c^2} = L_0\\sqrt{1 - 0.36} = 0.8\\,L_0"
          }
        ]
      },
      "sources": [
        {
          "title": "Beiser, Concepts of Modern Physics 6th ed.，§1.4 Length Contraction、Appendix I 與傳記欄",
          "url": ""
        }
      ]
    },
    {
      "id": "einstein",
      "name": "愛因斯坦",
      "en": "Albert Einstein",
      "years": "1879–1955",
      "series": "relativity",
      "era": "dawn",
      "keyYear": 1905,
      "equation": "t = \\dfrac{t_0}{\\sqrt{1 - v^2/c^2}}",
      "portrait": "assets/portraits/einstein.jpg",
      "ready": true,
      "verified": true,
      "summary": "1905 年一口氣發表三篇改變物理學的論文。",
      "clues": {
        "board": {
          "kind": "figure",
          "title": "黑板上的思想實驗",
          "image": "assets/clues/einstein-lightclock.svg",
          "text": "兩面鏡子之間來回反射的光，被當成一個「時鐘」。旁邊有人寫了一句：「光速對所有觀察者都一樣。」"
        },
        "desk": {
          "kind": "note",
          "title": "書桌上的公文夾",
          "text": "一疊瑞士專利局的專利申請審查文件，其中一份的空白處寫滿了算式。"
        },
        "shelf": {
          "kind": "note",
          "title": "書架上的論文清單",
          "text": "同一年寄出的三篇稿子：①光電效應　②布朗運動　③運動物體的電動力學"
        }
      },
      "hints": {
        "theory": "黑板上在討論「時鐘在移動時走得比較慢」。",
        "era": "三篇論文都在同一年寄出，那一年被稱為「奇蹟年」，在 20 世紀初。"
      },
      "candidates": [
        "einstein",
        "lorentz",
        "michelson",
        "hubble"
      ],
      "bio": [
        "愛因斯坦生於德國，因為受不了德國學校的嚴格管教，十六歲轉到瑞士完成學業，之後在瑞士專利局擔任專利審查員。",
        "1905 年，他發表了三篇短論文：第一篇以光電效應提出光同時具有粒子與波的性質；第二篇解釋布朗運動是流體分子隨機撞擊造成的，為物質的分子理論提供了決定性的實驗連結；第三篇則提出了狹義相對論。",
        "1913 年他到柏林的威廉皇帝研究所任職，之後轉向研究重力，在 1916 年發表廣義相對論，把重力解釋成時空的彎曲。1917 年他提出的受激輻射概念，四十年後促成了雷射的發明。"
      ],
      "contributions": [
        "狹義相對論（1905）",
        "以光量子解釋光電效應（1905）",
        "解釋布朗運動（1905）",
        "廣義相對論（1916）",
        "受激輻射概念（1917）"
      ],
      "derivation": {
        "title": "用光鐘推導時間膨脹",
        "steps": [
          {
            "text": "靜止的光鐘：光在相距 L 的兩面鏡子間往返一次，所需時間是",
            "tex": "t_0 = \\dfrac{2L}{c}"
          },
          {
            "text": "移動的光鐘：在地面觀察者看來，鏡子以速度 v 移動，光走的是斜線。走半趟的時間是 t/2，依畢氏定理：",
            "tex": "\\left(\\dfrac{ct}{2}\\right)^2 = L^2 + \\left(\\dfrac{vt}{2}\\right)^2"
          },
          {
            "text": "整理後解出 t：",
            "tex": "t^2\\,(c^2 - v^2) = 4L^2 \\;\\Rightarrow\\; t = \\dfrac{2L/c}{\\sqrt{1 - v^2/c^2}}"
          },
          {
            "text": "代回 t₀，就得到時間膨脹公式。因為分母小於 1，移動中的時鐘看起來走得比較慢：",
            "tex": "t = \\dfrac{t_0}{\\sqrt{1 - v^2/c^2}}"
          }
        ]
      },
      "sources": [
        {
          "title": "Beiser, Concepts of Modern Physics 6th ed., §1.1 傳記欄、§1.2 Time Dilation",
          "url": ""
        }
      ]
    },
    {
      "id": "hubble",
      "name": "哈伯",
      "en": "Edwin Hubble",
      "years": "1889–1953",
      "series": "relativity",
      "era": "revo",
      "keyYear": 1929,
      "equation": "v = H_0 d",
      "portrait": "assets/portraits/hubble.jpg",
      "ready": true,
      "verified": true,
      "summary": "從星系紅移發現宇宙正在膨脹。",
      "clues": {
        "board": {
          "kind": "figure",
          "title": "牆上的觀測筆記",
          "image": "assets/clues/hubble-plot.svg",
          "text": "把每個星系的距離和光譜紅移畫在一起，點大致排成一條直線。"
        },
        "desk": {
          "kind": "note",
          "title": "書桌上的拳擊手套",
          "text": "一副拳擊手套，壓著一張英國牛津大學法律與西班牙文課程的修課紀錄。"
        },
        "shelf": {
          "kind": "note",
          "title": "書架上的觀測排程",
          "text": "一張威爾遜山天文台的觀測排程表，還有一張螺旋星系的照相底片。"
        }
      },
      "hints": {
        "theory": "紅移代表星系正在遠離我們，這和光的都卜勒效應有關，課本把它放在相對論那一章。",
        "era": "這時量子力學已經誕生，第二次世界大戰還沒開始。"
      },
      "candidates": [
        "hubble",
        "michelson",
        "einstein",
        "compton"
      ],
      "bio": [
        "哈伯生於美國密蘇里州，雖然一直對天文有興趣，但在芝加哥大學也修了很多其他科目。之後他以羅德獎學金到英國牛津大學，主修法律、西班牙文，還打重量級拳擊。",
        "在印第安納州的高中教了兩年書後，他確定天文才是自己的志業，回到芝加哥大學攻讀天文學。在加州威爾遜山天文台，他首次準確量出螺旋星系的距離，證明它們遠在銀河系之外。",
        "當時已知這些星系的光譜有紅移，代表正在遠離我們。哈伯把距離與紅移放在一起，發現遠離速度和距離成正比，這表示宇宙正在膨脹。這個比例關係被稱為哈伯定律。1949 年他也是第一位使用帕洛馬山 200 吋望遠鏡的人。"
      ],
      "contributions": [
        "證明螺旋星系位於銀河系之外",
        "哈伯定律：星系遠離速度與距離成正比",
        "宇宙膨脹的觀測證據"
      ],
      "derivation": {
        "title": "從哈伯定律估算宇宙的年齡",
        "steps": [
          {
            "text": "哈伯定律：星系的遠離速度 v 與距離 d 成正比，比例常數 H₀ 稱為哈伯常數：",
            "tex": "v = H_0\\, d"
          },
          {
            "text": "若宇宙一直以相同速度膨脹，所有星系回到同一點所需的時間是：",
            "tex": "t = \\dfrac{d}{v} = \\dfrac{1}{H_0}"
          },
          {
            "text": "以 H₀ ≈ 70 km/s/Mpc 估算（1 Mpc ≈ 3.086 × 10¹⁹ km）：",
            "tex": "\\dfrac{1}{H_0} \\approx \\dfrac{3.086\\times10^{19}\\ \\mathrm{km}}{70\\ \\mathrm{km/s}} \\approx 4.4\\times10^{17}\\ \\mathrm{s} \\approx 140\\ \\text{億年}"
          },
          {
            "text": "課本提到宇宙膨脹約始於 130 億年前，和這個粗估的數量級一致。H₀ 的數值會隨觀測更新，這裡只是估算。",
            "tex": ""
          }
        ]
      },
      "sources": [
        {
          "title": "Beiser, Concepts of Modern Physics 6th ed.，§1.3 Doppler Effect 與傳記欄",
          "url": ""
        }
      ]
    },
    {
      "id": "maxwell",
      "name": "馬克士威",
      "en": "James Clerk Maxwell",
      "years": "1831–1879",
      "series": "photon",
      "era": "classic",
      "keyYear": 1865,
      "equation": "c = \\dfrac{1}{\\sqrt{\\mu_0 \\varepsilon_0}}",
      "portrait": "assets/portraits/maxwell.jpg",
      "ready": true,
      "verified": true,
      "summary": "統一電與磁，預測電磁波以光速前進。",
      "clues": {
        "board": {
          "kind": "figure",
          "title": "黑板上的兩道波",
          "image": "assets/clues/maxwell-em-wave.svg",
          "text": "兩道互相垂直、一起前進的波。旁邊的算式算出它們的速度約是 3 × 10⁸ m/s。"
        },
        "desk": {
          "kind": "note",
          "title": "書桌上的照片",
          "text": "一張很早期的彩色照片，下面壓著一疊研究「人眼如何看見顏色」的筆記。"
        },
        "shelf": {
          "kind": "note",
          "title": "書架上的論文",
          "text": "一篇論文的結論寫著：「土星環不可能是固體或液體，必須由許多分開的小物體組成。」"
        }
      },
      "hints": {
        "theory": "他預測的這種波，後來證明就是光。",
        "era": "他沒能活著看到赫茲用實驗證實他的預測，那是 19 世紀後半的事。"
      },
      "candidates": [
        "maxwell",
        "lorentz",
        "planck",
        "michelson"
      ],
      "bio": [
        "馬克士威生於蘇格蘭，就在法拉第發現電磁感應前不久。十九歲進入劍橋大學研究物理與數學，還是學生時就研究色彩視覺，後來據此拍出了第一張彩色照片。二十四歲時，他證明土星環必定由許多分開的小物體組成。",
        "他相信法拉第等人發現的各種電磁現象背後有統一的原理。1856 年他發表〈論法拉第的力線〉，之後在蘇格蘭與倫敦國王學院任教期間，建立了完整的電磁理論，這些基本方程式至今仍是電磁學的基礎。",
        "他從方程式預測電磁波存在、且以光速前進，並推測光就是電磁波。可惜他沒能看到德國物理學家赫茲用實驗證實。他在氣體動力論與統計力學上的貢獻同樣深遠。"
      ],
      "contributions": [
        "馬克士威方程式：統一電與磁",
        "預測電磁波以光速前進，光是電磁波",
        "第一張彩色照片",
        "證明土星環由小物體組成",
        "氣體動力論（馬克士威-波茲曼分布）"
      ],
      "derivation": {
        "title": "從電磁常數算出光速",
        "steps": [
          {
            "text": "馬克士威方程式推出的電磁波速度只由兩個常數決定：真空磁導率 μ₀ 與真空電容率 ε₀：",
            "tex": "c = \\dfrac{1}{\\sqrt{\\mu_0\\,\\varepsilon_0}}"
          },
          {
            "text": "代入數值：",
            "tex": "\\mu_0 = 4\\pi\\times10^{-7}\\ \\mathrm{T\\cdot m/A}, \\qquad \\varepsilon_0 = 8.854\\times10^{-12}\\ \\mathrm{C^2/(N\\cdot m^2)}"
          },
          {
            "text": "算出來恰好就是光速，因此他推論光就是電磁波：",
            "tex": "c = \\dfrac{1}{\\sqrt{(4\\pi\\times10^{-7})(8.854\\times10^{-12})}} \\approx 3.00\\times10^{8}\\ \\mathrm{m/s}"
          }
        ]
      },
      "sources": [
        {
          "title": "Beiser, Concepts of Modern Physics 6th ed.，§2.1 Electromagnetic Waves 與傳記欄",
          "url": ""
        }
      ]
    },
    {
      "id": "planck",
      "name": "普朗克",
      "en": "Max Planck",
      "years": "1858–1947",
      "series": "photon",
      "era": "dawn",
      "keyYear": 1900,
      "equation": "E = nh\\nu",
      "portrait": "assets/portraits/planck.jpg",
      "ready": true,
      "verified": true,
      "summary": "發現能量是一份一份釋放的，開啟了近代物理。",
      "clues": {
        "board": {
          "kind": "figure",
          "title": "黑板上的曲線",
          "image": "assets/clues/planck-blackbody.svg",
          "text": "不同溫度的物體發出的光，強度隨波長的分布。虛線是當時古典理論的預測：波長越短，強度竟然衝向無限大。"
        },
        "desk": {
          "kind": "note",
          "title": "書桌上的手稿",
          "text": "「如果振子的能量不能任意取值，只能是某個最小單位 hν 的整數倍……那麼曲線就對了。」旁邊寫著：「這只是數學上的權宜之計？」"
        },
        "shelf": {
          "kind": "note",
          "title": "書架上的樂譜",
          "text": "一份鋼琴樂譜，夾著一張便條：「週末和 A. E. 合奏」。樂譜下壓著一雙登山靴。"
        }
      },
      "hints": {
        "theory": "黑板上的曲線，是在研究物體「發出的光」，也就是電磁輻射。",
        "era": "這個想法被認為是近代物理的起點，正好在世紀交替那一年。"
      },
      "candidates": [
        "planck",
        "maxwell",
        "compton",
        "bohr"
      ],
      "bio": [
        "普朗克生於德國基爾，在慕尼黑與柏林受教育，在柏林大學師從克希荷夫（Kirchhoff）與亥姆霍茲（Helmholtz）。",
        "他認為黑體輻射是不受原子結構影響的基本現象，因此投入六年研究，才找到輻射所遵守的公式。為了替公式找出物理意義，他發現輻射是以 hν 為單位一份一份釋放的，並因此獲得 1918 年諾貝爾獎。",
        "有趣的是，普朗克自己長期懷疑「量子」是否真的存在。他也是不錯的音樂家，有時會和愛因斯坦一起演奏，還喜歡登山。二戰後，威廉皇帝研究所改以他的名字命名。"
      ],
      "contributions": [
        "普朗克黑體輻射公式（1900）",
        "提出能量量子化，引入普朗克常數 h",
        "1918 年諾貝爾物理學獎"
      ],
      "derivation": {
        "title": "普朗克公式如何解決「紫外災變」",
        "steps": [
          {
            "text": "古典理論（Rayleigh–Jeans 公式）預測的能量密度與頻率平方成正比，頻率越高越大，最後發散到無限大，稱為「紫外災變」：",
            "tex": "u(\\nu)\\,d\\nu = \\dfrac{8\\pi \\nu^2 kT}{c^3}\\,d\\nu"
          },
          {
            "text": "普朗克假設振子的能量只能是 hν 的整數倍，得到：",
            "tex": "u(\\nu)\\,d\\nu = \\dfrac{8\\pi h}{c^3}\\,\\dfrac{\\nu^3\\,d\\nu}{e^{h\\nu/kT} - 1}"
          },
          {
            "text": "高頻時 hν ≫ kT，分母的指數項急遽變大，能量密度趨近於 0，不再發散：",
            "tex": "h\\nu \\gg kT \\;\\Rightarrow\\; u(\\nu) \\to 0"
          },
          {
            "text": "低頻時 hν ≪ kT，利用 eˣ ≈ 1 + x，普朗克公式會變回古典的 Rayleigh–Jeans 公式：",
            "tex": "e^{h\\nu/kT} - 1 \\approx \\dfrac{h\\nu}{kT} \\;\\Rightarrow\\; u(\\nu) \\approx \\dfrac{8\\pi \\nu^2 kT}{c^3}"
          }
        ]
      },
      "sources": [
        {
          "title": "Beiser, Concepts of Modern Physics 6th ed., §2.2 Blackbody Radiation 與傳記欄",
          "url": ""
        }
      ]
    },
    {
      "id": "compton",
      "name": "康普頓",
      "en": "Arthur Holly Compton",
      "years": "1892–1962",
      "series": "photon",
      "era": "revo",
      "keyYear": 1923,
      "equation": "\\Delta\\lambda = \\dfrac{h}{mc}(1-\\cos\\phi)",
      "portrait": "assets/portraits/compton.jpg",
      "ready": true,
      "verified": true,
      "summary": "X 射線散射後波長變長，證明光子有動量。",
      "clues": {
        "board": {
          "kind": "figure",
          "title": "黑板上的散射圖",
          "image": "assets/clues/compton-scattering.svg",
          "text": "X 射線打到電子後往不同角度散射，量到的波長都比原本長，角度越大變得越多。"
        },
        "desk": {
          "kind": "note",
          "title": "書桌上的數據",
          "text": "一份宇宙射線強度的記錄，標題寫著：「強度會隨緯度改變——所以它們是帶電粒子，不是伽瑪射線。」"
        },
        "shelf": {
          "kind": "note",
          "title": "書架上的獎章",
          "text": "一枚諾貝爾獎章的複製品，旁邊是一張華盛頓大學（聖路易）實驗室的照片。"
        }
      },
      "hints": {
        "theory": "波長變長代表光子失去了能量和動量，光像粒子一樣在「碰撞」。",
        "era": "這發生在波耳原子模型之後十年、量子力學誕生之前。"
      },
      "candidates": [
        "compton",
        "planck",
        "debroglie",
        "rutherford"
      ],
      "bio": [
        "康普頓來自美國俄亥俄州，在伍斯特學院與普林斯頓大學受教育。在聖路易的華盛頓大學任教時，他發現 X 射線散射後波長會變長，並在 1923 年用光的量子理論解釋了這個現象。這項研究說服了最後一批懷疑者，讓大家接受光子的存在。",
        "1927 年獲得諾貝爾獎後，他到芝加哥大學研究宇宙射線，發現宇宙射線的強度會隨緯度變化，證明它們是受地球磁場影響的帶電粒子，而不是許多人以為的高能伽瑪射線。",
        "第二次世界大戰期間，他是原子彈研發的領導者之一。"
      ],
      "contributions": [
        "康普頓效應（1923）：證明光子具有動量",
        "1927 年諾貝爾物理學獎",
        "證明宇宙射線是帶電粒子"
      ],
      "derivation": {
        "title": "康普頓散射公式",
        "steps": [
          {
            "text": "把 X 射線光子和靜止電子的碰撞當成兩顆粒子的彈性碰撞，同時套用能量守恆與動量守恆，可得散射後的波長變化：",
            "tex": "\\Delta\\lambda = \\lambda' - \\lambda = \\dfrac{h}{mc}\\,(1 - \\cos\\phi)"
          },
          {
            "text": "h/mc 稱為電子的康普頓波長：",
            "tex": "\\lambda_C = \\dfrac{h}{mc} = \\dfrac{6.626\\times10^{-34}}{(9.109\\times10^{-31})(2.998\\times10^{8})} \\approx 2.426\\ \\mathrm{pm}"
          },
          {
            "text": "課本例題：波長 10.0 pm 的 X 射線散射 45° 後：",
            "tex": "\\lambda' = 10.0\\ \\mathrm{pm} + 0.293\\,\\lambda_C \\approx 10.7\\ \\mathrm{pm}"
          },
          {
            "text": "散射 180°（正面反彈）時變化最大，Δλ = 2λ_C ≈ 4.9 pm。",
            "tex": ""
          }
        ]
      },
      "sources": [
        {
          "title": "Beiser, Concepts of Modern Physics 6th ed.，§2.7 Compton Effect（含例題 2.4）與傳記欄",
          "url": ""
        }
      ]
    },
    {
      "id": "debroglie",
      "name": "德布羅意",
      "en": "Louis de Broglie",
      "years": "1892–1987",
      "series": "matterwave",
      "era": "revo",
      "keyYear": 1924,
      "equation": "\\lambda = \\dfrac{h}{p}",
      "portrait": "assets/portraits/debroglie.jpg",
      "ready": true,
      "verified": true,
      "summary": "提出運動中的物體也具有波動性。",
      "clues": {
        "board": {
          "kind": "figure",
          "title": "黑板上的兩個圓",
          "image": "assets/clues/debroglie-orbit.svg",
          "text": "繞著原子核的軌道上畫著波。周長剛好是整數個波長時，波才能首尾相接。"
        },
        "desk": {
          "kind": "note",
          "title": "書桌上的筆記",
          "text": "一疊歷史系的課堂筆記，最上面卻壓著一份物理博士論文：「運動的物體同時具有波動性。」"
        },
        "shelf": {
          "kind": "note",
          "title": "書架上的家書",
          "text": "一封寫給哥哥莫里斯（Maurice）的信：「我決定跟你一樣，走物理這條路。」"
        }
      },
      "hints": {
        "theory": "如果電子也有「波長」……",
        "era": "這個想法提出兩年後，薛丁格就寫下了波動方程式。"
      },
      "candidates": [
        "debroglie",
        "schrodinger",
        "bohr",
        "heisenberg"
      ],
      "bio": [
        "德布羅意出身法國一個以外交和軍事聞名的家族，原本研讀歷史，後來追隨哥哥莫里斯走上物理之路。",
        "1924 年，他在博士論文中提出：運動的物體除了粒子性，也具有波動性。他的靈感部分來自波耳的氫原子模型——電子只能沿特定軌道運行，這讓他想到電子也必須具有某種週期性。",
        "兩年後，薛丁格以物質波的概念發展出一套完整的理論。1927 年電子束的繞射實驗證實了物質波的存在，德布羅意也在 1929 年獲得諾貝爾獎。"
      ],
      "contributions": [
        "物質波假說（1924）：λ = h/p",
        "以電子波解釋波耳軌道的量子化",
        "1929 年諾貝爾物理學獎"
      ],
      "derivation": {
        "title": "電子的波長有多長？",
        "steps": [
          {
            "text": "德布羅意波長：動量越大，波長越短：",
            "tex": "\\lambda = \\dfrac{h}{p} = \\dfrac{h}{mv}"
          },
          {
            "text": "動能 KE 的電子，動量 p = √(2m·KE)。以 54 eV 的電子為例：",
            "tex": "\\lambda = \\dfrac{h}{\\sqrt{2m\\,\\mathrm{KE}}} = \\dfrac{6.626\\times10^{-34}}{\\sqrt{2(9.109\\times10^{-31})(54\\times1.602\\times10^{-19})}} \\approx 0.167\\ \\mathrm{nm}"
          },
          {
            "text": "這和晶體中原子的間距差不多，所以電子打到晶體上會產生繞射——後來的實驗正是這樣證實了物質波。",
            "tex": ""
          },
          {
            "text": "套用到波耳軌道：周長必須是整數個波長，就能推出波耳的角動量量子化條件：",
            "tex": "2\\pi r = n\\lambda = \\dfrac{nh}{mv} \\;\\Rightarrow\\; mvr = n\\hbar"
          }
        ]
      },
      "sources": [
        {
          "title": "Beiser, Concepts of Modern Physics 6th ed.，§3.1 De Broglie Waves、§4.4 The Bohr Atom 與傳記欄",
          "url": ""
        }
      ]
    },
    {
      "id": "heisenberg",
      "name": "海森堡",
      "en": "Werner Heisenberg",
      "years": "1901–1976",
      "series": "matterwave",
      "era": "revo",
      "keyYear": 1927,
      "equation": "\\Delta x\\,\\Delta p \\ge \\dfrac{\\hbar}{2}",
      "portrait": "assets/portraits/heisenberg.jpg",
      "ready": true,
      "verified": true,
      "summary": "測不準原理：位置與動量無法同時精確得知。",
      "clues": {
        "board": {
          "kind": "figure",
          "title": "黑板上的兩組波",
          "image": "assets/clues/heisenberg-packets.svg",
          "text": "上面的波包很窄，位置很確定，卻混了很多種波長；下面的波長很單純，位置卻散得很開。"
        },
        "desk": {
          "kind": "note",
          "title": "書桌旁的雪板",
          "text": "一副滑雪板靠在書桌旁，椅背上掛著登山繩。"
        },
        "shelf": {
          "kind": "quote",
          "title": "書架上的筆記",
          "text": "一本矩陣代數教科書，夾著一張紙條：「任何我們想像得出來的原子圖像，正因為是想像出來的，所以都是有缺陷的。」",
          "source": "Beiser, Concepts of Modern Physics 6th ed. 傳記欄引用的原話（中文翻譯）"
        }
      },
      "hints": {
        "theory": "越想知道粒子在哪裡，就越不知道它的動量。這和「粒子也是波」有關。",
        "era": "他提出這個原理時才二十多歲，正在哥本哈根的波耳研究所工作。"
      },
      "candidates": [
        "heisenberg",
        "born",
        "schrodinger",
        "debroglie"
      ],
      "bio": [
        "海森堡生於德國，在慕尼黑研讀理論物理，也熱愛滑雪和登山。1924 年他在哥廷根擔任玻恩的助理，開始質疑原子的力學模型，轉而用矩陣代數建立抽象的理論。",
        "1925 年，他和玻恩、約當（Jordan）把這套方法發展成一致的量子力學，但因為太難理解，當時影響不大。隔年薛丁格的波動力學比較成功，後來證明兩種版本在數學上等價。",
        "1927 年，他在哥本哈根的波耳研究所提出測不準原理。他起初認為這是量測干擾造成的，波耳則認為根源是波粒二象性；經過一番爭論，海森堡接受了波耳的看法。他在 1932 年獲得諾貝爾獎。"
      ],
      "contributions": [
        "矩陣力學（1925，與玻恩、約當）",
        "測不準原理（1927）",
        "1932 年諾貝爾物理學獎"
      ],
      "derivation": {
        "title": "測不準原理的威力",
        "steps": [
          {
            "text": "位置的不確定量 Δx 與動量的不確定量 Δp 滿足：",
            "tex": "\\Delta x\\,\\Delta p \\ge \\dfrac{\\hbar}{2}"
          },
          {
            "text": "如果把電子限制在約 0.1 nm（原子大小）的範圍內，它的動量至少有這麼大的不確定性：",
            "tex": "\\Delta p \\ge \\dfrac{\\hbar}{2\\Delta x} = \\dfrac{1.055\\times10^{-34}}{2\\times10^{-11}} \\approx 5.3\\times10^{-24}\\ \\mathrm{kg\\cdot m/s}"
          },
          {
            "text": "對應的動能數量級是：",
            "tex": "\\mathrm{KE} \\sim \\dfrac{(\\Delta p)^2}{2m} \\approx 1.5\\times10^{-17}\\ \\mathrm{J} \\approx 95\\ \\mathrm{eV}"
          },
          {
            "text": "也就是說，被關在原子裡的電子不可能靜止不動。這是估算，重點在數量級。",
            "tex": ""
          }
        ]
      },
      "sources": [
        {
          "title": "Beiser, Concepts of Modern Physics 6th ed.，§3.7–3.9 Uncertainty Principle 與傳記欄",
          "url": ""
        }
      ]
    },
    {
      "id": "rutherford",
      "name": "拉塞福",
      "en": "Ernest Rutherford",
      "years": "1871–1937",
      "series": "atom",
      "era": "dawn",
      "keyYear": 1911,
      "equation": "R = \\dfrac{2Ze^2}{4\\pi\\varepsilon_0\\,\\mathrm{KE}}",
      "portrait": "assets/portraits/rutherford.jpg",
      "ready": true,
      "verified": true,
      "summary": "用 α 粒子撞金箔，發現原子有一個極小的原子核。",
      "clues": {
        "board": {
          "kind": "figure",
          "title": "牆上的實驗記錄",
          "image": "assets/clues/rutherford-foil.svg",
          "text": "用 α 粒子射向一片很薄的金箔。大部分粒子直接穿過，但有極少數被大角度彈開，甚至反彈回來。"
        },
        "desk": {
          "kind": "quote",
          "title": "書桌上的一句話",
          "text": "「這實在太不可思議了，就像你朝一張衛生紙發射一顆 15 吋砲彈，它卻彈回來打中你。」",
          "source": "Beiser, §4.1 引用的原話（此處為中文翻譯）"
        },
        "shelf": {
          "kind": "note",
          "title": "書架角落的馬鈴薯",
          "text": "一顆乾掉的馬鈴薯，旁邊的標籤寫著：「這是我挖的最後一顆馬鈴薯。」——寫於得知獲得劍橋獎學金的那天。"
        }
      },
      "hints": {
        "theory": "實驗在探測「原子內部」長什麼樣子。",
        "era": "這是 20 世紀初的實驗，在相對論提出之後幾年、第一次世界大戰之前。"
      },
      "candidates": [
        "rutherford",
        "bohr",
        "michelson",
        "townes"
      ],
      "bio": [
        "拉塞福來自紐西蘭。得知獲得劍橋大學獎學金時，他正在家裡的農場挖馬鈴薯，當下丟下鏟子說：「這是我挖的最後一顆馬鈴薯。」十三年後他獲得諾貝爾化學獎。",
        "在劍橋他師從湯姆森（J. J. Thomson），研究剛被發現的放射性，區分出 α 與 β 粒子。1898 年到加拿大麥基爾大學，發現 α 粒子就是氦原子核，並證明放射性衰變會讓一種元素變成另一種元素。",
        "1907 年回到英國曼徹斯特，1911 年證明只有「有核原子模型」才能解釋 α 粒子被金屬薄箔散射的結果。1919 年他首次以 α 粒子撞擊氮原子核，實現人工元素轉變，同年成為劍橋卡文迪西實驗室主任。"
      ],
      "contributions": [
        "區分 α、β 射線",
        "證明 α 粒子是氦原子核",
        "有核原子模型（1911）",
        "第一次人工元素轉變（1919）",
        "提出原子核中有質子"
      ],
      "derivation": {
        "title": "原子核有多小？估算最近距離",
        "steps": [
          {
            "text": "α 粒子正面撞向原子核時，會在離核 R 處停下，此時動能全部轉成電位能。α 粒子帶電 +2e，金原子核帶電 +Ze：",
            "tex": "\\mathrm{KE} = \\dfrac{1}{4\\pi\\varepsilon_0}\\,\\dfrac{(2e)(Ze)}{R}"
          },
          {
            "text": "解出最近距離 R：",
            "tex": "R = \\dfrac{2Ze^2}{4\\pi\\varepsilon_0\\,\\mathrm{KE}}"
          },
          {
            "text": "代入金的 Z = 79、天然 α 粒子最大動能 7.7 MeV，並利用 e²/4πε₀ ≈ 1.44 MeV·fm：",
            "tex": "R \\approx \\dfrac{2 \\times 79 \\times 1.44\\ \\mathrm{MeV\\cdot fm}}{7.7\\ \\mathrm{MeV}} \\approx 30\\ \\mathrm{fm} = 3.0 \\times 10^{-14}\\ \\mathrm{m}"
          },
          {
            "text": "原子本身約 10⁻¹⁰ m，原子核卻小於 10⁻¹⁴ m，差了一萬倍。這就是「原子大部分是空的」的意思。",
            "tex": ""
          }
        ]
      },
      "sources": [
        {
          "title": "Beiser, Concepts of Modern Physics 6th ed., §4.1 The Nuclear Atom 與傳記欄",
          "url": ""
        }
      ]
    },
    {
      "id": "bohr",
      "name": "波耳",
      "en": "Niels Bohr",
      "years": "1885–1962",
      "series": "atom",
      "era": "dawn",
      "keyYear": 1913,
      "equation": "E_n = -\\dfrac{13.6\\ \\mathrm{eV}}{n^2}",
      "portrait": "assets/portraits/bohr.jpg",
      "ready": true,
      "verified": true,
      "summary": "提出量子化軌道的氫原子模型。",
      "clues": {
        "board": {
          "kind": "figure",
          "title": "黑板上的階梯",
          "image": "assets/clues/bohr-levels.svg",
          "text": "一層一層的能階。電子從高處跳回 n = 2 時，放出不同顏色的光。"
        },
        "desk": {
          "kind": "quote",
          "title": "書桌上的公式",
          "text": "一張抄寫著巴耳末（Balmer）氫光譜公式的紙，旁邊寫著：「一看到巴耳末公式，一切就都清楚了。」",
          "source": "Beiser, Concepts of Modern Physics 6th ed. 傳記欄引用的原話（中文翻譯）"
        },
        "shelf": {
          "kind": "note",
          "title": "書架上的信",
          "text": "一封從英國曼徹斯特寄回哥本哈根的信：「拉塞福的原子核模型和古典物理完全衝突……」"
        }
      },
      "hints": {
        "theory": "電子只能待在特定的軌道上，跳躍時才放出光——這是在描述原子的構造。",
        "era": "拉塞福發現原子核之後兩年。"
      },
      "candidates": [
        "bohr",
        "rutherford",
        "debroglie",
        "schrodinger"
      ],
      "bio": [
        "波耳生於丹麥哥本哈根，一生大多在那裡度過。1911 年取得博士學位後到英國，在曼徹斯特的拉塞福實驗室接觸到剛發現的有核原子模型，而這個模型和當時的物理原理互相衝突。",
        "他認為只靠古典物理不可能理解原子，光的量子理論才是關鍵。1913 年回到哥本哈根後，朋友建議他看看巴耳末的氫光譜公式，他後來說：「一看到巴耳末公式，一切就都清楚了。」",
        "他提出兩個革命性的想法：電子只能在特定軌道上繞核運行；電子在軌道間跳躍時才吸收或放出光子。他用對應原理推出軌道角動量必須是 h/2π 的整數倍，並解釋了氫原子所有的光譜系列。"
      ],
      "contributions": [
        "波耳氫原子模型（1913）",
        "量子化軌道與能階躍遷",
        "對應原理",
        "哥本哈根理論物理研究所的領導者"
      ],
      "derivation": {
        "title": "從能階算出氫原子的紅色光譜線",
        "steps": [
          {
            "text": "波耳模型中，氫原子第 n 個能階的能量是：",
            "tex": "E_n = -\\dfrac{13.6\\ \\mathrm{eV}}{n^2}"
          },
          {
            "text": "電子從 n = 3 跳到 n = 2 時，放出的光子能量是兩能階的差：",
            "tex": "h\\nu = E_3 - E_2 = 13.6\\left(\\dfrac{1}{4} - \\dfrac{1}{9}\\right) \\approx 1.89\\ \\mathrm{eV}"
          },
          {
            "text": "換算成波長（hc ≈ 1240 eV·nm）：",
            "tex": "\\lambda = \\dfrac{hc}{h\\nu} = \\dfrac{1240\\ \\mathrm{eV\\cdot nm}}{1.89\\ \\mathrm{eV}} \\approx 656\\ \\mathrm{nm}"
          },
          {
            "text": "這正是巴耳末系中的紅色譜線 Hα。",
            "tex": ""
          }
        ]
      },
      "sources": [
        {
          "title": "Beiser, Concepts of Modern Physics 6th ed.，§4.4–4.5 The Bohr Atom、Energy Levels and Spectra 與傳記欄",
          "url": ""
        }
      ]
    },
    {
      "id": "townes",
      "name": "湯斯",
      "en": "Charles H. Townes",
      "years": "1915–2015",
      "series": "atom",
      "era": "modern",
      "keyYear": 1953,
      "equation": "",
      "portrait": "assets/portraits/townes.jpg",
      "ready": true,
      "verified": true,
      "summary": "發明邁射，促成雷射的誕生。",
      "clues": {
        "board": {
          "kind": "figure",
          "title": "黑板上的示意圖",
          "image": "assets/clues/townes-stimulated.svg",
          "text": "一顆光子打到處在高能階的分子，竟然變成兩顆一模一樣的光子一起飛出去。"
        },
        "desk": {
          "kind": "note",
          "title": "書桌上的照片",
          "text": "一張公園長椅的照片，背面寫著：「就是坐在這裡的時候想到的。」"
        },
        "shelf": {
          "kind": "note",
          "title": "書架上的模型",
          "text": "一個共振腔模型，標籤寫著：「氨（NH₃）分子，輸出波長 1.25 cm」。旁邊是一份貝爾實驗室雷達系統的舊設計圖。"
        }
      },
      "hints": {
        "theory": "受激發射牽涉到原子或分子在能階之間的躍遷，課本把雷射放在原子結構那一章。",
        "era": "這時第二次世界大戰已經結束，他之前還在貝爾實驗室設計雷達。"
      },
      "candidates": [
        "townes",
        "bohr",
        "compton",
        "einstein"
      ],
      "bio": [
        "湯斯生於美國南卡羅來納州，在杜克大學與加州理工學院完成研究所學業後，1939 到 1947 年在貝爾電話實驗室設計雷達控制的轟炸系統，之後加入哥倫比亞大學物理系。",
        "1951 年，他坐在公園長椅上時想到了邁射（maser，微波受激輻射放大）的點子，1953 年第一台邁射開始運作：把氨分子激發後送進共振腔，受激發射產生一連串波長完全相同（1.25 cm）的光子。高精度的原子鐘就是基於這個概念。",
        "1958 年他和蕭洛（Schawlow）發表論文，指出同樣的原理應該能用在可見光波段，也就是雷射。1964 年他與兩位蘇聯雷射先驅普羅霍羅夫、巴索夫共同獲得諾貝爾獎。"
      ],
      "contributions": [
        "發明邁射（1953）",
        "與蕭洛提出雷射的理論基礎（1958）",
        "1964 年諾貝爾物理學獎"
      ],
      "derivation": {
        "title": "邁射的光子能量有多小？",
        "steps": [
          {
            "text": "受激發射放出的光子，能量等於兩個能階的差：",
            "tex": "h\\nu = E_2 - E_1"
          },
          {
            "text": "氨邁射的波長是 1.25 cm，對應的頻率是：",
            "tex": "\\nu = \\dfrac{c}{\\lambda} = \\dfrac{3.00\\times10^{8}\\ \\mathrm{m/s}}{0.0125\\ \\mathrm{m}} = 2.4\\times10^{10}\\ \\mathrm{Hz}"
          },
          {
            "text": "光子能量只有約 0.1 meV，遠小於可見光光子的約 2 eV：",
            "tex": "E = h\\nu = (6.626\\times10^{-34})(2.4\\times10^{10}) \\approx 1.6\\times10^{-23}\\ \\mathrm{J} \\approx 1\\times10^{-4}\\ \\mathrm{eV}"
          },
          {
            "text": "要讓受激發射連鎖放大，高能階的分子數必須多於低能階，稱為「居量反轉」。",
            "tex": "N_2 > N_1"
          }
        ]
      },
      "sources": [
        {
          "title": "Beiser, Concepts of Modern Physics 6th ed.，§4.9 The Laser 與傳記欄",
          "url": ""
        }
      ]
    },
    {
      "id": "schrodinger",
      "name": "薛丁格",
      "en": "Erwin Schrödinger",
      "years": "1887–1961",
      "series": "quantum",
      "era": "revo",
      "keyYear": 1926,
      "equation": "i\\hbar \\dfrac{\\partial \\Psi}{\\partial t} = \\hat{H}\\Psi",
      "portrait": "assets/portraits/schrodinger.jpg",
      "ready": true,
      "verified": true,
      "summary": "寫下描述量子系統的波動方程式。",
      "clues": {
        "board": {
          "kind": "figure",
          "title": "黑板上的盒子",
          "image": "assets/clues/schrodinger-box.svg",
          "text": "一個粒子被關在兩面牆之間，只能出現這幾種固定形狀的波。"
        },
        "desk": {
          "kind": "note",
          "title": "書桌上的演講海報",
          "text": "一張 1925 年 11 月的演講海報，主題是德布羅意的物質波。海報背面有同事的留言：「既然是波，就需要一個波動方程式。」"
        },
        "shelf": {
          "kind": "quote",
          "title": "書架上的信",
          "text": "一封信寫著：「要是我懂更多數學就好了！我對這件事很樂觀……如果能解出來，它一定會非常美。」",
          "source": "Beiser, Concepts of Modern Physics 6th ed. 傳記欄引用的原話（中文翻譯）"
        }
      },
      "hints": {
        "theory": "這個方程式的解叫做「波函數」，用來描述整個量子系統。",
        "era": "物質波被提出的兩年後。"
      },
      "candidates": [
        "schrodinger",
        "heisenberg",
        "born",
        "debroglie"
      ],
      "bio": [
        "薛丁格生於維也納，在維也納大學取得博士學位。第一次世界大戰期間擔任砲兵軍官，戰後在幾所德國大學任職，之後成為瑞士蘇黎世的物理教授。",
        "1925 年 11 月底，他做了一場關於德布羅意物質波的演講。一位同事事後提醒他：要正確處理波，就需要波動方程式。他把這句話放在心上，幾週後就在信中寫到自己正努力建立新的原子理論。",
        "1926 年 1 月，他完成了四篇〈量子化作為本徵值問題〉的第一篇，提出以他命名的方程式，並解出氫原子的情況。"
      ],
      "contributions": [
        "薛丁格方程式（1926）",
        "波動力學",
        "解出氫原子的能階"
      ],
      "derivation": {
        "title": "盒中粒子的能量",
        "steps": [
          {
            "text": "不隨時間變化的一維薛丁格方程式：",
            "tex": "-\\dfrac{\\hbar^2}{2m}\\,\\dfrac{d^2\\psi}{dx^2} + U\\psi = E\\psi"
          },
          {
            "text": "粒子關在寬 L 的盒子裡（盒內 U = 0、牆外無限高），邊界條件 ψ(0) = ψ(L) = 0 只允許這些解：",
            "tex": "\\psi_n(x) = \\sqrt{\\dfrac{2}{L}}\\,\\sin\\dfrac{n\\pi x}{L}, \\qquad n = 1, 2, 3, \\dots"
          },
          {
            "text": "對應的能量只能是特定的值——能量量子化自然出現了：",
            "tex": "E_n = \\dfrac{n^2 h^2}{8mL^2}"
          },
          {
            "text": "以電子關在 0.1 nm 的盒子為例，最低能量是：",
            "tex": "E_1 = \\dfrac{(6.626\\times10^{-34})^2}{8(9.109\\times10^{-31})(10^{-10})^2} \\approx 6.0\\times10^{-18}\\ \\mathrm{J} \\approx 38\\ \\mathrm{eV}"
          }
        ]
      },
      "sources": [
        {
          "title": "Beiser, Concepts of Modern Physics 6th ed.，§5.3、§5.7–5.8 Schrödinger's Equation、Particle in a Box 與傳記欄",
          "url": ""
        }
      ]
    },
    {
      "id": "born",
      "name": "玻恩",
      "en": "Max Born",
      "years": "1882–1970",
      "series": "quantum",
      "era": "revo",
      "keyYear": 1926,
      "equation": "P = |\\Psi|^2",
      "portrait": "assets/portraits/born.jpg",
      "ready": true,
      "verified": true,
      "summary": "提出波函數的機率詮釋。",
      "clues": {
        "board": {
          "kind": "figure",
          "title": "黑板上的機率",
          "image": "assets/clues/born-probability.svg",
          "text": "上面是波函數 ψ，下面是 |ψ|²。量測 70 次電子的位置，點都集中在 |ψ|² 大的地方。"
        },
        "desk": {
          "kind": "note",
          "title": "書桌上的樂譜",
          "text": "一架鋼琴，譜架上是一首二重奏：「鋼琴：我；小提琴：愛因斯坦」。"
        },
        "shelf": {
          "kind": "note",
          "title": "書架上的名單",
          "text": "一份哥廷根大學的助理與訪問學者名單：海森堡、包立（Pauli）、費米（Fermi）、狄拉克（Dirac）……"
        }
      },
      "hints": {
        "theory": "|ψ|² 代表「在那裡找到粒子的機率」，這是量子力學的核心詮釋。",
        "era": "和薛丁格寫下方程式是同一年。"
      },
      "candidates": [
        "born",
        "schrodinger",
        "heisenberg",
        "planck"
      ],
      "bio": [
        "玻恩在當時屬於德國的布雷斯勞長大，1907 年在哥廷根取得應用數學博士，之後轉向物理，主要研究晶格理論。1915 年在普朗克推薦下成為柏林的物理教授，他在那裡會彈鋼琴，和拉小提琴的愛因斯坦合奏。",
        "第一次世界大戰後，他回到哥廷根擔任物理教授，在他的領導下形成了重要的理論物理中心：海森堡和包立曾是他的助理，費米、狄拉克等日後的諾貝爾獎得主也曾和他共事。他也是第一位使用「量子力學」這個詞的人。",
        "他提出了基本概念：粒子的波函數 ψ 和找到該粒子的機率有關，|ψ|² 就是機率密度。他用原子散射的量子理論來驗證這個詮釋。"
      ],
      "contributions": [
        "波函數的機率詮釋（1926）",
        "與海森堡、約當共同建立矩陣力學",
        "晶格理論",
        "首次使用「量子力學」一詞"
      ],
      "derivation": {
        "title": "用 |ψ|² 算機率",
        "steps": [
          {
            "text": "在 x 到 x + dx 之間找到粒子的機率是：",
            "tex": "P(x)\\,dx = |\\psi(x)|^2\\,dx"
          },
          {
            "text": "粒子一定在某處，所以全部機率加起來必須等於 1，稱為歸一化：",
            "tex": "\\int_{-\\infty}^{\\infty} |\\psi|^2\\,dx = 1"
          },
          {
            "text": "以盒中粒子的基態 ψ₁ 為例，粒子出現在盒子中間三分之一的機率是：",
            "tex": "P = \\int_{L/3}^{2L/3} \\dfrac{2}{L}\\sin^2\\dfrac{\\pi x}{L}\\,dx = \\dfrac{1}{3} + \\dfrac{\\sqrt{3}}{2\\pi} \\approx 0.61"
          },
          {
            "text": "如果是古典粒子，三段的機率會一樣都是 1/3；量子粒子卻偏愛待在中間。",
            "tex": ""
          }
        ]
      },
      "sources": [
        {
          "title": "Beiser, Concepts of Modern Physics 6th ed.，§3.2 Waves of What?、§5.5 Expectation Values 與傳記欄",
          "url": ""
        }
      ]
    }
  ]
};
