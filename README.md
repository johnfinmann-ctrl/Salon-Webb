# Salon Webb – PWA v1.0.0

Mobil-first Progressive Web App til Salon Webb, Esbjerg.  
Bygget af Nordic Operations · nordicoperations.dk

---

## Filer

```
salonwebb/
├── index.html          Hoved-HTML
├── styles.css          Al styling (ingen framework)
├── app.js              Al logik (ingen framework)
├── manifest.json       PWA manifest
├── service-worker.js   Offline & cache
├── offline.html        Offline-side
├── icons/
│   ├── icon-192.png    PWA ikon (192×192)
│   └── icon-512.png    PWA ikon (512×512)
├── README.md           (denne fil)
└── CHANGELOG.md        Versionslog
```

---

## Deployment – GitHub Pages

1. Opret repository: `salonwebb` (eller ønsket navn)
2. Upload alle filer til `main`-branch
3. Gå til Settings → Pages → Source: `main` / `root`
4. Siden er live på `https://[dit-brugernavn].github.io/salonwebb/`

**Ingen absolutte stier** – alle links er relative og virker på GitHub Pages.

---

## Tilpasning

### Hurtig tilpasning (direkte i app.js)

Øverst i `app.js` ligger `DEFAULT_DATA`-blokken:

```js
kontakt: {
  tlf: '75000000',          // ← skift telefonnummer
  mail: 'info@salonwebb.dk',
  adresse: 'Gaden 1, 6700 Esbjerg',
  maps: 'https://maps.google.com/?q=...',
  instagram: 'https://www.instagram.com/...',
  facebook: 'https://www.facebook.com/...',
  booking: 'https://salonwebb.bestilling.nu'
}
```

### Admin panel (in-app)

- Klik **7 gange** på "Salon Webb"-logoet i navigation
- Adgangskode: `webb2026`
- Her kan du ændre alt uden at røre koden

---

## Links der skal opdateres

| Felt | Standard-værdi | Skal ændres til |
|------|---------------|-----------------|
| Telefon | `75000000` | Salonens rigtige nummer |
| E-mail | `info@salonwebb.dk` | Salonens e-mail |
| Adresse | `Adressenavn 1, 6700 Esbjerg` | Rigtig adresse |
| Google Maps | Placeholder URL | Rigtig Maps-link |
| Instagram | `/salonwebb` | Rigtig profil |
| Facebook | `/salonwebb` | Rigtig side |

---

## PWA – Installér på telefon

**iOS (Safari):**  
Del-knap → "Føj til hjemmeskærm"

**Android (Chrome):**  
Tre prikker → "Tilføj til startskærm"  
(eller accept installationsbanner der vises automatisk)

---

## Billeder

Hero og atmosfærebilleder hentes fra Unsplash (gratis, ingen login).  
Udskift med salonens egne billeder ved at ændre URL i:

- `styles.css` → søg efter `background-image: url(`
- `app.js` → teammedlemmernes `foto`-felt

---

## Test-tjekliste

- [ ] Telefon-link (tel:) virker på mobil
- [ ] SMS-link (sms:) virker på mobil  
- [ ] E-mail-link (mailto:) virker
- [ ] Booking åbner salonwebb.bestilling.nu
- [ ] Google Maps åbner korrekt
- [ ] Instagram-link virker
- [ ] Facebook-link virker
- [ ] Alle billeder vises
- [ ] Mobil (iPhone/Android) – layout OK
- [ ] iPad – layout OK
- [ ] Desktop – nav vises, mobile bar skjules
- [ ] GitHub Pages deployment
- [ ] PWA manifest valideret
- [ ] Service Worker registreret
- [ ] Offline-side vises uden internet
- [ ] Admin panel tilgængeligt via 7-tap + kode

---

## Cache-busting

Filer versionsmarkeres med `?v=1.0.0`.  
Ved opdatering: skift versionsnummer i `index.html` og `service-worker.js` (konstanten `CACHE_VERSION`).
