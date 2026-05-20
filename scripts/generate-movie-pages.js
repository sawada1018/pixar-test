const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const i18nSrc = fs.readFileSync(path.join(root, 'js/i18n.js'), 'utf8');
eval(i18nSrc.replace(/^const /gm, 'var '));

const header = `  <div class="logo"><a href="../index.html"><img src="../img/top/Pixar_new_logo.svg" alt="PIXAR"></a></motion>
  <div class="header-right">
    <div class="lang-dropdown" data-lang-dropdown>
      <button type="button" class="lang-dropdown-toggle" id="langToggle" aria-haspopup="listbox" aria-expanded="false">
        <span class="lang-dropdown-label" data-lang-current>日本語</span>
        <span class="lang-dropdown-chevron" aria-hidden="true"></span>
      </button>
      <ul class="lang-dropdown-menu" role="listbox" aria-labelledby="langToggle" hidden>
        <li><button type="button" class="lang-option" role="option" data-lang="ja">日本語</button></li>
        <li><button type="button" class="lang-option" role="option" data-lang="en">English</button></li>
        <li><button type="button" class="lang-option" role="option" data-lang="ko">한국어</button></li>
      </ul>
    </div>
    <div class="tagline" data-i18n="tagline">映画の世界へようこそ</div>
  </div>`.replace(/<\/?motion\b/g, t => t.replace(/motion/g, 'div'));

function pageShell({ title, bodyAttrs, mainHtml, scripts }) {
  return `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="referrer" content="strict-origin-when-cross-origin">
<meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin">
<title>${title}</title>
<link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Noto+Sans+JP:wght@400;700&family=Noto+Sans+KR:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../pixar.css">
</head>
<body ${bodyAttrs}>

<header>
${header}
</header>

${mainHtml}

<script src="../js/i18n.js"></script>
<script src="../js/characters.js"></script>
<script src="../js/common.js"></script>
<script src="../js/movies-ui.js"></script>
${scripts}
</body>
</html>
`;
}

const detailDir = path.join(root, 'detail');
const charsDir = path.join(root, 'characters');
fs.mkdirSync(detailDir, { recursive: true });
fs.mkdirSync(charsDir, { recursive: true });

MOVIE_IDS.forEach(id => {
  const detailHtml = pageShell({
    title: 'PIXAR — 映画詳細',
    bodyAttrs: `data-page="detail" data-movie="${id}" class="page-detail detail-active theme-${id}"`,
    mainHtml: '<main class="detail-page detail-layout active" id="detailRoot"></main>',
    scripts: '<script src="../js/detail-page.js"></script>'
  });
  fs.writeFileSync(path.join(detailDir, `${id}.html`), detailHtml, 'utf8');

  const charsHtml = pageShell({
    title: 'PIXAR — キャラクター',
    bodyAttrs: `data-page="characters" data-movie="${id}" class="page-characters char-active theme-${id}"`,
    mainHtml: `<main class="char-page char-layout active theme-${id}">
  <a class="back-btn" href="../index.html">← 映画一覧に戻る</a>
  <div class="char-intro" id="charIntro"></div>
  <div class="char-grid" id="charGrid"></div>
</main>`,
    scripts: '<script src="../js/characters-page.js"></script>'
  });
  fs.writeFileSync(path.join(charsDir, `${id}.html`), charsHtml, 'utf8');
});

const redirectDetail = `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<script>
(function () {
  var id = new URLSearchParams(location.search).get('id');
  location.replace(id ? 'detail/' + encodeURIComponent(id) + '.html' : 'index.html');
})();
</script>
</head>
<body></body>
</html>
`;

const redirectChars = redirectDetail.replace(/detail\//g, 'characters/');

fs.writeFileSync(path.join(root, 'detail.html'), redirectDetail, 'utf8');
fs.writeFileSync(path.join(root, 'characters.html'), redirectChars, 'utf8');

console.log('Generated', MOVIE_IDS.length, 'detail +', MOVIE_IDS.length, 'characters pages');
