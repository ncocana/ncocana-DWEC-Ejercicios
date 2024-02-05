<template>
  <div class="animal">
    <h1>Clinica Veterinario Moll</h1>

    <form @submit.prevent="submitForm">
        <label for="name">Nombre:</label>
        <input v-model="animalData.nombre" type="text" name="name" id="name" />

        <br>
        <label>Sexo:</label>
        <input type="radio" name="sexo" value="M" id="M" v-model="animalData.sexo" />
        <label for="M">M</label>
        <input type="radio" name="sexo" value="F" id="F" v-model="animalData.sexo" />
        <label for="F">F</label>

        <br>
        <label for="registryNumber">Número de registro:</label>
        <input v-model="animalData.numeroRegistro" type="text" name="registryNumber" id="registryNumber" />

        <br>
        <label for="type">Tipo:</label>
        <select v-model="animalData.tipo" name="type" id="type">
            <option value="Perro">Perro</option>
            <option value="Caballo">Caballo</option>
            <option value="Gato">Gato</option>
        </select>

        <br><br>
        <button type="submit">Guardar</button>
        <router-link to="/">
            <button>Volver atras</button>
        </router-link>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import { getAnimals } from '@/components/GetAnimals.js'

export default {
  name: 'AnimalView',
  data () {
    return {
        animal: {},
    }
  },
  methods: {
    fillOutForm(animal) {
      this.animal = { ...animal };
    },
    fetchData() {
      const idAnimal = this.$route.params.id;

      if (idAnimal) {
        const animal = getAnimals(parseInt(idAnimal));
        this.fillOutForm(animal);
      }
    },
  },
  created() {
    this.fetchData();
  },
}
</script>
