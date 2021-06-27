Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            // qui dentro metteremo tutti i dati
            // della nostra applicazione.
            // la nostra app si attiverà e verrà 
            // eseguita in funzione di...
            photos: [
                'img/image-1.jpg',
                'img/image-2.jpg',
                'img/image-3.jpg',
                'img/image-4.jpg',
                'img/image-5.jpg'
                ]
            },
        methods: {
        }
    }
 );