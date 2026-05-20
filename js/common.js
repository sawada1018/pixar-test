/** @typedef {'home'|'detail'|'characters'} PageKind */

let currentLang = localStorage.getItem('pixar-lang') || 'ja';
let detailVideoToken = 0;

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

function getMovieIdFromQuery() {
  const id = new URLSearchParams(location.search).get('id');
  return MOVIE_IDS.includes(id) ? id : null;
}

function getMovieIdFromPage() {
  const fromBody = document.body.dataset.movie;
  if (fromBody && MOVIE_IDS.includes(fromBody)) return fromBody;
  const match = location.pathname.match(/\/(?:detail|characters)\/([^.]+)\.html$/i);
  if (match && MOVIE_IDS.includes(match[1])) return match[1];
  return getMovieIdFromQuery();
}

/** detail/ ・ characters/ 配下では ../、トップでは ./ */
function sitePrefix() {
  const p = location.pathname.replace(/\\/g, '/');
  return /\/(detail|characters)\/[^/]+\.html$/i.test(p) ? '../' : './';
}

function assetUrl(path) {
  return sitePrefix() + String(path).replace(/^\.\//, '');
}

function pageUrl(kind, movieId) {
  const pre = sitePrefix();
  if (kind === 'home') return pre + 'index.html';
  if (kind === 'detail') return pre + `detail/${movieId}.html`;
  if (kind === 'characters') return pre + `characters/${movieId}.html`;
  return pre + 'index.html';
}

function applyTheme(id) {
  MOVIE_IDS.forEach(th => document.body.classList.remove('theme-' + th));
  if (id) document.body.classList.add('theme-' + id);
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

const LANG_CODES = ['ja', 'en', 'ko'];

function langLabel(code) {
  const key = 'lang' + code.charAt(0).toUpperCase() + code.slice(1);
  return t('ui.' + key);
}

function closeLangDropdown() {
  document.querySelectorAll('[data-lang-dropdown]').forEach(root => {
    const toggle = root.querySelector('.lang-dropdown-toggle');
    const menu = root.querySelector('.lang-dropdown-menu');
    root.classList.remove('is-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
    if (menu) menu.hidden = true;
  });
}

function updateLangDropdownUI() {
  document.querySelectorAll('[data-lang-dropdown]').forEach(root => {
    const toggle = root.querySelector('.lang-dropdown-toggle');
    const current = root.querySelector('[data-lang-current]');
    if (current) current.textContent = langLabel(currentLang);
    if (toggle) toggle.setAttribute('aria-label', t('ui.langLabel'));

    root.querySelectorAll('.lang-option').forEach(btn => {
      const code = btn.dataset.lang;
      btn.textContent = langLabel(code);
      const selected = code === currentLang;
      btn.classList.toggle('is-selected', selected);
      btn.setAttribute('aria-selected', selected ? 'true' : 'false');
    });
  });
}

function initLangSwitcher() {
  document.querySelectorAll('[data-lang-dropdown]').forEach(root => {
    const toggle = root.querySelector('.lang-dropdown-toggle');
    const menu = root.querySelector('.lang-dropdown-menu');
    if (!toggle || !menu) return;

    updateLangDropdownUI();

    toggle.addEventListener('click', e => {
      e.stopPropagation();
      const open = root.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      menu.hidden = !open;
    });

    menu.querySelectorAll('.lang-option').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        setLang(btn.dataset.lang);
        closeLangDropdown();
      });
    });
  });

  document.addEventListener('click', closeLangDropdown);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLangDropdown();
  });
}

function setLang(lang) {
  if (!I18N[lang]) return;
  currentLang = lang;
  localStorage.setItem('pixar-lang', lang);
  document.documentElement.lang = lang === 'ko' ? 'ko' : lang === 'en' ? 'en' : 'ja';
  applyStaticI18n();
  updateLangDropdownUI();
  const page = document.body.dataset.page;
  if (page === 'home' && typeof refreshHomePage === 'function') refreshHomePage();
  else if (page === 'detail' && typeof refreshDetailPage === 'function') refreshDetailPage(getMovieIdFromPage());
  else if (page === 'characters' && typeof refreshCharactersPage === 'function') refreshCharactersPage(getMovieIdFromPage());
}

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
  if (autoplay) params.set('autoplay', '1');
  return `https://www.youtube.com/embed/${encodeURIComponent(videoId)}?${params}`;
}

function canUseHttpEmbed() {
  return location.protocol === 'http:' || location.protocol === 'https:';
}

function stopDetailVideo() {
  detailVideoToken++;
  document.querySelectorAll('.detail-video-mount').forEach(el => {
    el.innerHTML = '';
  });
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
  iframe.src = youtubeDirectEmbedUrl(videoId, true);
  iframe.title = title;
  iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.allowFullscreen = true;
  mountEl.appendChild(iframe);
}

function setPageTitle(movieId) {
  if (movieId) {
    const m = t('movies.' + movieId);
    if (m?.title) {
      document.title = `${m.title} — PIXAR`;
      return;
    }
  }
  document.title = t('ui.pageTitle');
}
