<template>
  <div class="home">
        <h1>Clinica Veterinario Moll</h1>
        <!-- {{ animals }} -->
        <table class="center">
            <caption>Animales</caption>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Sexo</th>
                    <th>Número de registro</th>
                    <th>Tipo</th>
                    <th>Ficha</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="animal in animals" :key="animal.id">
                    <td>{{ animal.nombre }}</td>
                    <td>{{ animal.sexo }}</td>
                    <td>{{ animal.numeroRegistro || 'Sin número' }}</td>
                    <td>{{ animal.tipo }}</td>
                    <td>
                        <router-link :to="'/animal/' + animal.id">
                            <button>Ver ficha</button>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
// @ is an alias to /src
import { getAnimals } from '@/components/GetAnimals.js'

export default {
  name: 'HomeView',
  data () {
    return {
      animals: [],
    }
  },
  methods: {
    async fetchData() {
      try {
        this.animals = await getAnimals();
      } catch (error) {
        console.error('Error setting animals data in HomeView:', error);
      }
    },
  },
  created() {
    this.fetchData();
  },
}
</script>
