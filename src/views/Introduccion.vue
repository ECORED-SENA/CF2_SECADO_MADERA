<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span i
      h1 Introducción
    
    p.mb-5 Bienvenido al componente formativo 
      span.fw-bold Proceso de secado industrial de la madera. 
      | Durante su lectura, encontrará diversas temáticas con aspectos básicos y fundamentales que se deben tener en cuenta al momento del secado industrial de la madera dependiendo de la especie. A continuación, conocerá un poco más de este componente formativo por medio del siguiente video:
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mb-5 Para la elaboración de este componente, se abordaron varios autores conocidos en 
      span.fw-bold proceso de secado industrial de la madera, 
      | de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de 
      span.fw-bold técnicas industriales para el secado de madera.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
