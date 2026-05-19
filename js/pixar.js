const CHAR_THEMES = MOVIE_IDS;
let currentLang = localStorage.getItem('pixar-lang') || 'ja';
let currentDetailId = null;

function t(path) {
  const keys = path.split('.');
  let v = I18N[currentLang];
  for (const k of keys) {
    if (v == null || v[k] === undefined) {
      let fallback = I18N.ja;
      for (const k2 of keys) {
        fallback = fallback?.[k2];
      }
      return fallback ?? '';
    }
    v = v[k];
  }
  return v ?? '';
}

function setLang(lang) {
  if (!I18N[lang]) return;
  currentLang = lang;
  localStorage.setItem('pixar-lang', lang);
  document.documentElement.lang = lang === 'ko' ? 'ko' : lang === 'en' ? 'en' : 'ja';
  document.title = t('ui.pageTitle');
  applyStaticI18n();
  updateMovieCards();
  updateDetailPage();
  updateActiveCharPage();
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function applyStaticI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t('ui.' + key);
    if (key === 'heroTitle') {
      el.innerHTML = val.replace('\n', '<br>');
    } else {
      el.textContent = val;
    }
  });
}

function updateMovieCards() {
  document.querySelectorAll('.movie-card[data-movie]').forEach(card => {
    const id = card.dataset.movie;
    const m = t('movies.' + id);
    if (!m || typeof m !== 'object') return;
    const title = card.querySelector('.movie-title');
    const year = card.querySelector('.movie-year');
    const desc = card.querySelector('.movie-desc');
    const tag = card.querySelector('.movie-tag');
    const img = card.querySelector('.movie-visual img');
    if (title) title.textContent = m.title;
    if (year) year.textContent = m.year;
    if (desc) desc.textContent = m.desc;
    if (tag) tag.textContent = m.tag;
    if (img) img.alt = m.title;
    card.querySelectorAll('[data-i18n-ui]').forEach(btn => {
      btn.textContent = t('ui.' + btn.dataset.i18nUi);
    });
  });
}

function updateCharPageTexts(page, id) {
  const m = t('movies.' + id);
  if (!m || typeof m !== 'object') return;
  const badge = page.querySelector('.year-badge');
  const h1 = page.querySelector('.char-hero-text h1');
  const p = page.querySelector('.char-hero-text p');
  const img = page.querySelector('.char-hero-visual img');
  const back = page.querySelector('.back-btn');
  if (badge) badge.textContent = m.year.split(' · ').slice(0, 1).join('') + ' · PIXAR';
  if (h1) h1.textContent = m.title;
  if (p) p.textContent = m.hero;
  if (img) img.alt = m.title;
  if (back) back.textContent = t('ui.backHome');
}

function updateActiveCharPage() {
  const active = document.querySelector('.char-page.active');
  if (active) {
    const id = active.id.replace('char-', '');
    updateCharPageTexts(active, id);
  }
}

function clearThemes() {
  CHAR_THEMES.forEach(th => {
    document.body.classList.remove('theme-' + th);
  });
  document.body.classList.remove('char-active', 'detail-active');
  document.querySelectorAll('.char-page, .detail-page').forEach(p => {
    CHAR_THEMES.forEach(th => p.classList.remove('theme-' + th));
    p.classList.remove('active');
  });
}

function scrollToTop() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function hideAllPages() {
  document.getElementById('homePage').classList.add('hidden');
  document.getElementById('detailPage').classList.remove('active');
  clearThemes();
}

function setHash(mode, id) {
  const base = location.pathname + location.search;
  if (mode === 'home') history.replaceState({ page: 'home' }, '', base);
  else if (mode === 'detail') history.replaceState({ page: 'detail', id }, '', base + '#detail-' + id);
  else if (mode === 'char') history.replaceState({ page: 'char', id }, '', base + '#' + id);
}

function applyTheme(id) {
  CHAR_THEMES.forEach(th => document.body.classList.remove('theme-' + th));
  document.body.classList.add('theme-' + id);
}

function renderDetailPage(id) {
  const m = t('movies.' + id);
  const meta = MOVIE_META[id];
  if (!m || !meta) return;

  currentDetailId = id;
  const root = document.getElementById('detailPage');
  root.className = 'detail-page theme-' + id;
  root.innerHTML = `
    <button type="button" class="back-btn" data-action="home">${t('ui.backHome')}</button>
    <div class="detail-hero">
      <div class="detail-poster"><img src="${meta.poster}" alt="${m.title}"></div>
      <div class="detail-hero-text">
        <div class="year-badge">${m.year}</div>
        <h1 class="grad-text">${m.title}</h1>
        <p class="detail-lead">${m.hero}</p>
        <span class="movie-tag detail-tag" style="${meta.tagStyle}">${m.tag}</span>
      </div>
    </div>
    <div class="detail-body">
      <h2 class="detail-section-title">${t('ui.detailHighlights')}</h2>
      <p class="detail-desc">${m.detail}</p>
      <ul class="detail-highlights">
        ${m.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
      <div class="detail-actions">
        <button type="button" class="btn-primary" data-action="chars" data-movie="${id}">${t('ui.detailToChars')}</button>
      </div>
    </div>
  `;

  root.querySelector('[data-action="home"]').addEventListener('click', () => goHome());
  root.querySelector('[data-action="chars"]').addEventListener('click', () => showChars(id));
}

function updateDetailPage() {
  if (currentDetailId && document.getElementById('detailPage').classList.contains('active')) {
    renderDetailPage(currentDetailId);
  }
}

function showDetail(id, options = {}) {
  if (!MOVIE_IDS.includes(id)) return;
  scrollToTop();
  hideAllPages();
  clearThemes();
  applyTheme(id);
  renderDetailPage(id);
  document.body.classList.add('detail-active');
  document.getElementById('detailPage').classList.add('active', 'theme-' + id);
  requestAnimationFrame(scrollToTop);
  if (!options.skipHashUpdate) setHash('detail', id);
}

function showChars(id, options = {}) {
  if (!MOVIE_IDS.includes(id) || !document.getElementById('char-' + id)) return;
  scrollToTop();
  hideAllPages();
  clearThemes();
  applyTheme(id);
  document.body.classList.add('char-active');
  document.getElementById('detailPage').classList.remove('active');
  const page = document.getElementById('char-' + id);
  page.classList.add('active', 'theme-' + id);
  updateCharPageTexts(page, id);
  requestAnimationFrame(scrollToTop);
  if (!options.skipHashUpdate) setHash('char', id);
}

function goHome(options = {}) {
  scrollToTop();
  currentDetailId = null;
  document.getElementById('homePage').classList.remove('hidden');
  clearThemes();
  requestAnimationFrame(scrollToTop);
  if (!options.skipHashUpdate) setHash('home');
}

function parseHash() {
  const hash = location.hash.replace(/^#/, '');
  if (!hash || hash === 'home') return { mode: 'home' };
  if (hash.startsWith('detail-')) {
    const id = hash.slice(7);
    if (MOVIE_IDS.includes(id)) return { mode: 'detail', id };
  }
  if (MOVIE_IDS.includes(hash) && document.getElementById('char-' + hash)) {
    return { mode: 'char', id: hash };
  }
  return { mode: 'home' };
}

function initFromUrl() {
  const { mode, id } = parseHash();
  if (mode === 'detail') showDetail(id, { skipHashUpdate: true });
  else if (mode === 'char') showChars(id, { skipHashUpdate: true });
  else goHome({ skipHashUpdate: true });
}

window.addEventListener('hashchange', () => {
  const { mode, id } = parseHash();
  if (mode === 'detail') showDetail(id, { skipHashUpdate: true });
  else if (mode === 'char') showChars(id, { skipHashUpdate: true });
  else goHome({ skipHashUpdate: true });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
  document.querySelectorAll('.movie-card[data-movie]').forEach(card => {
    const id = card.dataset.movie;
    card.querySelector('[data-go="detail"]')?.addEventListener('click', e => {
      e.stopPropagation();
      showDetail(id);
    });
    card.querySelector('[data-go="chars"]')?.addEventListener('click', e => {
      e.stopPropagation();
      showChars(id);
    });
  });
  setLang(currentLang);
  initFromUrl();
});
