<template>
  <div class="hello">
    <row>
        <slot></slot>
    </row>
  </div>
</template>

<script>
export default {
  name: 'Fila',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
    border: solid 1px red;
}
</style>
