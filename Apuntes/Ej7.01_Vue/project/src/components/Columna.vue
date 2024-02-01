<template>
  <div class="hello">
    <td>{{ value }}</td>
  </div>
</template>

<script>
export default {
  name: 'Fila',
  props: {
    value: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
td {
    border: solid 1px red;
}
</style>
