<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos del <em>marketing</em>


    .bg-full-width.bg-fondo-00.px-5.py-4
      img(src="@/assets/curso/tema1/img02.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text El <em>marketing</em> constituye el conjunto de principios que orientan a las organizaciones en la comprensión del mercado y de las necesidades de los clientes. Su estudio permite conocer cómo se generan propuestas de valor, se fortalecen las relaciones con los consumidores y se alcanzan los objetivos comerciales. En este tema se presentan los conceptos básicos, la evolución del <em>marketing</em> y la mezcla de <em>marketing</em> como fundamento de la gestión comercial.

    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1	Concepto de <em>marketing</em>

    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/img04.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0

        p.mb-3(data-aos="fade-right") El <em>marketing</em> es una disciplina administrativa y estratégica orientada a identificar las necesidades y expectativas de los consumidores para ofrecer productos o servicios que generen valor. Su propósito consiste en establecer relaciones beneficiosas entre la organización y el cliente, favoreciendo la satisfacción de las necesidades del mercado y el cumplimiento de los objetivos comerciales. 
        .container
          .row.align-items-center.bg-fondo-02.br-15.mb-0.p-4
            p.mb-0 En la actualidad, el <em>marketing</em> va más allá de la promoción o la venta. Comprende actividades como el análisis del mercado, la investigación de los consumidores, el desarrollo de productos, la definición de precios, la selección de canales de distribución y la comunicación con los clientes. Todas estas acciones se integran para fortalecer la competitividad de la organización. 


    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema1/img05.svg", style="max-width: 150px").mx-auto
      .col-lg
        p.mb-0 El éxito del <em>marketing</em> depende de la capacidad de las empresas para comprender los cambios del entorno y adaptarse a las preferencias de los consumidores. Por esta razón, las organizaciones recopilan información del mercado, analizan el comportamiento de compra y diseñan estrategias que les permitan ofrecer soluciones acordes con las expectativas de sus clientes.  

    .bloque-texto-g.bg-color-03.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema1/img06.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una empresa dedicada a la fabricación de calzado identifica que existe una creciente preferencia por productos elaborados con materiales reciclados. Como respuesta, desarrolla una nueva línea de zapatos sostenibles, ajusta su estrategia de comunicación y resalta el compromiso ambiental de la marca. Esta decisión demuestra cómo el <em>marketing</em> permite responder a las necesidades del mercado mediante propuestas de valor.

    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2	Evolución y clases de <em>marketing</em> 

    p.mb-4 El <em>marketing</em> ha evolucionado de acuerdo con los cambios económicos, sociales y tecnológicos. En sus primeras etapas, las organizaciones concentraban sus esfuerzos en producir grandes cantidades de bienes para satisfacer una demanda superior a la oferta. Posteriormente, la competencia aumentó y fue necesario diferenciar los productos mediante estrategias orientadas a la venta y la comunicación.

    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema1/img07.svg", style="max-width: 150px").mx-auto
      .col-lg
        p.mb-0 Con el paso del tiempo, las empresas comprendieron que el consumidor debía convertirse en el centro de sus decisiones. Este cambio dio origen a un enfoque basado en el conocimiento del cliente, la creación de valor y la construcción de relaciones de largo plazo. En la actualidad, el uso de tecnologías digitales ha ampliado las posibilidades del <em>marketing</em>, permitiendo una comunicación más personalizada y una mejor comprensión del comportamiento del consumidor. Entre las principales clases de <em>marketing</em> se encuentran:

    .bg-full-width.bg-fondo-03.px-5.py-lg-5.py-4.mb-5
      SlyderA(tipo="b").bg-color-white.p-4.tarjeta
        .row.justify-content-center.align-items-center.p-4
          .col-lg-5.col-md-10.mb-0.mb-lg-0.order-2.order-lg-2
            figure
              img(src="@/assets/curso/tema1/img09.png", data-aos="zoom-in").mx-auto
          .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
            h4 Tradicional
            p Utiliza medios convencionales, como televisión, radio, prensa y publicidad exterior, para promocionar productos o servicios y llegar a diferentes públicos.
            p.mb-0 #[b Ejemplo:] las campañas publicitarias de Coca-Cola en televisión y vallas para promocionar sus bebidas.

        .row.justify-content-center.align-items-center.p-4
          .col-lg-5.col-md-10.mb-0.mb-lg-0.order-2.order-lg-2
            figure
              img(src="@/assets/curso/tema1/img10.png", data-aos="zoom-in").mx-auto
          .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
            h4 Digital
            p Emplea internet, redes sociales, buscadores y plataformas digitales para promocionar productos, atraer clientes y facilitar las ventas.
            p.mb-0 #[b Ejemplo:] Mercado Libre utiliza anuncios digitales y recomendaciones personalizadas para dar a conocer productos y motivar las compras en línea.

        .row.justify-content-center.align-items-center.p-4
          .col-lg-5.col-md-10.mb-0.mb-lg-0.order-2.order-lg-2
            figure
              img(src="@/assets/curso/tema1/img11.png", data-aos="zoom-in").mx-auto
          .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
            h4 Relacional
            p Busca establecer relaciones duraderas con los clientes mediante una atención cercana, experiencias positivas y estrategias de fidelización.
            p.mb-0 #[b Ejemplo:] Éxito utiliza su programa de puntos para ofrecer beneficios a los compradores y motivarlos a regresar a sus establecimientos.

        .row.justify-content-center.align-items-center.p-4
          .col-lg-5.col-md-10.mb-0.mb-lg-0.order-2.order-lg-2
            figure
              img(src="@/assets/curso/tema1/img12.png", data-aos="zoom-in").mx-auto
          .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
            h4 Social
            p Aplica estrategias de mercadeo para promover comportamientos que beneficien a las personas y a la sociedad, sin priorizar las ventas.
            p.mb-0 #[b Ejemplo:] las campañas de prevención del tabaquismo del Ministerio de Salud buscan sensibilizar sobre sus riesgos y fomentar hábitos saludables.

        .row.justify-content-center.align-items-center.p-4
          .col-lg-5.col-md-10.mb-0.mb-lg-0.order-2.order-lg-2
            figure
              img(src="@/assets/curso/tema1/img13.png", data-aos="zoom-in").mx-auto
          .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
            h4 De contenidos
            p Consiste en crear y compartir información útil y relevante para atraer y generar confianza en los consumidores.
            p.mb-0 #[b Ejemplo:] Homecenter publica tutoriales y consejos sobre decoración y mejoras del hogar para orientar a sus clientes y despertar interés en sus productos.

        .row.justify-content-center.align-items-center.p-4
          .col-lg-5.col-md-10.mb-0.mb-lg-0.order-2.order-lg-2
            figure
              img(src="@/assets/curso/tema1/img14.png", data-aos="zoom-in").mx-auto
          .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
            h4 De servicios
            p Desarrolla estrategias para promocionar servicios, destacando la atención, la confianza y la experiencia que recibe el cliente.
            p.mb-0 #[b Ejemplo:] Bancolombia promociona sus servicios financieros resaltando la facilidad de realizar transacciones mediante sus canales digitales.


    p.mb-4 Cada una responde a objetivos específicos y puede utilizarse de manera independiente o complementaria según las características de la organización y del mercado.
    
    .container
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center
        .col-lg-12.col-md-12
          .row.align-items-center.bg-fondo-01.p-4
            .col-lg-auto.order-1
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/img15.svg", style="max-width: 150px").mx-auto
            .col-lg.order-2
              p.mb-0 Un supermercado utiliza publicidad impresa para promocionar sus productos en el barrio donde opera. Paralelamente, publica ofertas en redes sociales y envía promociones personalizadas mediante correo electrónico. En este caso, combina el marketing tradicional con el marketing digital para ampliar el alcance de sus estrategias comerciales.

    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3	Mezcla de marketing 

    .container
      .row.mb-lg-4.mb-5.justify-content-center.align-items-center.bg-color-06
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1.p-0
          figure
            img(src="@/assets/curso/tema1/img16.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0.p-4
          p.mb-0(data-aos="fade-right") La mezcla de marketing es el conjunto de variables que una organización administra para satisfacer las necesidades del mercado y alcanzar sus objetivos comerciales. Estas variables permiten planificar las acciones relacionadas con el producto, el precio, la distribución y la promoción, procurando generar valor para el cliente y diferenciarse de la competencia.

    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/img17.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0

        p.mb-2(data-aos="fade-right") La adecuada combinación de estos elementos facilita el diseño de estrategias coherentes con las características del mercado y con los recursos disponibles en la organización. La mezcla de marketing no es estática; debe ajustarse continuamente a los cambios en las preferencias de los consumidores y a las condiciones del entorno.
        p.mb-3 En la actualidad, muchas organizaciones complementan la mezcla tradicional con otros elementos relacionados con las personas, los procesos y la evidencia física, especialmente en empresas dedicadas a la prestación de servicios.

        .container
          .row.align-items-center.bg-fondo-04.br-15.mb-0.p-4
            .col-lg-auto.order-1
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/img19.svg", style="max-width: 150px").mx-auto
            .col-lg.order-2
              p.mb-0 Una empresa que comercializa bicicletas eléctricas ofrece un producto innovador, establece precios competitivos, vende a través de tiendas físicas y plataformas virtuales, y desarrolla campañas publicitarias en redes sociales. Estas acciones corresponden a la aplicación de la mezcla de marketing.


    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4. Componentes de la mezcla de marketing 

    .bloque-texto-g.bg-color-08.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema1/img20.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Tradicionalmente, la mezcla de marketing está integrada por cuatro componentes conocidos como las cuatro P: producto (product), precio (price), plaza / distribución (place) y promoción (promotion). Estos elementos permiten planificar y ejecutar estrategias comerciales orientadas a satisfacer las necesidades del consumidor. Las variables permiten a las empresas diseñar estrategias comerciales integrales para satisfacer las necesidades del mercado.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        SlyderF(columnas="col-lg-4 col-xl-4 col-md-6 col-sm-12 p-3")
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img22.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Producto
            p.text-center.mb-0 Es el bien o servicio que una empresa ofrece para satisfacer las necesidades o deseos de sus clientes.

          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img23.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Precio
            p.text-center.mb-0 Es el valor económico que paga un cliente para adquirir un producto o servicio, considerando sus características y beneficios.

          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img24.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Plaza / distribución
            p.text-center.mb-0 Comprende los canales, lugares y medios que permiten que un producto llegue al consumidor de manera oportuna y accesible.

          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img25.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Promoción
            p.text-center.mb-0 Reúne las estrategias de comunicación utilizadas para dar a conocer productos, despertar el interés y motivar su compra.


    .row.align-items-center.justify-content-center(data-aos="fade-right")
      .col-lg-10.mx-auto
        .tarjeta.bg-fondo-07.p-3.p-md-4.mb-4
          .row.justify-content-around.align-items-center.p-2
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema1/img26.png", style="width: 210px; max-width: 210px; margin-left: -70px; margin-top: -35px; margin-bottom: -35px; position: relative; z-index: 1;").mx-auto
            .col-12.col-lg.mb-3.mb-lg-0
              h4.mb-2 Video sugerido. Las 4p del #[em marketing]
              p.mb-0 Ir al siguiente video para comprender qué es la mezcla de mercadeo y cómo se aplican las 4P del marketing (producto, precio, plaza y promoción) en la planificación de estrategias comerciales dentro de las organizaciones.
            .col-12.col-lg-auto.text-start.text-lg-center
              a.boton.color-acento-botones(:href="'https://www.youtube.com/watch?v=KiqUOstzOsk'" target="_blank")
                span ir al recurso

  //
    .bloque-texto-g.bg-color-019.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema1/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La gestión de proveedores constituye un elemento estratégico para garantizar la continuidad y eficiencia de las operaciones de despacho de mercancías. Los proveedores suministran bienes y servicios necesarios para que la organización pueda desarrollar sus procesos logísticos de manera oportuna, segura y conforme a los estándares de calidad establecidos. Una adecuada administración de los proveedores favorece el cumplimiento de los tiempos de entrega, la disponibilidad de recursos y la satisfacción del cliente, aspectos fundamentales en la cadena de suministro.
    
    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Concepto de proveedor

    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/img02.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3 Un proveedor es una persona natural o jurídica que suministra bienes o servicios requeridos por una organización para desarrollar sus actividades. En las operaciones de despacho de mercancías, los proveedores facilitan el acceso a recursos como materiales de embalaje, equipos de manipulación, servicios de transporte y soluciones tecnológicas.
        .container
          .row.align-items-center.bg-fondo-09.br-15.mb-4.p-3
            .col-lg-auto.order-1
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/img04.svg", style="max-width: 150px").mx-auto
            .col-lg.order-2
              p.mb-0 La relación con los proveedores debe establecerse a partir de criterios de calidad, cumplimiento, capacidad de respuesta y condiciones comerciales. Estos aspectos permiten reducir el riesgo de interrupciones, asegurar la disponibilidad de recursos y contribuir al cumplimiento de los compromisos adquiridos con los clientes.
          
        p.mb-0(data-aos="fade-right") Además del suministro de bienes y servicios, la gestión de proveedores comprende actividades de selección, evaluación y seguimiento de su desempeño. Estas acciones permiten identificar oportunidades de mejora y fortalecer la coordinación entre los diferentes participantes de la cadena de suministro.



    .container
      .row.mb-3.justify-content-center.align-items-center.p-lg-4.p-3
        .col-lg-10.col-md-12.mb-0.p-0
          .row.justify-content-end.align-items-center.bg-fondo-08
            .col-xl-4.d-none.d-xl-flex.p-0
              figure
                img(src="@/assets/curso/tema5/img-bg.png", alt="").mx-auto
            .col-lg-12.col-xl-8.p-4
              h4 Ejemplo aplicado
              p.mb-0 Una empresa distribuidora requiere cajas de cartón, materiales de protección y servicios de transporte para despachar sus pedidos. Para garantizar la continuidad de las operaciones, selecciona proveedores que cumplen las especificaciones técnicas, los tiempos de entrega y las condiciones comerciales establecidas. De esta manera, reduce el riesgo de retrasos y facilita la preparación y distribución de mercancías. 

    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Clasificación de proveedores


    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema1/img05.svg", style="max-width: 150px").mx-auto
      .col-lg
        p.mb-3 En las operaciones de despacho participan diferentes proveedores que suministran los recursos necesarios para preparar, proteger, movilizar y entregar las mercancías. A continuación, se presentan algunos de los principales.
        p.mb-0 Entre las clasificaciones más utilizadas se encuentran:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/img06.png", data-aos="zoom-in", alt="")
      .col-lg-8.order-2.order-lg-1.col-md-12.mb-0.mb-lg-0
        SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-3")
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img7.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Materiales de embalaje
            p.text-center.mb-0 Suministran cajas, bolsas, cintas adhesivas y materiales de protección que permiten acondicionar las mercancías para su almacenamiento, manipulación y transporte.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img8.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Equipos de manipulación
            p.text-center.mb-0 Proporcionan equipos y herramientas, como estibadores, montacargas y carros de transporte, que facilitan el movimiento seguro de las mercancías dentro del almacén.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img9.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Servicios de transporte
            p.text-center.mb-0 Prestan servicios de movilización y distribución de mercancías, de acuerdo con las características de los productos, los destinos y los tiempos de entrega establecidos.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img010.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Soluciones tecnológicas
            p.text-center.mb-0 Suministran equipos, programas informáticos y servicios de soporte que facilitan el registro, la identificación y el seguimiento de las operaciones logísticas.


    .container
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center
        .col-lg-12.col-md-12
          .row.align-items-center.bg-fondo-07.p-4
            .col-lg-auto.order-1
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/img07.svg", style="max-width: 150px").mx-auto
            .col-lg.order-2
              p.mb-0 De igual forma, los proveedores pueden clasificarse según los bienes o servicios que suministran, la relación comercial que mantienen con la organización y su ubicación geográfica. Esta clasificación permite identificar las alternativas de abastecimiento y seleccionar aquellas que mejor respondan a las necesidades de las operaciones logísticas.


    .row.mb-lg-5.mb-5.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        .cajon.bg-color-c2.p-4
          p.mb-0 En las operaciones de despacho intervienen diferentes proveedores que suministran recursos para preparar, proteger, movilizar y entregar las mercancías. A continuación, se presentan los principales tipos, según los bienes o servicios que ofrecen.


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1.d-lg-block.d-none
        figure
          img(src="@/assets/curso/tema1/img08.png", data-aos="zoom-in", alt="").mx-auto
      .col-lg-9.mb-0.order-2.order-lg-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-0" data-aos="zoom-in").mb-0
          .tarjeta(titulo="Proveedores de materiales de embalaje")
            p.mb-0 Suministran cajas, bolsas, cintas adhesivas, películas plásticas, papel burbuja, espumas y otros materiales de protección utilizados para acondicionar las mercancías durante su manipulación, almacenamiento y transporte. Su función es proteger los productos contra golpes, humedad, contaminación y otros factores que puedan ocasionar daños. Además, facilitan la identificación, clasificación y conservación de los artículos. Pertenecen a la categoría de proveedores de bienes.

          .tarjeta(titulo="Proveedores de equipos de manipulación")
            p.mb-0 Proporcionan montacargas, estibadores manuales y eléctricos, carros de transporte, bandas transportadoras y otras herramientas necesarias para movilizar mercancías dentro del almacén. Estos equipos contribuyen a optimizar los tiempos de operación, reducir el esfuerzo físico y mejorar la seguridad en el manejo de las cargas. Pueden suministrar los equipos mediante venta o alquiler y ofrecer servicios complementarios de mantenimiento, reparación y capacitación para su uso adecuado.

          .tarjeta(titulo="Proveedores de servicios de transporte")
            p.mb-0 Ofrecen servicios de movilización y distribución de mercancías por diferentes medios de transporte, de acuerdo con las necesidades de la operación logística. Para ello, consideran las características de los productos, el volumen y peso de la carga, los destinos, los costos y los tiempos de entrega establecidos. También pueden proporcionar servicios complementarios, como seguimiento de envíos, distribución de última milla, transporte especializado y gestión de documentos. Su participación permite garantizar que las mercancías lleguen a su destino en las condiciones y plazos acordados.

          .tarjeta(titulo="Proveedores de soluciones tecnológicas")
            p.mb-0 Suministran dispositivos, programas informáticos y servicios de soporte que facilitan la identificación, el registro y el seguimiento de las operaciones logísticas. Entre sus soluciones se encuentran los lectores de códigos de barras, las etiquetas RFID, los sistemas de gestión de almacenes (WMS), los sistemas de control de inventarios y las herramientas de rastreo mediante GPS. Estas tecnologías permiten mejorar la precisión de los registros, controlar las entradas y salidas de productos, conocer la ubicación de las mercancías y reducir los errores operativos. Asimismo, pueden ofrecer instalación, capacitación, mantenimiento y actualización de los sistemas para garantizar su correcto funcionamiento.


    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-10.col-md-12.mb-0
        p.mb-0 Estos proveedores contribuyen al desarrollo de las actividades de despacho mediante el suministro de bienes, equipos y servicios necesarios para mantener la continuidad operativa.

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo
          h3.titulo-con-imagen__texto Otras formas de clasificación

    p.mb-4 Además de los recursos que suministran, los proveedores pueden clasificarse según el tipo de relación comercial que mantienen con la organización y su ubicación geográfica.
    
    .bg-full-width.bg-fondo-3.px-5.py-lg-5.py-4.mb-4
      SlyderA(tipo="b").bg-color-white.p-4.tarjeta
        .row.justify-content-center.align-items-center.p-4
          .col-lg-5.col-md-10.mb-0.mb-lg-0.order-2.order-lg-2
            figure
              img(src="@/assets/curso/tema1/img11.png", data-aos="zoom-in").mx-auto
          .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
            h4 Según la relación comercial
            h5 Proveedores estratégicos:
            p.mb-1 Suministran bienes o servicios fundamentales para la operación y mantienen relaciones de colaboración a largo plazo con la organización.
            h5 Proveedores ocasionales:
            p.mb-0 Atienden necesidades específicas o temporales, sin que exista necesariamente una relación comercial continua.

        .row.justify-content-center.align-items-center.p-4
          .col-lg-5.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
            figure
              img(src="@/assets/curso/tema1/img13.png", data-aos="zoom-in").mx-auto
          .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
            h4 Según su ubicación geográfica
            h5 Proveedores locales:
            p.mb-1 Se encuentran en la misma ciudad o área de influencia de la organización, lo que puede facilitar la atención de necesidades inmediatas.
            h5 Proveedores nacionales:
            p.mb-1 Operan dentro del territorio del país y permiten acceder a una oferta más amplia de bienes y servicios.
            h5 Proveedores internacionales:
            p.mb-0 Suministran productos o servicios desde otros países y pueden facilitar el acceso a tecnologías, equipos o materiales especializados.


    .container
      .row.mb-3.justify-content-center.align-items-center.p-lg-4.p-3
        .col-lg-10.col-md-12.mb-0.p-0
          .row.justify-content-end.align-items-center.bg-fondo-08
            .col-xl-4.d-none.d-xl-flex.p-0
              figure
                img(src="@/assets/curso/tema5/img-bg.png", alt="").mx-auto
            .col-lg-12.col-xl-8.p-4
              h4 Ejemplo aplicado
              p.mb-0 Una empresa distribuidora adquiere materiales de embalaje a un proveedor local para atender oportunamente sus operaciones diarias. Al mismo tiempo, contrata un proveedor nacional de transporte para distribuir mercancías a diferentes ciudades y recurre a un proveedor internacional cuando necesita equipos tecnológicos especializados que no encuentra en el mercado nacional.


    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-10.col-md-12.mb-0
        p.mb-0 De esta manera, combina diferentes tipos de proveedores según las características de los recursos requeridos y las necesidades de su operación logística.


    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Lista de proveedores

    .bloque-texto-g.bg-color-10.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema1/img14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La lista de proveedores es un registro organizado que contiene información sobre las personas naturales o jurídicas autorizadas por una organización para suministrar bienes o servicios. Constituye una herramienta administrativa que facilita la consulta, selección y seguimiento de los proveedores vinculados con las operaciones logísticas.

    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-10.col-md-12.mb-0
        p.mb-3 Este registro permite identificar alternativas de abastecimiento, consultar las condiciones comerciales y verificar la disponibilidad de recursos necesarios para la preparación y el despacho de mercancías.
        p.mb-0 La lista de proveedores reúne datos administrativos, comerciales y operativos que facilitan su identificación y consulta. A continuación, se presentan los principales elementos que debe contener.
 

    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure.mb-3
          img(src="@/assets/curso/tema1/img16.png", data-aos="zoom-in").mx-auto
      .col-lg-7.order-2.order-lg-1.mb-0.mb-lg-0
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Identificación del proveedor").align-content-center
            p.mb-0 Incluye la razón social o nombre, el número de identificación tributaria y los datos de contacto necesarios para establecer comunicación.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Bienes y servicios suministrados").align-content-center
            p.mb-0 Describe los productos, materiales, equipos o servicios que ofrece el proveedor, de acuerdo con las necesidades de la organización.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Cobertura y tiempos de entrega").align-content-center
            p.mb-0 Registra las zonas geográficas atendidas, los plazos de suministro y las condiciones relacionadas con la entrega de bienes o la prestación de servicios.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Condiciones comerciales").align-content-center
            p.mb-0 Contiene información sobre precios, formas de pago, descuentos y demás condiciones acordadas para el suministro.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Evaluación y vigencia").align-content-center
            p.mb-0 Permite consultar el estado de aprobación o evaluación del proveedor, así como la vigencia de los contratos o acuerdos comerciales.

    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-10.col-md-12.mb-0
        p.mb-0 La organización y actualización de estos datos facilita la consulta de proveedores y permite responder oportunamente a las necesidades de abastecimiento.

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          h3.titulo-con-imagen__texto Administración y actualización de la lista


    .container
      .row.mb-lg-5.mb-5.justify-content-center.align-items-center.bg-color-08
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1.p-0
          figure
            img(src="@/assets/curso/tema1/img18.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0.p-4
          p.mb-0(data-aos="fade-right") La lista de proveedores debe mantenerse actualizada para evitar dificultades relacionadas con información incorrecta, contratos vencidos o cambios en las condiciones de suministro.
          p.mb-0 En algunas organizaciones, estos registros se administran mediante sistemas de planificación de recursos empresariales (ERP, por sus siglas en inglés) o plataformas especializadas que integran información de compras, inventarios y operaciones logísticas.


    
    .bg-fondo-11.px-lg-5.px-4.py-lg-4.py-2.mb-4
      .container
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
            figure
              img(src="@/assets/curso/tema1/img39.png", data-aos="zoom-in", alt="").w-md-75-img.mx-auto
          .col-lg-9.order-2.order-lg-1.col-md-12.mb-4.mb-lg-0.p-lg-4.p-3.bg-color-white.br-15
            .tarjeta.br-15.p-lg-4.p-2.mb-0.h-100
              h4 Ejemplo aplicado
              p.mb-0 Una empresa distribuidora presenta un incremento inesperado en la cantidad de pedidos. El responsable del almacén consulta la lista de proveedores autorizados para identificar alternativas de suministro de cajas y materiales de protección. A partir de la información registrada, selecciona un proveedor con disponibilidad y tiempos de entrega compatibles con las necesidades de la operación.

    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Criterios para la selección de proveedores



    .row.align-items-center.mb-4.mb-lg-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema1/img19.svg", style="max-width: 150px").mx-auto
      .col-lg
        p.mb-3 La selección de proveedores consiste en evaluar diferentes alternativas de suministro para identificar aquellas que responden a los requerimientos técnicos, comerciales y operativos de una organización.
        p.mb-0 Este proceso debe desarrollarse mediante criterios objetivos que permitan comparar las condiciones ofrecidas, reducir riesgos de abastecimiento y favorecer la continuidad de las operaciones de despacho.


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          h3.titulo-con-imagen__texto Criterios para seleccionar proveedores
    
    .container
      .row.align-items-center.bg-fondo-13.br-15.mb-4.p-3
        .col-lg-auto.order-1
          img.d-none.d-lg-flex(src="@/assets/curso/tema1/img20.svg", style="max-width: 150px").mx-auto
        .col-lg.order-2
          p.mb-0 La selección de proveedores requiere analizar diferentes aspectos relacionados con la calidad, el cumplimiento y las condiciones de suministro. A continuación, se presentan los principales criterios utilizados en este proceso.


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/tema1/img22.png", data-aos="zoom-in", alt="")
      .col-lg-7.order-2.order-lg-1.col-md-12.mb-0.mb-lg-0
        SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-2")
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img23.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Calidad de bienes y servicios
            p.text-center.mb-0 Se verifica que los productos o servicios cumplan las especificaciones técnicas y los requisitos de calidad establecidos por la organización. También se revisa su estado, durabilidad y adecuación a las necesidades de la operación. Esto permite reducir defectos, pérdidas y reprocesos.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img24.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Cumplimiento y capacidad de respuesta
            p.text-center.mb-0 Se evalúa la puntualidad en las entregas, la disponibilidad de recursos y la capacidad para atender solicitudes ordinarias o extraordinarias. Se considera la rapidez para resolver imprevistos y responder a cambios en la demanda. Esto ayuda a evitar retrasos en las operaciones logísticas.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img26.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Precio y condiciones comerciales
            p.text-center.mb-0 Se comparan los costos, las formas de pago, los descuentos y las demás condiciones económicas ofrecidas. También se analizan los costos adicionales, los plazos de pago y la relación entre precio y calidad. El objetivo es optimizar los recursos y mantener la rentabilidad.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img32.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Cobertura y capacidad logística
            p.text-center.mb-0 Se analiza la capacidad del proveedor para atender las zonas requeridas, gestionar entregas y responder a las necesidades de distribución. Se consideran las rutas disponibles, los medios de transporte y los tiempos de desplazamiento. Esto permite garantizar un suministro oportuno y eficiente.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img33.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Capacidad técnica y tecnológica
            p.text-center.mb-0 Se consideran los equipos, conocimientos, infraestructura y herramientas tecnológicas disponibles para garantizar el suministro. También se verifica su capacidad para implementar mejoras y adaptarse a los requerimientos de la organización. Estos aspectos favorecen la eficiencia y la continuidad operativa.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img34.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Solidez financiera
            p.text-center.mb-0 Se examina la capacidad económica del proveedor para mantener sus operaciones y cumplir los compromisos comerciales adquiridos. Se pueden revisar sus antecedentes financieros, nivel de endeudamiento y estabilidad económica. Esto ayuda a prevenir interrupciones del suministro por dificultades financieras.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img35.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Cumplimiento legal y certificaciones
            p.text-center.mb-0 Se verifica el cumplimiento de los requisitos legales aplicables y, cuando corresponda, la disponibilidad de certificaciones relacionadas con la calidad o la actividad desarrollada. También se revisan los permisos, licencias y documentos exigidos. Esto reduce riesgos legales y garantiza operaciones confiables.
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img36.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Servicio posventa
            p.text-center.mb-0 Se evalúa la atención de reclamaciones, la gestión de devoluciones y la capacidad para resolver novedades posteriores al suministro. Se considera la rapidez de respuesta, las garantías ofrecidas y la disponibilidad de soporte técnico. Un buen servicio posventa fortalece la relación comercial y facilita la solución de inconvenientes.

    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-10.col-md-12.mb-0
        p.mb-0 La aplicación de estos criterios permite comparar proveedores de manera objetiva y seleccionar alternativas acordes con las necesidades de la operación logística.


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          h3.titulo-con-imagen__texto Evaluación y seguimiento de proveedores

    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema1/img37.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        .row.align-items-center.mb-3
          .col-lg-auto.d-none.d-lg-flex
            img(src="@/assets/curso/tema1/img38.svg", style="max-width: 150px").mx-auto
          .col-lg
            p.mb-0 Las organizaciones pueden utilizar matrices de evaluación para asignar una ponderación a cada criterio según su importancia. Este procedimiento facilita la comparación de alternativas y permite sustentar las decisiones de selección.

        .container
          .row.align-items-center.bg-fondo-09.br-15.mb-3.p-3
            p.mb-0 Una vez contratado el proveedor, es necesario realizar un seguimiento de su desempeño mediante indicadores relacionados con la calidad, la puntualidad, las devoluciones, la atención de novedades y el nivel de servicio.
          
        p.mb-0(data-aos="fade-right") Los resultados de estas evaluaciones permiten identificar oportunidades de mejora, actualizar la lista de proveedores y fortalecer las relaciones comerciales.


    .container
      .row.mb-3.justify-content-center.align-items-center.p-lg-4.p-3
        .col-lg-10.col-md-12.mb-0.p-0
          .row.justify-content-start.align-items-center.bg-fondo-12
            .col-lg-12.col-xl-8.p-4
              h4 Ejemplo aplicado
              p.mb-0 Una empresa de comercio electrónico necesita contratar un servicio de transporte para distribuir pedidos a diferentes ciudades. Para seleccionar el proveedor, compara tres alternativas considerando el costo por envío, la cobertura geográfica, la puntualidad y la atención de novedades.
            .col-xl-4.d-none.d-xl-flex.p-0
              figure
                img(src="@/assets/curso/tema5/img-bg.png", alt="").mx-auto

    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-10.col-md-12.mb-0
        p.mb-0 Después de analizar los resultados, selecciona la opción que presenta el mejor equilibrio entre las condiciones económicas y el nivel de servicio requerido.

    .row.align-items-center.justify-content-center(data-aos="fade-right")
      .col-lg-10.mx-auto
        .tarjeta.bg-fondo-20.p-3.p-md-4.mb-5
          .row.justify-content-around.align-items-center.p-2
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-md-0.mx-auto.mx-md-0.text-center.d-none.d-lg-flex
              img(src="@/assets/curso/tema5/img21.png", style="max-width: 140px; margin-bottom: -15px; margin-top: -10px;").mx-auto
            .col-12.col-md-12.col-lg-7.col-xl-8.mb-3.mb-md-2
              h4.mb-2 Video sugerido. Selección de proveedores
              p.mb-0 Para fortalecer los conocimientos sobre la participación de los proveedores en las operaciones logísticas, se invita a consultar el siguiente video, que complementa los conceptos relacionados con su selección y gestión.
            .col-12.col-md-auto.text-start.text-md-start.text-lg-center
              a.boton.color-acento-botones(:href="'https://www.youtube.com/watch?v=VgeYbtfLG7o'" target="_blank")
                span Ir al recurso

        .tarjeta.bg-fondo-21.p-3.p-md-4.mb-5
          .row.justify-content-around.align-items-center.p-2
            .col-12.col-md-12.col-lg-7.col-xl-8.mb-3.mb-md-2.order-2.order-md-1
              h4.mb-2 Lectura sugerida. Selección de proveedores: una aproximación al estado del arte
              p.mb-0 Para ampliar los conocimientos sobre la selección y evaluación de proveedores, se recomienda consultar el siguiente documento como material complementario del capítulo.
            .col-12.col-md-auto.text-start.text-md-start.text-lg-center.order-3.order-md-2
              a.boton.color-acento-botones(:href="'https://gc.scalahed.com/recursos/files/r161r/w25764w/L1LT103_S6_01.pdf'" target="_blank")
                span Ir al recurso
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-md-0.mx-auto.mx-md-0.text-center.order-1.order-md-3.d-none.d-lg-flex
              img(src="@/assets/curso/tema5/img23.png", style="max-width: 160px; margin-bottom: -15px; margin-top: -10px;").mx-auto


    .container
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .row.bg-fondo-18.align-items-center.justify-content-center.br-15.p-0
            .col-md-8.col-lg-5.mb-3.mb-lg-0.order-2.order-md-2.order-lg-1.p-0
              figure
                img(src="@/assets/curso/tema4/img11.png", data-aos="fade-right").mx-auto.w-md-75-img
            .col-lg-6.order-1.order-md-1.order-lg-2.p-4.p-lg-4
              p(data-aos="fade-left").mb-4 Para complementar los conocimientos sobre la organización de las operaciones logísticas, se invita a consultar el pódcast:
              TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                texto="Políticas logísticas: el punto de partida para una cadena de suministro eficiente"
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast1.mp3')"
              )
              p.mb-0 Que aborda la importancia de establecer lineamientos para coordinar los procesos y fortalecer la eficiencia de la cadena de suministro.
  
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
