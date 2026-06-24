# OVERDRAGELSESGUIDE – Salon Webb
**Nordic Operations · nordicoperations.dk**  
**Version 1.1.0 · 24. juni 2026**

---

## Til ejeren af Salon Webb

Denne guide forklarer alt du behøver at vide for at drive og vedligeholde din hjemmeside.

Du behøver **ingen teknisk viden** for at bruge den.

---

## 1. Hvad er leveret

Din hjemmeside er en komplet digital løsning som kan:

- Vises på telefon, tablet og computer
- Installeres som app på din telefon (PWA)
- Fungere offline hvis internettet er nede
- Redigeres via et admin-panel uden at røre kode

**Filer du har modtaget:**

| Fil | Hvad er det |
|-----|-------------|
| `index.html` | Forsiden af dit site |
| `styles.css` | Udseendet (farver, skrifttype, layout) |
| `app.js` | Sitet funktionalitet |
| `data.js` | ALT dit indhold (startindstillinger) |
| `manifest.json` | PWA app-indstillinger |
| `service-worker.js` | Offline-funktionalitet |
| `offline.html` | Side der vises ved ingen forbindelse |
| `admin/` | Admin-panelet |
| `icons/` | App-ikoner |

---

## 2. Adgang til admin-panelet

Gå til: `[dit-site]/admin/`  
Fx: `https://salonwebb.dk/admin/`

**Login:**
- E-mail: `admin@salonwebb.dk`
- Adgangskode: `webb2026`

**⚠️ Skift adgangskoden** inden du går live:
Admin → Indstillinger → Skift adgangskode

---

## 3. Hvad du kan redigere via admin

| Panel | Hvad du kan ændre |
|-------|-------------------|
| **Forside** | Hero-billede, overskrift, undertitel, logo-tekst |
| **Behandlinger** | Tilføj/ret/slet ydelser med ikon og tekst |
| **Priser** | Kategorier, priser, beskrivelse, sortering |
| **Produkter** | Brand, billede, navn, pris |
| **Team** | Tilføj/slet frisører, foto, bio, booking-link |
| **Galleri** | Tilføj/slet billeder via URL |
| **Åbningstider** | Alle dage, ferietekst, helligdage |
| **Kontakt** | Telefon, mail, adresse, sociale medier |
| **Tilbud** | Kampagnebanner med datoer |
| **SEO** | Sidetitel, beskrivelse (til Google) |
| **QR-koder** | Generér og download QR til print |
| **Mediakontrol** | Tjek for manglende billeder |
| **Backup** | Eksportér og importér al din data |
| **Testcenter** | Test at alle links virker |
| **Indstillinger** | Brugere, adgangskode, versionsnummer |

---

## 4. Vigtigste ting at gøre nu

### A. Opdatér kontaktoplysninger
Admin → Kontakt:
- [ ] Ret telefonnummeret
- [ ] Ret e-mail
- [ ] Ret adresse og postnummer
- [ ] Sæt Google Maps link
- [ ] Sæt din Instagram URL
- [ ] Sæt din Facebook URL
- [ ] Bekræft at booking-URL er korrekt

### B. Skift adgangskode
Admin → Indstillinger → Skift adgangskode

### C. Upload salonens egne billeder
- Hero-billede: Admin → Forside → Baggrundsbillede URL
- Team-fotos: Admin → Team → Foto URL
- Galleri: Admin → Galleri → Tilføj URL

### D. Kør testcenter
Admin → Testcenter → "Kør alle tests"

### E. Kør mediakontrol
Admin → Mediakontrol → "Kør mediakontrol"

---

## 5. Upload til GitHub Pages (gratis hosting)

1. Opret gratis konto på [github.com](https://github.com)
2. Opret nyt repository, fx `salonwebb`
3. Upload alle filerne (inkl. `admin/` og `icons/`)
4. Gå til: Settings → Pages → Source: `main` / `(root)`
5. Dit site er nu live på: `https://[brugernavn].github.io/salonwebb/`

**Husk:** Indsæt din live URL i Admin → Kontakt → Site URL (til QR-koder)

---

## 6. Tilføj sitet som app på telefonen

**iPhone (Safari):**
1. Åbn sitet i Safari
2. Tryk på deleknappen (□↑)
3. Vælg "Føj til hjemmeskærm"

**Android (Chrome):**
1. Åbn sitet i Chrome
2. Tryk på de tre prikker (⋮)
3. Vælg "Tilføj til startskærm"

Et installationsbanner vises automatisk på Android efter 3 sekunder.

---

## 7. Billeder – råd og tips

**Brug Unsplash for gratis professionelle billeder:**
- Gå til [unsplash.com](https://unsplash.com)
- Søg fx "hair salon" eller "hairdresser"
- Klik på et billede → højreklik → "Kopiér billedadresse"
- Indsæt i admin-panelet

**Eller upload dine egne:**
1. Upload billedet til GitHub i en mappe, fx `/assets/`
2. Kopiér URL'en
3. Indsæt i admin-panelet

**Billeder virker altid** – hvis et billede mangler, vises automatisk en pæn placeholder.

---

## 8. QR-koder til print

1. Gå til Admin → QR-koder
2. Du ser QR-koder til: Hjemmeside, Booking, Instagram, Facebook, Maps og Telefon
3. Klik "Download PNG" ud for den ønskede kode
4. Brug filen til visitkort, vinduesklistermærke, plakat osv.

---

## 9. Backup – vigtigt!

**Tag backup mindst én gang om måneden:**
1. Admin → Backup → "Download JSON"
2. Gem filen på din computer eller Google Drive

**Gendan fra backup:**
1. Admin → Backup → "Vælg fil"
2. Vælg din backup-fil

---

## 10. Hvad du IKKE må ændre direkte

Disse filer styrer sitet teknisk. Lad dem være, medmindre du ved hvad du gør:
- `styles.css`
- `app.js`
- `service-worker.js`
- `manifest.json`

Al redigering foregår via admin-panelet eller i `data.js`.

---

## 11. Opdatér sitet

Når du har lavet ændringer via admin → Gem → er sitet opdateret i din browser automatisk.

For at opdatere versionen (fx ved tekniske ændringer):
1. Admin → Indstillinger → Opdatér versionsnummer
2. Opdatér `?v=X.X.X` i `index.html` (tre steder)
3. Opdatér `CACHE = 'salonwebb-vX.X.X'` i `service-worker.js`

---

## 12. Support

Sitet er bygget og ejet af dig. Koden er fri til brug og videreudvikling.

For teknisk assistance, kontakt:

**Nordic Operations**  
[nordicoperations.dk](https://nordicoperations.dk)

---

## Sikkerhed

- Admin-panelet er beskyttet med login + 4-timers session-timeout
- Al data gemmes lokalt i din browser (localStorage)
- Ingen data sendes til Nordic Operations eller andre tredjeparter
- Sitet er forberedt til GDPR, NIS2 og CRA

---

*Salon Webb v1.1.0 · Bygget af Nordic Operations · nordicoperations.dk*
