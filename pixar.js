const CHAR_THEMES = ['toy', 'nemo', 'incredibles', 'up', 'insideout', 'coco', 'soul', 'monsters', 'ratatouille'];

function clearCharTheme() {
  CHAR_THEMES.forEach(t => {
    document.body.classList.remove('theme-' + t);
  });
  document.body.classList.remove('char-active');
  document.querySelectorAll('.char-page').forEach(p => {
    CHAR_THEMES.forEach(t => p.classList.remove('theme-' + t));
  });
}

function scrollToTop() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function getCharIdFromHash() {
  const hash = location.hash.replace(/^#/, '');
  if (!hash || hash === 'home') return null;
  const id = hash.startsWith('char-') ? hash.slice(5) : hash;
  if (CHAR_THEMES.includes(id) && document.getElementById('char-' + id)) return id;
  return null;
}

function showChars(id, options = {}) {
  if (!CHAR_THEMES.includes(id) || !document.getElementById('char-' + id)) return;

  scrollToTop();
  document.getElementById('homePage').classList.add('hidden');
  clearCharTheme();
  document.querySelectorAll('.char-page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('char-' + id);
  page.classList.add('active', 'theme-' + id);
  document.body.classList.add('char-active', 'theme-' + id);
  requestAnimationFrame(scrollToTop);

  if (!options.skipHashUpdate) {
    const url = location.pathname + location.search + '#' + id;
    history.replaceState({ page: 'char', id }, '', url);
  }
}

function goHome(options = {}) {
  scrollToTop();
  document.getElementById('homePage').classList.remove('hidden');
  clearCharTheme();
  document.querySelectorAll('.char-page').forEach(p => p.classList.remove('active'));
  requestAnimationFrame(scrollToTop);

  if (!options.skipHashUpdate) {
    history.replaceState({ page: 'home' }, '', location.pathname + location.search);
  }
}

function initFromUrl() {
  const id = getCharIdFromHash();
  if (id) {
    showChars(id, { skipHashUpdate: true });
  } else {
    goHome({ skipHashUpdate: true });
  }
}

window.addEventListener('hashchange', () => {
  const id = getCharIdFromHash();
  if (id) showChars(id, { skipHashUpdate: true });
  else goHome({ skipHashUpdate: true });
});

initFromUrl();
