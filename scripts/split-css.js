const fs = require('fs');
const lines = fs.readFileSync('pixar.css', 'utf8').split('\n');
const fix = (p) => p.replace(/url\(\.\/img\//g, 'url(../img/');
const slice = (a, b) => fix(lines.slice(a - 1, b).join('\n'));
fs.mkdirSync('css', { recursive: true });
fs.writeFileSync('css/base.css', slice(1, 21));
fs.writeFileSync('css/header.css', slice(22, 86));
fs.writeFileSync('css/home.css', slice(87, 295));
fs.writeFileSync('css/characters.css', slice(296, 350) + '\n' + slice(432, 436));
fs.writeFileSync('css/themes.css', slice(351, 431));
fs.writeFileSync('css/detail.css', slice(437, 940));
fs.writeFileSync('css/responsive.css', slice(941, lines.length));
const main = [
  "@import url('css/base.css');",
  "@import url('css/header.css');",
  "@import url('css/home.css');",
  "@import url('css/themes.css');",
  "@import url('css/characters.css');",
  "@import url('css/detail.css');",
  "@import url('css/responsive.css');",
  '',
  '/* Multi-page layout */',
  '.page-characters .char-page,',
  '.page-characters main.char-layout { display: block; }',
  '.page-detail .detail-page,',
  '.page-detail main.detail-layout { display: block; }',
  '.page-characters .char-page { padding: 7rem 2rem 4rem; max-width: 1100px; margin: 0 auto; }',
  '.page-detail .detail-page { padding: 7rem 2rem 4rem; max-width: 960px; margin: 0 auto; }'
].join('\n');
fs.writeFileSync('pixar.css', main);
console.log('done');
