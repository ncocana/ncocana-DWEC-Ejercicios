<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    {{ prueba }}
    <TablaNoa title="Usuarios">
        <Fila>
            <th>Name</th>
            <th>Marca</th>
        </Fila>
        <Fila>
            <Columna value="Noa"></Columna>
            <Columna :value="brand" @click="changeBrand"></Columna>
        </Fila>
    </TablaNoa>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TablaNoa from '@/components/TablaNoa.vue'
import Fila from '@/components/Fila.vue'
import Columna from '@/components/Columna.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    TablaNoa,
    Fila,
    Columna
  },

  data () {
    return {
      prueba: 'Hello Vue',
      brand: "Open"
    }
  },

  methods: {
    changeBrand () {
      this.brand = 'Ford'
    }
  }
}
</script>
