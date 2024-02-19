<template>
  <q-page class="flex flex-center column q-gutter-y-md">
    <q-input outlined v-model="textTitle" label="Título" stack-label :dense="dense" />
    <q-date v-model="date" />
    <q-input outlined v-model="textUrl" label="URL de la imagen" stack-label :dense="dense" />
    <q-btn color="primary" label="Guardar" @click="saveData" />
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { api } from 'boot/axios'
import { useQuasar } from 'quasar'
import moment from 'moment';

export default defineComponent({
    name: 'IndexPage',
    setup () {
        const $q = useQuasar();
        const textTitle = ref('');
        const textUrl = ref('');
        const dense = ref(false);
        const date = ref('2024/02/01');

        function saveData() {
            // Construct the entry object
            const entry = JSON.stringify({
                titulo: textTitle.value,
                url: textUrl.value,
                fecha: moment(date.value).format('YYYY-MM-DD')
            });

            // Add the Accept and Content-Type header
            // This is not neccessary with JSON.stringify()
            const config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };

            // console.log(entry);

            // Make API call to save the entry
            api.post('/save.php', entry, config)
                .then((response) => {
                        $q.notify({
                        color: 'positive',
                        position: 'top',
                        message: response.data.message,
                        icon: 'report_problem'
                    })
                })
                .catch((error) => {
                    $q.notify({
                        color: 'negative',
                        position: 'top',
                        message: error.response.statusText + ": " + error.response.data.error,
                        icon: 'report_problem'
                    })
                });
        }

        return {
            textTitle,
            textUrl,
            dense,
            date,
            saveData
        }
    }
})
</script>
