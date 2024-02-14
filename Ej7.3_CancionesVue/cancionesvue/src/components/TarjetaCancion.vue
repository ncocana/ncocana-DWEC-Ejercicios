<template>
    <div class="cancion">
      <h1>{{ titulo }}</h1>
      <p>Fecha: {{ fecha }}</p>
      <span>
        <slot></slot>
      </span>
    </div>
</template>

<script>
export default {
    name: 'TarjetaCancion',
    props: {
        titulo: String,
        fecha: String,
    }
}
</script>

<style scoped lang="scss">
span{
  white-space: pre-line;
}

.cancion:nth-child(even){
  background-color: #EEEEEE;
}
</style>
  