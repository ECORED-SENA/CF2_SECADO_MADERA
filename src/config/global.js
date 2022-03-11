export default {
  global: {
    componenteFormativo: 'Proceso de secado industrial de la madera',
    descripcionCurso:
      'La madera, un material que absorbe o pierde agua según condiciones ambientales donde esté la pieza, esta humedad resulta potencialmente dañina, causa pudrimiento, aparición de hongos, ataque de insectos, acabando en deterioro. Considerar los métodos de secado industrial, dependiendo de la especie, el clima y el producto final, permitirá controlar la humedad, ventilación y temperatura con los programas de secado.',
    imagenBannerPrincipal: require('@/assets/curso/banner/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/banner/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Equipos, herramientas e instrumentos de secado industrial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Cámaras',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Xilohigrómetro',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Gravimétricos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Manuales técnicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de programa',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Técnicas de operación y variables de secado',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Procedimientos de almacenamiento',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Normativa ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Emisión de gases',
            hash: 't_3_1',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   icono: 'fas fa-sitemap',
      //   titulo: 'Sintesis',
      //   nombreRuta: 'sintesis',
      // },
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      // {
      //   icono: 'fas fa-download',
      //   titulo: 'Descargar material',
      //   download: 'downloads/material.zip',
      // },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Arango, A. (1990). Secado de la madera. SENA',
      link:
        'https://repositorio.sena.edu.co/bitstream/11404/4888/1/Secado_madera.pdf',
    },
    {
      referencia:
        'Arbeláez, J. y Feria, V. (2003). Diseño y construcción de una cámara para el secado de la madera. Corporación Universitaria Tecnológica de Bolívar',
      link: 'https://biblioteca.utb.edu.co/notas/tesis/0010740.pdf',
    },
    {
      referencia:
        'Centro de Innovación Tecnológico de la Madera [CITEmadera]. (2009). Guía de Contenidos “Técnicas de Secado de la Madera”',
    },
    {
      referencia:
        'Del Valle, H. (2019). 5 fases del secado de madera industrial que debes conocer. Maquinaria y Maderas.',
      link: 'https://maquinariaymaderas.com/secado-de-madera-industrial/',
    },
    {
      referencia: 'IDEAM-SIAC. (s. f.). Calidad de Aire. SIAC',
      link: 'http://www.siac.gov.co/calidadaire',
    },
    {
      referencia:
        'Muñoz-Acosta, F. (2012). Serie: Madera para construcción Secado de la madera aserrada. Revista Forestal Mesoamericana Kurú, 5(13), p. 58–63',
      link: 'https://revistas.tec.ac.cr/index.php/kuru/article/view/477',
    },
    {
      referencia:
        'Paredes, C. (2014). Guía práctica para el secado de madera en hornos. SERFOR.',
    },
  ],
  glosario: [
    {
      termino: 'Aspecto ambiental',
      significado:
        'Elemento de las actividades, productos o servicios de una organización que puede interactuar con el medio ambiente. Por ejemplo, “vertidos industriales a la red de saneamiento”. (Asociación Española para la Calidad, s. f.)',
    },
    {
      termino: 'Gravimétrico',
      significado:
        'Es un método analítico cuantitativo, es decir, que determina la cantidad de sustancia midiendo el peso de la misma con una balanza analítica y sin llevar a cabo el análisis por volatilización. (Quimitube, 2014)',
    },
    {
      termino: 'Higroscópico',
      significado:
        'Sustancia capaz de absorber humedad del medio. Gracias a esta propiedad, las sustancias higroscópicas se utilizan como desecantes, ya que absorben el agua de otros compuestos. (Vadequimica, 2019)',
    },
    {
      termino: 'Humedad relativa',
      significado:
        'Es como describimos cuánta humedad hay en el aire frente a la cantidad máxima que el aire puede contener a una temperatura determinada. (QUEST, s. f.)',
    },
    {
      termino: 'Latifoliadas',
      significado:
        'Árboles de maderas preciosas o de color, generalmente de hoja ancha. (Infojardin, 2020)',
    },
    {
      termino: 'Muestra de control',
      significado:
        'Parte o cantidad pequeña de una cosa que se considera representativa del total y que se toma o se separa de ella con ciertos métodos, para someterla a estudio, análisis o experimentación. (Significados.com, 2016)',
    },
    {
      termino: 'Probeta',
      significado:
        'Es una pieza (generalmente de dimensiones normalizadas) constituida por un determinado material, cuyas características se desean estudiar. (Wikipedia, 2020)',
    },
    {
      termino: 'Residuo peligroso',
      significado:
        'El Decreto 4741 de 2005, unificado en el año 2015 en el Título 6 del Decreto 1076, define los residuos peligrosos como aquellos residuos o desechos que, por sus características corrosivas, reactivas, explosivas, tóxicas, inflamables, infecciosas o radiactivas, pueden causar riesgos, daños o efectos no deseados, directos o indirectos, a la salud humana y el ambiente. Asimismo, se considera residuo peligroso a los empaques, envases y embalajes que estuvieron en contacto con ellos. (IDEAM-SIAC, s. f.)',
    },
  ],
  complementario: [
    {
      texto:
        'Rojas, M. (s. f.). El Xilohigrómetro: Un Guardián para la Industria Maderera. Revista El Mueble y la Madera',
      tipo: 'Artículo',
      link:
        'https://docplayer.es/21281087-El-xilohigrometro-para-el-adecuado-uso-industrial-un-guardian-para-la-industria-maderera-equipos.html',
    },
    {
      texto:
        'AITIM. (s. f.). Normas de seguridad en el secado artificial de la madera. Infomadera.net.',
      tipo: 'Artículo',
      link: 'https://infomadera.net/uploads/articulos/archivo_312_16238.pdf',
    },
    {
      texto:
        'Ministerio de Ambiente y Desarrollo Sostenible – CARDER. (2014). Pacto Intersectorial por la Madera Legal en Colombia.',
      tipo: 'Cartilla',
      link:
        'https://www.corpamag.gov.co/archivos/InfoAmbiental/Cartilla_Pacto_Madera_Legal_3a_edicion_2014.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Erika Barrera Montañez',
        cargo: 'Experta Temática',
        centro:
          'Centro para el Desarrollo Rural y Minero CEDRUM Regional Norte de Santander',
      },
      {
        nombre: 'Beatriz Eugenia Agudelo Vásquez',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Gestión Industrial Regional - Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Centro de Gestión Industrial Regional - Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Edison Eduardo Mantilla Cuadros'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Carmen Alicia Martínez Torres'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['Gilberto Junior Rodriguez Rodriguez'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['Lady Adriana Ariza Luque'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['Laura Ximena Hurtado Villalba'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['Rosa Milena Gómez Caballero'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['Wilson Andrés Arenales Caceres'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Deivy Giovanni Fonseca Bermúdez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
