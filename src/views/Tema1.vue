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

    .bloque-texto-g.bg-color-03.p-3.p-sm-4.p-md-5.mb-4
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
      SlyderA(tipo="b").bg-color-white.p-lg-4.p-2.tarjeta
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
              p.mb-0 Un supermercado utiliza publicidad impresa para promocionar sus productos en el barrio donde opera. Paralelamente, publica ofertas en redes sociales y envía promociones personalizadas mediante correo electrónico. En este caso, combina el <em>marketing</em> tradicional con el <em>marketing</em> digital para ampliar el alcance de sus estrategias comerciales.

    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3	Mezcla de <em>marketing</em> 

    .container
      .row.mb-lg-4.mb-5.justify-content-center.align-items-center.bg-color-06
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1.p-0
          figure
            img(src="@/assets/curso/tema1/img16.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0.p-4
          p.mb-0(data-aos="fade-right") La mezcla de <em>marketing</em> es el conjunto de variables que una organización administra para satisfacer las necesidades del mercado y alcanzar sus objetivos comerciales. Estas variables permiten planificar las acciones relacionadas con el producto, el precio, la distribución y la promoción, procurando generar valor para el cliente y diferenciarse de la competencia.

    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/img17.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0

        p.mb-2(data-aos="fade-right") La adecuada combinación de estos elementos facilita el diseño de estrategias coherentes con las características del mercado y con los recursos disponibles en la organización. La mezcla de <em>marketing</em> no es estática; debe ajustarse continuamente a los cambios en las preferencias de los consumidores y a las condiciones del entorno.
        p.mb-3 En la actualidad, muchas organizaciones complementan la mezcla tradicional con otros elementos relacionados con las personas, los procesos y la evidencia física, especialmente en empresas dedicadas a la prestación de servicios.

        .container
          .row.align-items-center.bg-fondo-04.br-15.mb-0.p-4
            .col-lg-auto.order-1
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/img19.svg", style="max-width: 150px").mx-auto
            .col-lg.order-2
              p.mb-0 Una empresa que comercializa bicicletas eléctricas ofrece un producto innovador, establece precios competitivos, vende a través de tiendas físicas y plataformas virtuales, y desarrolla campañas publicitarias en redes sociales. Estas acciones corresponden a la aplicación de la mezcla de <em>marketing</em>.


    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4. Componentes de la mezcla de <em>marketing</em> 

    .bloque-texto-g.bg-color-08.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema1/img20.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Tradicionalmente, la mezcla de <em>marketing</em> está integrada por cuatro componentes conocidos como las cuatro P: producto (<em>product</em>), precio (<em>price</em>), plaza / distribución (<em>place</em>) y promoción (<em>promotion</em>). Estos elementos permiten planificar y ejecutar estrategias comerciales orientadas a satisfacer las necesidades del consumidor. Las variables permiten a las empresas diseñar estrategias comerciales integrales para satisfacer las necesidades del mercado.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        SlyderF(columnas="col-lg-4 col-xl-4 col-md-12 col-sm-12 p-3")
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
              h4.mb-2 Video sugerido. Las 4p del <em>marketing</em>
              p.mb-0 Ir al siguiente video para comprender qué es la mezcla de mercadeo y cómo se aplican las 4P del <em>marketing</em> (producto, precio, plaza y promoción) en la planificación de estrategias comerciales dentro de las organizaciones.
            .col-12.col-lg-auto.text-start.text-lg-center
              a.boton.color-acento-botones(:href="'https://www.youtube.com/watch?v=KiqUOstzOsk'" target="_blank")
                span Ir al recurso
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
