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
                {name:'Spa Arcobaleno', path:'img/image-1.jpg', sale:200 , description:'Interamente coperta dalla connessione WiFi gratuita, la Starry Sky Charming House sorge ad Alghero, a 700 m dal porto.Le camere includono una Smart TV con canali satellitari e Netflix. Tutte le camere sono dotate di bagno privato con vasca o doccia. Tra gli extra figurano set di cortesia e asciugacapelli. Le camere superior vantano anche una vasca da bagno con idromassaggio e un bagno turco.In loco potrete usufruire di un servizio di noleggio auto e biciclette. L Aeroporto di Alghero dista 8 km.Questa zona di Alghero è una delle preferite dai nostri ospiti, in base alle recensioni indipendenti.Parliamo la tua lingua!Starry Sky Charming House dà il benvenuto ai clienti di Booking.com dal 7 lug 2017Gli ospiti vanno pazzi per...Parcheggio Connessione WiFi gratuita Fronte spiaggia Camere non fumatori Terrazza bollitore tè / macchina caffè in tutte le camere'},
                {name:'Spa Roccia', path:'img/image-2.jpg', sale:300, description:'L Hotel La Margherita si trova nel centro di Alghero, a 5 minuti a piedi dalle mura della città vecchia, e offre una terrazza all’ultimo piano arredata, con vista panoramica sul mare, e servizi benessere completi disponibili su prenotazione.6Tutte climatizzate, le camere dell’Hotel La Margherita presentano interni semplici e mobili d’epoca in legno, e dispongono di WiFi gratuito e in alcuni casi balcone affacciato sul mare.6Come ospiti potrete usufruire di tariffe scontate presso una spiaggia sabbiosa privata convenzionata, distante 1,8 km. La struttura è ubicata a 800 metri dal porto di Alghero e a 20 minuti di auto dall’Aeroporto di Alghero-Fertilia.6Questa zona di Alghero è una delle preferite dai nostri ospiti, in base alle recensioni indipendenti.6Parliamo la tua lingua!6Hotel La Margherita & SPA dà il benvenuto ai clienti di Booking.com dal 29 gen 20086Gli ospiti vanno pazzi per...1 piscina Parcheggio Connessione WiFi gratuita Spa & centro benessere Animali ammessi Disponibilità di camere familiari Bar Spiaggia privata'},
                {name:'Spa Luce', path:'img/image-3.jpg', sale:90, description:'L Hotel La Margherita si trova nel centro di Alghero, a 5 minuti a piedi dalle mura della città vecchia, e offre una terrazza all’ultimo piano arredata, con vista panoramica sul mare, e servizi benessere completi disponibili su prenotazione.Tutte climatizzate, le camere dell’Hotel La Margherita presentano interni semplici e mobili d’epoca in legno, e dispongono di WiFi gratuito e in alcuni casi balcone affacciato sul mare.Come ospiti potrete usufruire di tariffe scontate presso una spiaggia sabbiosa privata convenzionata, distante 1,8 km. La struttura è ubicata a 800 metri dal porto di Alghero e a 20 minuti di auto dall’Aeroporto di Alghero-Fertilia.Questa zona di Alghero è una delle preferite dai nostri ospiti, in base alle recensioni indipendenti.Parliamo la tua lingua!Hotel La Margherita & SPA dà il benvenuto ai clienti di Booking.com dal 29 gen 2008Gli ospiti vanno pazzi per...1 piscina Parcheggio Connessione WiFi gratuita Spa & centro benessere Animali ammessi Disponibilità di camere familiari Bar Spiaggia privata'},
                {name:'Spa Dark', path:'img/image-4.jpg', sale:450, description:'Situato ad Alghero, a breve distanza dalla Spiaggia di Las Tronas, dalla Chiesa di San Michele e dalla Torre di Porta Terra, il Sand Ana House B&b offre una terrazza e la vista sulla città. Avrete inoltre a disposizione la connessione WiFi gratuita in tutti gli ambienti e un parcheggio privato.Le sistemazioni sono climatizzate e dotate di patio, TV a schermo piatto e bagno privato con bidet e asciugacapelli. Tutte le sistemazioni sono dotate di balcone con vista sul giardino.Al mattino vi attende una colazione continentale o alla carta.Il Sand Ana House B&b dista 2,7 km dal porto turistico di Alghero e 2,3 km dalla Chiesa di San Francesco. La struttura dista 10 km dall Aeroporto di Alghero, lo scalo più vicino.Parliamo la tua lingua!Sand Ana House B&b dà il benvenuto ai clienti di Booking.com dal 1 giu 2019Gli ospiti vanno pazzi per....' },
                {name:'Spa Marea', path:'img/image-5.jpg', sale:500, description:'L Hotel La Margherita si trova nel centro di Alghero, a 5 minuti a piedi dalle mura della città vecchia, e offre una terrazza all’ultimo piano arredata, con vista panoramica sul mare, e servizi benessere completi disponibili su prenotazione.6Tutte climatizzate, le camere dell’Hotel La Margherita presentano interni semplici e mobili d’epoca in legno, e dispongono di WiFi gratuito e in alcuni casi balcone affacciato sul mare.6Come ospiti potrete usufruire di tariffe scontate presso una spiaggia sabbiosa privata convenzionata, distante 1,8 km. La struttura è ubicata a 800 metri dal porto di Alghero e a 20 minuti di auto dall’Aeroporto di Alghero-Fertilia.6Questa zona di Alghero è una delle preferite dai nostri ospiti, in base alle recensioni indipendenti.6Parliamo la tua lingua!6Hotel La Margherita & SPA dà il benvenuto ai clienti di Booking.com dal 29 gen 20086Gli ospiti vanno pazzi per...1 piscina Parcheggio Connessione WiFi gratuita Spa & centro benessere Animali ammessi Disponibilità di camere familiari Bar Spiaggia privata'},
                ],
                indexImg : 0
            },
        created(){
           setInterval(() => {
               this.next();
           }, interval);
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
                    return indexImg
                } else {
                    return ''
                }
            },

        }
    }
    
 );
