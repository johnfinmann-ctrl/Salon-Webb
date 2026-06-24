/* ================================================================
   SALON WEBB – data.js v1.2.0
   AL KUNDEDATA – redigeres via admin panel
   ================================================================ */

const SW_DEFAULT_DATA = {

  meta: {
    version: '1.2.0',
    buildDate: '2026-06-24',
    salonNavn: 'Salon Webb',
    tagline: 'Din frisør i Esbjerg',
    seoTitel: 'Salon Webb – Frisør i Esbjerg V',
    seoBeskrivelse: 'Salon Webb på Bytoften 30, Esbjerg V. Professionelle frisører med mange års erfaring. Book tid online eller ring 76 13 14 13.',
    ogBillede: '',
    favicon: 'icons/icon-192.png',
    themeColor: '#0E0E0E',
    accentColor: '#C9A96E',
    siteUrl: 'https://salonwebb.dk',
    ferieTekst: ''
  },

  kontakt: {
    tlf: '76131413',
    sms: '76131413',
    mail: 'info@salonwebb.dk',
    adresse: 'Bytoften 30',
    by: '6710 Esbjerg V',
    mapsUrl: 'https://maps.google.com/?q=Bytoften+30+6710+Esbjerg',
    mapsEmbed: '',
    facebook: 'https://www.facebook.com/salonwebb',
    instagram: 'https://www.instagram.com/salonwebb',
    bookingUrl: 'https://salonwebb.bestilling.nu'
  },

  hero: {
    baggrund: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80',
    overskrift: 'Salon Webb',
    undertitel: 'Din frisør i Esbjerg V',
    eyebrow: 'Esbjerg',
    knapper: [
      { label: 'Book tid', ikon: '📅', type: 'booking' },
      { label: 'Ring',     ikon: '📞', type: 'tlf'     },
      { label: 'SMS',      ikon: '💬', type: 'sms'     },
      { label: 'Find vej', ikon: '📍', type: 'maps'    }
    ]
  },

  /* ── INDHOLDSKORT (3 centrale kort på forsiden) ── */
  indholdskort: [
    {
      id: 'ik1',
      titel: 'Frisører',
      ikon: '✂️',
      tekst: 'Vi har alle den 4-årige frisøruddannelse og mange års erfaring. Vi går meget op i, at vores håndværk er i orden og at vores kunder altid er tilfredse.\n\nVi følger naturligvis kurser og udvikling i ind- og udland, så vi til enhver tid er klædt på til at hjælpe dig bedst muligt.',
      billede: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80',
      synlig: true,
      sortering: 1
    },
    {
      id: 'ik2',
      titel: 'Atmosfære',
      ikon: '☕',
      tekst: 'Vi bestræber os på at skabe en afslappet og hyggelig atmosfære.\n\nDu kan hos os få lov at slappe af, imens vi laver et godt stykke håndværk og vi med et smil på læben kan nyde at have dig i stolen.\n\nSådan mener vi, at vi kan tilbyde dig den bedst mulige oplevelse.',
      billede: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80',
      synlig: true,
      sortering: 2
    },
    {
      id: 'ik3',
      titel: 'Produkter',
      ikon: '🌿',
      tekst: 'Produkterne du finder hos os er altid nøje udvalgt. Vi vil ikke gå på kompromis med produkterne, og er derfor altid opdateret på viden inden for disse.\n\nSamtlige produkter vi benytter er naturligvis til salg i salonen.\n\nVi er meget miljøbevidste og arbejder med miljøvenlige produkter og hårfarver uden ammoniak.',
      billede: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
      synlig: true,
      sortering: 3
    }
  ],

  menu: [
    { label: 'Forside',       href: '#hjem',        ikon: '🏠' },
    { label: 'Om os',         href: '#om-os',       ikon: '💬' },
    { label: 'Behandlinger',  href: '#behandlinger',ikon: '✂️' },
    { label: 'Priser',        href: '#priser',      ikon: '💰' },
    { label: 'Produkter',     href: '#produkter',   ikon: '🛍️' },
    { label: 'Team',          href: '#team',        ikon: '👥' },
    { label: 'Tilbud',        href: '#tilbud',      ikon: '🏷️' },
    { label: 'Galleri',       href: '#galleri',     ikon: '🖼️' },
    { label: 'Kontakt',       href: '#kontakt',     ikon: '📞' }
  ],

  aabningstider: [
    { dag: 'Mandag',   aaben: '09:00', luk: '17:30', lukket: false },
    { dag: 'Tirsdag',  aaben: '09:00', luk: '17:30', lukket: false },
    { dag: 'Onsdag',   aaben: '09:00', luk: '17:30', lukket: false },
    { dag: 'Torsdag',  aaben: '09:00', luk: '20:00', lukket: false },
    { dag: 'Fredag',   aaben: '09:00', luk: '17:30', lukket: false },
    { dag: 'Lørdag',   aaben: '09:00', luk: '14:00', lukket: false },
    { dag: 'Søndag',   aaben: '00:00', luk: '00:00', lukket: true  }
  ],

  helligdage: [],

  team: [
    {
      id: 't1',
      navn: 'Heidi',
      titel: 'Indehaver',
      bio: 'Heidi er indehaver af Salon Webb og frisørmester med mange års erfaring. Hun brænder for sit håndværk og for at give dig den bedst mulige oplevelse.',
      foto: '',
      bookingLink: '',
      tlf: '',
      synlig: true,
      sortering: 1
    },
    {
      id: 't2',
      navn: 'Djannie',
      titel: '4. års elev',
      bio: 'Djannie er i gang med sin 4-årige frisøruddannelse og har allerede vist stort talent for faget.',
      foto: '',
      bookingLink: '',
      tlf: '',
      synlig: true,
      sortering: 2
    },
    {
      id: 't3',
      navn: 'Caroline',
      titel: '1. års elev',
      bio: 'Caroline er ny elev i salonen og er i gang med sin frisøruddannelse. Velkommen til teamet!',
      foto: '',
      bookingLink: '',
      tlf: '',
      synlig: true,
      sortering: 3
    }
  ],

  behandlinger: [
    { id: 'beh1', navn: 'Klip & Styling',      beskrivelse: 'Professionelt klip tilpasset dit hår og din stil. Inkluderer konsultation og styling.',  ikon: '✂️', synlig: true },
    { id: 'beh2', navn: 'Farve & Highlights',   beskrivelse: 'Fra helfarve til subtile highlights – vi finder den løsning der passer dig.',             ikon: '🎨', synlig: true },
    { id: 'beh3', navn: 'Balayage',             beskrivelse: 'Håndbemalet farveteknik for naturligt, solkysset hår med dybde og dimension.',             ikon: '🌅', synlig: true },
    { id: 'beh4', navn: 'Keratin & Pleje',      beskrivelse: 'Intensive plejebehandlinger der genopretter, glatter og beskytter dit hår.',               ikon: '✨', synlig: true },
    { id: 'beh5', navn: 'Hårfarve uden ammoniak', beskrivelse: 'Vi arbejder med miljøvenlige hårfarver uden ammoniak – skånsomme for hår og skalpel.', ikon: '🌿', synlig: true },
    { id: 'beh6', navn: 'Skæg & Herrer',        beskrivelse: 'Herreklip og skægtrim med professionel finish. Inkluderer vask og styling.',               ikon: '💈', synlig: true }
  ],

  priser: {
    kategorier: ['Damer', 'Herrer', 'Børn', 'Behandlinger'],
    liste: [
      { id: 'p1',  kategori: 'Damer',        navn: 'Klip & Vask',         beskrivelse: 'Inkl. føntørring',        pris: '395',  enhed: 'kr.',          sortering: 1, synlig: true },
      { id: 'p2',  kategori: 'Damer',        navn: 'Kort klip',            beskrivelse: 'Vask og styling',         pris: '345',  enhed: 'kr.',          sortering: 2, synlig: true },
      { id: 'p3',  kategori: 'Damer',        navn: 'Farve – helfarve',     beskrivelse: 'Inkl. klip',              pris: '795',  enhed: 'kr.+',         sortering: 3, synlig: true },
      { id: 'p4',  kategori: 'Damer',        navn: 'Highlights',           beskrivelse: 'Folier, fuld hoved',      pris: '895',  enhed: 'kr.+',         sortering: 4, synlig: true },
      { id: 'p5',  kategori: 'Damer',        navn: 'Balayage',             beskrivelse: 'Håndbemalet teknik',      pris: '1095', enhed: 'kr.+',         sortering: 5, synlig: true },
      { id: 'p6',  kategori: 'Herrer',       navn: 'Herreklip',            beskrivelse: 'Vask inkluderet',         pris: '245',  enhed: 'kr.',          sortering: 1, synlig: true },
      { id: 'p7',  kategori: 'Herrer',       navn: 'Herreklip & skæg',     beskrivelse: 'Trim & formning',         pris: '295',  enhed: 'kr.',          sortering: 2, synlig: true },
      { id: 'p8',  kategori: 'Herrer',       navn: 'Skæg trim',            beskrivelse: '',                        pris: '125',  enhed: 'kr.',          sortering: 3, synlig: true },
      { id: 'p9',  kategori: 'Børn',         navn: 'Børn op til 12 år',   beskrivelse: 'Inkl. vask',              pris: '185',  enhed: 'kr.',          sortering: 1, synlig: true },
      { id: 'p10', kategori: 'Børn',         navn: 'Unge 13–17 år',       beskrivelse: 'Inkl. vask',              pris: '225',  enhed: 'kr.',          sortering: 2, synlig: true },
      { id: 'p11', kategori: 'Behandlinger', navn: 'Keratin',              beskrivelse: 'Glat og blank',           pris: '1195', enhed: 'kr.+',         sortering: 1, synlig: true },
      { id: 'p12', kategori: 'Behandlinger', navn: 'Dybdepleje',           beskrivelse: 'Næring & fugt',           pris: '195',  enhed: 'kr.+',         sortering: 2, synlig: true },
      { id: 'p13', kategori: 'Behandlinger', navn: 'Farvekorrektion',      beskrivelse: 'Konsultation gratis',     pris: '',     enhed: 'efter aftale', sortering: 3, synlig: true }
    ]
  },

  /* ── PRODUKTBRANDS ── */
  produktbrands: [
    {
      id: 'pb1',
      brand: 'Kemon Actyva',
      logo: '',
      tekst: 'Kemon Actyva er en italiensk serie med fokus på naturlige og miljøvenlige ingredienser. Vi bruger Actyva til at sikre dit hårs sundhed og glans.',
      billeder: [],
      synlig: true,
      sortering: 1
    },
    {
      id: 'pb2',
      brand: 'Evo',
      logo: '',
      tekst: 'Evo er en australsk hårplejebrand med sans for humor og alvor. Produkterne er fri for sulfater, parabener og kunstige farvestoffer – god for hår og planet.',
      billeder: [],
      synlig: true,
      sortering: 2
    }
  ],

  /* Behold produkter som enkeltprodukter (kan bruges parallelt) */
  produkter: [
    { id: 'prod1', brand: 'Kemon Actyva', navn: 'Nutre Shampoo',    tekst: 'Fugt og næring til tørt hår',        pris: '189 kr.', img: '', synlig: true, sortering: 1 },
    { id: 'prod2', brand: 'Kemon Actyva', navn: 'Bellessere Oil',   tekst: 'Pleje- og glansserum',               pris: '229 kr.', img: '', synlig: true, sortering: 2 },
    { id: 'prod3', brand: 'Evo',          navn: 'Ritual Salvation', tekst: 'Reparerende leave-in til skadet hår',pris: '269 kr.', img: '', synlig: true, sortering: 3 },
    { id: 'prod4', brand: 'Evo',          navn: 'Fabuloso Colour',  tekst: 'Farvevedligeholdelse og glans',      pris: '249 kr.', img: '', synlig: true, sortering: 4 }
  ],

  galleri: [
    { id: 'g1', url: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80', titel: 'Salon atmosfære', sortering: 1 },
    { id: 'g2', url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80',    titel: 'Styling',         sortering: 2 },
    { id: 'g3', url: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fb6b8?w=800&q=80', titel: 'Farve',           sortering: 3 },
    { id: 'g4', url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80', titel: 'Klip',            sortering: 4 },
    { id: 'g5', url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80', titel: 'Resultat',        sortering: 5 },
    { id: 'g6', url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80', titel: 'Team',            sortering: 6 }
  ],

  /* ── TILBUD (liste med individuelle tilbud) ── */
  tilbudsliste: [
    {
      id: 'tb1',
      titel: 'Elev tilbud',
      tekst: 'Book tid hos en af vores dygtige elever og få en rabat på klip og styling.',
      billede: '',
      startDato: '',
      slutDato: '',
      synlig: true,
      sortering: 1
    }
  ],

  /* Behold simpelt banner-tilbud */
  tilbud: {
    aktiv: false,
    tekst: '',
    startDato: '',
    slutDato: '',
    farve: '#C9A96E'
  },

  tilbudIntro: 'Alle aktuelle tilbud i salonen vil blive vist her. Har du spørgsmål, kan vi kontaktes på telefon 76 13 14 13.',

  dokumenter: [],

  adminBrugere: [
    { id: 'u1', navn: 'Admin', email: 'admin@salonwebb.dk', password: 'webb2026', rolle: 'admin' }
  ]
};
