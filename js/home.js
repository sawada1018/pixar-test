function refreshHomePage() {
  setPageTitle();
  updateMovieCardsI18n();
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.dataset.page = 'home';
  initLangSwitcher();
  currentLang = localStorage.getItem('pixar-lang') || 'ja';
  document.documentElement.lang = currentLang === 'ko' ? 'ko' : currentLang === 'en' ? 'en' : 'ja';
  applyStaticI18n();
  refreshHomePage();
});
