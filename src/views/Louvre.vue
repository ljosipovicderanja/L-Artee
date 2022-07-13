<template>
	<div class="boja">
		<br /><br /><br />
		<img src="zaslike/louvre/louvre111.jpg" style="width: 100%; height: auto" />
		<div class="transparent">LOUVRE</div>

		<div class="naslov">LOUVRE</div>
		<br /><br />
		<p>
			Muzej Louvre jedan je od najvećih svjetskih muzeja.<br />
			Nalazi se u središtu Pariza, na obali rijeke Seine, u zdanju nekadašnje
			kraljevske palače. Obilazak opsežnih galerija muzeja Louvre pruža brzi
			tečaj o najboljoj umjetnosti zapadne civilizacije. Ovdje su izložena neka
			od najpoznatijih svjetskih remek-djela, uključujući Mona Lizu Leonarda da
			Vincija.
		</p>
		<br />
		<hr style="width: 19%; text-align: center; border-color: black" />
		<br /><br />
		<div class="kos-za-slike">
			<div class="slika"><img src="zaslike/louvre/louvre33.jpg" /></div>
			<div class="slika"><img src="zaslike/louvre/louvre22.jpg" /></div>
			<div class="slika"><img src="zaslike/louvre/louvre44.jpg" /></div>
		</div>
		<br /><br /><br />
		<div class="naslovic">Umjetnička djela</div>
		<hr style="width: 19%; text-align: center; border-color: black" />
		<br />

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
									<img src="zaslike/louvre/louvre5.jpg" />
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
									<img src="zaslike/louvre/louvre6.jpg" />
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
									<img src="zaslike/louvre/louvre7.jpg" />
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
									<img src="zaslike/louvre/louvre8.jpg" />
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
									<img src="zaslike/louvre/louvre9.jpg" />
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
</template>

<style scoped>
.boja {
	background-color: rgba(206, 145, 111, 1);
	font-family: Avenir, Helvetica, Arial, sans-serif;
	color: black;
	/* width: 100%;
  height: 200%;   */
	/*background-attachment: fixed;*/
	/*position: absolute;*/
}
.naslov {
	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-weight: bold;
	font-size: 40px;
	font-size: 2.5vw;
}
.transparent {
	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-weight: bold;
	opacity: 0.5;
	font-size: 40px;
	background-color: white;
	width: 800px;
	color: white;
}

p {
	text-align: left;
	font-weight: bold;
	margin-left: 8%;
	margin-right: 8%;
	margin-top: 20px;
	font-size: 1vw;
}
.kos-za-slike {
	display: flex;
	width: 100%;
	height: auto;
}
img {
	width: 80%;
}
.slika {
	padding-left: 80px;
}
.naslovic {
	font-weight: bold;
	font-size: 1vw;
	text-align: center;
}

.for-carousel {
	background-color: rgba(200, 176, 136, 1);
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
	name: "Louvre",
	data: function () {
		return {
			store,
		};
	},
};
</script>
