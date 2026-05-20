const CHAR_THEMES = MOVIE_IDS;
let currentLang = localStorage.getItem('pixar-lang') || 'ja';
let currentDetailId = null;

function t(path) {
  const keys = path.split('.');
  let v = I18N[currentLang];
  for (const k of keys) {
    if (v == null || v[k] === undefined) {
      let fallback = I18N.ja;
      for (const k2 of keys) fallback = fallback?.[k2];
      return fallback ?? '';
    }
    v = v[k];
  }
  return v ?? '';
}

let detailVideoToken = 0;

function youtubeWatchUrl(videoId) {
  return `https://www.youtube.com/watch?v=${encodeURIComponent(videoId)}`;
}

function youtubeRelayUrl(videoId, autoplay = true) {
  const url = new URL('youtube-relay.html', location.href);
  url.searchParams.set('v', videoId);
  url.searchParams.set('autoplay', autoplay ? '1' : '0');
  url.searchParams.set('referrer', APP_REFERER_URL);
  url.searchParams.set('bundle', APP_BUNDLE_ID);
  return url.href;
}

function youtubeDirectEmbedUrl(videoId, autoplay = true) {
  const params = new URLSearchParams({
    rel: '0',
    modestbranding: '1',
    playsinline: '1',
    widget_referrer: APP_REFERER_URL,
    origin: APP_REFERER_URL
  });
  if (autoplay) {
    params.set('autoplay', '1');
    params.set('mute', '1');
  }
  return `https://www.youtube.com/embed/${encodeURIComponent(videoId)}?${params}`;
}

function canUseHttpEmbed() {
  return location.protocol === 'http:' || location.protocol === 'https:';
}

function mountDetailVideo(mountEl, videoId, title) {
  const token = ++detailVideoToken;
  const section = mountEl.closest('.detail-video-section');
  const external = section?.querySelector('.detail-video-external');
  const noteEl = section?.querySelector('.detail-video-note');

  if (external) {
    external.href = youtubeWatchUrl(videoId);
    external.textContent = t('ui.watchOnYoutube');
  }
  if (noteEl) {
    const needsHint = !canUseHttpEmbed();
    noteEl.textContent = needsHint ? t('ui.videoLocalHint') : '';
    noteEl.hidden = !needsHint;
  }

  mountEl.innerHTML = '';
  const thumb = `https://i.ytimg.com/vi/${encodeURIComponent(videoId)}/hqdefault.jpg`;

  if (!canUseHttpEmbed()) {
    const link = document.createElement('a');
    link.className = 'detail-video-facade';
    link.href = youtubeWatchUrl(videoId);
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.innerHTML = `<img src="${thumb}" alt=""><span class="detail-video-play" aria-hidden="true">▶</span><span class="detail-video-facade-label">${t('ui.watchOnYoutube')}</span>`;
    mountEl.appendChild(link);
    return;
  }

  if (token !== detailVideoToken) return;
  const iframe = document.createElement('iframe');
  iframe.className = 'detail-video-iframe';
  iframe.src = youtubeRelayUrl(videoId, true);
  iframe.title = title;
  iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.allowFullscreen = true;
  mountEl.appendChild(iframe);
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

function assignCharIds(page, movieId) {
  const order = Object.keys(CHAR_IMAGES[movieId] || {});
  page.querySelectorAll('.char-card').forEach((card, i) => {
    if (order[i]) card.dataset.char = order[i];
  });
}

function updateCharCards(page, movieId) {
  assignCharIds(page, movieId);
  page.querySelectorAll('.char-card[data-char]').forEach(card => {
    const charId = card.dataset.char;
    const c = getCharText(movieId, charId);
    const img = card.querySelector('.char-emoji img');
    const name = card.querySelector('.char-name');
    const role = card.querySelector('.char-role');
    const quote = card.querySelector('.char-quote');
    if (img) {
      img.src = getCharImg(movieId, charId);
      img.alt = c.name;
    }
    if (name) name.textContent = c.name;
    if (role) role.textContent = c.role;
    if (quote) quote.textContent = c.quote;
  });
}

function renderCharIntro(page, movieId) {
  let intro = page.querySelector('.char-intro');
  if (!intro) {
    intro = document.createElement('div');
    intro.className = 'char-intro';
    page.querySelector('.back-btn')?.after(intro);
  }
  const m = t('movies.' + movieId);
  const meta = MOVIE_META[movieId];
  if (!m || !meta) return;

  intro.innerHTML = `
    <div class="char-intro-header">
      <h1 class="grad-text">${m.title}</h1>
      <div class="year-badge">${m.year}</div>
      <span class="movie-tag" style="${meta.tagStyle}">${m.tag}</span>
    </div>
    <div class="char-intro-body">
      <div class="char-intro-poster">
        <img src="${meta.poster}" alt="${m.title}">
      </div>
      <div class="char-intro-text">
        <p class="char-intro-lead">${m.hero}</p>
        <p class="char-intro-detail">${m.detail}</p>
      </div>
    </div>
    <div class="char-intro-actions">
      <button type="button" class="btn-secondary" data-action="detail" data-movie="${movieId}">${t('ui.linkToDetail')}</button>
    </div>
  `;

  intro.querySelector('[data-action="detail"]')?.addEventListener('click', () => showDetail(movieId));
}

function updateCharPage(page, movieId) {
  const back = page.querySelector('.back-btn');
  if (back) back.textContent = t('ui.backHome');
  renderCharIntro(page, movieId);
  updateCharCards(page, movieId);
}

function updateActiveCharPage() {
  const active = document.querySelector('.char-page.active');
  if (active) {
    updateCharPage(active, active.id.replace('char-', ''));
  }
}

function clearThemes() {
  CHAR_THEMES.forEach(th => document.body.classList.remove('theme-' + th));
  document.body.classList.remove('char-active', 'detail-active');
  document.querySelectorAll('.char-page, .detail-page').forEach(p => {
    CHAR_THEMES.forEach(th => p.classList.remove('theme-' + th));
    p.classList.remove('active');
  });
  stopDetailVideo();
}

function stopDetailVideo() {
  detailVideoToken++;
  document.querySelectorAll('#detailPage .detail-video-mount').forEach(el => {
    el.innerHTML = '';
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
  stopDetailVideo();
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
  if (!m || !meta || !meta.youtube) return;

  currentDetailId = id;
  const root = document.getElementById('detailPage');
  root.className = 'detail-page theme-' + id;
  root.innerHTML = `
    <button type="button" class="back-btn" data-action="home">${t('ui.backHome')}</button>
    <h1 class="detail-page-title grad-text">${m.title}</h1>
    <p class="detail-video-label">${t('ui.detailTrailer')}</p>
    <div class="detail-video-section">
      <div class="detail-video-wrap">
        <div class="detail-video-mount"></div>
      </div>
      <p class="detail-video-note" hidden></p>
      <a class="detail-video-external" href="${youtubeWatchUrl(meta.youtube)}" target="_blank" rel="noopener noreferrer">${t('ui.watchOnYoutube')}</a>
    </div>
    <div class="detail-body">
      <h2 class="detail-section-title">${t('ui.detailHighlights')}</h2>
      <ul class="detail-highlights">
        ${m.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
    </div>
    <div class="detail-actions">
      <button type="button" class="btn-primary" data-action="chars" data-movie="${id}">${t('ui.detailToChars')}</button>
    </div>
  `;

  const mount = root.querySelector('.detail-video-mount');
  if (mount) mountDetailVideo(mount, meta.youtube, m.title);

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
  const page = document.getElementById('char-' + id);
  page.classList.add('active', 'theme-' + id);
  updateCharPage(page, id);
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

function initCharPages() {
  MOVIE_IDS.forEach(movieId => {
    const page = document.getElementById('char-' + movieId);
    if (page) assignCharIds(page, movieId);
  });
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
  document.querySelectorAll('.char-page .back-btn[data-action="home"]').forEach(btn => {
    btn.addEventListener('click', () => goHome());
  });
  initCharPages();
  setLang(currentLang);
  initFromUrl();
});
