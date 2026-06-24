# CHANGELOG – Salon Webb PWA

Alle ændringer dokumenteres her.  
Format: [VERSION] DATO – Beskrivelse

---

## [1.0.0] – 2026-06-24

### Første udgivelse

**Sider & sektioner**
- Hero med parallax-baggrund, logo, undertitel og 4 CTA-knapper
- Atmosfære-galleri (3 billeder, hover-zoom)
- Team / Frisører (dynamiske kort fra DATA)
- Priser med faner (Damer / Herrer / Børn / Behandlinger)
- Produkter (grid med brand-logo fallback)
- Åbningstider med "Åben nu"-indikator
- Kontakt med adresse, telefon, mail, sociale medier og kort-pladsholder
- Footer med copyright og Nordic Operations-kreditering

**Navigation**
- Fast topnavigation (desktop) med booking-knap
- Fast mobilbjælke (bottom bar) med 5 hurtiglinks
- Smooth scroll til alle sektioner
- Active-state i mobilbjælke via IntersectionObserver

**PWA**
- `manifest.json` med navn, farver, ikoner og genvej til booking
- `service-worker.js` med cache-first strategi og automatisk cache-invalidering
- `offline.html` med ring/SMS-muligheder uden internet
- Installationsbanner (beforeinstallprompt)
- Push notification-infrastruktur (parat til fremtidigt brug)

**Admin panel**
- Skjult bag 7-tap på logo + adgangskode (`webb2026`)
- Redigér: kontaktinfo, links, åbningstider, priser, team, produkter, tilbud
- Data persisteret i localStorage
- Nulstil til standarddata

**Design**
- Palette: nær-sort #0E0E0E, varm off-white #F7F4EF, champagneguld #C9A96E
- Typografi: Playfair Display (display) + Inter (body)
- Hover-zoom på billeder (desktop only)
- Touch tap-animation på alle knapper
- Parallax på hero
- Reduced motion respekteret

**Teknisk**
- Ingen frameworks – ren HTML/CSS/JS
- Relative stier – fungerer på GitHub Pages
- Cache-busting med `?v=1.0.0`
- XSS-safe rendering via `esc()`-funktion
- Offline-banner ved ingen forbindelse

---

## Planlagte opdateringer

- [ ] Rigtige salonbilleder (udskift Unsplash)
- [ ] Rigtige kontaktoplysninger
- [ ] Google Maps embed (iframe) med rigtig adresse
- [ ] Tilpassede ikoner med Salon Webb-logo
- [ ] Tilbud/kampagne-banner aktiveret
- [ ] Push notifications (kræver server)
