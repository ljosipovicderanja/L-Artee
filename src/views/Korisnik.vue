<template>
  <div class="home-page">
    <div class="containerr">
      <div class="centerr">
          <div class="respon">
            <div class="korisnik-tekst">
              <div class="postani-korisnik">Postani korisnik</div>
              
              <div class="korisnik">Korisnik</div>
            </div>
            <br />
            <router-link to="/registracija"
              ><img class="img" src="zaslike/slika2.jpg"
            /></router-link>

            
            <router-link to="/prijava"
              ><img class="img" src="zaslike/slika11.jpg"
            /></router-link>
          </div>
        </div>
      </div>
    </div>
  
</template>

<style>
.home-page {
  background-color: #7e0000;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  position: absolute;
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

<script>
import store from "@/store";
store.stanje = 0;
export default {
  name: "Korisnik",
  data: function () {
    return {
      store,
    };
  },
};
</script>