
function showChars(id) {
  document.getElementById('homePage').classList.add('hidden');
  document.querySelectorAll('.char-page').forEach(p => p.classList.remove('active'));
  document.getElementById('char-' + id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function goHome() {
  document.getElementById('homePage').classList.remove('hidden');
  document.querySelectorAll('.char-page').forEach(p => p.classList.remove('active'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
