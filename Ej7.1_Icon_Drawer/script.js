Vue.createApp({
    data(){
        return {
            // Variables reactivas
            icon: {}
        }
    },
    created(){
        // Once created, do something.
    },
    methods: {
        async sendForm() {
            // console.log(this.icon);
            this.icon = await fetch("http://34.90.153.139/ejercicios/icono.php?nombre=" + this.icon.name.toLowerCase()).then((r) => r.json());
            console.log(this.icon);
        }
    }
}).mount('#app');
