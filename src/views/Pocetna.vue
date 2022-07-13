<template>
  <div>
    <div class="pozadina-pocetna">
      <div id="change">
        <div
          class="circle-parent"
          v-for="i in 1"
          @mouseover="showByIndex = i"
          @mouseout="showByIndex = null"
          :key="i"
        >
          <div v-show="showByIndex === null" class="okrugla-slika1 child-one">
            <router-link to="/muzeji">
              <p class="circle-text">L`Arte</p>
            </router-link>
          </div>

          <router-link to="/muzeji">
            <div class="okrugla-slika2 child-two" v-show="showByIndex === i">
              <p class="circle-text">START</p>
            </div>
          </router-link>
        </div>
      </div>
      <div v-if="showByIndex === 1" class="pozadina-pocetna-onhover">
        <div v-if="showByIndex === 1" class="pocetna-slika-lijevo"></div>
        <div v-if="showByIndex === 1" class="pocetna-slika-desno"></div>
      </div>
    </div>
  </div>
</template>

<style>
router-link {
  display: none;
}
.circle-parent {
  background-repeat: no-repeat;
  width: 300px;
  height: 300px;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: 99;
}
body#p1 {
  background-color: blueviolet;
}
.circle-text {
  color: black;
  position: absolute;
  font-weight: bold;
  letter-spacing: 1rem;
  font-size: 38px;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
.okrugla-slika1 {
  background-image: url("../assets/zastart.jpg");
  background-repeat: no-repeat;
  width: 300px;
  height: 300px;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: 99;
  -moz-box-shadow: 0px 6px 5px #00000083;
  -webkit-box-shadow: 0px 6px 5px #00000083;
  box-shadow: 0px 6px 5px #00000083;
  -moz-border-radius: 190px;
  -webkit-border-radius: 190px;
}
.okrugla-slika2 {
  background-image: url("../assets/zastart2.jpg");
  background-repeat: no-repeat;
  width: 400px;
  height: 400px;
  margin: auto;
  position: absolute;
  background-size: cover;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: 99;
}
.pocetna-slika-lijevo {
  background-image: url("../assets/pocetna_merged_left.jpg");
  background-repeat: no-repeat;
  width: 20%;
  height: 100%;
  left: 0;
  background-size: cover;
}
.pocetna-slika-desno {
  position: absolute;
  background-image: url("../assets/pocetna_merged_right.jpg");
  background-repeat: no-repeat;
  width: 20%;
  height: 100%;
  top: 0;
  right: 0;
  background-size: cover;
}
.pozadina-pocetna {
  background-color: #89d16f;
  width: 100%;
  height: 100vh;
  background-attachment: fixed;
  z-index: -1;
}
.pozadina-pocetna-onhover {
  background-color: #78696e;
  width: 100%;
  height: 100vh;
  background-attachment: fixed;
  z-index: -99;
}
</style>

<script>
import store from "@/store";
store.stanje = 1;
export default {
  data: function () {
    return {
      showByIndex: null,
      store,
    };
  },
};
</script>
