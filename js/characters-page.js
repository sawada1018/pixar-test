function refreshCharactersPage(movieId) {
  if (!movieId) {
    location.href = pageUrl('home');
    return;
  }
  applyTheme(movieId);
  document.body.classList.add('char-active');
  setPageTitle(movieId);
  const back = document.querySelector('.back-btn');
  if (back) {
    back.textContent = t('ui.backHome');
    back.setAttribute('href', pageUrl('home'));
  }
  renderCharIntro(document.getElementById('charIntro'), movieId);
  renderCharGrid(document.getElementById('charGrid'), movieId);
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.dataset.page = 'characters';
  const movieId = getMovieIdFromPage();
  if (!movieId) {
    location.href = pageUrl('home');
    return;
  }
  initLangSwitcher();
  currentLang = localStorage.getItem('pixar-lang') || 'ja';
  document.documentElement.lang = currentLang === 'ko' ? 'ko' : currentLang === 'en' ? 'en' : 'ja';
  applyStaticI18n();
  refreshCharactersPage(movieId);
});
