function refreshDetailPage(movieId) {
  if (!movieId) {
    location.href = pageUrl('home');
    return;
  }
  applyTheme(movieId);
  document.body.classList.add('detail-active');
  setPageTitle(movieId);
  renderDetailContent(document.getElementById('detailRoot'), movieId);
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.dataset.page = 'detail';
  const movieId = getMovieIdFromPage();
  if (!movieId) {
    location.href = pageUrl('home');
    return;
  }
  initLangSwitcher();
  currentLang = localStorage.getItem('pixar-lang') || 'ja';
  document.documentElement.lang = currentLang === 'ko' ? 'ko' : currentLang === 'en' ? 'en' : 'ja';
  applyStaticI18n();
  refreshDetailPage(movieId);
});
