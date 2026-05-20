/**
 * characters/*.html にキャラクター画像付きの静的 HTML を生成する
 * 実行: node scripts/generate-characters-html.js
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
eval(fs.readFileSync(path.join(root, 'js/i18n.js'), 'utf8').replace(/^const /gm, 'var '));
eval(fs.readFileSync(path.join(root, 'js/characters.js'), 'utf8').replace(/^const /gm, 'var '));

const CARD_BORDER = {
  toy: 'rgba(147,197,253,0.3)',
  nemo: 'rgba(56,189,248,0.3)',
  incredibles: 'rgba(252,165,165,0.3)',
  up: 'rgba(134,239,172,0.3)',
  insideout: 'rgba(196,181,253,0.3)',
  coco: 'rgba(253,186,116,0.3)',
  soul: 'rgba(94,234,212,0.3)',
  monsters: 'rgba(147,197,253,0.3)',
  ratatouille: 'rgba(252,165,165,0.3)',
  zootopia: 'rgba(196,181,253,0.35)',
  cars: 'rgba(254,202,202,0.35)',
  walle: 'rgba(203,213,225,0.35)',
  brave: 'rgba(134,239,172,0.35)',
  luca: 'rgba(125,211,252,0.35)'
};

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');
}

function posterSrc(meta) {
  return meta.poster.replace(/^\.\//, '../');
}

function buildCharCards(id) {
  const chars = CHAR_IMAGES[id] || {};
  const border = CARD_BORDER[id] || 'rgba(255,255,255,0.2)';
  return Object.keys(chars).map(charId => {
    const c = CHAR_TRANSLATIONS.ja[id][charId];
    const file = chars[charId];
    return [
      '      <article class="char-card" data-char="' + charId + '" style="border-color:' + border + '">',
      '        <span class="char-emoji">',
      '          <img src="../img/cara/' + file + '" alt="' + esc(c.name) + '" width="200" height="150" loading="lazy">',
      '        </span>',
      '        <div class="char-name">' + esc(c.name) + '</div>',
      '        <motion class="char-role">' + esc(c.role) + '</motion>',
      '        <p class="char-quote">' + esc(c.quote) + '</p>',
      '      </article>'
    ].join('\n');
  }).join('\n').replace(/<\/?motion\b[^>]*>/g, tag => tag.replace(/motion/g, 'div'));
}

function buildCharMain(id) {
  const m = I18N.ja.movies[id];
  const meta = MOVIE_META[id];
  const lines = [
    '<main class="char-page char-layout active theme-' + id + '">',
    '  <a class="back-btn" href="../index.html">← 映画一覧に戻る</a>',
    '  <div class="char-intro" id="charIntro">',
    '    <div class="char-intro-header">',
    '      <h1 class="grad-text char-intro-title">' + esc(m.title) + '</h1>',
    '      <div class="year-badge char-intro-year">' + esc(m.year) + '</div>',
    '      <span class="movie-tag char-intro-tag" style="' + meta.tagStyle + '">' + esc(m.tag) + '</span>',
    '    </div>',
    '    <div class="char-intro-body">',
    '      <div class="char-intro-poster">',
    '        <img src="' + posterSrc(meta) + '" alt="' + esc(m.title) + '" loading="lazy">',
    '      </div>',
    '      <div class="char-intro-text">',
    '        <p class="char-intro-lead">' + esc(m.hero) + '</p>',
    '        <p class="char-intro-detail">' + esc(m.detail) + '</p>',
    '      </div>',
    '    </div>',
    '    <div class="char-intro-actions">',
    '      <a class="btn-secondary" href="../detail/' + id + '.html">予告編を見る →</a>',
    '    </motion>',
    '  </motion>',
    '  <div class="char-grid" id="charGrid">',
    buildCharCards(id),
    '  </div>',
    '</main>'
  ];
  return lines.join('\n').replace(/<\/?motion\b[^>]*>/g, tag => (tag.indexOf('</') === 0 ? '</div>' : '<div'));
}

const header = [
  '  <div class="logo"><a href="../index.html"><img src="../img/top/Pixar_new_logo.svg" alt="PIXAR"></a></div>',
  '  <div class="header-right">',
  '    <motion class="lang-dropdown" data-lang-dropdown>',
  '      <button type="button" class="lang-dropdown-toggle" id="langToggle" aria-haspopup="listbox" aria-expanded="false">',
  '        <span class="lang-dropdown-label" data-lang-current>日本語</span>',
  '        <span class="lang-dropdown-chevron" aria-hidden="true"></span>',
  '      </button>',
  '      <ul class="lang-dropdown-menu" role="listbox" aria-labelledby="langToggle" hidden>',
  '        <li><button type="button" class="lang-option" role="option" data-lang="ja">日本語</button></li>',
  '        <li><button type="button" class="lang-option" role="option" data-lang="en">English</button></li>',
  '        <li><button type="button" class="lang-option" role="option" data-lang="ko">한국어</button></li>',
  '      </ul>',
  '    </div>',
  '    <div class="tagline" data-i18n="tagline">映画の世界へようこそ</div>',
  '  </div>'
].join('\n').replace(/<\/?motion\b[^>]*>/g, tag => tag.replace(/motion/g, 'div'));

function pageShell(id, mainHtml) {
  return [
    '<!DOCTYPE html>',
    '<html lang="ja">',
    '<head>',
    '<meta charset="UTF-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
    '<meta name="referrer" content="strict-origin-when-cross-origin">',
    '<meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin">',
    '<title>PIXAR — キャラクター</title>',
    '<link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Noto+Sans+JP:wght@400;700&family=Noto+Sans+KR:wght@400;700&display=swap" rel="stylesheet">',
    '<link rel="stylesheet" href="../pixar.css">',
    '</head>',
    '<body data-page="characters" data-movie="' + id + '" class="page-characters char-active theme-' + id + '">',
    '',
    '<header>',
    header,
    '</header>',
    '',
    mainHtml,
    '',
    '<script src="../js/i18n.js"></script>',
    '<script src="../js/characters.js"></script>',
    '<script src="../js/common.js"></script>',
    '<script src="../js/movies-ui.js"></script>',
    '<script src="../js/characters-page.js"></script>',
    '</body>',
    '</html>'
  ].join('\n');
}

const charsDir = path.join(root, 'characters');
fs.mkdirSync(charsDir, { recursive: true });

MOVIE_IDS.forEach(id => {
  fs.writeFileSync(path.join(charsDir, id + '.html'), pageShell(id, buildCharMain(id)), 'utf8');
});

console.log('Generated static HTML for', MOVIE_IDS.length, 'character pages');
