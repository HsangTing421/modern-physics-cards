/* 物理學家召喚錄｜主程式（資料在 data.js） */
(function () {
  "use strict";
  const D = window.PHYSICS_DATA;
  const STORE_KEY = "physics-cards-v1";
  const app = document.getElementById("app");
  const seriesById = Object.fromEntries(D.series.map(s => [s.id, s]));
  const eraById = Object.fromEntries(D.eras.map(e => [e.id, e]));
  const P = Object.fromEntries(D.physicists.map(p => [p.id, p]));
  const sorted = [...D.physicists].sort((a, b) => a.keyYear - b.keyYear);

  /* ---------- storage ---------- */
  let memoryStore = null;
  function load() {
    const empty = { cards: {}, achievements: [] };
    try { const raw = localStorage.getItem(STORE_KEY); return raw ? Object.assign(empty, JSON.parse(raw)) : empty; }
    catch (e) { return memoryStore || empty; }
  }
  function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { memoryStore = state; } }
  let state = load();

  /* ---------- helpers ---------- */
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const has = id => !!state.cards[id];
  const count = () => Object.keys(state.cards).filter(id => P[id]).length;
  const today = () => { const d = new Date(); return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`; };
  function tex(s, display) {
    if (!s) return "";
    try { return window.katex ? katex.renderToString(s, { throwOnError: false, displayMode: !!display, output: "mathml" }) : esc(s); }
    catch (e) { return esc(s); }
  }
  function toast(html) {
    const el = document.createElement("div"); el.className = "toast"; el.innerHTML = html;
    document.getElementById("toast-zone").appendChild(el); setTimeout(() => el.remove(), 4200);
  }
  const SIL = (fill) => `<svg viewBox="0 0 100 110" aria-hidden="true"><path fill="${fill}" d="M50 8c-14 0-24 11-24 26 0 10 4 18 10 23-15 5-27 15-30 33-1 6 3 12 9 12h70c6 0 10-6 9-12-3-18-15-28-30-33 6-5 10-13 10-23 0-15-10-26-24-26z"/></svg>`;
  const starStr = n => "★".repeat(n) + "☆".repeat(3 - n);

  function cardHTML(p, opts = {}) {
    const s = seriesById[p.series];
    const owned = has(p.id) || opts.force;
    if (!owned) {
      return `<div class="pcard locked ${p.ready ? "ready" : ""} ${opts.big ? "big" : ""}" style="--sc:${s.color}"><div class="frame"></div>
        <div class="art"><span class="q">?</span></div>
        <span class="glyph" style="color:${s.color}">${esc(s.glyph)}</span>
        <div class="plate"><div class="nm">${p.ready ? "等待召喚" : "尚未開放"}</div></div></div>`;
    }
    const stars = state.cards[p.id] ? state.cards[p.id].stars : 0;
    return `<div class="pcard ${opts.big ? "big" : ""}" style="background:radial-gradient(circle at 50% 35%, ${s.color}55, #0f1a15 70%)">
      <div class="art">${p.portrait ? `<img src="${esc(p.portrait)}" alt="${esc(p.name)}肖像">` : SIL(s.color)}</div>
      <div class="frame"></div>
      <span class="tag-series" style="background:${s.color}">${esc(s.name)}</span>
      ${stars ? `<span class="stars">${starStr(stars)}</span>` : ""}
      <span class="glyph">${esc(s.glyph)}</span>
      <div class="plate"><div class="nm">${esc(p.name)}</div><div class="en">${esc(p.en)}・${esc(p.years)}</div>
        <div class="eq">${tex(p.equation)}</div></div></div>`;
  }

  /* ---------- achievements ---------- */
  function achievementDefs() {
    const g = [];
    D.series.forEach(s => g.push({ key: "series-" + s.id, group: "系列", glyph: s.glyph, base: s.name, members: D.physicists.filter(p => p.series === s.id) }));
    D.eras.forEach(e => { const m = D.physicists.filter(p => p.era === e.id); if (m.length >= D.eraAchievementMin) g.push({ key: "era-" + e.id, group: "時代", glyph: e.name[0], base: e.name, members: m }); });
    g.push({ key: "all", group: "總", glyph: "ψ", base: "全部", members: D.physicists });
    return g.map(x => ({ id: x.key, group: x.group, glyph: x.glyph,
      title: (D.achievementNames && D.achievementNames[x.key]) || x.base + "全收集",
      desc: `集滿「${x.base}」的 ${x.members.length} 張卡`, need: x.members.length, have: x.members.filter(m => has(m.id)).length }));
  }
  function checkAchievements() {
    achievementDefs().forEach(a => { if (a.have >= a.need && !state.achievements.includes(a.id)) { state.achievements.push(a.id); toast(`🏅 解鎖成就：<b>${esc(a.title)}</b>`); } });
    save();
  }

  /* ---------- home ---------- */
  let homeMode = "series";
  function renderHome() {
    const total = D.physicists.length, n = count(), C = 2 * Math.PI * 50;
    const groups = homeMode === "series"
      ? D.series.map(s => ({ title: s.name, sub: `${s.chapter}・${s.desc}`, list: sorted.filter(p => p.series === s.id) }))
      : D.eras.map(e => ({ title: e.name, sub: e.range, list: sorted.filter(p => p.era === e.id) }));
    app.innerHTML = `
      <section class="hero"><div>
        <h1>在研究室裡，召喚一位物理學家</h1>
        <p>走進一間空無一人的研究室，從黑板、書桌和書架找出線索，推理主人研究的是什麼、活在哪個年代，再從候選人中把他召喚出來，收進你的卡冊。</p></div>
        <div class="progress-ring" aria-label="已收集 ${n} 張，共 ${total} 張">
          <svg width="120" height="120"><circle cx="60" cy="60" r="50" fill="none" stroke="#24362d" stroke-width="10"/>
          <circle cx="60" cy="60" r="50" fill="none" stroke="#d6b26a" stroke-width="10" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - n / total)}"/></svg>
          <div class="num"><div><b>${n}</b><span>／${total} 張</span></div></div></div>
      </section>
      <div class="tabs"><button class="tab ${homeMode === "series" ? "active" : ""}" data-m="series">依理論</button><button class="tab ${homeMode === "era" ? "active" : ""}" data-m="era">依時代</button></div>
      ${groups.map(g => `<section class="group"><div class="group-head"><h2>${esc(g.title)}</h2><span class="sub">${esc(g.sub)}・${g.list.filter(p => has(p.id)).length}/${g.list.length}</span></div>
        <div class="card-grid">${g.list.map(p => {
          const href = has(p.id) ? `#card-${p.id}` : `#puzzle-${p.id}`;
          return `<a class="card-link" href="${href}">${cardHTML(p)}<div class="card-caption">${has(p.id) ? esc(p.name) : (p.ready ? "開始解謎" : "內容準備中")}
            ${has(p.id) ? "" : `<em>${esc(seriesById[p.series].name)}</em>`}</div></a>`;
        }).join("")}</div></section>`).join("")}`;
    app.querySelectorAll(".tab").forEach(b => b.onclick = () => { homeMode = b.dataset.m; renderHome(); });
  }

  /* ---------- puzzle ---------- */
  const SPOTS = [
    { key: "board", label: "黑板", x: 3.5, y: 8.5, w: 37.5, h: 50 },
    { key: "desk", label: "書桌", x: 33, y: 40, w: 36, h: 52 },
    { key: "shelf", label: "書架", x: 71.5, y: 7.5, w: 25, h: 84 }
  ];
  let S = null; // puzzle session

  function renderPuzzle(id) {
    const p = P[id];
    if (!p) { app.innerHTML = `<p class="empty-note">找不到這位物理學家。<a href="#home">回首頁</a></p>`; return; }
    if (!p.ready) {
      app.innerHTML = `<a class="back" href="#home">← 回召喚室</a><div class="panel"><h2>這間研究室還沒開放</h2><p class="muted">線索與生平正在依課本整理與查證中，完成後就能解謎召喚。</p></div>`;
      return;
    }
    if (!S || S.id !== id) S = { id, step: 1, found: [], wrong: { theory: [], era: [], cand: [] }, done: { theory: false, era: false, cand: false } };
    const labels = ["蒐集線索", "推理理論", "推理時代", "召喚"];
    const stepDone = [S.found.length === 3, S.done.theory, S.done.era, S.done.cand];
    const head = `<a class="back" href="#home">← 回召喚室</a>
      <div class="puzzle-head"><div><h1>無人的研究室</h1><p>這裡的主人是誰？</p></div></div>
      <div class="steps">${labels.map((l, i) => `<div class="step ${S.step === i + 1 ? "active" : ""} ${stepDone[i] ? "done" : ""}"><span class="n">${stepDone[i] ? "✓" : i + 1}</span>${l}</div>`).join("")}</div>`;
    let body = "";
    if (S.step === 1) body = roomPanel(p);
    if (S.step === 2) body = choicePanel(p, "theory");
    if (S.step === 3) body = choicePanel(p, "era");
    if (S.step === 4) body = summonPanel(p);
    app.innerHTML = head + body;
    bindPuzzle(p);
  }

  function clueHTML(c, k) {
    const sp = SPOTS.find(s => s.key === k);
    return `<div class="clue ${c.kind === "quote" ? "quote" : ""} clue-note"><h3>${esc(sp.label)}｜${esc(c.title)}</h3>
      ${c.image ? `<img src="${esc(c.image)}" alt="${esc(c.title)}">` : ""}
      ${c.text ? `<div>${esc(c.text)}</div>` : ""}${c.source ? `<div class="src">出處：${esc(c.source)}</div>` : ""}</div>`;
  }

  function roomPanel(p) {
    const ready = S.found.length === 3;
    return `<section class="room-wrap">
      <div><div class="room"><img src="assets/room.svg" alt="研究室">
        ${SPOTS.map(s => `<button class="spot ${S.found.includes(s.key) ? "found" : ""}" data-k="${s.key}" style="left:${s.x}%;top:${s.y}%;width:${s.w}%;height:${s.h}%" aria-label="調查${s.label}"><span class="lbl">調查${s.label}</span></button>`).join("")}
      </div><div class="room-tip">點擊黑板、書桌、書架調查，找齊 3 條線索。（${S.found.length}/3）</div></div>
      <div class="clue-board">
        ${S.found.length ? S.found.map(k => clueHTML(p.clues[k], k)).join("") : `<div class="clue empty">還沒有線索。先四處看看吧。</div>`}
        ${ready ? `<div class="actions"><button class="btn" id="to-theory">開始推理 →</button></div>` : ""}
      </div></section>`;
  }

  function choicePanel(p, kind) {
    const isTheory = kind === "theory";
    const items = isTheory ? D.series.map(s => ({ id: s.id, label: s.name, small: s.chapter }))
                           : D.eras.map(e => ({ id: e.id, label: e.name, small: e.range }));
    const answer = isTheory ? p.series : p.era;
    const done = S.done[kind];
    const wrongs = S.wrong[kind];
    return `<section class="panel">
      <div class="clue-strip">${S.found.map(k => `<span>${esc(p.clues[k].title)}</span>`).join("")}<button class="link-btn" id="review">回去看線索</button></div>
      <h2>${isTheory ? "這位主人研究的是哪一個領域？" : "他活躍在哪一個時代？"}</h2>
      <div class="options">${items.map(it => {
        const cls = done && it.id === answer ? "right" : wrongs.includes(it.id) ? "wrong" : "";
        return `<button class="opt ${cls}" data-id="${it.id}" ${done || wrongs.includes(it.id) ? "disabled" : ""}>${esc(it.label)}<small>${esc(it.small)}</small></button>`;
      }).join("")}</div>
      <div id="fb">${done ? `<div class="feedback good">✓ 推理正確！</div>` : wrongs.length ? `<div class="feedback bad">再想想。提示：${esc(p.hints[kind])}</div>` : ""}</div>
      ${done ? `<div class="actions"><button class="btn" id="next-step">${isTheory ? "推理時代 →" : "準備召喚 →"}</button></div>` : ""}
    </section>`;
  }

  function summonPanel(p) {
    if (S.done.cand) {
      return `<section class="panel"><div class="summon-stage">
        <div class="circle">${magicCircle(seriesById[p.series].color)}</div>
        <div class="summon-card"><div class="flip">${cardHTML(p, { force: true, big: true })}</div></div></div>
        <div style="text-align:center"><h2>${esc(p.name)} 應召喚而來！</h2>
          <p>評價 <span style="color:var(--gold)">${starStr(S.stars)}</span>　${S.stars === 3 ? "完美推理，一次都沒有出錯！" : "答錯越少，星等越高。"}</p>
          <div class="actions" style="justify-content:center"><a class="btn" href="#card-${p.id}">查看生平與推導</a><a class="btn ghost" href="#home">回召喚室</a></div></div></section>`;
    }
    const wrongs = S.wrong.cand;
    return `<section class="panel"><h2>召喚陣已準備好，研究室的主人是……？</h2>
      <p class="muted">已知：${esc(seriesById[p.series].name)}・${esc(eraById[p.era].name)}（${esc(eraById[p.era].range)}）</p>
      <div class="summon-cands">${p.candidates.map(cid => { const c = P[cid]; return `<button class="cand ${wrongs.includes(cid) ? "wrong" : ""}" data-id="${cid}" ${wrongs.includes(cid) ? "disabled" : ""}>
        <div class="sil">${SIL("#2b3b33")}</div><div class="nm">${esc(c.name)}</div><div class="yr">${esc(c.en)}</div></button>`; }).join("")}</div>
      <div id="fb">${wrongs.length ? `<div class="feedback bad">召喚陣沒有回應……這位不是研究室的主人。</div>` : ""}</div></section>`;
  }

  function magicCircle(color) {
    const glyphs = "ψħνλΔEcπ∞";
    return `<svg viewBox="0 0 200 200" aria-hidden="true"><g fill="none" stroke="#d6b26a" opacity=".85">
      <circle cx="100" cy="100" r="96" stroke-width="1.5"/><circle cx="100" cy="100" r="86" stroke-width=".8"/><circle cx="100" cy="100" r="60" stroke="${color}" stroke-width="1.5"/>
      <polygon points="100,14 174,143 26,143" stroke-width="1"/><polygon points="100,186 26,57 174,57" stroke-width="1"/></g>
      ${[...glyphs].map((g, i) => { const a = i / glyphs.length * Math.PI * 2; return `<text x="${100 + 91 * Math.cos(a)}" y="${100 + 91 * Math.sin(a) + 3}" font-size="9" fill="#f0d9a4" text-anchor="middle">${g}</text>`; }).join("")}</svg>`;
  }

  function bindPuzzle(p) {
    const $ = s => app.querySelector(s);
    app.querySelectorAll(".spot").forEach(b => b.onclick = () => {
      if (!S.found.includes(b.dataset.k)) S.found.push(b.dataset.k);
      renderPuzzle(p.id);
    });
    const toT = $("#to-theory"); if (toT) toT.onclick = () => { S.step = 2; renderPuzzle(p.id); };
    const rev = $("#review"); if (rev) rev.onclick = () => { S.step = 1; renderPuzzle(p.id); };
    const kind = S.step === 2 ? "theory" : S.step === 3 ? "era" : null;
    if (kind && !S.done[kind]) {
      const ans = kind === "theory" ? p.series : p.era;
      app.querySelectorAll(".opt").forEach(b => b.onclick = () => {
        if (b.dataset.id === ans) S.done[kind] = true; else S.wrong[kind].push(b.dataset.id);
        renderPuzzle(p.id);
      });
    }
    const nx = $("#next-step"); if (nx) nx.onclick = () => { S.step = S.step === 2 ? (S.done.era ? 4 : 3) : 4; renderPuzzle(p.id); };
    if (S.step === 4 && !S.done.cand) {
      app.querySelectorAll(".cand").forEach(b => b.onclick = () => {
        if (b.dataset.id === p.id) {
          S.done.cand = true;
          const mistakes = S.wrong.theory.length + S.wrong.era.length + S.wrong.cand.length;
          S.stars = mistakes === 0 ? 3 : mistakes <= 2 ? 2 : 1;
          const prev = state.cards[p.id];
          if (!prev) { state.cards[p.id] = { date: today(), stars: S.stars }; save(); updateNav(); checkAchievements(); }
          else if (S.stars > prev.stars) { prev.stars = S.stars; save(); }
          const f = document.createElement("div"); f.className = "flash"; document.body.appendChild(f); setTimeout(() => f.remove(), 1000);
        } else S.wrong.cand.push(b.dataset.id);
        renderPuzzle(p.id);
      });
    }
  }

  /* ---------- card detail ---------- */
  function renderCard(id) {
    const p = P[id];
    if (!p || !has(id)) { location.hash = p ? "#puzzle-" + id : "#home"; return; }
    const s = seriesById[p.series], e = eraById[p.era], c = state.cards[id];
    app.innerHTML = `<a class="back" href="#album">← 回卡冊</a>
      <div class="detail"><div>${cardHTML(p, { big: true })}
        <div class="tagline" style="justify-content:center"><span class="tag">${esc(s.name)}</span><span class="tag">${esc(e.name)}・${p.keyYear}</span>
        ${p.verified ? "" : `<span class="tag warn">待查證</span>`}</div>
        <p class="muted" style="text-align:center;font-size:13px">${esc(c.date)} 召喚・最佳評價 ${starStr(c.stars)}</p></div>
      <div>
        <h1 style="color:var(--gold-2)">${esc(p.name)}<span class="muted" style="font-size:16px;margin-left:10px">${esc(p.en)}（${esc(p.years)}）</span></h1>
        <h2>生平</h2>${(p.bio || []).map(t => `<p>${esc(t)}</p>`).join("")}
        <h2>主要貢獻</h2><ul>${(p.contributions || []).map(t => `<li>${esc(t)}</li>`).join("")}</ul>
        ${p.derivation ? `<details class="derive"><summary>想更深入？${esc(p.derivation.title)}</summary><ol>
          ${p.derivation.steps.map(st => `<li>${esc(st.text)}${st.tex ? `<span class="tex">${tex(st.tex, true)}</span>` : ""}</li>`).join("")}</ol></details>` : ""}
        <div class="sources">來源：${(p.sources || []).map(x => x.url ? `<a href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.title)}</a>` : esc(x.title)).join("；")}</div>
      </div></div>`;
  }

  /* ---------- album ---------- */
  function renderAlbum() {
    const owned = sorted.filter(p => has(p.id));
    app.innerHTML = `<h1 class="page-title">我的卡冊</h1><p class="page-sub">已收集 ${owned.length}／${D.physicists.length} 張。點卡片可以查看生平與推導。</p>
      ${owned.length ? `<div class="card-grid">${owned.map(p => `<a class="card-link" href="#card-${p.id}">${cardHTML(p)}<div class="card-caption">${esc(p.name)}<em>${esc(state.cards[p.id].date)}</em></div></a>`).join("")}</div>`
        : `<p class="empty-note">卡冊還是空的。<a href="#home">去召喚第一位物理學家</a></p>`}`;
  }

  function renderAchievements() {
    const defs = achievementDefs(), groups = [...new Set(defs.map(d => d.group))];
    app.innerHTML = `<h1 class="page-title">成就</h1><p class="page-sub">已解鎖 ${defs.filter(d => d.have >= d.need).length}／${defs.length} 項。</p>
      ${groups.map(g => `<section class="ach-group"><h2>${esc(g)}成就</h2><div class="ach-list">${defs.filter(d => d.group === g).map(d => {
        const ok = d.have >= d.need;
        return `<div class="ach ${ok ? "done" : ""}"><div class="medal">${esc(d.glyph)}</div><div><h3>${esc(d.title)}</h3><div class="desc">${esc(d.desc)}</div>
          <div class="bar"><span style="width:${d.have / d.need * 100}%"></span></div><div class="frac">${d.have}／${d.need}${ok ? "・已解鎖" : ""}</div></div></div>`;
      }).join("")}</div></section>`).join("")}`;
  }

  /* ---------- router ---------- */
  function updateNav() { document.getElementById("nav-count").textContent = count(); }
  function route() {
    const h = location.hash.replace(/^#/, "");
    const nav = h.startsWith("puzzle-") ? "home" : h.startsWith("card-") ? "album" : (h || "home");
    document.querySelectorAll("[data-nav]").forEach(a => a.classList.toggle("active", a.dataset.nav === nav));
    if (h.startsWith("puzzle-")) renderPuzzle(h.slice(7));
    else if (h.startsWith("card-")) renderCard(h.slice(5));
    else if (h === "album") renderAlbum();
    else if (h === "achievements") renderAchievements();
    else renderHome();
    if (!h.startsWith("puzzle-")) S = null;
    updateNav();
  }
  window.addEventListener("hashchange", () => { route(); window.scrollTo(0, 0); });

  const reset = document.getElementById("reset-btn"); let armed = false;
  reset.onclick = () => {
    if (!armed) { armed = true; reset.textContent = "確定要清除嗎？再按一次"; setTimeout(() => { armed = false; reset.textContent = "清除我的收集紀錄"; }, 4000); return; }
    state = { cards: {}, achievements: [] }; save(); armed = false; reset.textContent = "清除我的收集紀錄"; S = null; route(); toast("已清除收集紀錄");
  };
  route();
})();
