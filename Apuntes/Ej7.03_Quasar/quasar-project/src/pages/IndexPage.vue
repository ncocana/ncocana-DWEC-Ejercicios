<template>
  <q-page class="flex flex-center">
    <q-list>
      <q-item v-for="animal in animals" :key="animal.id">
        <q-item-section>
          <q-item-label>{{ animal.nombre }}</q-item-label>
          <q-item-label caption lines="2">Sexo: {{ animal.sexo }}</q-item-label>
          <q-item-label caption lines="2">Número de registro: {{ animal.numeroRegistro || 'Sin número' }}</q-item-label>
          <q-item-label caption lines="2">Tipo: {{ animal.tipo }}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
          <q-icon name="star" color="yellow" />
          <q-item-label caption>
            <router-link :to="'/animalModify/' + animal.id">
                <button>Ver ficha</button>
            </router-link>
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  data () {
    return {
      animals: [],
    }
  },
  methods: {
    async listAnimals() {
      const animalsFetch = await fetch("http://34.90.153.139/ejercicios/veterinario/getanimals.php");
      this.animals = await animalsFetch.json();
    },
  },
  created() {
    this.listAnimals();
  },
})
</script>
