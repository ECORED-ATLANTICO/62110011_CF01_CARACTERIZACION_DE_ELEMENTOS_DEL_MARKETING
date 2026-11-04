<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Mercado, cliente y segmentación



    .bloque-texto-g.bg-color-04.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Comprender el mercado, los clientes y la segmentación constituye un aspecto fundamental para el diseño de estrategias de <em>marketing</em>. Estos elementos permiten identificar a quién se dirige la organización, cuáles son sus necesidades y cómo ofrecer propuestas de valor acordes con sus expectativas. En este tema se analizan los conceptos básicos, los tipos de mercado y clientes, así como la segmentación como herramienta para orientar las acciones comerciales.

    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1	Concepto y tipos de mercado

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img03.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        .container.mb-3
          .row.align-content-center
            .col-lg-auto.d-none.d-lg-flex
              img(src="@/assets/curso/tema2/img02.svg", style="max-width: 100px").mx-auto
            .col-lg
              p.mb-0 El mercado es el espacio físico o virtual donde interactúan compradores y vendedores para intercambiar bienes, servicios o ideas con el propósito de satisfacer necesidades. Está conformado por personas u organizaciones que tienen interés, capacidad de compra y disposición para adquirir una oferta determinada.
        
        .container.mb-3 
          .row.align-items-center.bg-fondo-02.br-15.mb-0.p-4
            p.mb-0 El conocimiento del mercado permite a las organizaciones identificar oportunidades de negocio, comprender el comportamiento de los consumidores y anticipar cambios en la demanda. Este análisis facilita la toma de decisiones relacionadas con el desarrollo de productos, la fijación de precios, la distribución y la comunicación comercial.

        p.mb-0 Los mercados pueden clasificarse de diferentes maneras según sus características y la naturaleza de quienes participan en ellos. Entre los principales tipos se encuentran:


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.mb-0.order-2.order-lg-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-0" data-aos="zoom-in").mb-0
          .tarjeta(titulo="Mercado de consumo")
            p.mb-2 Está conformado por personas y familias que compran productos o servicios para satisfacer sus necesidades personales o del hogar.
            p.mb-0 #[b Ejemplo:] una familia compra alimentos, bebidas y productos de aseo en un supermercado Éxito.

          .tarjeta(titulo="Mercado industrial")
            p.mb-2 Comprende las empresas que adquieren materias primas, maquinaria, equipos o servicios para desarrollar sus procesos productivos.
            p.mb-0 #[b Ejemplo:] una empresa fabricante de automóviles compra acero y componentes electrónicos para ensamblar sus vehículos.

          .tarjeta(titulo="Mercado institucional")
            p.mb-2 Integrado por entidades públicas y privadas que adquieren bienes o servicios para cumplir sus funciones y atender a sus usuarios.
            p.mb-0 #[b Ejemplo:] un hospital público compra medicamentos, equipos médicos e insumos para prestar servicios de salud.

          .tarjeta(titulo="Mercado internacional")
            p.mb-2 Comprende las operaciones comerciales de bienes y servicios entre compradores y vendedores ubicados en diferentes países.
            p.mb-0 #[b Ejemplo:] empresas cafeteras colombianas exportan café a Estados Unidos y Alemania para comercializarlo entre consumidores extranjeros.


    .row.justify-content-center.mb-4
      .col-lg-5.mb-4.mb-lg-0
        p.mb-0 La principal diferencia entre estos mercados está en quién compra, para qué adquiere el producto y dónde se realiza la operación comercial. Una misma empresa puede participar en varios tipos de mercado, dependiendo de sus clientes y actividades comerciales.
      .col-lg-7.mb-0
        .container
          .row.align-items-center.bg-fondo-01.mb-0.p-3
            .col-lg-auto.order-1
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/img04.svg", style="max-width: 150px").mx-auto
            .col-lg.order-2
              p.mb-0 Una empresa que fabrica muebles puede vender sus productos directamente a familias (mercado de consumo), abastecer hoteles y oficinas (mercado institucional) o exportar sus productos a otros países (mercado internacional). 

    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2. Concepto y tipos de cliente 


    .bg-full-width.bg-fondo-00.px-5.py-4
      img(src="@/assets/curso/tema2/img05.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text El cliente es la persona natural o jurídica que adquiere o utiliza un producto o servicio para satisfacer una necesidad o alcanzar un objetivo. Representa el eje central de las estrategias de <em>marketing</em>, ya que las decisiones comerciales se orientan a comprender sus expectativas y generar experiencias satisfactorias.


    p.mb-3 Conocer las características de los clientes permite diseñar ofertas más competitivas, fortalecer la fidelización y establecer relaciones de largo plazo. Para ello, las organizaciones analizan aspectos como hábitos de compra, preferencias, capacidad económica y nivel de satisfacción.

    p.mb-4 Entre los principales tipos de clientes se encuentran:


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img06.png", data-aos="zoom-in", alt="")
      .col-lg-8.order-2.order-lg-2.col-md-12.mb-0.mb-lg-0
        SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-3")
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img07.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Cliente actual
            p.text-center.mb-2 Es la persona o empresa que ya compra productos o utiliza los servicios de una organización, manteniendo una relación comercial con ella.
            p.text-center.mb-0 #[b Ejemplo:] un consumidor que compra semanalmente alimentos y productos de aseo en supermercados Éxito.

          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img08.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Cliente potencial
            p.text-center.mb-2 Es aquella persona o empresa que todavía no compra un producto o servicio, pero tiene necesidades, interés y capacidad para adquirirlo.
            p.text-center.mb-0 #[b Ejemplo:] una persona interesada en contratar un plan de telefonía móvil de Claro, aunque actualmente utiliza otro operador.

          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img09.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Cliente interno
            p.text-center.mb-2 Es el trabajador o área de una organización que recibe productos, servicios o información de otros compañeros para desarrollar sus funciones.
            p.text-center.mb-0 #[b Ejemplo:] el departamento de ventas de Alpina recibe información del área de inventarios para gestionar los pedidos.

          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img10.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Cliente externo
            p.text-center.mb-2 Es la persona o empresa ajena a la organización que adquiere sus productos o servicios para satisfacer una necesidad.
            p.text-center.mb-0 #[b Ejemplo:] un restaurante que compra bebidas a Postobón para ofrecerlas a sus consumidores.


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .container
          .row.align-items-center.bg-fondo-04.br-15.mb-0.p-4
            .col-lg-auto.order-1
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/img11.svg", style="max-width: 150px").mx-auto
            .col-lg.order-2
              p.mb-0 Estas categorías permiten comprender las diferentes relaciones que establece una empresa con sus clientes. Un cliente puede ser actual y externo al mismo tiempo, mientras que el cliente interno participa en los procesos de la organización y contribuye a mejorar el servicio, por ejemplo: una institución educativa presta sus servicios a estudiantes matriculados, quienes representan clientes actuales. Los aspirantes interesados en ingresar constituyen clientes potenciales, mientras que los docentes y colaboradores participan como clientes internos al interactuar entre las diferentes áreas de la organización.

    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3	Concepto de segmentación 

    p.mb-4 La segmentación es el proceso mediante el cual un mercado amplio se divide en grupos de consumidores que comparten características, necesidades o comportamientos similares. Su finalidad consiste en facilitar el diseño de estrategias comerciales dirigidas a públicos específicos, mejorando la efectividad de las acciones de <em>marketing</em>.



    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img12.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
      
        .container.mb-3 
          .row.align-items-center.bg-fondo-02.br-15.mb-0.p-4
            p.mb-0 No todos los consumidores presentan las mismas preferencias o expectativas. Por esta razón, las organizaciones identifican grupos con características comunes para ofrecer productos, servicios y mensajes más acordes con sus necesidades. Una adecuada segmentación contribuye al aprovechamiento de los recursos y al fortalecimiento del posicionamiento de la marca.

        p.mb-3 La segmentación también permite descubrir oportunidades de mercado, desarrollar ventajas competitivas y mejorar la satisfacción del cliente mediante ofertas diferenciadas.
        
        .mb-0
          .row.align-content-center
            .col-lg-auto.d-none.d-lg-flex
              img(src="@/assets/curso/tema2/img13.svg", style="max-width: 100px").mx-auto
            .col-lg
              p.mb-0 Una empresa de ropa deportiva identifica que sus consumidores incluyen jóvenes aficionados al ejercicio, deportistas profesionales y personas mayores que realizan actividad física por salud. Cada grupo presenta necesidades diferentes, por lo que la empresa desarrolla productos y campañas específicas para cada segmento.


    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4	Tipos de segmentación de mercados



    .container
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center
        .col-lg-12.col-md-12
          .row.align-items-center.bg-fondo-01.p-4
            .col-lg-auto.order-1
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/img14.svg", style="max-width: 150px").mx-auto
            .col-lg.order-2
              p.mb-0 Las organizaciones utilizan diferentes criterios para dividir el mercado y orientar sus estrategias comerciales. La elección del tipo de segmentación depende de las características del producto, del mercado y de los objetivos de la empresa.

    p.mb-4 Los principales tipos de segmentación son:

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold Figura 1.
          span Tipos de segmentación de mercado.
        img.mb-0.d-none.d-lg-flex(data-aos="zoom-in-down", src="@/assets/curso/tema2/img16.png", alt="La figura muestra una representación gráfica de los diferentes criterios utilizados para segmentar un mercado, con el propósito de comprender cómo las empresas pueden identificar, organizar y analizar grupos de consumidores que comparten características, necesidades y preferencias similares. Mediante una estructura visual dividida en cuatro secciones, se explica cómo estos criterios permiten conocer mejor a los clientes, interpretar sus comportamientos y reconocer oportunidades comerciales. Asimismo, se destaca la importancia de utilizar esta información para diseñar estrategias de marketing más efectivas, adaptar los productos y servicios a las expectativas del público y fortalecer la toma de decisiones comerciales. ")
        img.mb-0.d-lg-none(data-aos="zoom-in-down", src="@/assets/curso/tema2/img17.png", alt="La figura muestra una representación gráfica de los diferentes criterios utilizados para segmentar un mercado, con el propósito de comprender cómo las empresas pueden identificar, organizar y analizar grupos de consumidores que comparten características, necesidades y preferencias similares. Mediante una estructura visual dividida en cuatro secciones, se explica cómo estos criterios permiten conocer mejor a los clientes, interpretar sus comportamientos y reconocer oportunidades comerciales. Asimismo, se destaca la importancia de utilizar esta información para diseñar estrategias de marketing más efectivas, adaptar los productos y servicios a las expectativas del público y fortalecer la toma de decisiones comerciales. ")


    .row.justify-content-center.mb-5
      .col-lg-10.mb-lg-0
        .cajon.bg-color-04.px-5.py-4.h-100.align-content-center
          p.mb-0 Es frecuente que una organización combine varios criterios de segmentación para obtener un conocimiento más preciso de su mercado objetivo y desarrollar estrategias más efectivas.

    .container
      .row.mb-lg-4.mb-5.justify-content-center.align-items-center.bg-color-06
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1.p-0
          figure
            img(src="@/assets/curso/tema2/img18.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0.p-4
          p.mb-0(data-aos="fade-right") Una empresa que comercializa equipos tecnológicos como Apple, puede dirigir una línea de computadores portátiles a estudiantes universitarios de grandes ciudades (segmentación geográfica y demográfica), mientras promociona equipos de alto rendimiento para diseñadores gráficos y programadores, teniendo en cuenta sus necesidades profesionales y hábitos de uso (segmentación psicográfica y conductual).

   
    .row.justify-content-center.mb-4
      .col-lg-10.mb-lg-0
        p.mb-0 Al aplicar correctamente la segmentación de mercados, las organizaciones optimizan sus recursos, mejoran la comunicación con los clientes y aumentan la probabilidad de éxito de sus estrategias de <em>marketing</em>, al ofrecer soluciones ajustadas a las características de cada grupo de consumidores.



    .row.align-items-center.justify-content-center(data-aos="fade-right")
      .col-lg-10.mx-auto
        .tarjeta.bg-fondo-08.p-3.p-md-4.mb-4
          .row.justify-content-around.align-items-center.p-2
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema2/img19.png", style="width: 210px; max-width: 210px; margin-left: -70px; margin-top: -35px; margin-bottom: -35px; position: relative; z-index: 1;").mx-auto
            .col-12.col-lg.mb-3.mb-lg-0
              h4.mb-2 Lectura sugerida. ¿Qué es la segmentación de mercado?
              p.mb-0 Para profundizar, se sugiere consultar el artículo ¿Qué es la segmentación de mercado?, el cual explica sus 4 criterios básicos (demográfico, geográfico, psicográfico y comportamental) y muestra cómo aplicarla en 7 pasos mediante casos de marcas como Apple, Netflix y Tesla para optimizar estrategias y presupuestos:
            .col-12.col-lg-auto.text-start.text-lg-center
              a.boton.color-acento-botones(:href="'https://www.datumdigitalmarketing.com/noticias/que-es-la-segmentacion-de-mercado'" target="_blank")
                span Ir al recurso

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
