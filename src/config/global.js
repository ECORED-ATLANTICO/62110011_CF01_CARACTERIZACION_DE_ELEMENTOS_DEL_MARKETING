export default {
  global: {
    Name: 'Componentes estratégicos del <em>marketing</em>',
    Description:
      'El componente formativo aborda fundamentos y elementos esenciales del <em>marketing</em>, orientados a la comprensión del mercado, el comportamiento del consumidor y las necesidades de la organización. Desarrolla aspectos relacionados con la mezcla de <em>marketing</em>, la segmentación de mercados, el posicionamiento de marca y producto, la investigación de mercados, el plan de mercadeo y las estrategias de <em>marketing</em>, incluyendo tendencias como el <em>marketing online</em>, el neuromarketing y las neuroventas, con el propósito de seleccionar componentes estratégicos que contribuyan al cumplimiento de objetivos comerciales de la organización.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos del <em>marketing</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de <em>marketing</em>',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Evolución y clases de <em>marketing</em>',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Mezcla de <em>marketing</em>',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Componentes de la mezcla de <em>marketing</em>',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Mercado, cliente y segmentación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto y tipos de mercado',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Concepto y tipos de cliente',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Concepto de segmentación',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Tipos de segmentación de mercados',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Posicionamiento y gestión estratégica de marca',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto de posicionamiento',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Posicionamiento de marca y producto',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Registro de marca',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Arquitectura de marca',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Co-creación de valor',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Plan de mercadeo e investigación de mercados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto de plan de mercadeo',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Componentes del plan de mercadeo',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Concepto de investigación de mercados',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Componentes básicos de la investigación de mercados',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Estrategias de <em>marketing</em> y <em>marketing online</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto de estrategias de <em>marketing</em>',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Tipos de estrategias de <em>marketing</em>',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Concepto de <em>marketing online</em>',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Componentes del <em>marketing online</em>',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo:
          'Tendencias del <em>marketing</em>: <em>neuromarketing</em> y neuroventas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto de <em>neuromarketing</em>',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Aplicaciones del <em>neuromarketing</em>',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Ejemplos de <em>neuromarketing</em>',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: '<em>Marketing</em> sensorial',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Concepto de neuroventas',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Aplicaciones de las neuroventas',
            hash: 't_6_6',
          },
          {
            numero: '6.7',
            titulo: 'Estructura cerebral y proceso de compra',
            hash: 't_6_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/62110009_CF02_CFA.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Arquitectura de marca',
      significado:
        'Estructura que organiza las marcas, productos o líneas de una organización para facilitar su identificación y gestión en el mercado.',
    },
    {
      termino: 'Cliente',
      significado:
        'Persona u organización que adquiere o utiliza un producto o servicio para satisfacer una necesidad o expectativa.',
    },
    {
      termino: 'Co-creación de valor',
      significado:
        'Proceso mediante el cual la empresa y el cliente participan conjuntamente en la generación de valor a través de la interacción y la colaboración.',
    },
    {
      termino: 'Estrategia de <em>marketing</em>',
      significado:
        'Conjunto de acciones planificadas para alcanzar objetivos comerciales mediante la identificación y satisfacción de las necesidades del mercado.',
    },
    {
      termino: 'Investigación de mercados',
      significado:
        'Proceso sistemático de recopilación, análisis e interpretación de información sobre el mercado, los consumidores y la competencia para apoyar la toma de decisiones.',
    },
    {
      termino: 'Marca',
      significado:
        'Nombre, símbolo, diseño o combinación de elementos que identifica y diferencia un producto, servicio o empresa frente a la competencia.',
    },
    {
      termino: '<em>Marketing</em>',
      significado:
        'Disciplina orientada a identificar, crear, comunicar y entregar valor a los clientes, contribuyendo al cumplimiento de los objetivos de la organización.',
    },
    {
      termino: '<em>Marketing online</em>',
      significado:
        'Conjunto de estrategias y acciones de <em>marketing</em> desarrolladas mediante medios y plataformas digitales para atraer, interactuar y fidelizar clientes.',
    },
    {
      termino: '<em>Marketing</em> sensorial',
      significado:
        'Estrategia que utiliza los sentidos (vista, oído, olfato, gusto y tacto) para influir en las percepciones y decisiones de compra del consumidor.',
    },
    {
      termino: 'Mercado',
      significado:
        'Conjunto de compradores y vendedores que interactúan para intercambiar bienes, servicios o ideas con el fin de satisfacer necesidades.',
    },
    {
      termino: 'Mercado objetivo',
      significado:
        'Segmento específico de consumidores al que una organización dirige sus estrategias y acciones comerciales.',
    },
    {
      termino: 'Mezcla de <em>marketing</em>',
      significado:
        'Conjunto de variables controlables utilizadas por una organización para satisfacer las necesidades del mercado y alcanzar sus objetivos comerciales.',
    },
    {
      termino: 'Neuromarketing',
      significado:
        'Aplicación de conocimientos de la neurociencia para comprender el comportamiento del consumidor y mejorar las estrategias de <em>marketing</em>.',
    },
    {
      termino: 'Neuroventas',
      significado:
        'Metodología de ventas basada en el funcionamiento del cerebro y en los procesos emocionales y cognitivos que influyen en la decisión de compra.',
    },
    {
      termino: 'Plan de mercadeo',
      significado:
        'Documento que establece los objetivos, estrategias, acciones, recursos e indicadores para orientar las actividades de mercadeo de una organización.',
    },
    {
      termino: 'Posicionamiento',
      significado:
        'Lugar que ocupa una marca, producto o servicio en la mente del consumidor en relación con la competencia.',
    },
    {
      termino: 'Registro de marca',
      significado:
        'Procedimiento legal mediante el cual se obtiene la protección jurídica de una marca, otorgando derechos exclusivos sobre su uso.',
    },
    {
      termino: 'Segmentación de mercados',
      significado:
        'Proceso de dividir un mercado en grupos de consumidores con características, necesidades o comportamientos similares para diseñar estrategias específicas.',
    },
    {
      termino: 'Valor para el cliente',
      significado:
        'Beneficio percibido por el cliente al comparar los beneficios obtenidos de un producto o servicio frente a los costos asumidos para adquirirlo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Béjar-Tinoco, V., Valenzo-Jiménez, M., Madrigal-Moreno, F., Madrigal-Moreno, S., & Montesinos-López, O. A. (2022). Comercio electrónico y hábitos de los consumidores durante la pandemia de COVID-19 en México. Innovar, 32(86), 119–134.',
      link: 'https://revistas.unal.edu.co/index.php/innovar/issue/view/5877/1900',
    },
    {
      referencia: 'Cómo diseñar un proceso de investigación de mercados.',
      link: 'https://www.questionpro.com/blog/es/proceso-de-investigacion-de-mercados',
    },
    {
      referencia:
        'Ecoe Ediciones. (2023). <em>Marketing</em> digital: Estrategias para la transformación empresarial.',
      link: 'https://ecoeediciones.com/',
    },
    {
      referencia:
        'Kotler, P., & Armstrong, G. (2021). Fundamentos de <em>marketing</em> (19.ª ed.). Pearson Educación.',
    },
    {
      referencia:
        'Kotler, P., Kartajaya, H., & Setiawan, I. (2021). <em>Marketing</em> 5.0: Tecnología para la humanidad. LID Editorial.',
      link: 'https://www.lideditorial.com/',
    },
    {
      referencia:
        'Kotler, P., Keller, K. L., & Chernev, A. (2022). Dirección de <em>marketing</em> (16.ª ed.). Pearson Educación.',
    },
    {
      referencia:
        'Londoño, P. (2025, 10 de septiembre). Introducción al <em>marketing</em>: qué es, para qué sirve, tipos y guía. HubSpot.',
      link: 'https://blog.hubspot.es/marketing/introduccion-al-marketing',
    },
    {
      referencia:
        'Malhotra, N. K. (2020). Investigación de mercados (7.ª ed.). Pearson Educación.',
    },
    {
      referencia:
        'Osterwalder, A., Pigneur, Y., Bernarda, G., & Smith, A. (2015). Diseñando la propuesta de valor. Deusto.',
    },
    {
      referencia:
        'Schiffman, L. G., & Wisenblit, J. (2015). Comportamiento del consumidor (11.ª ed.). Pearson Educación.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Morales Cabrera',
          cargo: 'Experto Temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Coll Gallardo',
          cargo: 'Evaluador Instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
