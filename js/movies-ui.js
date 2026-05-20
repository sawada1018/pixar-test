const CARD_VISUAL = {
  toy: { gradient: 'linear-gradient(135deg,#2a5080 0%,#3b82f6 60%,#93c5fd 100%)', border: 'rgba(147,197,253,0.3)' },
  nemo: { gradient: 'linear-gradient(135deg,#1a4060 0%,#0284c7 60%,#38bdf8 100%)', border: 'rgba(56,189,248,0.3)' },
  incredibles: { gradient: 'linear-gradient(135deg,#6a1818 0%,#dc2626 60%,#fca5a5 100%)', border: 'rgba(252,165,165,0.3)' },
  up: { gradient: 'linear-gradient(135deg,#1a5030 0%,#22c55e 60%,#86efac 100%)', border: 'rgba(134,239,172,0.3)' },
  insideout: { gradient: 'linear-gradient(135deg,#3a1860 0%,#9333ea 60%,#c4b5fd 100%)', border: 'rgba(196,181,253,0.3)' },
  coco: { gradient: 'linear-gradient(135deg,#6a2008 0%,#f97316 60%,#fdba74 100%)', border: 'rgba(253,186,116,0.3)' },
  soul: { gradient: 'linear-gradient(135deg,#0a3040 0%,#14b8a6 60%,#5eead4 100%)', border: 'rgba(94,234,212,0.3)' },
  monsters: { gradient: 'linear-gradient(135deg,#1a2850 0%,#2563eb 60%,#93c5fd 100%)', border: 'rgba(147,197,253,0.3)' },
  ratatouille: { gradient: 'linear-gradient(135deg,#4a1808 0%,#dc2626 60%,#fca5a5 100%)', border: 'rgba(252,165,165,0.3)' },
  zootopia: { gradient: 'linear-gradient(135deg,#4c1d95 0%,#7c3aed 60%,#c4b5fd 100%)', border: 'rgba(196,181,253,0.35)' },
  cars: { gradient: 'linear-gradient(135deg,#7f1d1d 0%,#dc2626 60%,#fecaca 100%)', border: 'rgba(254,202,202,0.35)' },
  walle: { gradient: 'linear-gradient(135deg,#1a2838 0%,#475569 60%,#cbd5e1 100%)', border: 'rgba(203,213,225,0.35)' },
  brave: { gradient: 'linear-gradient(135deg,#14532d 0%,#16a34a 60%,#86efac 100%)', border: 'rgba(134,239,172,0.35)' },
  luca: { gradient: 'linear-gradient(135deg,#0c4a6e 0%,#0284c7 60%,#7dd3fc 100%)', border: 'rgba(125,211,252,0.35)' }
};

function updateMovieCardsI18n() {
  document.querySelectorAll('.movie-card[data-movie]').forEach(card => {
    const id = card.dataset.movie;
    const m = t('movies.' + id);
    const meta = MOVIE_META[id];
    if (!m || !meta) return;

    const year = card.querySelector('.movie-year');
    const title = card.querySelector('.movie-title');
    const desc = card.querySelector('.movie-desc');
    const tag = card.querySelector('.movie-tag');
    const btnDetail = card.querySelector('.btn-card-detail');
    const btnChars = card.querySelector('.btn-card-chars');
    const img = card.querySelector('.movie-poster img');

    if (year) year.textContent = m.year;
    if (title) title.textContent = m.title;
    if (desc) desc.textContent = m.desc;
    if (tag) {
      tag.textContent = m.tag;
      tag.setAttribute('style', meta.tagStyle);
    }
    if (btnDetail) {
      btnDetail.textContent = t('ui.btnDetail');
      btnDetail.href = pageUrl('detail', id);
    }
    if (btnChars) {
      btnChars.textContent = t('ui.btnChars');
      btnChars.href = pageUrl('characters', id);
    }
    if (img) img.alt = m.title;
  });
}


function updateCharIntroI18n(introEl, movieId) {
  const m = t('movies.' + movieId);
  const meta = MOVIE_META[movieId];
  if (!m || !meta || !introEl) return;
  const title = introEl.querySelector('.char-intro-title');
  const year = introEl.querySelector('.char-intro-year');
  const tag = introEl.querySelector('.char-intro-tag');
  const lead = introEl.querySelector('.char-intro-lead');
  const detail = introEl.querySelector('.char-intro-detail');
  const posterImg = introEl.querySelector('.char-intro-poster img');
  const detailLink = introEl.querySelector('.char-intro-actions .btn-secondary');
  if (title) title.textContent = m.title;
  if (year) year.textContent = m.year;
  if (tag) { tag.textContent = m.tag; tag.setAttribute('style', meta.tagStyle); }
  if (lead) lead.textContent = m.hero;
  if (detail) detail.textContent = m.detail;
  if (posterImg) posterImg.alt = m.title;
  if (detailLink) { detailLink.textContent = t('ui.linkToDetail'); detailLink.href = pageUrl('detail', movieId); }
}

function updateCharGridI18n(gridEl, movieId) {
  if (!gridEl) return;
  gridEl.querySelectorAll('.char-card[data-char]').forEach(card => {
    const charId = card.dataset.char;
    const c = getCharText(movieId, charId);
    const img = card.querySelector('.char-emoji img');
    const name = card.querySelector('.char-name');
    const role = card.querySelector('.char-role');
    const quote = card.querySelector('.char-quote');
    if (name) name.textContent = c.name;
    if (role) role.textContent = c.role;
    if (quote) quote.textContent = c.quote;
    if (img) img.alt = c.name;
  });
}

function renderCharIntro(introEl, movieId) {
  updateCharIntroI18n(introEl, movieId);
}

function renderCharGrid(gridEl, movieId) {
  updateCharGridI18n(gridEl, movieId);
}

function renderDetailContent(root, movieId) {
  const m = t('movies.' + movieId);
  const meta = MOVIE_META[movieId];
  if (!m || !meta || !meta.youtube || !root) return;

  root.innerHTML = [
    `<a class="back-btn" href="${pageUrl('home')}">${t('ui.backHome')}</a>`,
    `<h1 class="detail-page-title grad-text">${m.title}</h1>`,
    `<p class="detail-video-label">${t('ui.detailTrailer')}</p>`,
    '<div class="detail-video-section">',
    '<div class="detail-video-wrap">',
    '<div class="detail-video-mount"></div>',
    '</div>',
    '<p class="detail-video-note" hidden></p>',
    `<a class="detail-video-external" href="${youtubeWatchUrl(meta.youtube)}" target="_blank" rel="noopener noreferrer">${t('ui.watchOnYoutube')}</a>`,
    '</div>',
    '<div class="detail-body">',
    `<h2 class="detail-section-title">${t('ui.detailHighlights')}</h2>`,
    '<ul class="detail-highlights">',
    m.highlights.map(h => `<li>${h}</li>`).join(''),
    '</ul>',
    '</div>',
    '<div class="detail-actions">',
    `<a class="btn-primary" href="${pageUrl('characters', movieId)}">${t('ui.detailToChars')}</a>`,
    '</div>'
  ].join('').replace(/<\/?div\b/g, tag => tag.replace('div', 'div'));

  const mount = root.querySelector('.detail-video-mount');
  if (mount) mountDetailVideo(mount, meta.youtube, m.title);
}
