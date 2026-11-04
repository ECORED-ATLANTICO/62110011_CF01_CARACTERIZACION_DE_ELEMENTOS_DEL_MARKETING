<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Plan de mercadeo e investigación de mercados


    .bloque-texto-g.bg-color-04.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema4/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El plan de mercadeo y la investigación de mercados constituyen herramientas fundamentales para la planificación estratégica de las organizaciones. Su aplicación permite conocer el entorno, identificar oportunidades, comprender las necesidades de los clientes y diseñar acciones comerciales orientadas al logro de los objetivos organizacionales. En este tema se presentan sus principales conceptos, componentes y utilidad dentro de la gestión del <em>marketing</em>. 

    separador
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Concepto de plan de mercadeo 

    .bg-full-width.bg-fondo-00.px-5.py-4
      img(src="@/assets/curso/tema4/img02.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text El plan de mercadeo es un documento estratégico que organiza las acciones necesarias para alcanzar los objetivos comerciales de una organización durante un periodo determinado. En él se establecen las estrategias, actividades, recursos, responsables e indicadores que orientan la ejecución y evaluación de las acciones de marketing.


    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema4/img03.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3 La elaboración de un plan de mercadeo permite disminuir la incertidumbre en la toma de decisiones, optimizar los recursos disponibles y coordinar los esfuerzos de las diferentes áreas involucradas en la gestión comercial. Además, facilita el seguimiento de los resultados y la implementación de acciones de mejora cuando sea necesario. 
        .container
          .row.align-items-center.bg-fondo-04.br-15.mb-0.p-3
            .col-lg-auto.order-1
              img.d-none.d-lg-flex(src="@/assets/curso/tema4/img04.svg", style="max-width: 150px").mx-auto
            .col-lg.order-2
              p.mb-0 Un plan de mercadeo debe elaborarse con base en el análisis del mercado, el conocimiento del cliente y los objetivos estratégicos de la organización, de manera que las acciones propuestas respondan a las condiciones reales del entorno.
    p.mb-3 Sportline Colombia desarrolla planes de mercadeo para promocionar marcas deportivas como Nike, Adidas, Puma y Under Armour. Para ello establece objetivos de ventas, diseña campañas promocionales para temporadas comerciales, fortalece su presencia en redes sociales, define el presupuesto de las actividades de mercadeo y realiza seguimiento mediante indicadores de desempeño. Estas acciones le permiten evaluar los resultados obtenidos y ajustar sus estrategias de acuerdo con el comportamiento del mercado.

    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2	Componentes del plan de mercadeo 

    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema4/img05.svg", style="max-width: 150px").mx-auto
      .col-lg
        p.mb-3 Aunque la estructura del plan puede variar según el tipo de organización, generalmente incluye una serie de componentes que permiten planificar y controlar las estrategias comerciales de manera organizada.
        p.mb-0 Entre los componentes más utilizados se encuentran:


    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure.mb-3
          img(src="@/assets/curso/tema4/img06.png", data-aos="zoom-in").mx-auto.w-md-75
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Análisis de la situación actual").align-content-center
            p.mb-0 Permite conocer el entorno interno y externo de la empresa, identificando oportunidades, amenazas, fortalezas y debilidades para tomar decisiones informadas.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Definición del mercado objetivo").align-content-center
            p.mb-0 Consiste en identificar y caracterizar el segmento de clientes al que se dirige la oferta, con base en sus necesidades, preferencias y comportamientos.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Objetivos comerciales").align-content-center
            p.mb-0 Son los resultados que la empresa desea alcanzar en un tiempo determinado, expresados de manera clara, medible y realista.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Estrategias de <em>marketing</em>").align-content-center
            p.mb-0 Definen cómo se alcanzarán los objetivos, incluyendo las decisiones sobre producto, precio, distribución, comunicación y posicionamiento.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Plan de acción").align-content-center
            p.mb-0 Detalla las actividades específicas que se deben ejecutar, los responsables, los tiempos de realización y los recursos necesarios para implementar las estrategias.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Presupuesto").align-content-center
            p.mb-0 Establece los recursos financieros requeridos para desarrollar las actividades del plan de mercadeo, asegurando un uso eficiente y alineado con los objetivos comerciales.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Indicadores para evaluar los resultados").align-content-center
            p.mb-0 Permiten medir el cumplimiento de los objetivos y el impacto de las estrategias, facilitando el seguimiento y la toma de decisiones para realizar ajustes oportunos.


    p.mb-3 Cada uno de estos elementos cumple una función específica dentro del proceso de planificación. Su integración permite orientar las decisiones comerciales y garantizar que las acciones desarrolladas contribuyan al cumplimiento de las metas organizacionales.

    p.mb-4 Una empresa de alimentos realiza un análisis de sus competidores, identifica como mercado objetivo a jóvenes universitarios, establece el objetivo de aumentar las ventas en un 15 %, diseña campañas digitales, asigna recursos económicos y define indicadores para medir el desempeño de las estrategias implementadas.


    .row.align-items-center.justify-content-center(data-aos="fade-right")
      .col-lg-10.mx-auto
        .tarjeta.bg-fondo-08.p-3.p-md-4.mb-4
          .row.justify-content-around.align-items-center.p-2
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema2/img19.png", style="width: 210px; max-width: 210px; margin-left: -70px; margin-top: -35px; margin-bottom: -35px; position: relative; z-index: 1;").mx-auto
            .col-12.col-lg.mb-3.mb-lg-0
              h4.mb-2 Lectura sugerida. ¿Qué es un plan de mercadeo? El primer paso para una estrategia exitosa
              p.mb-0 Para comprender el concepto de plan de mercadeo, su importancia, estructura y los elementos necesarios para su elaboración, se recomienda consultar el siguiente recurso:
            .col-12.col-lg-auto.text-start.text-lg-center
              a.boton.color-acento-botones(:href="'https://www.ialab.co/plan-de-mercadeo-que-es'" target="_blank")
                span Ir al recurso

    separador
    
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Concepto de investigación de mercados 


    .container
      .row.mb-lg-4.mb-5.justify-content-center.align-items-center.bg-color-06
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1.p-0
          figure
            img(src="@/assets/curso/tema4/img07.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0.p-4
          p.mb-0(data-aos="fade-right") La investigación de mercados es un proceso sistemático de recolección, análisis e interpretación de información relacionada con los consumidores, la competencia y el entorno comercial. Su propósito consiste en proporcionar información confiable que apoye la toma de decisiones dentro de la organización.

    p.mb-4 Mediante la investigación de mercados es posible conocer las necesidades, preferencias y hábitos de compra de los consumidores, así como identificar tendencias, oportunidades y posibles riesgos del mercado. Esta información reduce la incertidumbre y favorece el diseño de estrategias más efectivas.

    
    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-10.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema4/img08.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3 La investigación puede realizarse antes del lanzamiento de un producto, durante su comercialización o al evaluar los resultados de una estrategia, permitiendo ajustar las decisiones de acuerdo con las condiciones del entorno.
        .row.align-items-center.mb-0
          .col-lg-auto.order-1
            img.d-none.d-lg-flex(src="@/assets/curso/tema4/img09.svg", style="max-width: 150px").mx-auto
          .col-lg.order-2
            p.mb-0 Antes de lanzar una nueva bebida energética, una empresa aplica encuestas a consumidores potenciales para conocer sus preferencias de sabor, presentación y precio. Los resultados obtenidos sirven como base para definir las características del producto antes de su lanzamiento.


    separador
    
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4  	Componentes básicos de la investigación de mercados

    .container
      .row.align-items-center.bg-fondo-10.br-15.mb-5.p-3
        .col-lg-auto.order-1
          img.d-none.d-lg-flex(src="@/assets/curso/tema4/img10.svg", style="max-width: 150px").mx-auto
        .col-lg.order-2
          p.mb-0 Toda investigación de mercados sigue un proceso organizado que permite obtener información útil para la toma de decisiones. Aunque la metodología puede variar según el estudio, existen componentes básicos presentes en la mayoría de las investigaciones.


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1.d-lg-block.d-none
        figure
          img(src="@/assets/curso/tema4/img11.png", data-aos="zoom-in", alt="").mx-auto
      .col-lg-9.mb-0.order-2.order-lg-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-0" data-aos="zoom-in").mb-0
          .tarjeta(titulo="Problema u oportunidad")
            p.mb-0 Consiste en identificar y delimitar la situación comercial que necesita estudiarse, como la disminución de las ventas, los cambios en las preferencias de los consumidores o la posibilidad de ingresar a un nuevo mercado. Permite establecer qué se necesita conocer y por qué es importante investigar.

          .tarjeta(titulo="Establecimiento de los objetivos de investigación")
            p.mb-0 Define los resultados que se esperan obtener mediante el estudio, señalando qué información se necesita recopilar y analizar. Los objetivos deben ser claros, específicos y coherentes con el problema identificado, para orientar las actividades y facilitar la evaluación de los resultados.

          .tarjeta(titulo="Selección de las fuentes de información")
            p.mb-0 Se debe identificar de dónde se obtendrán los datos necesarios para desarrollar la investigación. Pueden utilizarse fuentes primarias, como consumidores y entrevistas, o secundarias, como informes, estadísticas, estudios previos y publicaciones de entidades públicas o privadas.

          .tarjeta(titulo="Diseño de instrumentos para la recolección de datos")
            p.mb-0 Es el proceso donde se definen y elaboran las herramientas que permiten obtener información directamente de los participantes, como encuestas, entrevistas, cuestionarios y guías de observación. Su diseño debe garantizar preguntas claras, pertinentes y relacionadas con los objetivos de la investigación.

          .tarjeta(titulo="Análisis de la información obtenida")
            p.mb-0 Permite organizar, revisar e interpretar los datos recopilados para identificar tendencias, comportamientos, necesidades y oportunidades del mercado. Mediante tablas, gráficos y comparaciones, se transforman los datos en información útil para comprender la situación investigada.

          .tarjeta(titulo="Presentación de resultados mediante un informe")
            p.mb-0 Es la etapa en la que se organizan y comunican los principales hallazgos de la investigación, incluyendo conclusiones y recomendaciones. El informe permite comprender los resultados obtenidos y proporciona información confiable para orientar las decisiones comerciales de la empresa.



    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-10.col-md-12.mb-4
        .cajon.bg-color-04.p-4
          p.mb-0 La calidad de una investigación depende de la confiabilidad de la información recopilada y del análisis realizado. Por ello, las organizaciones deben emplear métodos adecuados y garantizar que los datos respondan a los objetivos planteados. 

      .col-lg-10.col-md-12
        p.mb-0 Una empresa de productos cosméticos detecta una disminución en las ventas de una de sus líneas de cuidado facial. Para identificar las causas, realiza entrevistas con clientes, analiza la información recopilada y concluye que es necesario mejorar la presentación del producto y fortalecer la comunicación de sus beneficios. Con estos resultados implementa nuevas estrategias comerciales orientadas a recuperar su participación en el mercado.



    .row.align-items-center.justify-content-center(data-aos="fade-right")
      .col-lg-10.mx-auto
        .tarjeta.bg-fondo-07.p-3.p-md-4.mb-5
          .row.justify-content-around.align-items-center.p-2
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema1/img26.png", style="width: 210px; max-width: 210px; margin-left: -70px; margin-top: -35px; margin-bottom: -35px; position: relative; z-index: 1;").mx-auto
            .col-12.col-lg.mb-3.mb-lg-0
              h4.mb-2 Video sugerido. Investigación de mercados
              p.mb-0 Para comprender el concepto, la importancia y el proceso de la investigación de mercados, desde la identificación del problema hasta la presentación de los resultados, se recomienda el siguiente recurso:
            .col-12.col-lg-auto.text-start.text-lg-center
              a.boton.color-acento-botones(:href="'https://www.youtube.com/watch?v=ZB2IC4lOrcU'" target="_blank")
                span Ir al recurso


    .row.align-items-center.justify-content-center(data-aos="fade-right")
      .col-lg-10.mx-auto
        .tarjeta.bg-fondo-08.p-3.p-md-4.mb-4
          .row.justify-content-around.align-items-center.p-2
            .col-lg-auto.d-none.d-lg-block.order-3
              img(src="@/assets/curso/tema2/img19.png", style="width: 210px; max-width: 210px; margin-left: -70px; margin-top: -35px; margin-bottom: -35px; position: relative; z-index: 1;").mx-auto
            .col-12.col-lg.mb-3.mb-lg-0.order-1
              h4.mb-2 Lectura sugerida. Investigación de mercado: la base para tomar decisiones inteligentes en <em>marketing</em>
              p.mb-0 Para comprender el concepto de investigación de mercados, su importancia, las etapas del proceso y las herramientas utilizadas para recopilar y analizar información que apoye la toma de decisiones comerciales, se recomienda consultar el siguiente recurso:
            .col-12.col-lg-auto.text-start.text-lg-center.order-2
              a.boton.color-acento-botones(:href="'https://imecaf.com/blog/2026/04/08/investigacion-de-mercado/'" target="_blank")
                span Ir al recurso


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
