/* ================================================================
   SALON WEBB – data.js v1.1.0
   AL KUNDEDATA – redigeres via admin panel eller direkte her
   ================================================================ */

const SW_DEFAULT_DATA = {

  meta: {
    version: '1.1.0',
    buildDate: '2026-06-24',
    salonNavn: 'Salon Webb',
    tagline: 'Din frisør i Esbjerg',
    seoTitel: 'Salon Webb – Din frisør i Esbjerg',
    seoBeskrivelse: 'Salon Webb i Esbjerg. Professionel frisør med fokus på kvalitet, stil og god service. Book tid online.',
    ogBillede: '',
    favicon: 'icons/icon-192.png',
    themeColor: '#0E0E0E',
    accentColor: '#C9A96E',
    siteUrl: 'https://salonwebb.dk',
    ferieTekst: ''
  },

  kontakt: {
    tlf: '75000000',
    sms: '75000000',
    mail: 'info@salonwebb.dk',
    adresse: 'Adressenavn 1',
    by: '6700 Esbjerg',
    mapsUrl: 'https://maps.google.com/?q=Salon+Webb+Esbjerg',
    mapsEmbed: '',
    facebook: 'https://www.facebook.com/salonwebb',
    instagram: 'https://www.instagram.com/salonwebb',
    bookingUrl: 'https://salonwebb.bestilling.nu'
  },

  hero: {
    baggrund: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80',
    overskrift: 'Salon Webb',
    undertitel: 'Din frisør i Esbjerg',
    eyebrow: 'Esbjerg',
    knapper: [
      { label: 'Book tid', ikon: '📅', type: 'booking' },
      { label: 'Ring',     ikon: '📞', type: 'tlf'     },
      { label: 'SMS',      ikon: '💬', type: 'sms'     },
      { label: 'Find vej', ikon: '📍', type: 'maps'    }
    ]
  },

  /* Menu med ikoner der vises i mobilmenu */
  menu: [
    { label: 'Forside',       href: '#hjem',        ikon: '🏠' },
    { label: 'Behandlinger',  href: '#behandlinger',ikon: '✂️' },
    { label: 'Priser',        href: '#priser',      ikon: '💰' },
    { label: 'Produkter',     href: '#produkter',   ikon: '🛍️' },
    { label: 'Team',          href: '#team',        ikon: '👥' },
    { label: 'Galleri',       href: '#galleri',     ikon: '🖼️' },
    { label: 'Kontakt',       href: '#kontakt',     ikon: '📞' }
  ],

  aabningstider: [
    { dag: 'Mandag',   aaben: '09:00', luk: '17:30', lukket: false, helligdag: false },
    { dag: 'Tirsdag',  aaben: '09:00', luk: '17:30', lukket: false, helligdag: false },
    { dag: 'Onsdag',   aaben: '09:00', luk: '17:30', lukket: false, helligdag: false },
    { dag: 'Torsdag',  aaben: '09:00', luk: '20:00', lukket: false, helligdag: false },
    { dag: 'Fredag',   aaben: '09:00', luk: '17:30', lukket: false, helligdag: false },
    { dag: 'Lørdag',   aaben: '09:00', luk: '14:00', lukket: false, helligdag: false },
    { dag: 'Søndag',   aaben: '00:00', luk: '00:00', lukket: true,  helligdag: false }
  ],

  helligdage: [
    { dato: '2026-12-24', navn: 'Juleaften – lukket' },
    { dato: '2026-12-25', navn: '1. juledag – lukket' },
    { dato: '2026-12-26', navn: '2. juledag – lukket' },
    { dato: '2026-12-31', navn: 'Nytårsaften – lukket' },
    { dato: '2027-01-01', navn: 'Nytårsdag – lukket' }
  ],

  team: [
    {
      id: 't1', navn: 'Louise Webb', titel: 'Indehaver & Frisørmester',
      bio: 'Med over 20 års erfaring er Louise hjertet i Salon Webb. Specialiseret i farveteknikker og helhedsbehandlinger.',
      foto: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&q=80',
      bookingLink: '', tlf: '', synlig: true, sortering: 1
    },
    {
      id: 't2', navn: 'Maria Kristensen', titel: 'Farvespecialist',
      bio: 'Maria er vores ekspert i balayage, highlights og kreative farver. Uddannet i både Danmark og udlandet.',
      foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&q=80',
      bookingLink: '', tlf: '', synlig: true, sortering: 2
    },
    {
      id: 't3', navn: 'Sofie Larsen', titel: 'Frisør',
      bio: 'Sofie er uddannet frisør med en forkærlighed for moderne klip og naturlig styling.',
      foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&q=80',
      bookingLink: '', tlf: '', synlig: true, sortering: 3
    }
  ],

  behandlinger: [
    { id: 'beh1', navn: 'Klip & Styling',      beskrivelse: 'Professionelt klip tilpasset dit hår og din stil. Inkluderer konsultation og styling.', ikon: '✂️', synlig: true },
    { id: 'beh2', navn: 'Farve & Highlights',   beskrivelse: 'Fra helfarve til subtile highlights – vi finder den løsning der passer dig.',              ikon: '🎨', synlig: true },
    { id: 'beh3', navn: 'Balayage',             beskrivelse: 'Håndbemalet farveteknik for naturligt, solkysset hår med dybde og dimension.',              ikon: '🌅', synlig: true },
    { id: 'beh4', navn: 'Keratin & Pleje',      beskrivelse: 'Intensive plejebehandlinger der genopretter, glatter og beskytter dit hår.',                ikon: '✨', synlig: true },
    { id: 'beh5', navn: 'Permanent bølger',     beskrivelse: 'Skab blød struktur og naturlige bølger med vores permanente bølgebehandling.',              ikon: '🌊', synlig: true },
    { id: 'beh6', navn: 'Skæg & Herrer',        beskrivelse: 'Herreklip og skægtrim med professionel finish. Inkluderer vask og styling.',                ikon: '💈', synlig: true }
  ],

  priser: {
    kategorier: ['Damer', 'Herrer', 'Børn', 'Behandlinger'],
    liste: [
      { id: 'p1',  kategori: 'Damer',        navn: 'Klip & Vask',         beskrivelse: 'Inkl. føntørring',        pris: '395',  enhed: 'kr.',          sortering: 1, synlig: true },
      { id: 'p2',  kategori: 'Damer',        navn: 'Kort klip',            beskrivelse: 'Vask og styling',         pris: '345',  enhed: 'kr.',          sortering: 2, synlig: true },
      { id: 'p3',  kategori: 'Damer',        navn: 'Farve – helfarve',     beskrivelse: 'Inkl. klip',              pris: '795',  enhed: 'kr.+',         sortering: 3, synlig: true },
      { id: 'p4',  kategori: 'Damer',        navn: 'Highlights',           beskrivelse: 'Folier, fuld hoved',      pris: '895',  enhed: 'kr.+',         sortering: 4, synlig: true },
      { id: 'p5',  kategori: 'Damer',        navn: 'Balayage',             beskrivelse: 'Håndbemalet teknik',      pris: '1095', enhed: 'kr.+',         sortering: 5, synlig: true },
      { id: 'p6',  kategori: 'Damer',        navn: 'Permanent bølger',     beskrivelse: 'Inkl. klip & styling',    pris: '995',  enhed: 'kr.+',         sortering: 6, synlig: true },
      { id: 'p7',  kategori: 'Herrer',       navn: 'Herreklip',            beskrivelse: 'Vask inkluderet',         pris: '245',  enhed: 'kr.',          sortering: 1, synlig: true },
      { id: 'p8',  kategori: 'Herrer',       navn: 'Herreklip & skæg',     beskrivelse: 'Trim & formning',         pris: '295',  enhed: 'kr.',          sortering: 2, synlig: true },
      { id: 'p9',  kategori: 'Herrer',       navn: 'Skæg trim',            beskrivelse: '',                        pris: '125',  enhed: 'kr.',          sortering: 3, synlig: true },
      { id: 'p10', kategori: 'Herrer',       navn: 'Farve herrer',         beskrivelse: 'Inkl. klip',              pris: '545',  enhed: 'kr.+',         sortering: 4, synlig: true },
      { id: 'p11', kategori: 'Børn',         navn: 'Børn op til 12 år',   beskrivelse: 'Inkl. vask',              pris: '185',  enhed: 'kr.',          sortering: 1, synlig: true },
      { id: 'p12', kategori: 'Børn',         navn: 'Unge 13–17 år',       beskrivelse: 'Inkl. vask',              pris: '225',  enhed: 'kr.',          sortering: 2, synlig: true },
      { id: 'p13', kategori: 'Behandlinger', navn: 'Keratin',              beskrivelse: 'Glat og blank',           pris: '1195', enhed: 'kr.+',         sortering: 1, synlig: true },
      { id: 'p14', kategori: 'Behandlinger', navn: 'Dybdepleje',           beskrivelse: 'Næring & fugt',           pris: '195',  enhed: 'kr.+',         sortering: 2, synlig: true },
      { id: 'p15', kategori: 'Behandlinger', navn: 'Farvekorrektion',      beskrivelse: 'Konsultation gratis',     pris: '',     enhed: 'efter aftale', sortering: 3, synlig: true }
    ]
  },

  produkter: [
    { id: 'prod1', brand: 'Wella',   navn: 'SP Hydrate Shampoo',   tekst: 'Til tørt og skadet hår',      pris: '189 kr.', img: '', logo: '', synlig: true, sortering: 1 },
    { id: 'prod2', brand: 'Wella',   navn: 'SP Color Save Maske',  tekst: 'Beskytter farvebehandlet hår', pris: '229 kr.', img: '', logo: '', synlig: true, sortering: 2 },
    { id: 'prod3', brand: 'OLAPLEX', navn: 'No. 3 Hair Perfector', tekst: 'Genopretter og styrker',       pris: '325 kr.', img: '', logo: '', synlig: true, sortering: 3 },
    { id: 'prod4', brand: 'OLAPLEX', navn: 'No. 6 Bond Smoother',  tekst: 'Leave-in behandling',          pris: '299 kr.', img: '', logo: '', synlig: true, sortering: 4 },
    { id: 'prod5', brand: 'Redken',  navn: 'All Soft Shampoo',     tekst: 'Silkeblød og fugtig',          pris: '199 kr.', img: '', logo: '', synlig: true, sortering: 5 },
    { id: 'prod6', brand: 'Redken',  navn: 'Extreme Mask',         tekst: 'Dyb reparation',               pris: '269 kr.', img: '', logo: '', synlig: true, sortering: 6 }
  ],

  galleri: [
    { id: 'g1', url: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80', titel: 'Salon atmosfære', sortering: 1 },
    { id: 'g2', url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80',    titel: 'Styling',         sortering: 2 },
    { id: 'g3', url: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fb6b8?w=800&q=80', titel: 'Farve',           sortering: 3 },
    { id: 'g4', url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80', titel: 'Klip',            sortering: 4 },
    { id: 'g5', url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80', titel: 'Resultat',        sortering: 5 },
    { id: 'g6', url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80', titel: 'Team',            sortering: 6 }
  ],

  tilbud: {
    aktiv: false, tekst: '', startDato: '', slutDato: '', farve: '#C9A96E'
  },

  dokumenter: [],

  adminBrugere: [
    { id: 'u1', navn: 'Admin', email: 'admin@salonwebb.dk', password: 'webb2026', rolle: 'admin' }
  ]
};
