<template>
    <div class="animalList">
        <h1>Clinica Veterinario Moll</h1>
        
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
                        <router-link :to="'/animalModify/' + animal.id">
                            <button>Ver ficha</button>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: 'AnimalList',
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
}
</script>
