<template>
  <div class="boja">
    <br /><br /><br />
    <div class="naslov">MUZEJ VAN GOGH</div>
    <br /><br />

    <div class="za-balu">
      <div class="bala1"></div>
      <div class="bala"></div>
      <div class="bala3"></div>
    </div>

    <p class="p1">
      Van Goghov muzej u Amsterdamu čuva najveću zbirku umjetničkih djela
      Vincenta van Gogha (1853.-1890.) na svijetu. Stalna zbirka uključuje preko
      200 slika Vincenta van Gogha, 500 crteža i više od 750 pisama. Muzej
      također predstavlja izložbe o raznim temama iz povijesti umjetnosti 19.
      stoljeća.
    </p>

    <div class="za-balu-druga">
      <div class="bala1-druga"></div>
      <div class="bala-druga"></div>
      <div class="bala3-druga"></div>
    </div>
    <img
      id="prva"
      src="zaslike/vangogh/vangogh2.jpg"
      style="width: 50%; float: right"
    />

    <br /><br />

    <div class="druga-slika">
      <img id="druga" style="float: left" src="zaslike/vangogh/vangogh3.jpg" />
      <!-- 
      <p class="p2">"What is done in love, is done well." - Vincent Van Gogh</p>
    --></div>
    <br /><br />

    <!--slajder-->
    <div class="for-carousel">
      <br />
      <br />
      <div class="carousel">
        <ul class="slides">
          <input type="radio" name="radio-buttons" id="img-1" checked />
          <li class="slide-container">
            <div class="slide-image">
              <div class="zalouvreslike">
                <img id="drugacija1" src="zaslike/vangogh/vangogh4.jpg" />
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
                <img src="zaslike/vangogh/vangogh5.jpg" />
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
                <img src="zaslike/vangogh/vangogh6.jpg" />
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
                <img src="zaslike/vangogh/vangogh7.jpg" />
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
                <img id="drugacija" src="zaslike/vangogh/vangogh8.jpg" />
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
</template>


<style scoped>
.boja {
  background-color: rgba(126, 124, 25, 1);
  width: 100%;
  height: auto;
  background-attachment: fixed;
  position: absolute;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: black;
}
.naslov {
  font-size: 2.5vw;
  font-weight: bold;
  background-color: rgba(215, 135, 46, 0.83);
  height: 8%;
  padding: 4%;
  text-align: center;
}
#prva {
  border: 7px solid black;
  margin-right: 2%;
}

.p1 {
  text-align: left;
  margin-left: 7%;
  position: absolute;
  top: 33%;
  /*transform: translate(-50%, -50%);*/
  font-weight: bold;
  margin-right: 60%;
}

.p2 {
  margin-right: 15%;
  display: inline;
  /*transform: translate(-50%, -50%);*/
  font-weight: bold;
  text-align: right;
}

#druga {
  width: 40%;
  margin-left: 4%;
  border: 7px solid black;
  margin-top: 25rem;
}
.druga-slika {
  padding-top: 6%;
  /*background-color: aqua;*/
  /*display: inline;*/
}
.bala1 {
  height: 20px;
  width: 20px;
  background-color: black;
  border-radius: 25px;
  margin-left: 20px;
  margin-top: 15%;
}
.bala {
  height: 30px;
  width: 30px;
  background-color: black;
  border-radius: 25px;
  margin-left: 20px;
}
.bala3 {
  height: 20px;
  width: 20px;
  background-color: black;
  border-radius: 25px;
  margin-left: 20px;
  margin-top: 15%;
}
.za-balu {
  display: flex;
  margin-left: 270px;
  margin-top: 7%;
  position: absolute;
}
.bala1-druga {
  height: 20px;
  width: 20px;
  background-color: black;
  border-radius: 25px;
  margin-left: 20px;
  margin-top: 2%;
}
.bala-druga {
  height: 30px;
  width: 30px;
  background-color: black;
  border-radius: 25px;
  margin-left: 20px;
  margin-top: 10%;
}
.bala3-druga {
  height: 20px;
  width: 20px;
  background-color: black;
  border-radius: 25px;
  margin-left: 20px;
  margin-top: 2%;
}
.za-balu-druga {
  display: flex;
  margin-left: 270px;
  margin-top: 25%;
  position: absolute;
}

.for-carousel {
  background-color: rgba(200, 133, 42, 1);
  width: 50%;
  float: right;
  /*height: 28%;
  margin-left: 47%;*/
  margin-bottom: 2%;
  margin-right: 2%;
  margin-top: 36px;
}

.zalouvreslike {
  width: 80%;
}

.carousel {
  margin-left: 17%;
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
  margin-left: 10%;
  top: 0;
  opacity: 0;
  transition: all 0.7s ease-in-out;
}
#drugacija1 {
  margin-top: 31%;
}

#drugacija {
  margin-top: 28%;
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
  name: "Vangogh",
  data: function () {
    return {
      store,
    };
  },
};
</script>



