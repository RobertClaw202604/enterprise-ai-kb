import { execFileSync } from 'child_process';
import { mkdirSync, existsSync } from 'fs';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const fs = await import('fs');
const src = fs.readFileSync('prezentacio.html', 'utf8');
const outDir = '_docs/kepek/diak';
mkdirSync(outDir, { recursive: true });

// minden diát külön fájlba: csak az adott slide legyen active
const parts = src.split('<section class="slide');
console.log('slide darabok:', parts.length - 1);

for (let i = 1; i < parts.length; i++) {
  // rekonstrukció: minden slide-ból csak az i-edik kap active-ot
  let slides = [];
  for (let k = 1; k < parts.length; k++) slides.push('<section class="slide' + parts[k]);
  slides = slides.map((s, idx) => idx === i - 1 ? s.replace('<section class="slide', '<section class="slide active') : s);
  let html = parts[0] + slides.join('');
  // a JS go(0) felülírná az aktív diát → kivesszük a screenshot-másolatból
  html = html.replace(/\n\s*go\(0\);/, '\n  /* screenshot: nincs auto-go */');
  const f = `/tmp/slide-${i}.html`;
  fs.writeFileSync(f, html);
  const out = `${outDir}/${String(i).padStart(2, '0')}-dia.png`;
  execFileSync(CHROME, [
    '--headless', '--disable-gpu', '--hide-scrollbars',
    '--window-size=1600,900', `--screenshot=${out}`,
    '--virtual-time-budget=2500', `file://${f}`
  ], { stdio: 'ignore' });
  console.log('OK', out);
}
