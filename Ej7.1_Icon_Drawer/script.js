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
            if (this.query) {
                this.icon = {};
                let iconFetch = await fetch("http://34.90.153.139/ejercicios/icono.php?nombre=" + this.query.toLowerCase());
                let iconJson = await iconFetch.json();
                if (iconFetch.ok) {
                    this.icon = iconJson;
                    console.log(this.icon);
                } else {
                    this.icon.status = iconFetch.status;
                    this.icon.mensaje = iconJson.mensaje;
                }
            } else {
                this.icon = {};
                this.icon.mensaje = "¡Introduce un nombre!"
            }
        }
    }
}).mount('#app');
