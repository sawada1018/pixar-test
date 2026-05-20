const fs = require('fs');
const tag = 'di' + 'v';
const open = '<' + tag;
const close = '</' + tag + '>';
const files = ['detail.html', 'characters.html'];
const detail = `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="referrer" content="strict-origin-when-cross-origin">
<meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin">
<title>PIXAR — 映画詳細</title>
<link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Noto+Sans+JP:wght@400;700&family=Noto+Sans+KR:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="./pixar.css">
</head>
<body data-page="detail" class="page-detail detail-active">

<header>
  ${open} class="logo"><a href="index.html"><img src="./img/top/Pixar_new_logo.svg" alt="PIXAR"></a>${close}
  ${open} class="header-right">
    ${open} class="lang-switcher" aria-label="Language">
      <button type="button" class="lang-btn active" data-lang="ja">JA</button>
      <button type="button" class="lang-btn" data-lang="en">EN</button>
      <button type="button" class="lang-btn" data-lang="ko">KO</button>
    ${close}
    ${open} class="tagline" data-i18n="tagline">映画の世界へようこそ${close}
  ${close}
</header>

<main class="detail-page detail-layout active" id="detailRoot"></main>

<script src="./js/i18n.js"></script>
<script src="./js/characters.js"></script>
<script src="./js/common.js"></script>
<script src="./js/movies-ui.js"></script>
<script src="./js/detail-page.js"></script>
</body>
</html>
`;
const characters = `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="referrer" content="strict-origin-when-cross-origin">
<meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin">
<title>PIXAR — キャラクター</title>
<link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Noto+Sans+JP:wght@400;700&family=Noto+Sans+KR:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="./pixar.css">
</head>
<body data-page="characters" class="page-characters char-active">

<header>
  ${open} class="logo"><a href="index.html"><img src="./img/top/Pixar_new_logo.svg" alt="PIXAR"></a>${close}
  ${open} class="header-right">
    ${open} class="lang-switcher" aria-label="Language">
      <button type="button" class="lang-btn active" data-lang="ja">JA</button>
      <button type="button" class="lang-btn" data-lang="en">EN</button>
      <button type="button" class="lang-btn" data-lang="ko">KO</button>
    ${close}
    ${open} class="tagline" data-i18n="tagline">映画の世界へようこそ${close}
  ${close}
</header>

<main class="char-page char-layout active">
  <a class="back-btn" href="index.html">← 映画一覧に戻る</a>
  ${open} class="char-intro" id="charIntro">${close}
  ${open} class="char-grid" id="charGrid">${close}
</main>

<script src="./js/i18n.js"></script>
<script src="./js/characters.js"></script>
<script src="./js/common.js"></script>
<script src="./js/movies-ui.js"></script>
<script src="./js/characters-page.js"></script>
</body>
</html>
`;
fs.writeFileSync('detail.html', detail);
fs.writeFileSync('characters.html', characters);
console.log('ok');
