<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Equipos, herramientas e instrumentos de secado industrial

    .row.g-4
      .col-12.col-lg-3
        p Cuando se desea escoger un proceso de secado de madera es importante conocer el contenido de humedad de la pieza y su densidad, por tanto, es importante ahondar en estos dos aspectos.
        p En la siguiente figura, se puede identificar el contenido de humedad en el que las fibras de la madera están
      
      .col-12.col-lg-9
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        .bloque-texto-c.bg-color-tarjeta.p-4
          i.fas.fa-quote-right
          h4.mb-2 En la madera, el agua se puede encontrar en los vasos y en las paredes celulares; cuando ocurre el proceso de secado en los hornos, el agua contenida en los vasos es extraída totalmente; en este momento es cuando la madera empieza a perder el agua concentrada en las paredes celulares, y a ese instante se le denomina punto de saturación de las fibras.
          span - (Del Valle, 2019).

      .col-12
        img.mb-4(src='@/assets/curso/tema1/img01.svg', alt='Contenido de humedad', class='img-fluid')
        br
        br
        .row.mb-5
          .col.col-12.col-lg-5
            h4 El agua en la madera puede encontrarse de tres formas:
            ul.lista-ul--color
              li
                i.fas.fa-atom
                | Agua libre: Es el agua que es más fácil de extraer de la madera, pues es aquella que está almacenada en las cavidades de las células.
              li
                i.fas.fa-atom
                | Agua higroscópica: Esta agua se encuentra en las paredes de las células, por tanto, para realizar su extracción, se requiere de más energía.
              li
                i.fas.fa-atom
                | Agua de constitución: El agua de constitución hace parte de la estructura molecular de la madera y la única forma de extraerla es mediante el proceso de combustión de la madera.
          .col.col-12.col-lg-7
            picture
              img(src='@/assets/curso/tema1/img02.png', alt='El agua en la madera', class='img-fluid')

      .col-12.col-lg-3.my-4
        p Cuando se realiza el proceso de secado, la madera empieza perdiendo toda el agua libre almacenada. Cuando llega a perder toda el agua, se conoce como punto de saturación de las fibras (PSF). 
        p Posteriormente, se debe aplicar más energía para poder extraer parte del agua higroscópica y así completar el proceso de secado, llegando a un contenido de humedad de equilibrio (CHE) con la humedad relativa del aire.
      
      .col-12.col-lg-9
        .bloque-texto-c.bg-color-tarjeta.p-4
          i.fas.fa-quote-right
          h4.mb-2 La densidad en la madera es variable. Es posible encontrar maderas duras y blandas; en el caso de las maderas duras y pesadas, lleva más tiempo el proceso de secado y estas son más propensas a presentar defectos. Durante el proceso de secado, la madera va perdiendo el agua almacenada en su interior y, por ende, su peso y su volumen, aunque no de manera considerable. Como la densidad es una relación entre la masa y el volumen de la pieza de madera, entonces se puede decir que varía según el peso que se registre en estado la madera:  húmeda, a medio secar o seca.
          span - (Arango, 1990).

      p A fin de comprender el proceso que sufre la madera en el secado industrial, es necesario que conozca aquellos equipos y procedimientos que se utilizan para determinar el contenido de humedad.

    .row.my-4.g-4.justify-content-center
      .col-12
        #t_1_1.titulo-segundo.color-acento-contenido
          h2 1.1 Cámaras
        .row.mb-5
          .col.col-12.col-md-4
            h4 Antes de examinar qué son las cámaras de secado, es preciso subrayar que el proceso aplicado debe cumplir los siguientes requerimientos generales 
            ul.lista-ul--color
              li
                i.fas.fa-atom
                | El contenido final de humedad de la madera seca debe corresponder a la humedad de equilibrio del ambiente donde se utilizará la madera.
              li
                i.fas.fa-atom
                | Las variaciones de humedad entre las diferentes piezas de madera deben ser lo más pequeñas posibles, es decir, debe haber homogeneidad.
              li
                i.fas.fa-atom
                | El proceso de secado no debe causar defectos de ninguna clase.
              li
                i.fas.fa-atom
                | El secado debe ser lo más rápido y económico posible.
          .col.col-12.col-md-4
            .bloque-texto-c.bg-color-tarjeta.p-4
              i.fas.fa-quote-right
              h4.mb-2 Considerando lo anterior, verá qué son las cámaras u hornos de secado. Cámaras de secado son cuartos herméticos provistos con un sistema de calefacción que habitualmente se trata de radiadores, ventiladores, ventilas, equipo de humidificación y equipos para controlar el clima en el secado. Dentro de esta instalación, se pueden controlar la temperatura y la humedad relativa del aire que circula a través de la madera. El clima artificial permite el secado de la madera hasta el contenido de humedad final deseada.
              span - (Arbeláez y Feria, 2003).
          .col.col-12.col-md-4
            picture
              img(src='@/assets/curso/tema1/img03.png', alt='Cámaras', class='img-fluid')
      .col-12
        p.text-center Vea en la siguiente figura una cámara de secado y algunas de sus partes.
        br
        img(src='@/assets/curso/tema1/img04.svg', alt='Cámara de secado y algunas de sus partes', class='img-fluid')
        br
        br
        .row
          .col-12.col-lg-6
            p El secado convencional también se conoce como secado con intercambio de aire húmedo y aire seco, y se efectúa cuando el aire que está en el interior de la cámara es calentado y obligado a circular por medio de ventiladores, para que así este pase a través de la pila de madera, absorbiendo la humedad de la madera. El aire, una vez que se encuentre saturado de agua, debe ser extraído de la cámara, para introducir aire fresco con menor humedad, y continuar con el proceso.
          .col-12.col-lg-6
            .bloque-texto-c.bg-color-tarjeta.p-4
              i.fas.fa-quote-right
              h4.mb-2 Existen otros métodos para secar madera de manera artificial, entre los cuales se destacan: secado por radiofrecuencia, secado solar, secado al vacío, secado por deshumidificación, secado a altas o bajas temperaturas, al aire con circulación de aire forzado (abanicos portátiles), al aire y secado convencional, radiaciones de ultrasonido, infrarrojo, microondas, entre otros.
              span - (Muñoz-Acosta, 2012).
      .col-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img05.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Hay que mencionar que las instalaciones para secar madera deben tener un buen aislamiento térmico, ser de construcción hermética, fabricarse de materiales resistentes a la corrosión y elevadas temperaturas, y disponer de puertas de fácil manejo y cierre hermético, así como estar provistas de un sistema de humectación para las piezas de madera, También deben poseer  un drenaje interior para la evacuación del agua eliminada durante el secado, producto de la evaporación del agua de la madera y/o de los tratamientos humectantes.

    .row.my-4.g-4
      .col-12.col-lg-6
        #t_1_2.titulo-segundo.color-acento-contenido
          h2 1.2 Xilohigrómetro

        p Es primordial, en los procesos de industrialización de la madera, conocer el porcentaje de humedad contenido en las piezas, ya que la madera es un material higroscópico, que gana o pierde humedad con el ambiente hasta llegar a un punto de equilibrio. La medición del contenido de humedad se puede realizar por varios métodos, uno de ellos son los denominados eléctricos, que tienen su asiento en las diferentes propiedades eléctricas tanto de la madera seca como de la madera húmeda. Si bien existen otros, los métodos eléctricos más utilizados son los que se basan en la resistencia que ofrece la madera al paso de una corriente eléctrica continua, siendo uno de los más empleados.

      .col-12.col-lg-6
        img.img250.m-auto(src='@/assets/curso/tema1/img06.svg', alt='Xilohigrómetro', class='img-fluid')
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
