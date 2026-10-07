/** Textos en español (idioma por defecto, ruta `/`). Misma estructura que en.js. */
export default {
  meta: {
    htmlLang: 'es-ES',
    ogLocale: 'es_ES',
    title: 'recoBA · Seguimiento de obra e inversión para promotoras y gestoras',
    description:
      'Panel de obra y portal del inversor para promotoras, flippers y gestoras. Se instala en sus cuentas, con su marca. Pago único, sin cuota obligatoria.',
    ogImage: '/og.png',
    ogImageAlt: 'recoBA: cada obra, cada euro y cada inversor, en un solo panel',
    appName: 'recoBA · Panel de seguimiento de obra e inversión',
    skip: 'Ir al contenido',
  },

  demoMail: {
    subject: 'Demo recoBA',
    body: ['Empresa: ', 'Nombre: ', 'Obras en curso: ', '', 'Me gustaría ver una demo de recoBA.'],
  },

  common: {
    ctaDemo: 'Pedir una demo',
    demoCaption: 'Demo navegable · datos de demostración',
  },

  nav: {
    aria: 'Navegación principal',
    home: 'recoBA — inicio',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    langLabel: 'Idioma',
    links: [
      { href: '#producto', label: 'Producto' },
      { href: '#como-funciona', label: 'Cómo funciona' },
      { href: '#para-quien', label: 'Para quién' },
      { href: '#precios', label: 'Precios' },
      { href: '#preguntas', label: 'Preguntas' },
    ],
  },

  hero: {
    eyebrow: 'Panel de seguimiento de obra e inversión',
    title: ['Cada obra,', 'cada euro', 'y cada inversor,'],
    /** Tamaño del titular (el inglés es más largo y va algo más pequeño) */
    titleClass: 'text-[clamp(2rem,4.6vw,4rem)]',
    titleAccent: 'en un solo panel.',
    sub: 'Centraliza el seguimiento de obra, los contratos, los gastos y la inversión. Se instala en las cuentas de su empresa y es suyo.',
    ctaPortal: 'Ver la demo del portal',
  },

  scene: {
    aria: 'Escena del producto',
    baseAlt:
      'Panel de administración de recoBA: listado de obras con obras en curso, capital de inversores, pendientes de revisar, bandeja de entrada de correo y avisos que requieren atención',
    carteraTag: 'Portal del inversor · cartera',
    carteraAlt:
      'Resumen de cartera en el portal del inversor: capital invertido, valor estimado actual, distribuciones recibidas y TIR proyectada',
    atencionTag: 'Panel · requiere atención',
    atencionAlt:
      'Lista de avisos del panel: un avance por publicar, entradas sin revisar, cierres de captación y un contrato que vence',
    camaraTag: 'Cámara de obra · en directo',
    camaraAlt: 'Imagen en directo de la cámara de una obra con la fecha y la hora de la captura',
    movilAlt: 'Carga de un avance de obra desde el móvil en tres pasos: foto, fase y nota',
  },

  problema: {
    eyebrow: 'El punto de partida',
    title: 'Hoy el seguimiento de una inversión vive repartido en cinco sitios.',
    lead: 'Fotos en WhatsApp, presupuestos en Excel, facturas en el correo, contratos en una carpeta compartida y un inversor que llama para preguntar cómo va la obra.',
    fuentesAria: 'Dónde vive hoy la información',
    fuentes: ['WhatsApp', 'Excel', 'Correo', 'Drive', 'Una llamada'],
    problemas: [
      {
        titulo: 'Horas de reporting manual.',
        texto: 'Cada informe al inversor o al comité se arma a mano, copiando de varias fuentes.',
        icon: 'reloj',
      },
      {
        titulo: 'Desviaciones que se ven tarde.',
        texto: 'El gasto real frente al presupuesto por partida no está a la vista hasta el cierre.',
        icon: 'desvio',
      },
      {
        titulo: 'Confianza que depende de una llamada.',
        texto: 'Quien pone el capital no tiene dónde mirar el estado real de su dinero.',
        icon: 'llamada',
      },
    ],
  },

  propuesta: {
    eyebrow: 'La propuesta',
    title: ['Una obra, un panel.', 'Y un portal para sus inversores.'],
    lead: 'No sustituye a su sistema de gestión: recoge lo que ya circula sobre cada obra y se lo muestra a quien tiene que verlo.',
    equipoEyebrow: 'Su equipo carga',
    equipoTitle: 'Panel de administración',
    equipo: [
      'Avances con fotos y vídeo',
      'Documentos, con quién puede verlos',
      'La cámara de esa obra',
      'Las personas invitadas',
      'Los números, en partidas grandes',
      'Una bandeja con lo que llega por correo',
    ],
    inversoresEyebrow: 'Sus inversores consultan',
    inversoresTitle: 'Portal del inversor',
    inversores: [
      'Avance de sus obras, con fotos',
      'Gasto frente a presupuesto',
      'Documentos que se le comparten',
      'Su capital y lo que ha cobrado',
      'Un aviso con cada novedad',
    ],
    notas: [
      {
        titulo: 'Sin cargar dos veces.',
        texto: 'Lo que circula por WhatsApp o correo se reenvía a una única dirección y entra al panel.',
      },
      {
        titulo: 'Pocas obras, mucha gente mirando.',
        texto: 'Se trabaja obra por obra: cada una con su seguimiento, sus documentos y sus inversores.',
      },
      {
        titulo: 'Cada persona ve solo su obra.',
        texto: 'Los permisos se definen por perfil y por obra. Nadie ve lo que no le corresponde.',
      },
    ],
  },

  producto: {
    eyebrow: 'Producto',
    title: 'Lo que verá su equipo. Lo que verán sus inversores.',
    lead: 'Capturas reales de las demos navegables. Sin maquetas.',
    obras: {
      eyebrow: '01 · Sus obras',
      title: 'Lo que espera respuesta, el estado en una línea, una bandeja para lo que llega.',
      items: [
        'Cada obra con su estado, su avance y lo que tiene pendiente de revisar.',
        'Una bandeja de entrada única: lo que se reenvía por correo aparece aquí y se asigna a su obra.',
        'Avisos con fecha: un avance por publicar, un contrato que vence, una captación que cierra.',
      ],
      alt: 'Bandeja de entrada de una obra en el panel de administración: correos reenviados con adjuntos, pendientes de asignar a la obra',
    },
    seguimiento: {
      eyebrow: '02 · Seguimiento de obra',
      title: 'Fases del proyecto con la fecha real de cada hito.',
      items: [
        'Se carga desde el móvil en tres pasos, o reenviando la foto o la factura al correo del panel.',
        'Obra envía, administración publica: nada llega al inversor sin revisar.',
        'Cada avance indica cuántos inversores lo abrieron.',
      ],
      alt: 'Diario de obra en el panel de administración: fases del proyecto, hitos con fecha real y avances publicados con fotos',
      phoneAria: 'Carga desde el móvil',
      phoneAlt: 'Carga de un avance desde el móvil en tres pasos: foto, fase y nota',
    },
    documentos: {
      eyebrow: '03 · Documentos y números',
      title: 'Contratos, facturas y presupuesto, con vencimiento y permisos.',
      items: [
        'Contratos, escrituras, seguros y facturas, con fecha de vencimiento y quién puede verlos.',
        'Presupuesto, ejecutado y disponible por partida.',
        'Actualizable a mano o subiendo un Excel.',
      ],
      altDocs:
        'Documentos de una obra en el panel de administración: contratos, escrituras, seguros y facturas con vencimiento y permisos por perfil',
      altNumeros:
        'Números de una obra en el panel de administración: presupuesto, ejecutado y disponible por partida, con importación desde Excel',
    },
    portal: {
      eyebrow: '04 · Portal del inversor',
      title: 'Cada inversor entra y ve solo lo suyo.',
      items: [
        'Cartera consolidada: capital invertido, valor estimado, distribuciones y rentabilidad proyectada.',
        'Acceso con su cuenta de Google o con un enlace por correo. Sin contraseñas nuevas.',
        'Nuevas oportunidades con importe objetivo, ticket mínimo y registro de interés.',
      ],
      alt: 'Portal del inversor: resumen de cartera con capital invertido, valor estimado, distribuciones recibidas y rentabilidad proyectada, últimas novedades y proyectos',
      tabsAria: 'Pestañas del portal del inversor',
      tabs: {
        avances: 'Pestaña de avances del portal del inversor: cronología de avances de obra con fotos',
        gastos: 'Pestaña de gastos del portal del inversor: ejecutado frente a presupuesto por partida',
        inversion:
          'Pestaña de inversión del portal del inversor: capital aportado, distribuciones y rentabilidad proyectada',
        oportunidades:
          'Pestaña de oportunidades del portal del inversor: nuevas operaciones con importe objetivo y ticket mínimo',
      },
    },
    camaras: {
      eyebrow: '05 · Cámaras de obra',
      title: 'La obra, en directo, solo para quien está autorizado.',
      items: ['Señal en directo, visor del proveedor de seguridad o capturas periódicas con timelapse.'],
      empresaLabel: 'Su empresa pone',
      empresa: 'Cámaras, conexión, grabación y normativa de videovigilancia.',
      recobaLabel: 'recoBA pone',
      recoba: 'Conecta la señal, la muestra solo a perfiles autorizados y asesora en el equipo.',
      nota: 'La disponibilidad de la imagen depende del equipo y la conexión de su empresa.',
      alt: 'Cámara de obra en el portal del inversor: imagen en directo de la obra con fecha y hora, visible solo para perfiles autorizados',
    },
  },

  propiedad: {
    eyebrow: 'Propiedad y seguridad',
    title: 'Instalado en las cuentas de su empresa. Suyo.',
    lead: 'No es una suscripción a una plataforma ajena: la instalación, los datos y el dominio son de su empresa desde el primer día.',
    alt: 'Ajustes de instalación en el panel de administración: nombre de la empresa, dominio propio, marca y proveedores de alojamiento configurados en las cuentas del cliente',
    tarjetas: [
      {
        titulo: 'Licencia de uso',
        items: ['Perpetua sobre su instalación', 'Sin cuota obligatoria', 'Sus datos, exportables cuando quiera'],
        icon: 'licencia',
      },
      {
        titulo: 'Su infraestructura',
        items: [
          'Datos y archivos alojados en la UE',
          'Su marca y su dominio',
          'Aprox. 50–80 € al mes, pagados directamente a cada proveedor',
        ],
        icon: 'infra',
      },
      {
        titulo: 'Seguridad',
        items: [
          'Solo entran personas invitadas',
          'Cada perfil ve solo lo que le corresponde',
          'Copias de seguridad diarias',
        ],
        icon: 'seguridad',
      },
    ],
    mantenimientoLabel: 'Mantenimiento opcional:',
    mantenimiento: 'actualizaciones, copias verificadas, soporte y pequeñas mejoras.',
    mantenimientoNota: 'Si no lo contrata, la plataforma sigue siendo suya.',
  },

  comoFunciona: {
    eyebrow: 'Cómo funciona',
    title: 'De la primera reunión a sus inversores dentro, en cuatro pasos.',
    lead: 'No parte de cero: el portal del inversor y el panel de administración ya están diseñados y validados en demos navegables.',
    pasos: [
      {
        titulo: 'Diagnóstico',
        plazo: '2 semanas',
        texto: 'Perfiles, obras, partidas, documentos y señales de cámara disponibles. Se cierran alcance y calendario.',
      },
      {
        titulo: 'Instalación en sus cuentas',
        plazo: 'Con su marca',
        texto: 'Con su marca, su dominio y sus perfiles. Se prueban los permisos con usuarios reales antes de abrirla.',
      },
      {
        titulo: 'Puesta en marcha con sus obras',
        plazo: 'Formación',
        texto: 'Carga de las obras en curso, formación a administración y obra, invitación a los inversores.',
      },
      {
        titulo: 'Garantía y mantenimiento',
        plazo: '60–90 días',
        texto: '60 a 90 días de garantía según el paquete; después, mantenimiento opcional.',
      },
    ],
  },

  paraQuien: {
    eyebrow: 'Para quién',
    title: 'Empresas que reportan a inversores privados.',
    lead: 'Y que hoy lo hacen con WhatsApp, Excel, correo y Drive.',
    perfiles: [
      {
        titulo: 'Promotoras con inversores privados',
        texto: 'Varias promociones en marcha y un grupo de inversores que quiere ver cómo va cada una.',
      },
      {
        titulo: 'Empresas de compra-reforma-venta',
        texto: 'Obras cortas, muchas facturas y capital de terceros en cada operación.',
      },
      {
        titulo: 'Gestoras y family offices con club deals',
        texto: 'Reporting periódico a partícipes que hoy se prepara a mano para cada vehículo.',
      },
      {
        titulo: 'Plataformas y vehículos de coinversión',
        texto: 'Muchos inversores por obra y la necesidad de que cada uno vea solo lo suyo.',
      },
    ],
  },

  precios: {
    eyebrow: 'Precios',
    title: ['Un pago único.', 'Sin cuotas obligatorias.'],
    lead: 'Precios sin IVA, orientativos. Se confirman tras el diagnóstico.',
    recomendado: 'Recomendado',
    pagoUnico: 'Pago único · sin IVA',
    /** Dónde va el símbolo: 8.500 € */
    moneda: { before: '', after: '€' },
    paquetes: [
      {
        id: 'esencial',
        nombre: 'Esencial',
        precio: '8.500',
        para: 'Para empezar a centralizar.',
        items: [
          'Panel de administración y portal del inversor',
          'Instalación en sus cuentas, con su marca y dominio',
          'Avances, documentos, personas y números de cada obra',
          'Bandeja de correo del panel',
          'Carga de hasta 3 obras y 2 formaciones',
          '60 días de garantía',
        ],
        recomendado: false,
      },
      {
        id: 'profesional',
        nombre: 'Profesional',
        precio: '12.500',
        para: 'Para toda la cartera.',
        items: [
          'Todo lo de Esencial',
          'Puesta en marcha con hasta 10 obras en curso',
          'Números de la obra actualizables desde Excel',
          'Cámara de la obra conectada a sus señales',
          'Fases, partidas y perfiles a su medida',
          '90 días de garantía',
        ],
        recomendado: true,
      },
      {
        id: 'integral',
        nombre: 'Integral',
        precio: '14.900',
        para: 'Sin preocuparse de la parte técnica.',
        items: [
          'Todo lo de Profesional',
          '12 meses de mantenimiento incluidos',
          'Actualizaciones y copias verificadas',
          '2 horas al mes de soporte y mejoras',
        ],
        recomendado: false,
      },
    ],
    condiciones: [
      ['Mantenimiento opcional', '190 €/mes (2 h) · 390 €/mes (5 h)'],
      ['Diagnóstico', '1.500 €, se descuenta al contratar'],
      ['Horas adicionales', '75 €/h'],
      ['Pago', '40 % firma · 40 % instalación · 20 % entrega'],
      ['Infraestructura', 'A cargo de su empresa, aprox. 50–80 €/mes'],
    ],
    extraLabel: 'Servicio adicional:',
    extra: 'radar de oportunidades a medida, en propuesta aparte.',
    extraLink: 'Ver un ejemplo: buscador.recoba.casa',
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Lo que suelen preguntarnos antes de la demo.',
    preguntas: [
      {
        q: '¿Sustituye a nuestro ERP o programa de gestión?',
        a: 'No. Recoge lo que ya circula sobre cada obra y se lo muestra a quien tiene que verlo.',
      },
      {
        q: '¿Tenemos que pagar una cuota mensual?',
        a: 'No. Es una licencia perpetua; solo paga la infraestructura directamente a cada proveedor (aprox. 50–80 € al mes) y, si quiere, el mantenimiento.',
      },
      { q: '¿Dónde están los datos?', a: 'En sus propias cuentas, alojados en la UE, exportables cuando quiera.' },
      {
        q: '¿Qué pasa si dejamos de contratar el mantenimiento?',
        a: 'La plataforma sigue funcionando y sigue siendo suya.',
      },
      {
        q: '¿Cómo entran los inversores?',
        a: 'Con su cuenta de Google o con un enlace por correo, solo si han sido invitados.',
      },
      {
        q: '¿Cuánto tarda la puesta en marcha?',
        a: 'El diagnóstico dura dos semanas; el calendario de instalación se cierra en él.',
      },
      { q: '¿Podemos verlo antes?', a: null },
    ],
    /** Respuesta con enlaces a las demos (la de a: null) */
    demos: { before: 'Sí: las demos navegables están en', and: 'y', after: ', con datos de ejemplo.' },
  },

  cta: {
    title: 'Lo mejor es verlo funcionando con una obra suya.',
    writeTo: 'O escriba directamente a',
    demosLabel: 'Demos navegables con datos de ejemplo:',
    portal: 'portal del inversor',
    admin: 'panel de administración',
    pasos: [
      ['Demo de 30 minutos', 'En remoto o en su oficina de Madrid, Valencia o Málaga.'],
      ['Diagnóstico de dos semanas', 'Perfiles, obras, partidas y documentos. Alcance y calendario cerrados.'],
      ['Instalación con sus obras', 'En sus cuentas, con su marca. Sus inversores dentro.'],
    ],
  },

  footer: {
    tagline: 'recoBA · Software de seguimiento de obra e inversión',
    demosTitle: 'Demos navegables',
    portal: 'Portal del inversor',
    admin: 'Panel de administración',
    demosNote: 'Con datos de demostración.',
    sectionsTitle: 'Secciones',
    sections: [
      { href: '#producto', label: 'Producto' },
      { href: '#como-funciona', label: 'Cómo funciona' },
      { href: '#para-quien', label: 'Para quién' },
      { href: '#precios', label: 'Precios' },
      { href: '#preguntas', label: 'Preguntas frecuentes' },
    ],
  },
};
