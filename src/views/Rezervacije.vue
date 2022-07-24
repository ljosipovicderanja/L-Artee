<template>
  <div class="home-page">
    <div class="row wrapper">
      <br /><br /><br /><br />
      <div class="heightDiff">
        <div class="col-md-4 cont2">
          <img class="slika-border" src="../assets/zastart.jpg" />
        </div>
        <div class="cont1 col-md-3 container-left">
          <div class="responsive-container">
            <br /><br />
            <p class="karta-tekst">Karta za:</p>
            <br /><br />
            <div class="form-check">
              <input
                type="radio"
                class="form-check-input radio-color"
                id="radio1"
                name="optradio"
                value="option1"
                v-model="louvre"
              />
              <label class="form-check-label" for="radio1">MUZEJ LOUVRE</label>
            </div>
            <div class="form-check">
              <input
                type="radio"
                class="form-check-input radio-color"
                id="radio2"
                name="optradio"
                value="option2"
                v-model="d_orsay"
              />
              <label class="form-check-label" for="radio2">MUZEJ D'ORSAY</label>
            </div>
            <div class="form-check">
              <input
                type="radio"
                class="form-check-input radio-color"
                id="radio3"
                name="optradio"
                value="option2"
                v-model="grand_palais"
              />
              <label class="form-check-label" for="radio3"
                >MUZEJ GRAND PALAIS</label
              >
            </div>
            <div class="form-check">
              <input
                type="radio"
                class="form-check-input radio-color"
                id="radio4"
                name="optradio"
                value="option2"
                v-model="van_gogh"
              />
              <label class="form-check-label" for="radio4"
                >MUZEJ VAN GOGH</label
              >
            </div>
            <!--<button type="submit" class="btn btn-primary mt-3">Submit</button>-->
            <br /><br />
          </div>
          <br /><br />
          <input
            v-model="datum"
            class="form-control input-lg responsive-calendar"
            type="date"
            id="start"
            name="trip-start"
            min="2022-06-15"
            max="2022-10-15"
          />
        </div>

        <div class="responsive-container col-md-4 cont3">
          <br /><br />
          <p class="karta-tekst">
            Kupnja karata vrši se na samom ulazu u muzej!
          </p>
          <br /><br /><br />
          <div class="inline-text">
            <p class="karta-tekst2">Koliko karta želite?</p>
            <div class="col-xs-3">
              <input
                v-model="broj_karata"
                class="form-control"
                id="ex2"
                type="text"
              />
            </div>
          </div>
          <br /><br />
          <button
            type="button"
            class="btn rezerviraj-kartu"
            @click="
              OdabraniMuzej();
              Rezervacija();
            "
          >
            Rezerviraj kartu
          </button>
          <br /><br />
          <p class="ili-tekst">ili</p>
          <br />
          <router-link to="/muzeji"
            ><button type="button" class="btn odustani">
              Odustani
            </button></router-link
          >
          <br /><br />
          <p v-if="prazna_forma == true" class="warning-poruka">
            Unesite sva polja!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { firebase, db } from "@/firebase";
import "firebase/firestore";
import router from "@/router/index.js";

store.stanje = 0;
export default {
  name: "Rezervacije",
  data: function () {
    return {
      store,
      louvre: "",
      d_orsay: "",
      grand_palais: "",
      van_gogh: "",
      odabrani_muzej: "",
      datum: "",
      broj_karata: "",
      user: "",
      id: null,
      brojac: null,
      stringid: "",
      prazna_forma: false,
    };
  },
  created() {},
  methods: {
    OdabraniMuzej() {
      if (this.van_gogh != "") {
        this.odabrani_muzej = "Muzej Van Gogh";
      } else if (this.louvre != "") {
        this.odabrani_muzej = "Muzej Louvre";
      } else if (this.grand_palais != "") {
        this.odabrani_muzej = "Muzej Grand Palais";
      } else if (this.d_orsay != "") {
        this.odabrani_muzej = "Muzej D'Orsay";
      }
    },
    Rezervacija() {
      this.user = store.currentUser;
      this.prazna_forma = false;
      console.log(this.odabrani_muzej, this.datum, this.broj_karata, this.user);
      if (
        this.odabrani_muzej != "" &&
        this.datum != "" &&
        this.broj_karata != "" &&
        this.user != ""
      ) {
        //Datum za sortiranje
        const current = new Date();
        //Dan
        let day = 0;
        if (current.getDate().toString(10).length == 1) {
          day = "0" + current.getDate();
        } else if (current.getDate().toString(10).length != 1) {
          day = current.getDate();
        }
        //Mjesec
        let month = 0;
        if ((current.getMonth() + 1).toString(10).length == 1) {
          month = "0" + (current.getMonth() + 1);
        } else if ((current.getMonth() + 1).toString(10).length != 1) {
          month = current.getMonth() + 1;
        }
        //Sati
        let hours = 0;
        if (current.getHours().toString(10).length == 1) {
          hours = "0" + current.getHours();
        } else if (current.getHours().toString(10).length != 1) {
          hours = current.getHours();
        }
        //Minute
        let minutes = 0;
        if (current.getMinutes().toString(10).length == 1) {
          minutes = "0" + current.getMinutes();
        } else if (current.getMinutes().toString(10).length != 1) {
          minutes = current.getMinutes();
        }
        //Sekunde
        let seconds = 0;
        if (current.getSeconds().toString(10).length == 1) {
          seconds = "0" + current.getSeconds();
        } else if (current.getSeconds().toString(10).length != 1) {
          seconds = current.getSeconds();
        }

        const date = current.getFullYear() + "" + month + "" + day;
        const time = hours + "" + minutes + "" + seconds;

        const dateTime = date + "-" + time;

        console.log(dateTime);

        router.replace({ path: "/rezervirana_karta", replace: true });

        try {
          //let id = this.id=this.id+1;
          db.collection("reservations").doc(dateTime).set({
            odabrani_muzej: this.odabrani_muzej,
            datum: this.datum,
            broj_karata: this.broj_karata,
            user: this.user,
          });
        } catch (error) {}
      }
    },
  },
};
</script>

<style>
.wrapper {
  display: flex;
  margin-left: auto;
}
.max-width-container {
  margin-top: 50px;
}
.container-left {
  display: flex;
  flex-direction: column;
}

.heightDiff {
  display: flex;
  margin-top: 6.5rem;
}

body {
  overflow-x: hidden;
}

.cont1,
.cont2,
.cont3 {
  width: calc(100% / 3);
  margin-left: 10px;
}
.cont2 {
  margin-right: -20px;
}
.col-md-4 {
  width: 33%;
}
.inline-container {
  display: inline;
}
#ex2 {
  width: 25%;
  background-color: rgb(195, 188, 188);
  height: 25px;
  text-align: center;
}
.inline-text {
  vertical-align: top;
  display: inline-block;
  margin: 0 auto;
}
.rezerviraj-kartu {
  width: 250px;
  background-color: rgb(15, 186, 15);
  border-radius: 15px;
  padding: 15px;
  color: white;
}
.warning-poruka {
  color: red;
}
.odustani {
  width: 250px;
  background-color: rgb(4, 82, 4);
  border-radius: 15px;
  padding: 15px;
  color: white;
}
.cont3 {
  margin-top: 300px;
}
.karta-tekst {
  float: left;
  margin-left: 20px;
}
.karta-tekst2 {
  float: left;
}
.ili-tekst {
  margin: auto;
}
input[type="radio"]:checked:after {
  width: 15px;
  height: 15px;
  border-radius: 15px;
  top: -3.3px;
  left: -1px;
  position: relative;
  background-color: #7e0000;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 7px solid #7e0000;
}
.form-check {
  text-align: left;
}
.slika-border {
  width: 100%;
  height: 100%;
  border: 5px white solid;
  border-radius: 25px;
}

.responsive-container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  border-radius: 25px;
  margin-left: 10px;
  margin: initial;
  background-color: white;
  float: left;
}
.responsive-calendar {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  border-radius: 25px;
  margin-left: 10px;
  margin: initial;
  background-color: white;
}

.home-page {
  background-color: #7e0000;
  width: 100%;
  height: 100vh;
  background-attachment: fixed;
  z-index: -1;
}

.containerr {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  background-color: #7e0000;
  margin: auto;
}
.img {
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 400px;
  width: 450px;
  border-radius: 125px;
}
.postani-korisnik {
  position: absolute;
  color: white;
  margin-left: 11em;
}
.korisnik {
  position: absolute;
  color: white;
  float: right;
  margin-left: 40.5em;
}
.centerr {
  display: flex;
  margin: auto;
  margin-top: 200px;
}

body#b1 {
  background-color: blueviolet;
}
.respon {
  width: 100%;
  height: auto;
}
</style>
