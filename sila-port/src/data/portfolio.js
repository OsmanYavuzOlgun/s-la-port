export const portfolioUrl = '/portfolio/Emine-Sila-Topal-Portfolio-2026.pdf'

export const getPortfolioPageUrl = (page) => `${portfolioUrl}#page=${page}`

export const profile = {
  firstName: 'Emine',
  lastName: 'Sıla Topal',
  displayName: 'Emine Sıla Topal',
  nativeName: 'Emine Sıla Topal',
  location: 'İzmir, Türkiye',
  email: 'eminesilatopal@gmail.com',
  phone: '+90 539 483 16 36',
  phoneHref: 'tel:+905394831636',
  behance: 'https://www.behance.net/slatopal2',
}

export const navigation = [
  { labelKey: 'nav.experience', href: '#experience' },
  { labelKey: 'nav.work', href: '#work' },
  { labelKey: 'nav.expertise', href: '#expertise' },
  { labelKey: 'nav.contact', href: '#contact' },
]

export const experience = [
  {
    id: 'bahcesehir',
    company: 'Bahçeşehir Koleji',
    roleKey: 'experience.role',
    dates: '09/2025 - 02/2026',
    summaryKey: 'experience.bahcesehir.summary',
    pointKeys: [
      'experience.bahcesehir.points.0',
      'experience.bahcesehir.points.1',
      'experience.bahcesehir.points.2',
    ],
  },
  {
    id: 'castle',
    company: 'Castle Mimarlık',
    roleKey: 'experience.role',
    dates: '11/2024 - 06/2025',
    summaryKey: 'experience.castle.summary',
    pointKeys: [
      'experience.castle.points.0',
      'experience.castle.points.1',
      'experience.castle.points.2',
    ],
  },
]

export const education = [
  {
    school: 'Anadolu University',
    programKey: 'education.anadolu.program',
    dates: '2020 - 2024',
    noteKey: 'education.anadolu.note',
    featured: true,
  },
  {
    school: 'Torbalı Anadolu Lisesi',
    programKey: 'education.torbali.program',
    dates: '2016 - 2020',
  },
]

export const certificates = [
  {
    titleKey: 'certificates.graphicDesign',
    issuer: 'Hakim Academy / Udemy',
    dates: '2023-2024',
  },
  {
    titleKey: 'certificates.logoDesign',
    issuer: 'Şafak Tozar / Udemy',
    dates: '2023-2024',
  },
  {
    titleKey: 'certificates.fromAtoZ',
    issuer: 'Talha Selim İpekçi / Udemy',
    dates: '2023-2024',
  },
]

export const expertise = [
  {
    id: 'branding',
    titleKey: 'expertise.branding.title',
    descriptionKey: 'expertise.branding.description',
  },
  {
    id: 'social',
    titleKey: 'expertise.social.title',
    descriptionKey: 'expertise.social.description',
  },
  {
    id: 'editorial',
    titleKey: 'expertise.editorial.title',
    descriptionKey: 'expertise.editorial.description',
  },
  {
    id: 'poster',
    titleKey: 'expertise.poster.title',
    descriptionKey: 'expertise.poster.description',
  },
  {
    id: 'motion',
    titleKey: 'expertise.motion.title',
    descriptionKey: 'expertise.motion.description',
  },
  {
    id: 'glass',
    titleKey: 'expertise.glass.title',
    descriptionKey: 'expertise.glass.description',
  },
]

export const tools = [
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Adobe InDesign',
  'Adobe After Effects',
  'Procreate',
  'Canva',
  'CorelDRAW',
  'RhinoCeros',
]

export const portfolioSections = {
  socialMedia: 6,
  logo: 16,
  editorial: 17,
  corporateIdentity: 18,
  poster: 22,
  glass: 27,
  productGraphics: 28,
  menu: 29,
  interface: 30,
}

export const projects = [
  {
    id: 'social-media',
    titleKey: 'projects.socialMedia.title',
    categoryKey: 'projects.socialMedia.category',
    descriptionKey: 'projects.socialMedia.description',
    portfolioPage: portfolioSections.socialMedia,
    tone: 'vermilion',
  },
  {
    id: 'corporate-identity',
    titleKey: 'projects.corporateIdentity.title',
    categoryKey: 'projects.corporateIdentity.category',
    descriptionKey: 'projects.corporateIdentity.description',
    portfolioPage: portfolioSections.corporateIdentity,
    tone: 'charcoal',
  },
  {
    id: 'logo',
    titleKey: 'projects.logo.title',
    categoryKey: 'projects.logo.category',
    descriptionKey: 'projects.logo.description',
    portfolioPage: portfolioSections.logo,
    tone: 'coral',
  },
  {
    id: 'editorial',
    titleKey: 'projects.editorial.title',
    categoryKey: 'projects.editorial.category',
    descriptionKey: 'projects.editorial.description',
    portfolioPage: portfolioSections.editorial,
    tone: 'paper',
  },
  {
    id: 'poster',
    titleKey: 'projects.poster.title',
    categoryKey: 'projects.poster.category',
    descriptionKey: 'projects.poster.description',
    portfolioPage: portfolioSections.poster,
    tone: 'ink',
  },
  {
    id: 'glass',
    titleKey: 'projects.glass.title',
    categoryKey: 'projects.glass.category',
    descriptionKey: 'projects.glass.description',
    portfolioPage: portfolioSections.glass,
    tone: 'warm-gray',
  },
  {
    id: 'product-graphics',
    titleKey: 'projects.productGraphics.title',
    categoryKey: 'projects.productGraphics.category',
    descriptionKey: 'projects.productGraphics.description',
    portfolioPage: portfolioSections.productGraphics,
    tone: 'soft-red',
  },
  {
    id: 'menu',
    titleKey: 'projects.menu.title',
    categoryKey: 'projects.menu.category',
    descriptionKey: 'projects.menu.description',
    portfolioPage: portfolioSections.menu,
    tone: 'sand',
  },
  {
    id: 'interface',
    titleKey: 'projects.interface.title',
    categoryKey: 'projects.interface.category',
    descriptionKey: 'projects.interface.description',
    portfolioPage: portfolioSections.interface,
    tone: 'slate',
  },
]
