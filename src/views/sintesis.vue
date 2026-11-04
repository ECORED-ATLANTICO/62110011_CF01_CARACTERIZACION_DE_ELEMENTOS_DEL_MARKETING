<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

   
    p.mb-4 El componente formativo Componentes estratégicos del <em>marketing</em> aborda el estudio de los fundamentos del <em>marketing</em>, incluyendo su concepto, evolución, clases y la mezcla de <em>marketing</em> como base para la formulación de estrategias comerciales. Asimismo, desarrolla los conceptos relacionados con el mercado, el cliente y la segmentación, además del posicionamiento de marca y producto, considerando aspectos como el registro, la arquitectura de marca y la co-creación de valor.
    
             
    .container
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center
        .col-lg-12.col-md-12
          .row.align-items-center.bg-fondo-01.p-4
            .col-lg-auto.order-1
              img.d-none.d-lg-flex(src="@/assets/curso/intro/img04.svg", style="max-width: 150px").mx-auto
            .col-lg.order-2
              p.mb-0 De igual manera, se analizan el plan de mercadeo y la investigación de mercados como herramientas para la planeación y toma de decisiones, junto con las estrategias de <em>marketing</em> y el <em>marketing online</em> para fortalecer la relación con los clientes y el cumplimiento de los objetivos organizacionales. Finalmente, se estudian las tendencias del <em>marketing</em>, como el neuromarketing, el <em>marketing</em> sensorial y las neuroventas, destacando sus aplicaciones en la comprensión del comportamiento del consumidor y en el diseño de estrategias comerciales orientadas a la creación de valor.
        

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg" alt="El componente formativo Verificación y control del despacho de mercancías aborda la gestión de proveedores, la administración de recursos y la programación de actividades logísticas. Incluye procedimientos técnicos de preparación, verificación y entrega de mercancías, así como indicadores de seguimiento, acciones correctivas y preventivas, innovación y buenas prácticas para fortalecer la trazabilidad, la eficiencia operativa y la mejora continua de los procesos de despacho.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis


</template>

<script>
export default {
  name: 'Sintesis',
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
