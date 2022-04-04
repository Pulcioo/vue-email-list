console.log("JS OK")

/*
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/

const app = new Vue(
    {
        el: '#vue-app',
        data: {
            email: '',
            listaEmail: []
        },
        mounted() {
            for (i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                    const result = response.data;
                    this.email = result.response
                    console.log(this.email);
                    this.listaEmail.push(this.email)
                });
            }
        }
    }
);