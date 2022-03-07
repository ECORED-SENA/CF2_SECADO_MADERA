<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Normativa ambiental

    .row.mb-5
      .col.col-12.col-md-4
        p En toda labor que se efectúe durante el secado de la madera, es importante aplicar buenas prácticas, que favorezcan el medio ambiente y que permitan un crecimiento sostenible de la actividad maderera. 
        picture
          img(src='@/assets/curso/tema3/img01.jpg', alt='Normativa ambiental', class='img-fluid')
      .col.col-12.col-md-8
        .bloque-texto-e.color-secundario.bg-caja-instrumentos.p-4
          .bloque-texto-e__texto
            i.fas.fa-quote-left
            p.text-right Es primordial que la madera adquirida sea legal y tenga los permisos exigidos, como se indica en el Decreto 1076 de 2015 Sector Ambiente y Desarrollo Sostenible, pues esto garantiza la protección de los bosques naturales y la preservación de muchos ecosistemas asociados a las especies. Cuando esta actividad no se realiza de manera sostenida, el impacto ambiental que se crea es grande, pues la demanda del recurso es mayor y el proceso de crecimiento de algunas especies es lento.
            i.fas.fa-quote-right
          .row.d-flex.justify-content-end
            .col-4
              img.img160.m-0.p-0(src='@/assets/curso/tema3/img02.jpg', alt='Normativa ambiental')

    .row.my-4
      .col
        br
        p.fw-bold.text-center.mb-4 Conozca algunas actividades que pueden ayudar a mejorar el ambiente sin modificar los procesos
        
        TabsB.color-acento-contenido.mb-5
          .py-4.py-md-5(titulo="Eficiente disposición de los residuos" :icono="require('@/assets/curso/tema3/t01.svg')")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                h4 Eficiente disposición de los residuos
                p En toda actividad, se generan residuos que, dependiendo de su tipo, deben ser clasificados y dispuestos según la normatividad lo contemple. No disponerlos correctamente afecta negativamente su posterior valorización. Consulte la resolución número 2184 de 2019 (26 de diciembre), por la cual se modifica la Resolución 668 de 2016 sobre uso racional de bolsas plásticas y se adoptan otras disposiciones.
              .col-md-6
                figure
                  img(src='@/assets/curso/tema3/imgt01.svg', alt='Eficiente disposición de los residuos')

          .py-4.py-md-5(titulo="Utilización de productos químicos" :icono="require('@/assets/curso/tema3/t02.svg')")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                h4 Utilización de productos químicos
                p En los procesos de inmunizado y tratamiento de la madera, es común utilizar productos químicos, los cuales son altamente tóxicos y deterioran el ambiente. Es necesario, cuando se realiza la compra de este tipo de sustancias, verificar que sean respetuosas con el medio ambiente.
              .col-md-6
                figure
                  img(src='@/assets/curso/tema3/imgt02.svg', alt='Utilización de productos químicos')

          .py-4.py-md-5(titulo="Residuos peligrosos" :icono="require('@/assets/curso/tema3/t03.svg')")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                h4 Residuos peligrosos
                p Gestionar de forma correcta y desechar residuos denominados peligrosos según el proceso vigente para el producto. Consulte el Decreto 4741 del 30 de diciembre de 2005, “Por el cual se reglamenta parcialmente la prevención y manejo de los residuos o desechos peligrosos generados en el marco de la gestión integral".
              .col-md-6
                figure
                  img(src='@/assets/curso/tema3/imgt03.svg', alt='Residuos peligrosos')

          .py-4.py-md-5(titulo="Contaminación de fuentes hídricas" :icono="require('@/assets/curso/tema3/t04.svg')")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                h4 Contaminación de fuentes hídricas
                p El vertimiento de sustancias tóxicas, corrosivas o empleadas en los procesos de transformación de la madera a las aguas servidas debe realizarse previa depuración de las sustancias contaminantes. Consulte la Resolución 0631 de 2015, por la cual se establecen los parámetros y los valores límites máximos permisibles en los vertimientos puntuales a cuerpos de aguas superficiales y a los sistemas de alcantarillado público y se dictan otras disposiciones. 
              .col-md-6
                figure
                  img(src='@/assets/curso/tema3/imgt04.svg', alt='Contaminación de fuentes hídricas')

          .py-4.py-md-5(titulo="Aprovechar al máximo las materias primas" :icono="require('@/assets/curso/tema3/t05.svg')")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                h4 Aprovechar al máximo las materias primas
                p Al realizar cortes, se debe evitar el desperdicio de la madera, y en lo posible, utilizar los desechos en la fabricación de nuevos productos.
              .col-md-6
                figure
                  img(src='@/assets/curso/tema3/imgt05.svg', alt='Aprovechar al máximo las materias primas')

          .py-4.py-md-5(titulo="Uso de equipos y máquinas" :icono="require('@/assets/curso/tema3/t06.svg')")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                h4 Uso de equipos y máquinas
                p Tener encendidos estos aparatos únicamente el tiempo requerido por la operación, para evitar contaminación atmosférica
              .col-md-6
                figure
                  img(src='@/assets/curso/tema3/imgt06.svg', alt='Uso de equipos y máquinas')

    .row.my-4.bg-3_1
      .col-12
        #t_3_1.titulo-segundo.color-acento-contenido
          h2 3.1 Emisión de gases

        p.px-4 Poder garantizar una producción lo más sostenible posible y que pueda tener el menor impacto ambiental es el objetivo de la normatividad ambiental. Cuando se habla de contaminación atmosférica, se refiere a la presencia en el aire de pequeñas partículas o productos secundarios gaseosos que pueden implicar riesgo o daño a los seres vivos expuestos a dicho ambiente.

        .row.my-5.justify-content-center
          .col.col-10.col-md-4.mt-4
            h4 Normatividad ambiental
            picture
              img.img250(src='@/assets/curso/tema3/img03.svg', alt='Emisión de gases', class='img-fluid')
          .col.col-10.col-md-6.justi.mt-4
            img.img160.m-auto(src='@/assets/curso/tema3/img04.svg', alt='Compuestos contaminantes', class='img-fluid')
            p.fw-bold Durante el proceso de secado industrial de la madera, se generan una serie de compuestos contaminantes a la atmósfera por una fuente fija de emisión.
            p Las normas para la protección de la calidad del aire en Colombia abarcan:

            ul.lista-ul--color
              li
                i.fas.fa-atom
                | Calidad del aire
              li
                i.fas.fa-atom
                | Emisión o descarga de contaminantes al aire
              li
                i.fas.fa-atom
                | Emisión de ruido
              li
                i.fas.fa-atom
                | Ruido ambiental
              li
                i.fas.fa-atom
                | Evaluación y emisión de olores ofensivos
        
        p.fw-bold.text-center Cada norma tiene los estándares o límites permisibles de emisión para cada contaminante.
        p.text-center Por ejemplo, la norma de calidad del aire ambiente es la  Resolución 2254 de 2017, la cual establece los niveles máximos permisibles de contaminantes criterio: material particulado (PM10 y PM2.5), dióxido de azufre (SO2), dióxido de nitrógeno (NO2), ozono troposférico (O3) y monóxido de carbono (CO). (IDEAM-SIAC, s. f.)

    .row.my-4
      .col-12
        br
        img(src='@/assets/curso/tema3/img05.svg', alt='Normas de calidad del aire', class='img-fluid')
</template>

<script>
export default {
  name: 'Tema3',
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
