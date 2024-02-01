<template>
  <div class="hello">
    <table>
        <caption>{{ title }}</caption>
        <slot></slot>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TablaNoa',
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
