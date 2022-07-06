<template>
    <div class="rezervirana-background">
        <div class="responsive-container-rezervirana">
            <p>USPJEŠNO STE REZERVIRALI KARTU!</p>
            <p>Odabrani muzej: {{this.last_reservation.odabrani_muzej}}</p>
            <p>Rezervirani datum: {{this.last_reservation.datum}}</p>
            <p>Broj karata: {{this.last_reservation.broj_karata}}</p>
            <p>Korisnik: {{this.last_reservation.user}}</p>
        </div>
    </div>
</template>
 
<script>
import { firebase, db } from "@/firebase";
import 'firebase/firestore'

export default{
    data: function () {
        return {
            reservationsData: "",
            docs: "",
            reservations:[],
            last_reservation:[],
        };
    },
    
    methods:{
         dohvatRezervacije() {
            console.log("firebase dohvat");
            db.collection("reservations")
            .get()
            .then((query) => {
                query.forEach((doc) => {
                    const data = doc.data();

                    this.reservations.push({
                        id: doc.id,
                        odabrani_muzej: data.odabrani_muzej,
                        datum: data.datum,
                        broj_karata: data.broj_karata,
                        user: data.user
                    })
                    let duzina=this.reservations.length;
                    this.last_reservation = JSON.parse(JSON.stringify(this.reservations[duzina-1]))
                    console.log("Zadnja rezervacija: ",this.last_reservation)
                    
                });
            });
        },
    },
    created() {
      this.dohvatRezervacije();
    },
}
</script>


<style>
.rezervirana-background {
  background-color: #f8f37f;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  position: absolute;
  z-index: -1;
}
.responsive-container-rezervirana{
    position:absolute;
    width: 50%;
    padding-right: 15px;
    padding-left: 15px;
    border-radius: 25px;
    margin-left: 10px;
    margin:0; 
    background-color: white;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    padding-top:30px;
}
</style>