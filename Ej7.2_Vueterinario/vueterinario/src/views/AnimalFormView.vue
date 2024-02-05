<template>
    <div class="animalForm">
        <h2>{{ title }}</h2>
        <p>Nombre del animal: {{ animal.nombre }}</p>
        <p>Sexo del animal: {{ animal.sexo }}</p>
        <p>Número de registro: {{ animal.numeroRegistro }}</p>
        <p>Tipo del animal: {{ animal.tipo }}</p>

        <br>
        <label for="name">Nombre: </label>
        <input type="text" name="name" id="name" v-model="animal.nombre">
        
        <br>
        <label for="sexo">Sexo: </label>
        <input type="radio" name="sexo" id="M" v-model="animal.sexo" value="M">
        <label for="M">M</label>
        <input type="radio" name="sexo" id="F" v-model="animal.sexo" value="F">
        <label for="F">F</label>

        <br>
        <label for="registryNumber">Número de registro: </label>
        <input v-model="animal.numeroRegistro" type="text" name="registryNumber" id="registryNumber" />

        <br>
        <label for="type">Tipo: </label>
        <select v-model="animal.tipo" name="type" id="type">
            <option value="" disabled>Elige una opción</option>
            <option value="Perro">Perro</option>
            <option value="Caballo">Caballo</option>
            <option value="Gato">Gato</option>
        </select>

        <br><br>
        <button type="submit" @click="save">Añadir</button>
        <button type="submit" @click="modify">Modificar</button>
        <router-link to="/">
            <button>Volver atras</button>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'AnimalView',
  data () {
    return {
        title: '',
        animal: {
            id: '',
            nombre: '',
            sexo: 'F',
            numeroRegistro: '',
            tipo: ''
        }
    }
  },
  methods: {
    save() {
        fetch('http://34.90.153.139/ejercicios/veterinario/save.php', {
            method: 'POST',
            body: JSON.stringify({
                nombre: this.animal.nombre,
                sexo: this.animal.sexo,
                numeroRegistro: this.animal.numeroRegistro,
                tipo: this.animal.tipo
            })
        })
    },
    modify() {
        fetch('http://34.90.153.139/ejercicios/veterinario/save.php', {
            method: 'POST',
            body: JSON.stringify({
                id: this.animal.id,
                nombre: this.animal.nombre,
                sexo: this.animal.sexo,
                numeroRegistro: this.animal.numeroRegistro,
                tipo: this.animal.tipo
            })
        })
    }
  },
  async created() {
    const idAnimal = this.$route.params.id;
    if (idAnimal) {
        this.title = "Modificar animal";

        const animalsFetch = await fetch("http://34.90.153.139/ejercicios/veterinario/getanimals.php");
        const animals = await animalsFetch.json();

        const animal = animals.find(a => a.id == idAnimal);
        // console.log(animal);
        this.animal = {
            id: animal.id,
            nombre: animal.nombre,
            sexo: animal.sexo,
            numeroRegistro: animal.numeroRegistro,
            tipo: animal.tipo
        };
        // console.log(this.animal);
    } else {
        this.title = "Crear animal";
    }
  },
}
</script>
