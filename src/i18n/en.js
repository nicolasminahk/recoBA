/** English copy (route `/en/`). Same structure as es.js. British spelling. */
export default {
  meta: {
    htmlLang: 'en',
    ogLocale: 'en_GB',
    title: 'recoBA · Project and investment tracking for developers and asset managers',
    description:
      'Site-progress dashboard and investor portal for developers, flippers and asset managers. Installed in your own accounts, with your brand. One-off payment, no mandatory subscription.',
    ogImage: '/og-en.png',
    ogImageAlt: 'recoBA: every project, every euro and every investor, in one dashboard',
    appName: 'recoBA · Project and investment tracking dashboard',
    skip: 'Skip to content',
  },

  demoMail: {
    subject: 'recoBA demo',
    body: ['Company: ', 'Name: ', 'Ongoing projects: ', '', "I'd like to see a demo of recoBA."],
  },

  common: {
    ctaDemo: 'Book a demo',
    demoCaption: 'Interactive demo · sample data',
  },

  nav: {
    aria: 'Main navigation',
    home: 'recoBA — home',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    langLabel: 'Language',
    links: [
      { href: '#producto', label: 'Product' },
      { href: '#como-funciona', label: 'How it works' },
      { href: '#para-quien', label: "Who it's for" },
      { href: '#precios', label: 'Pricing' },
      { href: '#preguntas', label: 'FAQ' },
    ],
  },

  hero: {
    eyebrow: 'Project and investment tracking dashboard',
    title: ['Every project,', 'every euro', 'and every investor,'],
    /** Headline size (English lines are longer than the Spanish ones) */
    titleClass: 'text-[clamp(2rem,3.6vw,3.25rem)]',
    titleAccent: 'in one dashboard.',
    sub: "Bring site progress, contracts, costs and investment together in one place. It's installed in your company's own accounts, and it's yours.",
    ctaPortal: 'Try the portal demo',
  },

  scene: {
    aria: 'Product scene',
    baseAlt:
      'recoBA admin dashboard: list of projects with ongoing works, investor capital, items pending review, email inbox and alerts that need attention',
    carteraTag: 'Investor portal · portfolio',
    carteraAlt:
      'Portfolio summary in the investor portal: capital invested, current estimated value, distributions received and projected IRR',
    atencionTag: 'Dashboard · needs attention',
    atencionAlt:
      'Dashboard alerts: an update waiting to be published, unreviewed items, funding rounds closing and a contract about to expire',
    camaraTag: 'Site camera · live',
    camaraAlt: 'Live image from a site camera with the date and time of capture',
    movilAlt: 'Uploading a progress update from a phone in three steps: photo, phase and note',
  },

  problema: {
    eyebrow: 'The starting point',
    title: 'Today, tracking an investment is scattered across five places.',
    lead: 'Photos on WhatsApp, budgets in Excel, invoices in email, contracts in a shared folder, and an investor who calls to ask how the works are going.',
    fuentesAria: 'Where the information lives today',
    fuentes: ['WhatsApp', 'Excel', 'Email', 'Drive', 'A phone call'],
    problemas: [
      {
        titulo: 'Hours of manual reporting.',
        texto: 'Every report to investors or the investment committee is put together by hand, copied from several sources.',
        icon: 'reloj',
      },
      {
        titulo: 'Overruns spotted too late.',
        texto: "Actual spend against budget, line by line, isn't visible until the project closes.",
        icon: 'desvio',
      },
      {
        titulo: 'Trust that hinges on a phone call.',
        texto: 'Whoever puts up the capital has nowhere to check the real status of their money.',
        icon: 'llamada',
      },
    ],
  },

  propuesta: {
    eyebrow: 'Our approach',
    title: ['One project, one dashboard.', 'And a portal for your investors.'],
    lead: "It doesn't replace your management system: it gathers what's already circulating about each project and shows it to the people who need to see it.",
    equipoEyebrow: 'Your team uploads',
    equipoTitle: 'Admin dashboard',
    equipo: [
      'Progress updates with photos and video',
      'Documents, and who can see them',
      "That project's site camera",
      'The people invited',
      'The numbers, by main budget line',
      'An inbox for whatever arrives by email',
    ],
    inversoresEyebrow: 'Your investors check',
    inversoresTitle: 'Investor portal',
    inversores: [
      'Progress on their projects, with photos',
      'Spend against budget',
      'Documents shared with them',
      "Their capital and what they've been paid",
      'A notification with every update',
    ],
    notas: [
      {
        titulo: 'No double entry.',
        texto: 'Whatever travels over WhatsApp or email is forwarded to a single address and lands in the dashboard.',
      },
      {
        titulo: 'Few projects, many people watching.',
        texto: 'You work project by project: each one with its own tracking, documents and investors.',
      },
      {
        titulo: 'Everyone sees only their project.',
        texto: "Permissions are set by role and by project. Nobody sees what isn't theirs to see.",
      },
    ],
  },

  producto: {
    eyebrow: 'Product',
    title: 'What your team will see. What your investors will see.',
    lead: 'Real screenshots from the interactive demos, no mockups. The interface shown is in Spanish.',
    obras: {
      eyebrow: '01 · Your projects',
      title: 'What needs a reply, the status in one line, and an inbox for everything that comes in.',
      items: [
        'Every project with its status, its progress and what is pending review.',
        'A single inbox: anything forwarded by email shows up here and is assigned to its project.',
        'Dated alerts: an update to publish, a contract about to expire, a funding round about to close.',
      ],
      alt: 'A project inbox in the admin dashboard: forwarded emails with attachments, waiting to be assigned to the project',
    },
    seguimiento: {
      eyebrow: '02 · Site progress',
      title: 'Project phases with the actual date of every milestone.',
      items: [
        "Uploaded from a phone in three steps, or by forwarding the photo or invoice to the dashboard's email address.",
        'The site team submits, the office publishes: nothing reaches investors without being reviewed.',
        'Every update shows how many investors opened it.',
      ],
      alt: 'Site diary in the admin dashboard: project phases, milestones with actual dates and published updates with photos',
      phoneAria: 'Uploading from a phone',
      phoneAlt: 'Uploading a progress update from a phone in three steps: photo, phase and note',
    },
    documentos: {
      eyebrow: '03 · Documents and numbers',
      title: 'Contracts, invoices and budget, with expiry dates and permissions.',
      items: [
        'Contracts, title deeds, insurance and invoices, with expiry date and who can see them.',
        'Budget, spent and remaining for each line item.',
        'Updated by hand or by uploading an Excel file.',
      ],
      altDocs:
        'Project documents in the admin dashboard: contracts, title deeds, insurance and invoices with expiry dates and permissions by role',
      altNumeros:
        'Project numbers in the admin dashboard: budget, spent and remaining for each line item, with Excel import',
    },
    portal: {
      eyebrow: '04 · Investor portal',
      title: 'Each investor logs in and sees only what is theirs.',
      items: [
        'Consolidated portfolio: capital invested, estimated value, distributions and projected return.',
        'Sign in with a Google account or a link sent by email. No new passwords.',
        'New opportunities with target amount, minimum ticket and expressions of interest.',
      ],
      alt: 'Investor portal: portfolio summary with capital invested, estimated value, distributions received and projected return, latest updates and projects',
      tabsAria: 'Investor portal tabs',
      tabs: {
        avances: 'Progress tab in the investor portal: timeline of site updates with photos',
        gastos: 'Costs tab in the investor portal: spend against budget for each line item',
        inversion: 'Investment tab in the investor portal: capital contributed, distributions and projected return',
        oportunidades:
          'Opportunities tab in the investor portal: new deals with target amount and minimum ticket',
      },
    },
    camaras: {
      eyebrow: '05 · Site cameras',
      title: 'The site, live, only for those who are authorised.',
      items: ["A live feed, your security provider's viewer, or periodic snapshots with timelapse."],
      empresaLabel: 'Your company provides',
      empresa: 'Cameras, connectivity, recording and CCTV compliance.',
      recobaLabel: 'recoBA provides',
      recoba: 'Connects the feed, shows it only to authorised roles and advises on equipment.',
      nota: "Image availability depends on your company's equipment and connection.",
      alt: 'Site camera in the investor portal: live image of the works with date and time, visible only to authorised roles',
    },
  },

  propiedad: {
    eyebrow: 'Ownership and security',
    title: "Installed in your company's accounts. Yours.",
    lead: "It isn't a subscription to someone else's platform: the installation, the data and the domain belong to your company from day one.",
    alt: "Installation settings in the admin dashboard: company name, custom domain, branding and hosting providers set up in the client's own accounts",
    tarjetas: [
      {
        titulo: 'Licence to use',
        items: ['Perpetual, on your installation', 'No mandatory fee', 'Your data, exportable whenever you like'],
        icon: 'licencia',
      },
      {
        titulo: 'Your infrastructure',
        items: [
          'Data and files hosted in the EU',
          'Your brand and your domain',
          'Approx. €50–80 a month, paid directly to each provider',
        ],
        icon: 'infra',
      },
      {
        titulo: 'Security',
        items: ['Only invited people can sign in', 'Each role sees only what it should', 'Daily backups'],
        icon: 'seguridad',
      },
    ],
    mantenimientoLabel: 'Optional maintenance:',
    mantenimiento: 'updates, verified backups, support and small improvements.',
    mantenimientoNota: "If you don't take it, the platform is still yours.",
  },

  comoFunciona: {
    eyebrow: 'How it works',
    title: 'From the first meeting to your investors on board, in four steps.',
    lead: "We don't start from scratch: the investor portal and the admin dashboard are already designed and validated in interactive demos.",
    pasos: [
      {
        titulo: 'Discovery',
        plazo: '2 weeks',
        texto: 'Roles, projects, budget lines, documents and available camera feeds. Scope and timeline are agreed.',
      },
      {
        titulo: 'Installation in your accounts',
        plazo: 'With your brand',
        texto: 'With your brand, your domain and your roles. Permissions are tested with real users before launch.',
      },
      {
        titulo: 'Go-live with your projects',
        plazo: 'Training',
        texto: 'Your ongoing projects are loaded, office and site teams are trained, and investors are invited.',
      },
      {
        titulo: 'Warranty and maintenance',
        plazo: '60–90 days',
        texto: '60 to 90 days of warranty depending on the package; optional maintenance afterwards.',
      },
    ],
  },

  paraQuien: {
    eyebrow: "Who it's for",
    title: 'Companies that report to private investors.',
    lead: 'And that do it today with WhatsApp, Excel, email and Drive.',
    perfiles: [
      {
        titulo: 'Developers with private investors',
        texto: 'Several developments under way and a group of investors who want to see how each one is going.',
      },
      {
        titulo: 'Fix-and-flip companies',
        texto: 'Short projects, lots of invoices and third-party capital in every deal.',
      },
      {
        titulo: 'Asset managers and family offices running club deals',
        texto: 'Periodic reporting to participants, prepared by hand today for each vehicle.',
      },
      {
        titulo: 'Co-investment platforms and vehicles',
        texto: 'Many investors per project, and each one must see only what is theirs.',
      },
    ],
  },

  precios: {
    eyebrow: 'Pricing',
    title: ['One-off payment.', 'No mandatory fees.'],
    lead: 'Indicative prices, excluding VAT. Confirmed after the discovery phase.',
    recomendado: 'Recommended',
    pagoUnico: 'One-off payment · excl. VAT',
    /** Where the symbol goes: €8,500 */
    moneda: { before: '€', after: '' },
    paquetes: [
      {
        id: 'esencial',
        nombre: 'Essential',
        precio: '8,500',
        para: 'To start centralising.',
        items: [
          'Admin dashboard and investor portal',
          'Installed in your accounts, with your brand and domain',
          'Progress, documents, people and numbers for each project',
          'Dashboard email inbox',
          'Setup of up to 3 projects and 2 training sessions',
          '60-day warranty',
        ],
        recomendado: false,
      },
      {
        id: 'profesional',
        nombre: 'Professional',
        precio: '12,500',
        para: 'For your whole portfolio.',
        items: [
          'Everything in Essential',
          'Go-live with up to 10 ongoing projects',
          'Project numbers updatable from Excel',
          'Site camera connected to your feeds',
          'Phases, budget lines and roles tailored to you',
          '90-day warranty',
        ],
        recomendado: true,
      },
      {
        id: 'integral',
        nombre: 'Complete',
        precio: '14,900',
        para: 'No need to worry about the technical side.',
        items: [
          'Everything in Professional',
          '12 months of maintenance included',
          'Updates and verified backups',
          '2 hours a month of support and improvements',
        ],
        recomendado: false,
      },
    ],
    condiciones: [
      ['Optional maintenance', '€190/month (2 h) · €390/month (5 h)'],
      ['Discovery', '€1,500, credited when you sign'],
      ['Extra hours', '€75/h'],
      ['Payment', '40% on signing · 40% on installation · 20% on delivery'],
      ['Infrastructure', 'Paid by your company, approx. €50–80/month'],
    ],
    extraLabel: 'Additional service:',
    extra: 'a custom opportunity radar, quoted separately.',
    extraLink: 'See an example: buscador.recoba.casa',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'What people usually ask us before the demo.',
    preguntas: [
      {
        q: 'Does it replace our ERP or management software?',
        a: "No. It gathers what's already circulating about each project and shows it to the people who need to see it.",
      },
      {
        q: 'Do we have to pay a monthly fee?',
        a: "No. It's a perpetual licence; you only pay for the infrastructure, directly to each provider (approx. €50–80 a month), and maintenance if you want it.",
      },
      { q: 'Where is the data?', a: 'In your own accounts, hosted in the EU, and exportable whenever you like.' },
      {
        q: 'What happens if we stop paying for maintenance?',
        a: 'The platform keeps working and is still yours.',
      },
      {
        q: 'How do investors sign in?',
        a: "With their Google account or a link sent by email, and only if they've been invited.",
      },
      {
        q: 'How long does it take to go live?',
        a: 'Discovery takes two weeks, and the installation timeline is agreed during it.',
      },
      { q: 'Can we see it first?', a: null },
    ],
    demos: {
      before: 'Yes: the interactive demos are at',
      and: 'and',
      after: ', with sample data. The interface is in Spanish.',
    },
  },

  cta: {
    title: 'The best way to judge it is to see it working with one of your projects.',
    writeTo: 'Or write directly to',
    demosLabel: 'Interactive demos with sample data:',
    portal: 'investor portal',
    admin: 'admin dashboard',
    pasos: [
      ['30-minute demo', 'Remote, or at your office in Madrid, Valencia or Málaga.'],
      ['Two-week discovery', 'Roles, projects, budget lines and documents. Scope and timeline agreed.'],
      ['Installation with your projects', 'In your accounts, with your brand. Your investors on board.'],
    ],
  },

  footer: {
    tagline: 'recoBA · Project and investment tracking software',
    demosTitle: 'Interactive demos',
    portal: 'Investor portal',
    admin: 'Admin dashboard',
    demosNote: 'With sample data.',
    sectionsTitle: 'Sections',
    sections: [
      { href: '#producto', label: 'Product' },
      { href: '#como-funciona', label: 'How it works' },
      { href: '#para-quien', label: "Who it's for" },
      { href: '#precios', label: 'Pricing' },
      { href: '#preguntas', label: 'FAQ' },
    ],
  },
};
