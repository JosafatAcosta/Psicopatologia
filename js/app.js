/* Psicopatología · Unidad 1 — lógica de la app (router + interacción) */

const STORAGE_KEY = "pp_progress_v1";
const THEME_KEY = "pp_theme";

// ---------- progreso (localStorage) ----------
function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (e) { return {}; }
}
function saveProgress(p) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch (e) {}
}
function getSessionProgress(sid) {
  const p = loadProgress();
  return p[sid] || { quiz: {}, flash: {}, case: false, compare: false };
}
function updateSessionProgress(sid, patch) {
  const p = loadProgress();
  p[sid] = Object.assign({ quiz: {}, flash: {}, case: false, compare: false }, p[sid] || {}, patch);
  saveProgress(p);
}
function sessionTotals(session) {
  const total = session.quiz.length + session.flashcards.length
    + (session.cases.length ? 1 : 0) + (session.comparative ? 1 : 0);
  const sp = getSessionProgress(session.id);
  let done = Object.keys(sp.quiz || {}).length + Object.keys(sp.flash || {}).length;
  if (sp.case) done += 1;
  if (sp.compare) done += 1;
  return { done: Math.min(done, total), total };
}
function overallTotals() {
  let done = 0, total = 0;
  CONTENT.sessions.forEach(s => { const t = sessionTotals(s); done += t.done; total += t.total; });
  return { done, total };
}

// ---------- utilidades ----------
function esc(str) {
  return String(str).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function $(sel, root) { return (root || document).querySelector(sel); }
function on(el, ev, fn) { el.addEventListener(ev, fn); }

// ---------- tema ----------
function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved) document.documentElement.setAttribute("data-theme", saved);
  updateThemeIcon();
}
function toggleTheme() {
  const cur = document.documentElement.getAttribute("data-theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const currentlyDark = cur ? cur === "dark" : prefersDark;
  const next = currentlyDark ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem(THEME_KEY, next);
  updateThemeIcon();
}
function updateThemeIcon() {
  const btn = $("#theme-toggle");
  if (!btn) return;
  const cur = document.documentElement.getAttribute("data-theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const dark = cur ? cur === "dark" : prefersDark;
  btn.textContent = dark ? "☀" : "☾";
}

// ---------- router ----------
function parseHash() {
  const h = location.hash.replace(/^#\/?/, "");
  const parts = h.split("/").filter(Boolean);
  if (parts.length === 0) return { view: "home" };
  if (parts[0] === "instalar") return { view: "instalar" };
  const sid = parts[0];
  const tab = parts[1] || "teoria";
  return { view: "session", sid, tab };
}

function navigate(hash) { location.hash = hash; }

function render() {
  const route = parseHash();
  const main = $("#app-main");
  if (route.view === "home") {
    main.innerHTML = renderHome();
    bindHome();
  } else if (route.view === "instalar") {
    main.innerHTML = renderInstalar();
    bindInstalar();
  } else {
    const session = CONTENT.sessions.find(s => s.id === route.sid);
    if (!session) { navigate("/"); return; }
    main.innerHTML = renderSession(session, route.tab);
    bindSession(session, route.tab);
  }
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

// ---------- vista: home ----------
function renderHome() {
  const ov = overallTotals();
  const pct = ov.total ? Math.round((ov.done / ov.total) * 100) : 0;

  const cards = CONTENT.sessions.map(s => {
    const t = sessionTotals(s);
    const donePct = t.total ? Math.round((t.done / t.total) * 100) : 0;
    const chips = s.modelos.length
      ? s.modelos.map(m => `<span class="chip">${esc(CONTENT.models[m].code)} ${esc(CONTENT.models[m].name)}</span>`).join("")
      : `<span class="chip alt">Encuadre</span>`;
    return `
      <button class="session-card" data-sid="${s.id}">
        <div class="meta">Semana ${s.semana} · Sesión ${esc(s.sesion)} <span class="dot"></span> ${esc(s.fecha)}</div>
        <h3>${esc(s.titulo)}</h3>
        <div class="chips">${chips}</div>
        ${donePct === 100 ? `<div class="done-badge">✓ Completada</div>` : `<div class="meta">${t.done}/${t.total} actividades</div>`}
      </button>`;
  }).join("");

  const biblio = CONTENT.bibliography.map(b => `
    <div class="biblio-item"><div class="tag">${esc(b.tag)}</div><div>${esc(b.apa)}</div></div>
  `).join("");

  return `
    <div class="hero">
      <div class="eyebrow">${esc(CONTENT.unit.label)} · ${esc(CONTENT.course)}</div>
      <h1>${esc(CONTENT.unit.title)}</h1>
      <p class="sub">${esc(CONTENT.institution)}</p>
      <div class="obj"><b>Objetivo de la unidad:</b> ${esc(CONTENT.unit.objetivo)}</div>
    </div>

    <button class="install-cta" data-nav="/instalar">
      <span class="install-cta-icon">📲</span>
      <span class="install-cta-text">
        <b>Instalar la app en tu celular</b>
        <span>Úsala sin internet una vez instalada · toma menos de un minuto</span>
      </span>
      <span class="install-cta-arrow">→</span>
    </button>

    <div class="progress-wrap">
      <div class="progress-bar"><span style="width:${pct}%"></span></div>
      <div class="progress-label"><span>Tu progreso</span><span>${pct}% (${ov.done}/${ov.total})</span></div>
    </div>

    <div class="section-title">Sesiones</div>
    <div class="session-grid">${cards}</div>

    <div class="section-title">Bibliografía de la unidad</div>
    <div class="biblio-list">${biblio}</div>

    <div class="bottom-note">Funciona sin conexión una vez cargada. Hecha con base en la carta descriptiva de Psicopatología.</div>
  `;
}

function bindHome() {
  document.querySelectorAll(".session-card").forEach(btn => {
    on(btn, "click", () => navigate("/" + btn.dataset.sid));
  });
  document.querySelectorAll("[data-nav]").forEach(el => on(el, "click", () => navigate(el.dataset.nav)));
}

// ---------- vista: sesión ----------
function renderSession(session, tab) {
  const idx = CONTENT.sessions.findIndex(s => s.id === session.id);
  const prev = CONTENT.sessions[idx - 1];
  const next = CONTENT.sessions[idx + 1];

  const tabs = [
    { key: "teoria", label: "Teoría" },
    { key: "flashcards", label: `Tarjetas (${session.flashcards.length})` },
    { key: "quiz", label: `Quiz (${session.quiz.length})` },
  ];
  if (session.cases.length) tabs.push({ key: "casos", label: "Caso clínico" });
  if (session.comparative) tabs.push({ key: "comparativo", label: "Cuadro comparativo" });

  const tabBtns = tabs.map(t => `<button class="tab-btn ${t.key === tab ? "active" : ""}" data-tab="${t.key}">${t.label}</button>`).join("");

  let body = "";
  if (tab === "flashcards") body = renderFlashcards(session);
  else if (tab === "quiz") body = renderQuiz(session);
  else if (tab === "casos") body = renderCases(session);
  else if (tab === "comparativo") body = renderComparative(session);
  else body = renderTeoria(session);

  return `
    <div class="crumbs"><button data-nav="/">Unidad 1</button> / ${esc(session.titulo)}</div>
    <div class="session-head">
      <div class="meta">Semana ${session.semana} · Sesión ${esc(session.sesion)} · ${esc(session.fecha)}</div>
      <h1>${esc(session.titulo)}</h1>
    </div>
    ${session.intro ? `<div class="session-intro">${esc(session.intro)}</div>` : ""}
    <div class="tabs">${tabBtns}</div>
    <div id="tab-body">${body}</div>
    <div class="pager">
      <button class="btn ghost" data-nav="${prev ? "/" + prev.id : "/"}">← ${prev ? esc(prev.titulo) : "Inicio"}</button>
      <button class="btn ghost" data-nav="${next ? "/" + next.id : "/"}">${next ? esc(next.titulo) : "Inicio"} →</button>
    </div>
  `;
}

function renderTeoria(session) {
  if (!session.modelos.length) {
    return `<div class="model-card"><div class="model-body">
      <div class="model-block"><p>${esc(session.intro || "")}</p></div>
    </div></div>`;
  }
  return session.modelos.map(key => {
    const m = CONTENT.models[key];
    return `
    <div class="model-card">
      <div class="illus"><div class="model-illustration">${ILLUSTRATIONS[m.svg]}</div></div>
      <div class="model-body">
        <div class="code">${esc(m.code)}</div>
        <h2>${esc(m.name)}</h2>
        <p class="tagline">${esc(m.tagline)}</p>
        <div class="model-block"><h4>Definición</h4><p>${esc(m.definicion)}</p></div>
        <div class="model-block"><h4>Supuestos clave</h4><ul>${m.supuestos.map(s => `<li>${esc(s)}</li>`).join("")}</ul></div>
        <div class="model-block"><h4>Mecanismo explicativo</h4><p>${esc(m.mecanismo)}</p></div>
        <div class="model-block"><h4>Autores / corrientes</h4><p>${esc(m.autores)}</p></div>
        <div class="model-block"><h4>Aplicación clínica</h4><p>${esc(m.aplicacion)}</p></div>
        <div class="model-block"><h4>Límites</h4><p class="limits">${esc(m.limites)}</p></div>
      </div>
    </div>`;
  }).join("");
}

function renderFlashcards(session) {
  const sp = getSessionProgress(session.id);
  const cards = session.flashcards.map((f, i) => `
    <div class="flashcard ${sp.flash[i] ? "" : ""}" data-i="${i}">
      <div class="inner">
        <div class="face front">${esc(f.term)}<span class="hint">toca para voltear</span></div>
        <div class="face back">${esc(f.def)}</div>
      </div>
    </div>
  `).join("");
  return `<div class="flash-grid">${cards}</div>`;
}

function renderQuiz(session) {
  const sp = getSessionProgress(session.id);
  const cards = session.quiz.map((q, i) => {
    const chosen = sp.quiz[i];
    const opts = q.options.map((o, oi) => {
      let cls = "opt-btn";
      if (chosen !== undefined) {
        if (oi === q.correct) cls += " correct";
        else if (oi === chosen) cls += " incorrect";
      }
      return `<button class="${cls}" data-i="${i}" data-oi="${oi}" ${chosen !== undefined ? "disabled" : ""}>${esc(o)}</button>`;
    }).join("");
    return `
      <div class="quiz-card">
        <div class="qnum">Pregunta ${i + 1} de ${session.quiz.length}</div>
        <h4>${esc(q.q)}</h4>
        <div class="opt-list">${opts}</div>
        ${chosen !== undefined ? `<div class="feedback">${esc(q.feedback)}</div>` : ""}
      </div>`;
  }).join("");
  const answered = Object.keys(sp.quiz).length;
  const correct = Object.entries(sp.quiz).filter(([i, oi]) => session.quiz[i].correct === oi).length;
  return `${cards}
    <div class="quiz-score">
      <span>Respondidas: <b>${answered}/${session.quiz.length}</b> · Correctas: <b>${correct}</b></span>
      <button class="reset-link" data-reset-quiz>Reiniciar</button>
    </div>`;
}

function renderCases(session) {
  return session.cases.map((c, ci) => {
    const opts = c.opciones.map((o, oi) => `
      <div class="case-opt">
        <input type="checkbox" id="case-${ci}-${oi}" data-ci="${ci}" data-oi="${oi}">
        <div>
          <label class="name" for="case-${ci}-${oi}">${esc(CONTENT.models[o.modelo].name)}</label>
          <div class="case-explain" data-ci="${ci}" data-oi="${oi}">${esc(o.explicacion)}</div>
        </div>
      </div>`).join("");
    return `
      <div class="case-card" data-ci="${ci}">
        <h3>${esc(c.titulo)}</h3>
        <div class="vineta">${esc(c.vineta)}</div>
        <p><b>${esc(c.pregunta)}</b></p>
        ${opts}
        <button class="btn" data-check-case="${ci}">Ver retroalimentación</button>
      </div>`;
  }).join("");
}

function renderComparative(session) {
  const c = session.comparative;
  const cols = c.columnas.map((col, i) => `
    <div class="compare-col">
      <h5>${esc(col)}</h5>
      <textarea data-col="${i}" placeholder="Escribe tu explicación aquí…"></textarea>
    </div>`).join("");
  const sugerida = c.respuestaSugerida.map(s => `<li>${esc(s)}</li>`).join("");
  return `
    <div class="compare-card">
      <div class="scenario">${esc(c.escenario)}</div>
      <p>${esc(c.prompt)}</p>
      <div class="compare-grid">${cols}</div>
      <button class="btn ghost" data-reveal-compare>Ver respuesta sugerida</button>
      <div class="suggested" id="suggested-box"><ul>${sugerida}</ul></div>
    </div>`;
}

// ---------- vista: instalar ----------
function detectPlatform() {
  const ua = navigator.userAgent || "";
  const isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isAndroid = /Android/.test(ua);
  const isStandalone = (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) || window.navigator.standalone === true;
  let platform = "desktop";
  if (isIOS) platform = "ios";
  else if (isAndroid) platform = "android";
  return { platform, isStandalone };
}

const INSTALL_STEPS = {
  ios: {
    label: "iPhone / iPad",
    steps: [
      { icon: "share", text: "Abre este enlace en <b>Safari</b> — en iPhone/iPad la instalación solo funciona desde Safari, no desde Chrome ni dentro de otra app (como WhatsApp)." },
      { icon: "share", text: "Toca el ícono <b>Compartir</b> (el cuadro con la flecha hacia arriba) en la barra inferior." },
      { icon: "addSquare", text: "Desliza hacia abajo en el menú y toca <b>“Añadir a pantalla de inicio”</b>." },
      { icon: "check", text: "Toca <b>“Añadir”</b> arriba a la derecha. Listo — el ícono Ψ aparecerá en tu pantalla de inicio como una app normal." },
    ]
  },
  android: {
    label: "Android",
    steps: [
      { icon: "check", text: "Abre este enlace en <b>Chrome</b>. Si arriba aparece el botón <b>“Instalar app”</b>, tócalo y confirma — listo." },
      { icon: "menuDots", text: "Si no ves ese botón, toca el menú de <b>tres puntos</b> ⋮ en la esquina superior derecha del navegador." },
      { icon: "addSquare", text: "Toca <b>“Instalar app”</b> o <b>“Añadir a pantalla de inicio”</b> y confirma." },
      { icon: "check", text: "El ícono Ψ quedará en tu pantalla de inicio y funcionará sin internet." },
    ]
  },
  desktop: {
    label: "Computadora",
    steps: [
      { icon: "addressBar", text: "Abre este enlace en <b>Chrome</b> o <b>Edge</b>." },
      { icon: "addressBar", text: "Busca el ícono de instalación <b>⊕</b> al final de la barra de direcciones (a la derecha, junto a favoritos)." },
      { icon: "check", text: "Haz clic y confirma <b>“Instalar”</b> — la app se abrirá en su propia ventana, como un programa aparte." },
    ]
  }
};

function stepsHtml(platformKey) {
  const items = INSTALL_STEPS[platformKey].steps.map((s, i) => `
    <li class="step">
      <span class="step-num">${i + 1}</span>
      <span class="step-icon">${ICONS[s.icon]}</span>
      <span class="step-text">${s.text}</span>
    </li>`).join("");
  return `<ol class="step-list">${items}</ol>`;
}

function renderInstalar() {
  const { platform, isStandalone } = detectPlatform();
  const url = CONTENT.appUrl;

  if (isStandalone) {
    return `
      <div class="crumbs"><button data-nav="/">Unidad 1</button> / Instalar la app</div>
      <div class="install-page">
        <div class="installed-ok">
          <span class="ui-icon-lg">${ICONS.check}</span>
          <h1>¡Ya la tienes instalada!</h1>
          <p>Estás usando la app instalada en tu dispositivo. Funciona sin conexión desde aquí — no necesitas hacer nada más.</p>
        </div>
      </div>`;
  }

  const tabs = ["ios", "android", "desktop"].map(key => `
    <button class="tab-btn ${key === platform ? "active" : ""}" data-platform="${key}">${INSTALL_STEPS[key].label}</button>
  `).join("");

  const panels = ["ios", "android", "desktop"].map(key => `
    <div class="install-panel ${key === platform ? "active" : ""}" data-platform-panel="${key}">${stepsHtml(key)}</div>
  `).join("");

  return `
    <div class="crumbs"><button data-nav="/">Unidad 1</button> / Instalar la app</div>
    <div class="install-page">
      <h1>Instalar la app en tu celular</h1>
      <p class="sub">Detectamos que estás en <b>${esc(INSTALL_STEPS[platform].label)}</b>. Sigue estos pasos — toma menos de un minuto y después funciona sin internet.</p>

      <div class="tabs platform-tabs">${tabs}</div>
      <div class="install-panels">${panels}</div>

      <div class="section-title">O comparte el acceso con un código QR</div>
      <div class="qr-box">
        <img src="icons/qr-instalar.png" alt="Código QR para abrir la app" width="164" height="164">
        <div class="qr-info">
          <p>Escanea este código con la cámara de tu celular para abrir la app directamente, y luego sigue los pasos de arriba.</p>
          <div class="copy-row">
            <input type="text" readonly value="${esc(url)}" id="url-field">
            <button class="btn ghost" id="copy-url-btn">Copiar enlace</button>
          </div>
        </div>
      </div>
    </div>`;
}

function bindInstalar() {
  document.querySelectorAll("[data-nav]").forEach(el => on(el, "click", () => navigate(el.dataset.nav)));
  document.querySelectorAll("[data-platform]").forEach(btn => {
    on(btn, "click", () => {
      const key = btn.dataset.platform;
      document.querySelectorAll("[data-platform]").forEach(b => b.classList.toggle("active", b === btn));
      document.querySelectorAll("[data-platform-panel]").forEach(p => p.classList.toggle("active", p.dataset.platformPanel === key));
    });
  });
  const copyBtn = $("#copy-url-btn");
  if (copyBtn) on(copyBtn, "click", async () => {
    const field = $("#url-field");
    try {
      await navigator.clipboard.writeText(field.value);
      copyBtn.textContent = "¡Copiado!";
    } catch (e) {
      field.select();
      copyBtn.textContent = "Selecciona y copia";
    }
    setTimeout(() => { copyBtn.textContent = "Copiar enlace"; }, 2000);
  });
}

// ---------- bind: sesión ----------
function bindSession(session, tab) {
  document.querySelectorAll("[data-nav]").forEach(el => on(el, "click", () => navigate(el.dataset.nav)));
  document.querySelectorAll(".tab-btn").forEach(el => on(el, "click", () => navigate("/" + session.id + "/" + el.dataset.tab)));

  if (tab === "flashcards") {
    document.querySelectorAll(".flashcard").forEach(card => {
      on(card, "click", () => {
        card.classList.toggle("flipped");
        const i = card.dataset.i;
        const sp = getSessionProgress(session.id);
        sp.flash[i] = true;
        updateSessionProgress(session.id, sp);
      });
    });
  }

  if (tab === "quiz") {
    document.querySelectorAll(".opt-btn").forEach(btn => {
      on(btn, "click", () => {
        const i = btn.dataset.i, oi = Number(btn.dataset.oi);
        const sp = getSessionProgress(session.id);
        sp.quiz[i] = oi;
        updateSessionProgress(session.id, sp);
        render();
      });
    });
    const resetBtn = $("[data-reset-quiz]");
    if (resetBtn) on(resetBtn, "click", () => { updateSessionProgress(session.id, { quiz: {} }); render(); });
  }

  if (tab === "casos") {
    document.querySelectorAll("[data-check-case]").forEach(btn => {
      on(btn, "click", () => {
        const ci = btn.dataset.checkCase;
        const card = document.querySelector(`.case-card[data-ci="${ci}"]`);
        const checks = card.querySelectorAll(`input[data-ci="${ci}"]`);
        checks.forEach(chk => {
          const oi = chk.dataset.oi;
          const opt = session.cases[ci].opciones[oi];
          const exp = card.querySelector(`.case-explain[data-oi="${oi}"]`);
          exp.classList.add("show");
          const selected = chk.checked;
          const isRight = selected === opt.correcta;
          exp.classList.remove("right", "wrong");
          exp.classList.add(isRight ? "right" : "wrong");
        });
        updateSessionProgress(session.id, { case: true });
      });
    });
  }

  if (tab === "comparativo") {
    const revealBtn = $("[data-reveal-compare]");
    if (revealBtn) on(revealBtn, "click", () => {
      $("#suggested-box").classList.add("show");
      updateSessionProgress(session.id, { compare: true });
    });
  }
}

// ---------- PWA: instalación + offline ----------
let deferredInstallPrompt = null;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  const btn = $("#install-btn");
  if (btn) btn.classList.add("show");
});
function tryInstall() {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  deferredInstallPrompt.userChoice.finally(() => {
    deferredInstallPrompt = null;
    const btn = $("#install-btn");
    if (btn) btn.classList.remove("show");
  });
}
function updateOnlineState() {
  const pill = $("#offline-pill");
  if (!pill) return;
  pill.classList.toggle("show", !navigator.onLine);
}

// ---------- init ----------
window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", () => {
  initTheme();
  render();
  const themeBtn = $("#theme-toggle");
  if (themeBtn) on(themeBtn, "click", toggleTheme);
  const installBtn = $("#install-btn");
  if (installBtn) on(installBtn, "click", tryInstall);
  window.addEventListener("online", updateOnlineState);
  window.addEventListener("offline", updateOnlineState);
  updateOnlineState();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
});
