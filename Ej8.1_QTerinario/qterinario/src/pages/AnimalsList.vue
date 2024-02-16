<template>
  <q-page>
    <div class="q-ml-auto q-mr-auto q-mt-md" style="max-width: 350px">
      <q-list bordered separator>
        <q-expansion-item
            v-for="animal in animals" :key="animal.id"
            expand-separator
            icon="pets"
            :label="animal.nombre"
            :caption="animal.sexo"
        >
            <q-card>
                <q-card-section>
                    Número de registro: {{ animal.numeroRegistro || 'Sin número' }}
                </q-card-section>
                <q-card-section>
                    Tipo: {{ animal.tipo }}
                </q-card-section>
            </q-card>
        </q-expansion-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
    name: 'AnimalsList',
    setup() {
        const animals = ref([]);

        async function listAnimals() {
            const animalsFetch = await fetch("http://34.90.153.139/ejercicios/veterinario/getanimals.php");
            animals.value = await animalsFetch.json();
        };

        onMounted(listAnimals);

        return {
            animals
        }
    }
})
</script>
