<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Manuales técnicos

    .cajon.color-acento-contenido.bg-cajon-texto.p-4.mb-4
      p Los manuales técnicos de operación de secado tienen la finalidad de proporcionar al operador de los hornos o cámaras de secado las pautas de configuración y la lógica con la que se debe desarrollar el proceso.
      p Cada equipo debe tener un manual técnico, sin embargo, a manera general, con todos los procesos es indispensable revisar los siguientes pasos.

    .row.my-4
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
              strong Durante el secado: 
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
      .col-12.my-4
        p Cuando la madera ha sido clasificada, apilada y está lista para el proceso de secado, es posible elegir entre alguno de los siguientes programas:
        
      .row.mb-5
        .col-md-6.col-xl-4.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.bg-tarjeta-flip-rosa(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.d-flex.justify-content-center.align-items-end(:style="{'padding':'10px','background-image': `url(${require('@/assets/curso/tema2/f01.svg')})`}")
                h4.fw-bold Fuerte o acelerado
              .tarjeta-flip__contenido.p-4.p-xl-5
                h4 Fuerte o acelerado
                p Secado rápido a temperaturas altas, de 50ºC a 70ºC. Se usa para maderas con poca tendencia a defectos, sin inclusiones y espesores menores (de ¾” a 1”). Permite temperaturas altas y humedades relativas bajas, con cambios fuertes y frecuentes. Se utiliza para las maderas latifoliadas de secado fácil, de baja densidad, como el caracolí, el carbonero y la ceiba bonga.

        .col-md-6.col-xl-4.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.bg-tarjeta-flip-naranja(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.d-flex.justify-content-center.align-items-end(:style="{'padding':'10px','background-image': `url(${require('@/assets/curso/tema2/f02.svg')})`}")
                h4.fw-bold Suave o lento
              .tarjeta-flip__contenido.p-4.p-xl-5
                h4 Suave o lento
                p Secado lento a temperaturas bajas (40ºC a 60ºC). Se usa para maderas de difícil secado, con tendencia a defectos y con inclusiones. Ejemplos: el güino, el sajo y la sangre de toro.

        .col-md-6.col-xl-4.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.bg-tarjeta-flip-amarilla(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.d-flex.justify-content-center.align-items-end(:style="{'padding':'10px','background-image': `url(${require('@/assets/curso/tema2/f03.svg')})`}")
                h4.fw-bold Moderado
              .tarjeta-flip__contenido.p-4.p-xl-5
                h4 Moderado
                p Programa intermedio entre los dos anteriores, a una temperatura de 45ºC a 65ºC, requiere temperaturas bajas, humedades relativas altas y mayores tiempos en cada paso del programa: se utiliza para maderas latifoliadas duras, de alta densidad, que son más difíciles de secar, como el tangare, el dormilón y el pantano. (Arango, 1990).

      .row.mb-5.justify-content-center
        .col-12
          .cajon.color-primario.bg-caja-instrumentos.p-4.mb-4
            p El gradiente del secado (GS) es un valor que beneficia el manejo de los programas del secado, pues indica la intensidad del secado de la madera, ya que en cualquier momento del secado artificial existen dos valores del contenido de humedad, los cuales son el contenido de humedad real de la madera en un determinado momento y el contenido de humedad de equilibrio, hacia el cual tiende la madera de acuerdo a las condiciones de temperatura y humedad relativa fijadas dentro del secadero. La relación entre estos dos valores se denomina gradiente de secado y se expresa con la siguiente fórmula.
        .col-8.my-4
          .row.justify-content-center
            .col-12.col-md-6
              div.formula.d-flex.justify-content-center.align-items-center
                span.fs-3.fw-bold.font-color-acento-contenido GS = 
                .fraction.fs-3
                  span.fup CH
                    sub real
                  span.bar /
                  span.fdn ECH
            .col-12.col-md-6.text-center.p-0
              p.m-0 Donde:
              p.m-0 GS = Gradiente de secado
              p.m-0 CH
                sub real
                | = Contenido de humedad real de la madera
              p.m-0 ECH = Contenido de humedad de equilibrio
        .col-12.my-4
          .cajon.color-acento-contenido.bg-tarjeta-flip-rosa.p-4.mb-4
            p Dependiendo de la especie y el espesor, el GS puede variar entre 1,5 y 4,5. Si es muy bajo, el tiempo de secado se prolongará innecesariamente; si es demasiado alto, el secado se acelerará, pero pueden generarse diferencias grandes de CH en el perfil transversal de la madera, lo que ocasiona un endurecimiento superficial y la aparición de grietas internas en los extremos de las piezas.

          #t_2_2.titulo-segundo.color-acento-contenido
            h2 2.2 Técnicas de operación y variables de secado  

          p.my-4 El inicio de las operaciones en un proceso de secado comienza con la elección del programa de secado, de acuerdo con las características de especie, espesor y contenido de humedad inicial; posteriormente, se debe cumplir con el siguiente proceso:

          .col-12.position-relative
            TabsA.color-acento-contenido
              .tarjeta.bg-tarjeta-tab.mb-0.p-4(titulo="Llenado del horno")
                h4 Llenado del horno
                p Este proceso deberá respetar la capacidad del horno de secado, ya que de ello depende la circulación del aire de manera homogénea, garantizando un secado óptimo. Ubicación de sensores de humedad: estos sensores se ubicarán dentro de la cámara de manera tal que logren abarcar todos los puntos dentro de la cámara. Armado de pilas dentro del horno: siguiendo criterios de alineación, tanto vertical como horizontal.        

              .tarjeta.bg-tarjeta-tab.p-4(titulo="Acondicionamiento de la <br>madera")
                h4 Acondicionamiento de la madera
                p Se realiza teniendo en cuenta que todas las piezas ubicadas dentro del horno no poseen el mismo contenido de humedad y por ello es necesario humedecer las pilas para lograr homogeneizarlas.
       
              .tarjeta.bg-tarjeta-tab.p-4(titulo="Calentamiento del horno")
                h4 Calentamiento del horno
                p La temperatura de la cámara debe ser elevada con el fin de calentar toda la pila de madera, cuya finalidad es   dilatar los poros de las capas superficiales, para luego suministrar secado a las capas interiores de la madera. (CITEmadera, 2009)
       
              .tarjeta.bg-tarjeta-tab.p-4(titulo="Secado de la madera")
                h4 Secado de la madera
                p Dentro de los objetivos que se persiguen con el secado de la madera, está alcanzar el contenido de humedad final establecido, en el menor tiempo posible, y obtener contenido de humedad final homogéneo en toda la carga y menor cantidad de defectos. En esta etapa, se busca eliminar el agua libre de la madera a secar y se caracteriza por la expulsión de vapor de agua durante los días que se lleva a cabo el proceso.Posteriormente a este proceso, se elimina el agua higroscópica por debajo de un 30%; durante esta fase, es necesario incrementar la temperatura y disminuir la humedad relativa a medida que disminuye la humedad en la madera.
       
              .tarjeta.bg-tarjeta-tab.p-4(titulo="Periodo de acondicionamiento <br>y estabilización")
                h4 Periodo de acondicionamiento y estabilización
                p Cuando se ha alcanzado la humedad final deseada, se puede decir que la madera se encuentra seca, pero no estabilizada. Este proceso busca homogeneizar el contenido de humedad de las piezas apiladas; se realiza mediante la inyección de vapor o atomización de agua fría, puede durar entre 8 y 48 horas, dependiendo del espesor de las piezas.
       
              .tarjeta.bg-tarjeta-tab.p-4(titulo="Etapa de enfriamiento")
                h4 Etapa de enfriamiento
                p El enfriamiento debe realizarse dentro de la cámara de secado; en este momento, se deben apagar todos los equipos, solo permanecerán activos los ventiladores. Seguidamente, se debe vigilar la temperatura de la madera; cuando esta registra un valor similar a la temperatura exterior, se puede abrir la cámara y retirar la madera.
       
            img.img-tab(src='@/assets/curso/tema2/img02.png', alt='Técnicas de operación y variables de secado  ')
          
          .col-12.my-4
            .row.mb-5
              .col.col-12.col-md-6
                picture
                  img(src='@/assets/curso/tema2/img03.png', alt='Variables del secado', class='img-fluid')
              .col.col-12.col-md-6
                h4 Variables del secado
                p Las variables de control del secado determinan el tiempo y la forma de secado dentro de la cámara.  La verificación de las sondas de temperatura, humedad relativa, humedad de equilibrio higroscópico, gradiente de secado y contenido de humedad final de la madera debe ser una práctica permanente y minuciosa. La cantidad de variables de control se modifica dependiendo del fabricante del horno. Durante los procesos, es recomendable disponer de instrumentos o sistemas que permitan la calibración periódica de las sondas de medición, para garantizar la calidad del producto.

          .col-12.my-4
            p En el siguiente video, se puede conocer un ejemplo de cómo funciona en una empresa real el controlador de secado de madera
            figure
              .video
                iframe(width='560' height='315' src='https://www.youtube.com/embed/6GXW1k2Q7hM' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen)

          .col-12.my-4
            br
            .row.mb-5.my-4
              .col.col-12.col-md-5.p-0
                #t_2_3.titulo-segundo.color-acento-contenido.mb-4
                  h2 2.3 Procedimientos de almacenamiento 
                p Cuando la madera ha pasado por el proceso de secado y es extraída del horno, debe ser apilada nuevamente  y estará disponible para su uso. El proceso  de almacenamiento se debe efectuar  en un lugar bajo techo,  cerrado y  que disponga de  buena ventilación, ya que,  si es apilada en un sitio cerrado, la variación de la humedad será mínima. Si el apilado se da por varios meses, es recomendable tener las piezas en un lugar donde se pueda controlar la humedad de equilibrio, de lo contrario, se presentará variación en la pila dependiendo del lugar, por ejemplo, en  sitios secos, perderá humedad, y en lugares húmedos, aumentará el nivel de agua en las piezas.
              .col.col-12.col-md-7
                picture
                  img(src='@/assets/curso/tema2/img04.jpg', alt='Procedimientos de almacenamiento', class='img-fluid')
            br
            .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
              .bloque-texto-g__img(
                :style="{'background-image': `url(${require('@/assets/curso/tema2/img05.jpg')})`}"
              )
              .bloque-texto-g__texto.p-4
                p.mb-0 Apilado de madera seca
                br
                br
                p.mb-0 El apilamiento debe realizarse de manera horizontal, con separadores para evitar acumulación de humedad, debe cubrirse con un plástico y verificar constantemente la humedad y que no sea atacada por insectos.

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
