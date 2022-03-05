<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Manuales técnicos

    .cajon.color-acento-contenido.bg-color-acento-contenido-o25.p-4.mb-4
      p Los manuales técnicos de operación de secado tienen la finalidad de proporcionar al operador de los hornos o cámaras de secado las pautas de configuración y la lógica con la que se debe desarrollar el proceso.
      p Cada equipo debe tener un manual técnico, sin embargo, a manera general, con todos los procesos es indispensable revisar los siguientes pasos.

    .row
      .col-12.col-lg-8
        ol.lista-ol--cuadro.lista-ol--separador
          li
          li
            .lista-ol--cuadro__vineta
              span 1
            p 
              strong Verificar la cámara de secado: 
              | una vez inicie el proceso de secado, es difícil identificar ciertas condiciones, como lo es la humidificación, la cual sufre al taponarse los aspersores. Por tanto, es necesario revisar válvulas de ingreso de agua, la disposición de combustible, funcionamiento de ventiladores y de la caldera, comprobar la conexión de los sensores de humedad y comprobar el cierre hermético de las puertas del horno.

          li
            .lista-ol--cuadro__vineta
              span 2
            p 
              strong 2.	Durante el secado: 
              | el operador deberá conocer la especie y carga de madera a secar, por tanto, debe encender el horno y operar el controlador, el cual puede ser operado  de forma automática, semiautomática o manual. Este  proceso, con el fin de conservar las condiciones climáticas adecuadas para el secado de la carga, deberá estar atento a cualquier incremento de temperatura y humedad en la cámara de secado y, pasado un tiempo, debe supervisar si han aparecido defectos en la madera, esto lo hace realizando ingresos  periódicos a la cámara de secado, donde verificará el proceso.
          li
      .col-12.col-lg-4
        img(src='@/assets/curso/tema2/img01.png', alt='Pasos del proceso', class='img-fluid')

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Tipos de programa        

    .row
      .col-12.col-lg-3
        p Los programas de secado consisten en una serie de instrucciones que, por medio de las muestras o tablas de control, permiten supervisar el avance del proceso dentro de la cámara. El programa de secado se encarga de controlar, dentro de la cámara, las condiciones básicas de contenido de humedad de la madera, la temperatura máxima permisible y la humedad relativa (HR) del aire.
      .col-12.col-lg-9
        .bloque-texto-c.bg-caja-instrumentos.p-4
          i.fas.fa-quote-right
          h4.mb-2 Para una correcta elección del programa de secado de la madera, se deben tener en cuenta ciertas variables, como son: la especie de madera a secar, el espesor de las piezas a secar y el contenido de humedad inicial de la madera. Por lo general, los hornos emplean maderas europeas y africanas como referencia en sus programas. Para aquellas especies que no aparecen en los programas preestablecidos del horno, es necesario que el operador confronte la información de densidad de las maderas europeas o africanas con aquellas nacionales que se deseen secar.
          span - (CITEmadera, 2009).


          

</template>

<script>
export default {
  name: 'Tema2',
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
