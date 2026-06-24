/* ============================================
   SALON WEBB – app.js v1.0.0
   ============================================ */

'use strict';

// ===== DATA (redigér her eller via admin panel) =====
const DEFAULT_DATA = {
  version: '1.0.0',

  kontakt: {
    tlf: '75000000',
    mail: 'info@salonwebb.dk',
    adresse: 'Adressenavn 1, 6700 Esbjerg',
    maps: 'https://maps.google.com/?q=Salon+Webb+Esbjerg',
    instagram: 'https://www.instagram.com/salonwebb',
    facebook: 'https://www.facebook.com/salonwebb',
    booking: 'https://salonwebb.bestilling.nu'
  },

  tilbud: {
    tekst: '',
    dato: ''
  },

  aabningstider: [
    { dag: 'Mandag',   aaben: '09:00', luk: '17:30', lukket: false },
    { dag: 'Tirsdag',  aaben: '09:00', luk: '17:30', lukket: false },
    { dag: 'Onsdag',   aaben: '09:00', luk: '17:30', lukket: false },
    { dag: 'Torsdag',  aaben: '09:00', luk: '20:00', lukket: false },
    { dag: 'Fredag',   aaben: '09:00', luk: '17:30', lukket: false },
    { dag: 'Lørdag',   aaben: '09:00', luk: '14:00', lukket: false },
    { dag: 'Søndag',   aaben: '00:00', luk: '00:00', lukket: true  }
  ],

  priser: {
    damer: [
      { navn: 'Klip & Vask',          beskrivelse: 'Inkl. føntørring', pris: '395 kr.' },
      { navn: 'Kort klip',             beskrivelse: 'Vask og styling',  pris: '345 kr.' },
      { navn: 'Farve – helfarve',      beskrivelse: 'Inkl. klip',       pris: 'fra 795 kr.' },
      { navn: 'Highlights',            beskrivelse: 'Folier, fuld hoved', pris: 'fra 895 kr.' },
      { navn: 'Balayage',             beskrivelse: 'Håndbemalet teknik',  pris: 'fra 1.095 kr.' },
      { navn: 'Permanent bølger',     beskrivelse: 'Inkl. klip & styling', pris: 'fra 995 kr.' }
    ],
    herrer: [
      { navn: 'Herreklip',            beskrivelse: 'Vask inkluderet',  pris: '245 kr.' },
      { navn: 'Herreklip & skæg',     beskrivelse: 'Trim & formning',  pris: '295 kr.' },
      { navn: 'Skæg trim',            beskrivelse: '',                  pris: '125 kr.' },
      { navn: 'Farve herrer',         beskrivelse: 'Inkl. klip',       pris: 'fra 545 kr.' }
    ],
    boern: [
      { navn: 'Børn op til 12 år',    beskrivelse: 'Inkl. vask',       pris: '185 kr.' },
      { navn: 'Unge 13–17 år',        beskrivelse: 'Inkl. vask',       pris: '225 kr.' }
    ],
    behandlinger: [
      { navn: 'Keratin behandling',   beskrivelse: 'Glat og blank',    pris: 'fra 1.195 kr.' },
      { navn: 'Dybdepleje',           beskrivelse: 'Næring & fugt',    pris: 'fra 195 kr.' },
      { navn: 'Farvekorrektion',      beskrivelse: 'Konsultation kr. 0', pris: 'efter aftale' }
    ]
  },

  team: [
    {
      navn: 'Louise Webb',
      rolle: 'Indehaver & Frisørmester',
      bio: 'Med over 20 års erfaring er Louise hjertet bag Salon Webb.',
      foto: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80'
    },
    {
      navn: 'Maria K.',
      rolle: 'Farvespecialist',
      bio: 'Maria er vores ekspert i balayage og kreative farver.',
      foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80'
    },
    {
      navn: 'Sofie L.',
      rolle: 'Frisør',
      bio: 'Sofie elsker at skabe moderne og tidløse klip.',
      foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80'
    }
  ],

  produkter: [
    { brand: 'Wella', navn: 'SP Hydrate Shampoo', pris: '189 kr.', img: '' },
    { brand: 'Wella', navn: 'SP Color Save Maske', pris: '229 kr.', img: '' },
    { brand: 'OLAPLEX', navn: 'No. 3 Hair Perfector', pris: '325 kr.', img: '' },
    { brand: 'OLAPLEX', navn: 'No. 6 Bond Smoother', pris: '299 kr.', img: '' },
    { brand: 'Redken', navn: 'All Soft Shampoo', pris: '199 kr.', img: '' },
    { brand: 'Redken', navn: 'Extreme Mask', pris: '269 kr.', img: '' }
  ]
};

// ===== STATE =====
let DATA = {};
let adminTapCount = 0;
let adminTapTimer = null;
let currentPriceTab = 'damer';
let deferredInstallPrompt = null;

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  applyKontakt();
  renderTeam();
  renderPrices('damer');
  renderProducts();
  renderHours();
  applyTilbud();
  initNav();
  initParallax();
  initPriceTabs();
  initAdminGesture();
  initAdmin();
  initFooterYear();
  initMobileBarHighlight();
  initPWA();
  checkOnline();
});

// ===== DATA MANAGEMENT =====
function loadData() {
  try {
    const saved = localStorage.getItem('salonwebb_data');
    DATA = saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(DEFAULT_DATA));
  } catch (e) {
    DATA = JSON.parse(JSON.stringify(DEFAULT_DATA));
  }
}

function saveData() {
  try {
    localStorage.setItem('salonwebb_data', JSON.stringify(DATA));
  } catch (e) {
    console.warn('Could not save data:', e);
  }
}

function resetData() {
  if (confirm('Nulstil alle ændringer til standarddata?')) {
    DATA = JSON.parse(JSON.stringify(DEFAULT_DATA));
    saveData();
    location.reload();
  }
}

// ===== APPLY KONTAKT =====
function applyKontakt() {
  const k = DATA.kontakt;
  const tlf = k.tlf.replace(/\s/g, '');

  // Header elements
  setLink('k-tlf', `tel:+45${tlf}`, formatTlf(k.tlf));
  setLink('k-mail', `mailto:${k.mail}`, k.mail);
  setText('k-adresse', k.adresse);
  setLink('k-instagram', k.instagram);
  setLink('k-facebook', k.facebook);
  setLink('k-maps', k.maps);

  // Mobile bar
  setLink('mb-tlf', `tel:+45${tlf}`);
  setLink('mb-sms', `sms:+45${tlf}`);
  setLink('mb-maps', k.maps);

  // Hero buttons
  document.querySelectorAll('a[href^="tel:"]').forEach(el => {
    if (el.id !== 'k-tlf' && el.id !== 'mb-tlf') el.href = `tel:+45${tlf}`;
  });
  document.querySelectorAll('a[href^="sms:"]').forEach(el => {
    if (el.id !== 'mb-sms') el.href = `sms:+45${tlf}`;
  });

  // Booking links
  document.querySelectorAll(`a[href="${DEFAULT_DATA.kontakt.booking}"]`).forEach(el => {
    el.href = k.booking;
  });
}

function setLink(id, href, text) {
  const el = document.getElementById(id);
  if (!el) return;
  if (href) el.href = href;
  if (text !== undefined) el.textContent = text;
}
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}
function formatTlf(tlf) {
  const clean = tlf.replace(/\D/g, '');
  return clean.replace(/(\d{2})(?=\d)/g, '$1 ').trim();
}

// ===== TILBUD BANNER =====
function applyTilbud() {
  const t = DATA.tilbud;
  if (!t || !t.tekst) return;
  const banner = document.getElementById('tilbud-banner');
  const txt = document.getElementById('tilbud-text');
  // Check expiry
  if (t.dato) {
    const expires = new Date(t.dato);
    if (new Date() > expires) return;
  }
  txt.textContent = t.tekst;
  banner.classList.remove('hidden');
  document.getElementById('tilbud-close').addEventListener('click', () => {
    banner.classList.add('hidden');
  });
}

// ===== TEAM =====
function renderTeam() {
  const grid = document.getElementById('team-grid');
  if (!grid) return;
  grid.innerHTML = DATA.team.map(person => `
    <div class="team-card">
      <div class="team-photo" style="background-image:url('${person.foto}')"></div>
      <div class="team-info">
        <p class="team-name">${esc(person.navn)}</p>
        <p class="team-role">${esc(person.rolle)}</p>
        <p class="team-bio">${esc(person.bio)}</p>
      </div>
    </div>
  `).join('');
}

// ===== PRISER =====
function initPriceTabs() {
  document.querySelectorAll('.price-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.price-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPrices(btn.dataset.tab);
    });
  });
}

function renderPrices(tab) {
  currentPriceTab = tab;
  const grid = document.getElementById('price-grid');
  if (!grid) return;
  const list = (DATA.priser[tab] || []);
  grid.innerHTML = list.map(item => `
    <div class="price-card">
      <p class="price-name">${esc(item.navn)}</p>
      ${item.beskrivelse ? `<p class="price-desc">${esc(item.beskrivelse)}</p>` : ''}
      <p class="price-amount">${esc(item.pris)}</p>
    </div>
  `).join('') || '<p style="color:var(--text-light);padding:16px 0">Ingen ydelser endnu.</p>';
}

// ===== PRODUKTER =====
function renderProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  grid.innerHTML = DATA.produkter.map(p => `
    <div class="product-card">
      <div class="product-img" ${p.img ? `style="background-image:url('${p.img}')"` : ''}>
        ${!p.img ? `<span class="product-logo">${esc(p.brand)}</span>` : ''}
      </div>
      <div class="product-info">
        <p class="product-brand">${esc(p.brand)}</p>
        <p class="product-name">${esc(p.navn)}</p>
        <p class="product-price">${esc(p.pris)}</p>
      </div>
    </div>
  `).join('');
}

// ===== ÅBNINGSTIDER =====
function renderHours() {
  const grid = document.getElementById('hours-grid');
  if (!grid) return;
  const now = new Date();
  const dayIdx = (now.getDay() + 6) % 7; // 0=Mandag
  const currentMins = now.getHours() * 60 + now.getMinutes();

  grid.innerHTML = DATA.aabningstider.map((h, i) => {
    const isToday = i === dayIdx;
    const openMins = timeToMins(h.aaben);
    const closeMins = timeToMins(h.luk);
    const isOpenNow = isToday && !h.lukket && currentMins >= openMins && currentMins < closeMins;

    let classes = 'hours-card';
    if (h.lukket) classes += ' closed';
    if (isOpenNow) classes += ' open-now';

    return `
      <div class="${classes}">
        <p class="hours-day">${esc(h.dag.substring(0,3))}</p>
        <p class="hours-time">${h.lukket ? 'Lukket' : `${h.aaben}–${h.luk}`}</p>
        ${isOpenNow ? '<span class="hours-now-badge">Åben nu</span>' : ''}
      </div>
    `;
  }).join('');
}

function timeToMins(t) {
  if (!t) return 0;
  const [h, m] = t.split(':').map(Number);
  return h * 60 + (m || 0);
}

// ===== NAV =====
function initNav() {
  const nav = document.getElementById('site-nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// ===== PARALLAX =====
function initParallax() {
  const bg = document.getElementById('hero-bg');
  if (!bg || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        if (scrollY < window.innerHeight * 1.5) {
          bg.style.transform = `translateY(${scrollY * 0.3}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// ===== MOBILE BAR HIGHLIGHT =====
function initMobileBarHighlight() {
  const sections = ['hjem','frisoerer','priser','produkter','aabningstider','kontakt'];
  const items = document.querySelectorAll('.mb-item[data-section]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        items.forEach(item => {
          item.classList.toggle('active', item.dataset.section === id);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

// ===== FOOTER YEAR =====
function initFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

// ===== ADMIN (7-tap logo) =====
function initAdminGesture() {
  const logo = document.querySelector('.nav-logo');
  if (!logo) return;
  logo.addEventListener('click', (e) => {
    e.preventDefault();
    adminTapCount++;
    clearTimeout(adminTapTimer);
    adminTapTimer = setTimeout(() => { adminTapCount = 0; }, 2500);
    if (adminTapCount >= 7) {
      adminTapCount = 0;
      const pwd = prompt('Admin adgangskode:');
      if (pwd === 'webb2026') {
        openAdmin();
      } else if (pwd !== null) {
        alert('Forkert adgangskode.');
      }
    }
  });
}

function openAdmin() {
  const overlay = document.getElementById('admin-overlay');
  overlay.classList.remove('hidden');
  renderAdminHours();
  renderAdminPrices('damer');
  renderAdminPrices('herrer');
  renderAdminPrices('boern');
  renderAdminPrices('behandlinger');
  renderAdminTeam();
  renderAdminProducts();
  fillAdminKontakt();
  fillAdminTilbud();
}

function initAdmin() {
  document.getElementById('admin-close').addEventListener('click', () => {
    document.getElementById('admin-overlay').classList.add('hidden');
  });
  document.getElementById('admin-overlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('admin-overlay')) {
      document.getElementById('admin-overlay').classList.add('hidden');
    }
  });
  document.getElementById('admin-save').addEventListener('click', saveAdminChanges);
  document.getElementById('admin-reset').addEventListener('click', resetData);

  document.querySelectorAll('.admin-add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      if (target === 'team') {
        DATA.team.push({ navn: '', rolle: '', bio: '', foto: '' });
        renderAdminTeam();
      } else if (target === 'products') {
        DATA.produkter.push({ brand: '', navn: '', pris: '', img: '' });
        renderAdminProducts();
      } else {
        DATA.priser[target] = DATA.priser[target] || [];
        DATA.priser[target].push({ navn: '', beskrivelse: '', pris: '' });
        renderAdminPrices(target);
      }
    });
  });
}

function fillAdminKontakt() {
  const k = DATA.kontakt;
  setValue('a-tlf', k.tlf);
  setValue('a-mail', k.mail);
  setValue('a-adresse', k.adresse);
  setValue('a-maps', k.maps);
  setValue('a-instagram', k.instagram);
  setValue('a-facebook', k.facebook);
  setValue('a-booking', k.booking);
}

function fillAdminTilbud() {
  setValue('a-tilbud', DATA.tilbud.tekst || '');
  setValue('a-tilbud-dato', DATA.tilbud.dato || '');
}

function renderAdminHours() {
  const cont = document.getElementById('admin-hours');
  if (!cont) return;
  cont.innerHTML = DATA.aabningstider.map((h, i) => `
    <div class="admin-hours-row">
      <span class="day-label">${h.dag}</span>
      <input type="time" class="ah-aaben" data-i="${i}" value="${h.aaben}" ${h.lukket ? 'disabled' : ''}>
      <input type="time" class="ah-luk" data-i="${i}" value="${h.luk}" ${h.lukket ? 'disabled' : ''}>
      <label style="display:flex;align-items:center;gap:4px;font-size:0.8rem;white-space:nowrap">
        <input type="checkbox" class="ah-lukket" data-i="${i}" ${h.lukket ? 'checked' : ''}> Lukket
      </label>
    </div>
  `).join('');

  cont.querySelectorAll('.ah-lukket').forEach(cb => {
    cb.addEventListener('change', (e) => {
      const i = +e.target.dataset.i;
      DATA.aabningstider[i].lukket = e.target.checked;
      renderAdminHours();
    });
  });
}

function renderAdminPrices(tab) {
  const cont = document.getElementById(`admin-prices-${tab}`);
  if (!cont) return;
  const list = DATA.priser[tab] || [];
  cont.innerHTML = list.map((item, i) => `
    <div class="admin-price-row">
      <input type="text" placeholder="Navn" class="ap-navn" data-tab="${tab}" data-i="${i}" value="${esc(item.navn)}">
      <input type="text" placeholder="Pris" class="ap-pris" data-tab="${tab}" data-i="${i}" value="${esc(item.pris)}" style="max-width:100px">
      <button class="admin-remove-btn" data-tab="${tab}" data-i="${i}">✕</button>
    </div>
  `).join('');
  cont.querySelectorAll('.admin-remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const t = btn.dataset.tab, i = +btn.dataset.i;
      DATA.priser[t].splice(i, 1);
      renderAdminPrices(t);
    });
  });
}

function renderAdminTeam() {
  const cont = document.getElementById('admin-team');
  if (!cont) return;
  cont.innerHTML = DATA.team.map((p, i) => `
    <div class="admin-team-row" style="flex-direction:column;border:1px solid var(--sand);border-radius:4px;padding:12px;margin-bottom:8px">
      <div style="display:flex;gap:8px;margin-bottom:6px">
        <input type="text" placeholder="Navn" class="at-navn" data-i="${i}" value="${esc(p.navn)}" style="flex:1">
        <button class="admin-remove-btn" data-i="${i}">✕</button>
      </div>
      <input type="text" placeholder="Rolle" class="at-rolle" data-i="${i}" value="${esc(p.rolle)}" style="width:100%;margin-bottom:6px">
      <input type="text" placeholder="Bio" class="at-bio" data-i="${i}" value="${esc(p.bio)}" style="width:100%;margin-bottom:6px">
      <input type="text" placeholder="Foto URL" class="at-foto" data-i="${i}" value="${esc(p.foto)}" style="width:100%">
    </div>
  `).join('');
  cont.querySelectorAll('.admin-remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      DATA.team.splice(+btn.dataset.i, 1);
      renderAdminTeam();
    });
  });
}

function renderAdminProducts() {
  const cont = document.getElementById('admin-products-list');
  if (!cont) return;
  cont.innerHTML = DATA.produkter.map((p, i) => `
    <div class="admin-product-row" style="flex-wrap:wrap;border:1px solid var(--sand);border-radius:4px;padding:10px;margin-bottom:8px;gap:6px">
      <input type="text" placeholder="Brand" class="aprod-brand" data-i="${i}" value="${esc(p.brand)}" style="flex:1;min-width:80px">
      <input type="text" placeholder="Navn" class="aprod-navn" data-i="${i}" value="${esc(p.navn)}" style="flex:2;min-width:120px">
      <input type="text" placeholder="Pris" class="aprod-pris" data-i="${i}" value="${esc(p.pris)}" style="flex:1;min-width:80px">
      <input type="text" placeholder="Foto URL" class="aprod-img" data-i="${i}" value="${esc(p.img)}" style="flex:3;min-width:150px">
      <button class="admin-remove-btn" data-i="${i}">✕</button>
    </div>
  `).join('');
  cont.querySelectorAll('.admin-remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      DATA.produkter.splice(+btn.dataset.i, 1);
      renderAdminProducts();
    });
  });
}

function saveAdminChanges() {
  // Kontakt
  DATA.kontakt.tlf       = getValue('a-tlf');
  DATA.kontakt.mail      = getValue('a-mail');
  DATA.kontakt.adresse   = getValue('a-adresse');
  DATA.kontakt.maps      = getValue('a-maps');
  DATA.kontakt.instagram = getValue('a-instagram');
  DATA.kontakt.facebook  = getValue('a-facebook');
  DATA.kontakt.booking   = getValue('a-booking');

  // Tilbud
  DATA.tilbud.tekst = getValue('a-tilbud');
  DATA.tilbud.dato  = getValue('a-tilbud-dato');

  // Hours
  document.querySelectorAll('.ah-aaben').forEach(el => {
    DATA.aabningstider[+el.dataset.i].aaben = el.value;
  });
  document.querySelectorAll('.ah-luk').forEach(el => {
    DATA.aabningstider[+el.dataset.i].luk = el.value;
  });

  // Prices
  ['damer','herrer','boern','behandlinger'].forEach(tab => {
    const navnEls = document.querySelectorAll(`.ap-navn[data-tab="${tab}"]`);
    const prisEls = document.querySelectorAll(`.ap-pris[data-tab="${tab}"]`);
    navnEls.forEach((el, i) => {
      if (DATA.priser[tab][i]) DATA.priser[tab][i].navn = el.value;
    });
    prisEls.forEach((el, i) => {
      if (DATA.priser[tab][i]) DATA.priser[tab][i].pris = el.value;
    });
  });

  // Team
  document.querySelectorAll('.at-navn').forEach(el => {
    const i = +el.dataset.i;
    if (DATA.team[i]) DATA.team[i].navn = el.value;
  });
  document.querySelectorAll('.at-rolle').forEach(el => {
    const i = +el.dataset.i;
    if (DATA.team[i]) DATA.team[i].rolle = el.value;
  });
  document.querySelectorAll('.at-bio').forEach(el => {
    const i = +el.dataset.i;
    if (DATA.team[i]) DATA.team[i].bio = el.value;
  });
  document.querySelectorAll('.at-foto').forEach(el => {
    const i = +el.dataset.i;
    if (DATA.team[i]) DATA.team[i].foto = el.value;
  });

  // Products
  document.querySelectorAll('.aprod-brand').forEach(el => {
    const i = +el.dataset.i;
    if (DATA.produkter[i]) DATA.produkter[i].brand = el.value;
  });
  document.querySelectorAll('.aprod-navn').forEach(el => {
    const i = +el.dataset.i;
    if (DATA.produkter[i]) DATA.produkter[i].navn = el.value;
  });
  document.querySelectorAll('.aprod-pris').forEach(el => {
    const i = +el.dataset.i;
    if (DATA.produkter[i]) DATA.produkter[i].pris = el.value;
  });
  document.querySelectorAll('.aprod-img').forEach(el => {
    const i = +el.dataset.i;
    if (DATA.produkter[i]) DATA.produkter[i].img = el.value;
  });

  saveData();
  document.getElementById('admin-overlay').classList.add('hidden');

  // Re-render everything
  applyKontakt();
  renderTeam();
  renderPrices(currentPriceTab);
  renderProducts();
  renderHours();
  applyTilbud();

  showToast('Ændringer gemt ✓');
}

// ===== TOAST =====
function showToast(msg) {
  const existing = document.getElementById('sw-toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.id = 'sw-toast';
  toast.textContent = msg;
  Object.assign(toast.style, {
    position: 'fixed', bottom: 'calc(var(--bar-h) + 20px)', left: '50%',
    transform: 'translateX(-50%)',
    background: '#1a1a1a', color: '#fff',
    padding: '12px 24px', borderRadius: '8px',
    fontSize: '0.88rem', fontWeight: '500',
    zIndex: '9999', boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
    animation: 'fadeInUp 0.3s ease'
  });
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.3s'; }, 2500);
  setTimeout(() => toast.remove(), 2900);
}

// ===== ONLINE/OFFLINE =====
function checkOnline() {
  const banner = document.getElementById('offline-banner');
  if (!banner) return;
  if (!navigator.onLine) {
    banner.classList.remove('hidden');
    banner.classList.add('visible');
  }
  window.addEventListener('online', () => {
    banner.classList.add('hidden');
    banner.classList.remove('visible');
  });
  window.addEventListener('offline', () => {
    banner.classList.remove('hidden');
    banner.classList.add('visible');
  });
}

// ===== PWA =====
function initPWA() {
  // Register service worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js?v=1.0.0')
        .then(reg => console.log('SW registered:', reg.scope))
        .catch(err => console.warn('SW failed:', err));
    });
  }

  // Install prompt
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    showInstallPrompt();
  });
}

function showInstallPrompt() {
  const existing = document.getElementById('install-prompt');
  if (existing) return;

  const prompt = document.createElement('div');
  prompt.id = 'install-prompt';
  prompt.className = 'install-prompt';
  prompt.innerHTML = `
    <div class="install-prompt-text">
      <strong>Installér Salon Webb</strong>
      Tilføj til din startskærm for nem adgang
    </div>
    <button id="install-btn">Installér</button>
    <button class="install-dismiss" id="install-dismiss" aria-label="Luk">✕</button>
  `;
  document.body.appendChild(prompt);

  document.getElementById('install-btn').addEventListener('click', async () => {
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      const { outcome } = await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
    }
    prompt.remove();
  });

  document.getElementById('install-dismiss').addEventListener('click', () => prompt.remove());

  // Auto-hide after 8 seconds
  setTimeout(() => { if (document.getElementById('install-prompt')) prompt.remove(); }, 8000);
}

// ===== HELPERS =====
function getValue(id) {
  const el = document.getElementById(id);
  return el ? el.value.trim() : '';
}
function setValue(id, val) {
  const el = document.getElementById(id);
  if (el) el.value = val || '';
}
function esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}
