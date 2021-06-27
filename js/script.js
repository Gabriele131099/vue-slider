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
                ],
                indexImg : 0
            },
        created(){
            setInterval(() =>{
                this.next();
            }, 3000)
        },
        methods: {
            next:function () {
                if (this.indexImg === (this.photos.length -1)) 
                    {
                        this.indexImg = 0
                    }
                
                this.indexImg++
            },
            prev:function () {
                if (this.indexImg === 0) 
                    {
                        this.indexImg = this.photos.length -1
                    }else{

                        this.indexImg--
                    }
            },
            moveTo: function (index) {
                this.indexImg = index
            },
            isCourentDot: function (index) {
                if (index === this.indexImg) {
                    return 'current'
                } else {
                    return ''
                }
            }
        }
    }
 );