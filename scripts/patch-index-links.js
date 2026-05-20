const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const i18nSrc = fs.readFileSync(path.join(root, 'js/i18n.js'), 'utf8');
eval(i18nSrc.replace(/^const /gm, 'var '));

let html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

html = html.replace(/href="detail\.html\?id=([^"]+)"/g, 'href="detail/$1.html"');
html = html.replace(/href="characters\.html\?id=([^"]+)"/g, 'href="characters/$1.html"');
html = html.replace(
  '<img src="./img/back/pixcer.jpg" alt="カーズ"',
  '<img src="./img/top/cars.jpeg" alt="カーズ"'
);

if (!html.includes('data-movie="zootopia"')) {
  const m = I18N.ja.movies.zootopia;
  const meta = MOVIE_META.zootopia;
  const grad = 'linear-gradient(135deg,#4c1d95 0%,#7c3aed 60%,#c4b5fd 100%)';
  const t = 'motion';
  const tag = t.replace('motion', 'div');
  const card = [
    '      <article class="movie-card" data-movie="zootopia">',
    '        <' + tag + ' class="movie-visual" style="background:' + grad + '">',
    '          <' + tag + ' class="movie-poster">',
    '            <img src="' + meta.poster + '" alt="' + m.title + '" width="300" height="400" loading="lazy">',
    '          </' + tag + '>',
    '        </' + tag + '>',
    '        <' + tag + ' class="movie-info">',
    '          <' + tag + ' class="movie-year">' + m.year + '</' + tag + '>',
    '          <' + tag + ' class="movie-title">' + m.title + '</' + tag + '>',
    '          <p class="movie-desc">' + m.desc + '</p>',
    '          <span class="movie-tag" style="' + meta.tagStyle + '">' + m.tag + '</span>',
    '          <' + tag + ' class="movie-card-actions">',
    '            <a class="btn-card btn-card-detail" href="detail/zootopia.html">映画詳細</a>',
    '            <a class="btn-card btn-card-chars" href="characters/zootopia.html">キャラクター</a>',
    '          </' + tag + '>',
    '        </' + tag + '>',
    '      </article>'
  ].join('\n');

  html = html.replace(
    '      <article class="movie-card" data-movie="cars">',
    card + '\n      <article class="movie-card" data-movie="cars">'
  );
}

fs.writeFileSync(path.join(root, 'index.html'), html, 'utf8');
console.log('patched index.html');
