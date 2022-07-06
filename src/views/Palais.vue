<template>
  <body>
    <div class="boja">
      <br /><br /><br />
      <img src="zaslike/palais/palais4.jpg" style="width: 39%" />
      <div class="transparent">GRAND PALAIS</div>
      <div class="naslov">GRAND PALAIS</div>
      <br /><br />
      <div class="tekst">
        “Réunion des musées nationaux – Grand Palais”, ili skraćeno “Rmn-GP”.
        Nova javna kulturna ustanova koja odgovara ministru kulture i
        komunikacija. Rmn-GP je osnovan 2011. nakon spajanja Réunion des musées
        nationaux i Grand Palais, otuda i potječe ime. Smješten u srcu Pariza na
        Avenue des Champs-Élysées, Grand Palais je kultni spomenik Rmn-GP-a.
        Izgrađen za Univerzalnu izložbu 1900. godine i posvećen „Francuskoj
        Republici na slavu francuske umjetnosti“, proglašen je povijesnim
        spomenikom 2000. godine.
      </div>
      <br /><br />
      <div class="crno">
        <marquee>
          <img
            src="zaslike/palais/palais18.jpg"
            style="height: 280px"
          />&nbsp;&nbsp;<img
            src="zaslike/palais/palais2.jpg"
            style="height: 280px"
          />&nbsp;&nbsp;<img
            src="zaslike/palais/palais7.jpg"
            style="height: 280px"
          />&nbsp;&nbsp;<img
            src="zaslike/palais/palais1.jpg"
            style="height: 280px"
          />&nbsp;&nbsp;<img
            src="zaslike/palais/palais10.jpg"
            style="height: 280px"
          />&nbsp;&nbsp;<img
            src="zaslike/palais/palais16.jpg"
            style="height: 280px"
          />&nbsp;&nbsp;<img
            src="zaslike/palais/palais8.jpg"
            style="height: 280px"
          />
        </marquee>
      </div>
      <br /><br /><br />
      <!-- Slajder-->
      <div>
        <div class="for-carousel">
          <br />
          <br />
          <div class="carousel">
            <ul class="slides">
              <input type="radio" name="radio-buttons" id="img-1" checked />
              <li class="slide-container">
                <div class="slide-image">
                  <div class="zalouvreslike">
                    <img src="zaslike/palais/palais13.jpg" />
                  </div>
                </div>
                <div class="carousel-controls">
                  <label for="img-3" class="prev-slide">
                    <span>&lsaquo;</span>
                  </label>
                  <label for="img-2" class="next-slide">
                    <span>&rsaquo;</span>
                  </label>
                </div>
              </li>
              <input type="radio" name="radio-buttons" id="img-2" />
              <li class="slide-container">
                <div class="slide-image">
                  <div class="zalouvreslike">
                    <img src="zaslike/palais/palais5.jpg" />
                  </div>
                </div>
                <div class="carousel-controls">
                  <label for="img-1" class="prev-slide">
                    <span>&lsaquo;</span>
                  </label>
                  <label for="img-3" class="next-slide">
                    <span>&rsaquo;</span>
                  </label>
                </div>
              </li>
              <input type="radio" name="radio-buttons" id="img-3" />
              <li class="slide-container">
                <div class="slide-image">
                  <div class="zalouvreslike">
                    <img src="zaslike/palais/palais14.jpg" />
                  </div>
                </div>
                <div class="carousel-controls">
                  <label for="img-2" class="prev-slide">
                    <span>&lsaquo;</span>
                  </label>
                  <label for="img-4" class="next-slide">
                    <span>&rsaquo;</span>
                  </label>
                </div>
              </li>
              <input type="radio" name="radio-buttons" id="img-4" />
              <li class="slide-container">
                <div class="slide-image">
                  <div class="zalouvreslike">
                    <img src="zaslike/palais/palais11.jpg" />
                  </div>
                </div>
                <div class="carousel-controls">
                  <label for="img-3" class="prev-slide">
                    <span>&lsaquo;</span>
                  </label>
                  <label for="img-5" class="next-slide">
                    <span>&rsaquo;</span>
                  </label>
                </div>
              </li>
              <input type="radio" name="radio-buttons" id="img-5" />
              <li class="slide-container">
                <div class="slide-image">
                  <div class="zalouvreslike">
                    <img src="zaslike/palais/palais15.jpg" />
                  </div>
                </div>
                <div class="carousel-controls">
                  <label for="img-4" class="prev-slide">
                    <span>&lsaquo;</span>
                  </label>
                  <label for="img-1" class="next-slide">
                    <span>&rsaquo;</span>
                  </label>
                </div>
              </li>
              <div class="carousel-dots">
                <label for="img-1" class="carousel-dot" id="img-dot-1"></label>
                <label for="img-2" class="carousel-dot" id="img-dot-2"></label>
                <label for="img-3" class="carousel-dot" id="img-dot-3"></label>
                <label for="img-4" class="carousel-dot" id="img-dot-4"></label>
                <label for="img-5" class="carousel-dot" id="img-dot-5"></label>
              </div>
            </ul>
          </div>
          <br /><br />
        </div>
        <br />
      </div>
    </div>
  </body>
</template>


<style scoped>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: black;
}
.boja {
  background-color: rgba(162, 184, 208, 1);
  width: 100%;
  height: 280%;
  background-attachment: fixed;
  position: absolute;
}
.naslov {
  margin-left: 50%;
  position: absolute;
  top: 13%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  font-size: 40px;
  font-size: 2.5vw;
}
.transparent {
  position: absolute;
  top: 13%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  opacity: 0.6;
  font-size: 40px;
  background-color: rgba(167, 208, 193, 0.81);
  width: 100%;
  height: 10%;
  color: rgba(167, 208, 193, 0.81);
  text-align: center;
}
.tekst {
  margin-left: 46%;
  font-weight: bold;
  position: absolute;
  top: 27%;
  margin-right: 6%;

  font-size: 1vw;
}
.crno {
  width: 100%;
  height: 14%;
  background-color: black;
  margin-top: 0;
  padding-top: 8px;
  padding-bottom: 10px;
}

.for-carousel {
  background-color: rgba(167, 208, 193, 0.81);
  width: 100%;
  height: 50%;
}
.zuto {
  font-weight: bold;
  margin-left: 8%;
}

.zalouvreslike {
  width: 100%;
}

.carousel {
  margin-left: 34%;
}

ul.slides {
  display: block;
  position: relative;
  height: 500px;
  width: 500px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  list-style: none;
}

.slides * {
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}

ul.slides input {
  display: none;
}

.slide-container {
  display: block;
}

.slide-image {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  opacity: 0;
  transition: all 0.7s ease-in-out;
}

.slide-image img {
  width: 100%;
  min-width: 100%;
  height: 100%;
}

.carousel-controls {
  position: absolute;
  top: 0, 2%;
  left: 0;
  right: 0;
  z-index: 999;
  font-size: 100px;
  line-height: 500px;
  color: rgb(255, 251, 251);
}

.carousel-controls label {
  display: none;
  position: absolute;
  padding: 0 20px;
  opacity: 0.5;
  transition: opacity 0.2s;
  cursor: pointer;
}

.slide-image:hover + .carousel-controls label {
  opacity: 0.5;
}

.carousel-controls label:hover {
  opacity: 1;
}

.carousel-controls .prev-slide {
  width: 49%;
  text-align: left;
  left: 0;
}

.carousel-controls .next-slide {
  width: 49%;
  text-align: right;
  right: 0;
}

.carousel-dots {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;
  z-index: 999;
  text-align: center;
}

.carousel-dots .carousel-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.5;
  margin: 10px;
}

input:checked + .slide-container .slide-image {
  opacity: 1;
  transform: scale(1);
  transition: opacity 1s ease-in-out;
}

input:checked + .slide-container .carousel-controls label {
  display: block;
}

input#img-1:checked ~ .carousel-dots label#img-dot-1,
input#img-2:checked ~ .carousel-dots label#img-dot-2,
input#img-3:checked ~ .carousel-dots label#img-dot-3,
input#img-4:checked ~ .carousel-dots label#img-dot-4,
input#img-5:checked ~ .carousel-dots label#img-dot-5,
input#img-6:checked ~ .carousel-dots label#img-dot-6 {
  opacity: 1;
}

input:checked + .slide-container .nav label {
  display: block;
}
</style>


<script>
import store from "@/store";
store.stanje = 0;
export default {
  name: "Palais",
  data: function () {
    return {
      store,
    };
  },
};
</script>