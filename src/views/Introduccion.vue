<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción



    .container
      .row.mb-lg-4.mb-5.justify-content-center.align-items-center.bg-color-02
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1.p-0
          figure
            img(src="@/assets/curso/intro/img01.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0.p-4
          p.mb-0(data-aos="fade-right") El componente formativo Componentes estratégicos del <em>marketing</em> desarrolla los fundamentos necesarios para comprender los elementos que orientan la planeación y ejecución de las estrategias comerciales en las organizaciones. El <em>marketing</em> constituye una función estratégica que permite identificar las necesidades del mercado, generar propuestas de valor y fortalecer la relación con los clientes, contribuyendo al logro de los objetivos comerciales y al mejoramiento de la competitividad empresarial. 

    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/intro/img02.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3 Durante el desarrollo del componente se abordan conceptos relacionados con el <em>marketing</em>, la mezcla de <em>marketing</em>, el mercado, el cliente, la segmentación, el posicionamiento de marca y producto, el plan de mercadeo y la investigación de mercados, analizando sus características, componentes y criterios de aplicación en diferentes contextos organizacionales. 
        .container
          .row.align-items-center.bg-fondo-01.br-15.mb-0.p-3
            .col-lg-auto.order-1
              img.d-none.d-lg-flex(src="@/assets/curso/intro/img03.svg", style="max-width: 150px").mx-auto
            .col-lg.order-2
              p.mb-0 Asimismo, se estudian las estrategias de <em>marketing</em>, el <em>marketing online</em>, el neuromarketing y las neuroventas como herramientas que apoyan la toma de decisiones comerciales y la generación de ventajas competitivas.
          
    p.mb-0(data-aos="fade-right") El componente integra ejemplos empresariales, recursos audiovisuales y actividades de aprendizaje que facilitan la comprensión de los contenidos y su aplicación en situaciones reales. De esta manera, se fortalece la capacidad del aprendiz para seleccionar los componentes estratégicos del <em>marketing</em> acordes con las características del mercado, las necesidades de la organización y los objetivos comerciales, favoreciendo el diseño de estrategias orientadas a la creación de valor y al fortalecimiento de la relación con los clientes.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
