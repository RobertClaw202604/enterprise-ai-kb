import { readFileSync, writeFileSync } from 'fs';
import { readdirSync } from 'fs';

const B = '_build/';
const css = readFileSync(B + 'css.txt', 'utf8');

// SVG-k betöltése
const svgs = {};
for (const f of readdirSync(B)) {
  if (f.startsWith('svg-') && f.endsWith('.txt')) {
    const key = f;
    svgs[key] = readFileSync(B + f, 'utf8').trimEnd();
  }
}

// diák
const slideFiles = readdirSync(B).filter(f => /^s\d+\.html$/.test(f)).sort();
let slides = slideFiles.map(f => {
  let h = readFileSync(B + f, 'utf8').trimEnd();
  h = h.replace(/\[\[SVG:([a-z0-9\-]+\.txt)\]\]/g, (m, key) => {
    if (!svgs[key]) { console.error('HIÁNYZÓ SVG:', key); return m; }
    return svgs[key];
  });
  return h;
});

// diacímek az áttekintéshez
const titles = slides.map((s, i) => {
  const tag = (s.match(/class="slide-tag">([^<]+)</) || [, ''])[1];
  const h = (s.match(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/) || [, ''])[1]
    .replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  return { n: String(i + 1).padStart(2, '0'), tag: tag.trim(), title: h };
});

const JS = readFileSync(B + 'app.js', 'utf8');

const out = `<!doctype html>
<html lang="hu">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Prezentáció — Szervezeti AI bevezetés vezetői összefoglaló</title>
<meta name="description" content="Tizenöt diás vezetői összefoglaló: mit jelent egy szervezeti AI bevezetés, hogyan épül fel, mennyibe kerül, mire kell figyelni. by DarwinAI (www.darwinai.hu).">
<style>
${css}
</style>
</head>
<body>

<div class="deck" id="deck">
${slides.join('\n\n')}
</div>

<div class="hint" id="hint">← → a léptetéshez · O: áttekintés · F: teljes képernyő</div>

<div class="overview" id="overview">
  <h3>Áttekintés — kattints egy diára</h3>
  <div class="ov-grid" id="ovGrid"></div>
</div>

<div class="bar">
  <div class="bar-left">
    <a class="home" href="index.html" title="Vissza a kezdőlapra">← Kezdőlap</a>
    <button id="btnOverview" title="Diák áttekintése (O)">Áttekintés</button>
  </div>
  <div class="progress"><span id="prog"></span></div>
  <div class="bar-right">
    <span class="counter" id="counter">1 / ${slides.length}</span>
    <button id="btnPrev" title="Előző dia (←)">←</button>
    <button id="btnNext" title="Következő dia (→)">→</button>
    <button id="btnFs" title="Teljes képernyő (F)">Teljes képernyő</button>
    <button id="btnPrint" title="Nyomtatás vagy PDF export">PDF / Nyomtatás</button>
  </div>
</div>

<script>
window.__SLIDES = ${JSON.stringify(titles)};
${JS}
</script>
</body>
</html>
`;

writeFileSync('prezentacio.html', out);
console.log('OK prezentacio.html', Math.round(out.length / 1024) + 'KB');
console.log('diák:', slides.length);
const missing = out.match(/\[\[SVG:/g);
console.log('betöltetlen SVG helyőrző:', missing ? missing.length : 0);
