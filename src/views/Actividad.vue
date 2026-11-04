<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Componentes estratégicos del <em>marketing</em>',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> analizar los fundamentos y componentes estratégicos del <em>marketing</em> para comprender su aplicación en el diseño de estrategias comerciales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡EXCELENTE!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      mensaje_aprobado:
        '¡Excelente! ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
      mensaje_final_aprobado:
        '¡Excelente! ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal del <em>marketing</em> dentro de una organización?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrementar la producción sin considerar las necesidades del cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Crear valor para los clientes y contribuir al logro de los objetivos comerciales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Diseñar únicamente campañas publicitarias para aumentar las ventas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir exclusivamente los costos de operación de la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Comprendiste que el <em>marketing</em> busca crear valor para los clientes y contribuir al logro de los objetivos comerciales de la organización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'Una empresa clasifica a sus consumidores según la edad, el nivel de ingresos y la ocupación. ¿Qué tipo de segmentación está aplicando?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Segmentación geográfica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Segmentación demográfica.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Segmentación conductual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Segmentación psicográfica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Identificaste que las variables edad, ingresos y ocupación corresponden a la segmentación demográfica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes elementos hace parte de la mezcla de <em>marketing</em>?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Talento humano.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Infraestructura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Precio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Contabilidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Reconociste que el precio es uno de los componentes de la mezcla de <em>marketing</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es el objetivo principal de la investigación de mercados?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Obtener información confiable para apoyar la toma de decisiones comerciales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sustituir la planeación estratégica de la organización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elaborar únicamente campañas publicitarias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar exclusivamente los procesos financieros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Identificaste que la investigación de mercados proporciona información para analizar el mercado y respaldar la toma de decisiones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'El posicionamiento de una marca tiene como finalidad principal:',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la cantidad de proveedores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir los costos de producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Lograr que la marca ocupe un lugar diferenciador en la mente del consumidor.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aumentar el tamaño de la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Comprendiste que el posicionamiento busca diferenciar la marca y generar una percepción favorable en el mercado.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es uno de los componentes básicos de un plan de mercadeo?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El manual de funciones de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El análisis del mercado y la definición de estrategias.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El reglamento interno de trabajo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El organigrama de la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Identificaste que un plan de mercadeo integra el análisis del mercado y la formulación de estrategias para alcanzar los objetivos comerciales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de las siguientes acciones corresponde al <em>marketing online</em>?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Publicar contenido promocional en redes sociales y sitios <em>web</em>.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Distribuir únicamente volantes impresos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elaborar estados financieros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseñar el reglamento interno de la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Reconociste que el <em>marketing online</em> utiliza medios digitales para promocionar productos, servicios y fortalecer la relación con los clientes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Cuál es el propósito principal del <em>neuromarketing</em>?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir los costos de producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diseñar la estructura organizacional de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incrementar el inventario de productos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Analizar las respuestas del cerebro ante estímulos de <em>marketing</em>.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Comprendiste que el <em>neuromarketing</em> estudia las reacciones del consumidor frente a diferentes estímulos para apoyar las decisiones comerciales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué beneficio obtiene una organización al registrar su marca?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar automáticamente sus ventas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar la competencia del mercado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Obtener protección jurídica sobre su identidad comercial.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir los costos de distribución.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Identificaste que el registro de marca protege legalmente los signos distintivos y fortalece la identidad comercial de la organización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'Una empresa invita a sus clientes a participar en el diseño de un nuevo producto. Esta práctica corresponde a:',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Arquitectura de marca.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Investigación documental.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Co-creación de valor.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Segmentación geográfica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Reconociste que la co-creación de valor consiste en involucrar al cliente en el desarrollo o mejoramiento de productos y servicios para generar mayor satisfacción.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Cuál de los siguientes aspectos caracteriza una estrategia de <em>marketing</em>?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Define acciones para alcanzar objetivos comerciales y satisfacer las necesidades del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Establece únicamente la estructura financiera de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Controla exclusivamente la producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituye el plan estratégico de la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Identificaste que las estrategias de <em>marketing</em> orientan las acciones para alcanzar los objetivos comerciales y generar valor para el cliente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cuál de las siguientes variables corresponde a la segmentación psicográfica?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Edad y género.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ciudad de residencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Estilo de vida, personalidad e intereses.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Frecuencia de compra.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Reconociste que la segmentación psicográfica considera características relacionadas con el estilo de vida y la personalidad del consumidor.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Qué elemento de la mezcla de <em>marketing</em> hace referencia a los canales utilizados para llevar el producto al consumidor?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Precio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Plaza o distribución.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Promoción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Comprendiste que la plaza o distribución facilita que el producto llegue al cliente en el lugar y momento adecuados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Cuál es una ventaja de utilizar el <em>marketing online</em>?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Limita la comunicación con los clientes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permite interactuar con los consumidores y medir los resultados de las campañas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Elimina la necesidad de planear estrategias comerciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituye todos los canales tradicionales de comercialización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Reconociste que el <em>marketing online</em> facilita la interacción con los clientes y el análisis del desempeño de las estrategias digitales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Qué busca la co-creación de valor entre la empresa y sus clientes?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la participación del consumidor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incrementar únicamente la publicidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Involucrar al cliente en la generación y mejora de productos o servicios.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sustituir la investigación de mercados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Comprendiste que la co-creación de valor fortalece la relación con el cliente mediante su participación en el desarrollo de la oferta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Cuál es uno de los objetivos del posicionamiento de marca?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Lograr que la marca sea recordada y diferenciada por los consumidores.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aumentar exclusivamente la producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir el número de productos ofrecidos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Modificar la estructura organizacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Identificaste que el posicionamiento busca diferenciar la marca y fortalecer su reconocimiento en el mercado.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: '¿Qué analiza principalmente la investigación de mercados?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La percepción de los clientes, la competencia y las condiciones del mercado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Únicamente los estados financieros de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El reglamento interno de trabajo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los procesos contables de la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Reconociste que la investigación de mercados recopila información sobre clientes, competencia y entorno para apoyar la toma de decisiones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: '¿Qué estudian las neuroventas?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los procesos logísticos de distribución.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Las técnicas para registrar marcas comerciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La influencia del funcionamiento cerebral en las decisiones de compra y venta.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Comprendiste que las neuroventas utilizan conocimientos sobre el cerebro y el comportamiento del consumidor para mejorar los procesos comerciales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cuál de los siguientes ejemplos corresponde al <em>marketing</em> sensorial?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Utilizar aromas y música para mejorar la experiencia de compra del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Elaborar el balance general de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseñar el reglamento interno de trabajo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Clasificar documentos contables.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Identificaste que el <em>marketing</em> sensorial emplea estímulos como aromas, sonidos o texturas para influir en la experiencia del consumidor.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Por qué es importante conocer las necesidades del cliente antes de diseñar una estrategia de <em>marketing</em>?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque permite desarrollar productos y estrategias acordes con las expectativas del mercado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Porque elimina completamente la competencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque reemplaza el análisis financiero de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque evita realizar investigación de mercados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Comprendiste que conocer las necesidades del cliente facilita el diseño de estrategias de <em>marketing</em> orientadas a generar valor y satisfacer las expectativas del mercado.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
    },
  }),
}
</script>

<style lang="sass"></style>
