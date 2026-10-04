# Céges tudásbázis a nagy AI platformokon

## Teljes projekt-dokumentáció

**Készítette:** Rob (ARworks) · **by DarwinAI (www.darwinai.hu)**
**Dátum:** 2026. október 4.
**Élő oldal:** https://robertclaw202604.github.io/enterprise-ai-kb/
**Forráskód:** https://github.com/RobertClaw202604/enterprise-ai-kb

---

## 1. Mi ez a projekt?

Egy nyilvános, magyar nyelvű, hét részből álló weboldal + egy tizenöt diás prezentáció, amely
**vezetői döntéshozóknak** mutatja be, hogyan integrálják a négy nagy AI-szolgáltató
(OpenAI, Anthropic, Microsoft, Google) megoldásai egy cég **saját belső tudásbázisát**.

A cél nem az, hogy eldöntse, „melyik AI a legokosabb" — hanem hogy megmutassa:

- a **közös működési logikát**, amely mind a négy szolgáltatónál ugyanaz;
- az **integrációs lehetőségeket** (kész connectorok és egyedi MCP-hidak);
- a **költségeket** egy interaktív kalkulátoron keresztül;
- a **jogosultság és az adatminőség** kérdését, amelyek valójában vezetői felelősséget jelentenek.

### A központi tézis

> **Egyik szolgáltató sem „tanítja be" a céges tudást a modellbe.**
> Mind a négy ugyanazt a mintát követi: a kérdés pillanatában megkeresi a releváns céges
> dokumentumokat, és azokat **kontextusként** adja a modellnek — jogosultság-tudatosan.
> Ez a *retrieval + grounding* modell: a tudás ott marad, ahol van, a modell csak „odanéz".

Ennek három vezetői következménye van:

1. **A tudás a cégé marad** — nincs betanítás, nincs másolat a modellben.
2. **Az integráció a lényeg** — nem a modell a szűk keresztmetszet, hanem az összekötés.
3. **A governance vezetői feladat** — ki mit láthat, mi naplózódik, mi tilos.

---

## 2. Oldaltérkép és struktúra

Az oldal **hét önálló aloldalból** áll (nem egy lapon belüli ugrálás), egységes felső
navigációval, amely minden oldalon megtalálható és az aktuális oldalt kiemeli.

```
Kezdőlap (index.html)
│   Hero + „A nagy kép" kártyarács + Miért fontos egy vezetőnek? + Adatminőség
│
├── Vállalati AI rendszer   (vallalati-ai-rendszer.html)
│   ├── #architektura   — a teljes rendszer egyben (nagy SVG ábra)
│   └── #kockazatok     — amit minden bevezetésnél át kell gondolni
│
├── Elérhető szállítók      (szallitok.html)
│   ├── #osszefoglalo   — miről van szó
│   ├── #minta          — a közös hatlépéses minta
│   ├── #openai         — Company knowledge a ChatGPT-ben
│   ├── #anthropic      — Enterprise Search és MCP connectorok
│   ├── #microsoft      — Work IQ, Copilot connectors, Microsoft Graph
│   ├── #google         — Gemini Enterprise connectorok, data store-ok
│   ├── #tabla          — összehasonlító táblázat
│   └── #vallalati      — mit válasszon a cég?
│
├── Előfizetések            (elofizetesek.html)
│   ├── #marketIntro        — piaci háttér és útmutató
│   ├── #calculator         — létszám és hozzáférési szintek
│   ├── #subscriptionsCalculator — seat-alapú kalkulátor
│   ├── #microsoftLicensing — Copilot licencelés felépítése
│   ├── #plansOverview      — vállalati előfizetések (2026.09.15.)
│   ├── #apiOverview        — API-árak tokenköltség szerint
│   ├── #microsoftOverview  — Windows / egyéni és vállalati szintek
│   ├── #decisionLogic      — javasolt döntési logika
│   ├── #finalRecommendation — javasolt kiindulási felállás
│   ├── #totals             — összesítés
│   └── #sources            — források és értelmezési megjegyzések
│
├── Use case szimulátor     (szimulator.html)
│   └── #szimulator     — HR / Sales / Pénzügy / Jogi részlegek, lépésről lépésre
│
├── Fő működési pontok      (mukodesi-pontok.html)
│   ├── #adatminoseg    — csak annyira jó, amennyire a saját adataid jók
│   ├── #standard-rendszerek — kész connectorok (a leggyorsabb út)
│   ├── #sajat-rendszerek — egyedi céges rendszerek bekötése
│   ├── #mcp            — az MCP a gyakorlatban
│   ├── #fajlok         — mi történik a kért fájlokkal
│   └── #ugynokok       — ügynökök működése
│
└── Terminológia            (terminologia.html)
    └── #glosszarium    — 12 kulcsfogalom laikus nyelven

Prezentáció (prezentacio.html) — 15 dia, teljes képernyős, önálló
```

### Felső navigáció (minden oldalon, 7 elem)

1. Kezdőlap
2. Vállalati AI rendszer
3. Elérhető szállítók
4. Előfizetések
5. Use case szimulátor
6. Fő működési pontok
7. Terminológia

Minden oldal tetején ott a **„▶ Prezentáció indítása (15 dia)"** gomb, a láblécben pedig
a **by DarwinAI · www.darwinai.hu** hivatkozás.

---

## 3. Az oldalak tartalma szövegesen

### 3.1 Kezdőlap (`index.html`) — 804 szó

**Hero:** bevezető a témába, a prezentáció-indító gombbal.

**„A nagy kép — a témák, oldalanként":** hat kártya, mindegyik a hozzá tartozó aloldalra
mutat (1. Vállalati AI rendszer, 2. Elérhető szállítók, 3. Előfizetések, 4. Szimulátor,
5. Fő működési pontok, 6. Terminológia).

**„Miért fontos ez egy vezetőnek?"** — három kártya:
- *A tudás a cégé marad* — a modell nem tanulja be az adatot, a válasz forrásmegjelöléssel jön.
- *A jogosultság nem sérül* — minden kérés a bejelentkezett munkatárs nevében fut.
- *A döntés embernél marad* — az AI javasol, nem dönt; a jóváhagyás és a felelősség emberi.

**„Csak annyira lesz jó, amennyire a saját adataid jók"** — ez az új szakasz. Lényege:
az AI nem varázslat, hanem **tükröt tart a cég elé**; a hiányos nyilvántartást, az elavult
folyamatleírásokat és a párhuzamos Excel-fájlokat elegánsabb megfogalmazásban adja vissza —
és ez veszélyesebb a semmilyen válasznál, mert egy jól hangzó mondatban hitelesnek tűnik
a rossz adat. Négy kártya: **Pontosság, Teljesség, Elérhetőség, Struktúra**, majd ötödikként
a **jogosultság és hozzáférés kezelése**, végül egy callout arról, hogy az AI-projekt valójában
**adatminőségi projekt**, ahol a modell csak a látszat.

### 3.2 Vállalati AI rendszer (`vallalati-ai-rendszer.html`) — 526 szó

- **#architektura** — a teljes rendszer egyben, a nagy `architektura.svg` ábrával
  (hat réteg + hatlépéses folyamat a láblécben).
- **#kockazatok** — amit minden bevezetésnél át kell gondolni: túl széles hozzáférés,
  prompt injection, adatkezelés és megfelelés.

### 3.3 Elérhető szállítók (`szallitok.html`) — 2294 szó

A legrészletesebb oldal. Nyolc szakasz:

- **#osszefoglalo** — miről van szó, a probléma felvetése.
- **#minta** — a közös hatlépéses minta, amelyet mind a négy szolgáltató követ.
- **#openai** — „Company knowledge" a ChatGPT-ben (2025 októberi funkció).
- **#anthropic** — „Enterprise Search" és MCP connectorok.
- **#microsoft** — Work IQ, Copilot connectors és Microsoft Graph.
- **#google** — Gemini Enterprise connectorok és data store-ok.
- **#tabla** — összehasonlító táblázat a négy megoldásról egymás mellett.
- **#vallalati** — mit válasszon a cég: szempontok, nem puszta rangsor.

### 3.4 Előfizetések (`elofizetesek.html`) — 2635 szó

**Teljesen semleges, interaktív kalkulátor-oldal** (minden Arago-hivatkozás nélkül).
A „30 / 20 / 10 / 5 fő" csak kiindulási példa, bárki a saját számaival szerkesztheti.

Funkciók:
- **Létszám és hozzáférési szintek** szerkesztése.
- **Seat-alapú előfizetés-kalkulátor** (ChatGPT Business, Claude Team, Copilot Business stb.).
- **Microsoft Copilot licencelés** felépítése.
- **API-árak** összehasonlítható tokenköltséggel.
- **Árfolyam** szerkeszthető (USD 317,435 / EUR 366,346 alapértékkel).
- **Preset-ek:** „30 / 20 / 10 / 5 fő", „lean", „everything", „ms".
- **Export:** Excel-CSV és JSON, valamint **JSON import**.

Az adatállapot: **2026. szeptember 15.** (valós áradat-dátum). Minden ár nettó, ÁFA nélkül.

### 3.5 Use case szimulátor (`szimulator.html`) — 825 szó

Interaktív: négy részleg (HR, Sales, Pénzügy, Jogi), és mindegyiknél lépésről lépésre
végignézhető, mit kérdez a felhasználó, mi történik a háttérben, és mit kap vissza —
forrásmegjelöléssel. A lépések egymás után jelennek meg (`.step-list`).

### 3.6 Fő működési pontok (`mukodesi-pontok.html`) — 3202 szó

A leggyakorlatiasabb oldal, hat szakasz:

- **#adatminoseg** — az új szakasz: a rendszer csak annyira lesz jó, amennyire a saját
  adataid jók. Négy feltétel (Pontosság, Teljesség, Elérhetőség, Struktúra) + ötödikként
  a jogosultságkezelés, konkrét felsorolással (jogosultság-örökítés, szigorú olvasási/írási
  határok, naplózás, adatkezelési keretek). Callout a helyes sorrendről.
- **#standard-rendszerek** — kész connectorok: fájltárak, üzleti rendszerek, kommunikáció,
  fejlesztés. Üzenet: nincs fejlesztés, csak adminisztrátori bekapcsolás.
- **#sajat-rendszerek** — egyedi, nem széles körben használt céges rendszerek bekötése.
- **#mcp** — az MCP a gyakorlatban, döntéshozói szemmel.
- **#fajlok** — mi történik a kért fájlokkal, hova kerülnek.
- **#ugynokok** — ügynökök: ki csinálja, hol vannak, honnan tudom, hogy vannak.

### 3.7 Terminológia (`terminologia.html`) — 836 szó

Tizenkét kulcsfogalom laikus nyelven, hasonlatokkal: MCP, RAG, grounding, föderált vs.
indexelt elérés, CMEK, prompt injection és a többiek.

---

## 4. Prezentáció (`prezentacio.html`)

**Tizenöt dia**, teljes képernyős, PPT/Gamma-szerű navigációval. Minden dián:
- jobb oldalon **vektoros, kódból generált, animált SVG ábra** (a működést mutatja be);
- a szöveg alján **link a kapcsolódó oldalrészhez**;
- a sarokban a **DarwinAI logó**.

### A 15 dia

| # | Cím | Téma | Kapcsolódó link |
|---|-----|------|-----------------|
| 1 | Mit jelent egy szervezeti AI bevezetés? | Cím, by DarwinAI | — |
| 2 | A modell önmagában semmit sem tud a cégről | Kiindulópont | vallalati-ai-rendszer.html |
| 3 | Egyik szolgáltató sem tanítja be a céges tudást | Központi gondolat | terminologia.html |
| 4 | Hogyan épül fel egy szervezeti AI rendszer? | Architektúra | vallalati-ai-rendszer.html |
| 5 | Ugyanaz a logika, négy eltérő hangsúly | Négy szolgáltató | szallitok.html |
| 6 | A leggyorsabb út: kész connectorok | Standard rendszerek | mukodesi-pontok.html |
| 7 | Mi van, ha a tudás saját rendszerben él? | MCP | mukodesi-pontok.html |
| 8 | Mennyibe kerül mindez? | Előfizetések | elofizetesek.html |
| 9 | Egymásra épülő hozzáférési szintek | Döntési logika | elofizetesek.html |
| 10 | A legfontosabb governance-kérdés | Jogosultság | vallalati-ai-rendszer.html#kockazatok |
| 11 | Amire minden bevezetésnél figyelni kell | Kockázatok | — |
| 12 | Három gondolat, amit érdemes megjegyezni | A lényeg | — |
| 13 | Az oldal hét része | Következő lépés | mind a 7 oldal |
| 14 | A szervezeti AI nem egy modell bevezetése… | Összegzés + DarwinAI | — |
| 15 | Nézd meg a teljes oldalt | Elérhetőségek | mind a 7 oldal |

### Vezérlés
- **← / → / Space** — léptetés; **PageUp / PageDown** — lapozás
- **Home / End** — első / utolsó dia
- **O** — áttekintés (kicsinyített diarács, kattintható)
- **F** — teljes képernyő (Fullscreen API)
- **PDF / Nyomtatás** gomb — A4 fekvő, diánként egy oldal, világos nyomtatási témával
- Mobilon: **swipe** balra/jobbra

---

## 5. Az ábrák

### 5.1 Kézzel írt, önálló SVG ábrák (2 db)

| Fájl | Méret | Tartalom |
|------|-------|----------|
| `architektura.svg` | 21,9 KB | Teljes rendszer-architektúra: 6 réteg + 6-lépéses folyamat a láblécben. `viewBox="0 0 1440 1870"`. |
| `mcp-infografika.svg` | 9,7 KB | MCP-infografika: 3 panel, színkódolt eszközlista (zöld = csak olvasás, sárga = írás, piros = figyelmeztetés). |

Mindkettő **kézzel írt kódból** készült (nem AI-kép), így pixelpontos és a magyar szöveg
helyesen jelenik meg benne.

### 5.2 Prezentáció beágyazott SVG ábrái (11 db)

A prezentáció minden tartalmi diája kapott egy saját, animált SVG ábrát. Az animációk
CSS `@keyframes`-szel futnak (nincs JS-igény), és nyomtatásban automatikusan leállnak.

| Dia | Ábra | Animáció |
|-----|------|----------|
| 2 | Modell ↔ céges tudás szakadás | villogó hiba-pont (`blink`) |
| 3 | Kérdés → keresés → kontextus → válasz | futó folyamatvonalak (`flow`) |
| 4 | A hat réteg | lefelé futó nyilak, pulzáló pontok (`pulse`) |
| 5 | Négy szolgáltató egy mag körül | két ellentétes forgó gyűrű (`spin` / `spin-r`) |
| 6 | Egy asszisztens, sok connector | forgó külső gyűrű, futó vonalak |
| 7 | MCP-híd | mozgó jelek a hídon |
| 8 | Költségszintek oszlopai | lélegző oszlopok (`bargrow`) |
| 9 | Egymásra épülő szintek | pillantó nyilak (`flow`) |
| 10 | Jogosultság-szűrő | be/ki pulzáló pontok |
| 11 | Kockázatok → védelem | futó vonal a pajzsoktól |
| 12 | A tudás útja | pulzáló mag |
| 13–15 | — (tartalom- és záródiák) | — |

### 5.3 Screenshotok

A dokumentációhoz készült képek a `kepek/` mappában:

| Fájl | Tartalom |
|------|----------|
| `01-kezdolap.png` | Kezdőlap teljes nézet |
| `02-vallalati-ai-rendszer.png` | Vállalati AI rendszer oldal |
| `03-szallitok.png` | Elérhető szállítók oldal |
| `04-elofizetesek.png` | Előfizetések (kalkulátor) oldal |
| `05-szimulator.png` | Use case szimulátor oldal |
| `06-mukodesi-pontok.png` | Fő működési pontok oldal |
| `07-terminologia.png` | Terminológia oldal |
| `svg-architektura.png` | Az architektúra SVG önmagában |
| `svg-mcp-infografika.png` | Az MCP-infografika SVG önmagában |
| `diak/01-dia.png` … `diak/15-dia.png` | A prezentáció mind a 15 diája külön-külön |

---

## 6. Technikai jellemzők

- **Statikus, önálló HTML** — nincs build-lépés, nincs szerveroldali függőség.
- **Egységes sötét téma** — narancs (#ff5100) ARworks-akcentus + arany DarwinAI-akcentus.
- **Reszponzív** — 980 px és 640 px alatt tördel a rács; mobilon swipe-os prezentáció.
- **Nyelvhelyesség** — a magyar „ami helyett amely" szabály mindenhol betartva.
- **Nyomtatás** — a prezentáció A4 fekvő laponként egy diát ad, világos témában.

## 7. Fájllista

| Fájl | Méret | Szerep |
|------|-------|--------|
| `index.html` | 27,9 KB | Kezdőlap |
| `vallalati-ai-rendszer.html` | 23,1 KB | Architektúra + kockázatok |
| `szallitok.html` | 46,9 KB | A négy szolgáltató összehasonlítása |
| `elofizetesek.html` | 91,3 KB | Kalkulátor (beágyazott JS) |
| `szimulator.html` | 29,6 KB | Use case szimulátor |
| `mukodesi-pontok.html` | 51,9 KB | Gyakorlati működés |
| `terminologia.html` | 26,0 KB | Fogalomtár |
| `prezentacio.html` | 53,0 KB | 15 diás prezentáció |
| `architektura.svg` | 21,9 KB | Architektúra-ábra |
| `mcp-infografika.svg` | 9,7 KB | MCP-infografika |
| `assets/darwinai/darwin-ai-logo.png` | — | DarwinAI logó (128 px) |
| `assets/darwinai/darwin-ai-logo-600.png` | — | DarwinAI logó (600 px) |

### Archivum és forrás
- `_archiv/index-egylapos-20261004.html` — az eredeti egylapos változat (megőrizve).
- `_forras/arago-elofizetes-kalkulator-eredeti.html` — a kalkulátor eredeti forrása.

---

## 8. Összegzés

Az oldal egyetlen üzenetet közvetít vezetői szinten:

> **A szervezeti AI nem egy modell bevezetése — hanem a cég tudásának összekötése a modellel,
> jogosultság-tudatosan és ellenőrizhetően.**

Aki ezt megérti, az már a jó kérdéseket teszi fel: mit láthat az AI, melyik rendszereket
kötjük be először, ki szabályozza a hozzáférést, és mikor jó az adat annyira, hogy egyáltalán
érdemes elkezdeni.

---

*by **DarwinAI** · www.darwinai.hu*
