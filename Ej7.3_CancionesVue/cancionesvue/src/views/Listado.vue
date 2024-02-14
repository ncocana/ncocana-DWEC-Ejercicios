<template>
  <div class="container-fluid">
    <header>
      <div class="row">
        <input class="form-control" type="text" v-model.trim="busqueda" placeholder="Buscar la letra de una canción" @input="filterSongsByText()">
      </div>
      <div class="row">
        <button class="col-sm btn btn-danger btn-lg m-1" type="button" v-for="categoria in categorias" :key="categoria.id" @click="filterSongsByCategory(categoria.id)">{{ categoria.nombre }}</button>
      </div>
      <div class="row">
        <button class="col-sm btn btn-primary btn-lg m-1" type="button" @click="orderByAscDate()">Order ascendente</button>
        <button class="col-sm btn btn-primary btn-lg m-1" type="button" @click="orderByDescDate()">Order descendente</button>
      </div>
    </header>
    <main>
      <div v-if="busqueda != '' && cancionesFilter.length == 0">
        <p>No se encontraron canciones que coincidan con la búsqueda.</p>
      </div>
      <TarjetaCancion :titulo="cancionFilter.titulo" :fecha="cancionFilter.fecha" v-else-if="cancionesFilter.length > 0" v-for="cancionFilter in cancionesFilter" :key="cancionFilter.id">
        {{ cancionFilter.letra }}
      </TarjetaCancion>
      <TarjetaCancion :titulo="cancion.titulo" :fecha="cancion.fecha" v-else-if="cancionesFilter.length == 0" v-for="cancion in canciones" :key="cancion.id">
        {{ cancion.letra }}
      </TarjetaCancion>
    </main>
    
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import TarjetaCancion from '@/components/TarjetaCancion.vue'

export default {
    name: 'Listado',
    components: {
        TarjetaCancion,
    },
    setup() {
        const canciones = ref([]);
        const cancionesFilter = ref([]);
        const categorias = ref([]);
        const busqueda = ref('');

        async function listCanciones() {
            const cancionesFetch = await fetch("./bbdd/canciones.json");
            canciones.value = await cancionesFetch.json();
        };

        async function listCategorias() {
            const categoriasFetch = await fetch("./bbdd/categorias.json");
            categorias.value = await categoriasFetch.json();
        };

        function filterSongsByCategory(categoriaId) {
            cancionesFilter.value = canciones.value.filter(cancion => cancion.categoria_id === categoriaId);
        };

        function filterSongsByText() {
            cancionesFilter.value = canciones.value.filter(cancion => cancion.letra.toLowerCase().includes(busqueda.value.toLowerCase()));
        };

        function orderByDescDate() {
            const sortedSongs = canciones.value.slice().sort((a, b) => {
                const dateA = moment(a.fecha, 'YYYY/MM/DD');
                const dateB = moment(b.fecha, 'YYYY/MM/DD');
                return dateA - dateB;
            });
            cancionesFilter.value = sortedSongs;
        }

        function orderByAscDate() {
            const sortedSongs = canciones.value.slice().sort((a, b) => {
                const dateA = moment(a.fecha, 'YYYY/MM/DD');
                const dateB = moment(b.fecha, 'YYYY/MM/DD');
                return dateB - dateA;
            });
            cancionesFilter.value = sortedSongs;
        }

        onMounted(() => {
            listCanciones();
            listCategorias();
        });

        return {
            canciones,
            cancionesFilter,
            categorias,
            busqueda,
            filterSongsByCategory,
            filterSongsByText,
            orderByDescDate,
            orderByAscDate
        }
    }
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main div{
  margin: 50px auto;
  text-align: center;
}
</style>
