<template>
	<body>
		<div class="boja">
			<br /><br /><br />
			<div class="container-za-slike">
				<div class="pocetneslike">
					<img src="zaslike/orsay1.jpg" style="height: 450px; width: auto" />
				</div>
				<div class="pocetneslike">
					<img src="zaslike/orsay2.jpg" style="height: 450px; width: auto" />
				</div>
				<div class="pocetneslike">
					<img src="zaslike/orsay3.jpg" style="height: 450px; width: auto" />
				</div>

				<div class="centered">MUZEJ D'ORSAY</div>
				<div class="centered1">MUZEJ D'ORSAY</div>
			</div>
			<br /><br />
			<div class="zatekst">
				<p>
					Povijest muzeja (njegove zgrade) prilično je neobična. U središtu
					Pariza na obali Seine, nasuprot vrtova Tuileries, muzej je postavljen
					u bivšoj željezničkoj stanici Orsay, izgrađenoj za Univerzalnu izložbu
					1900. godine.<br />
					Tako se sama zgrada mogla smatrati prvim "umjetničkim djelom". u Musee
					d'Orsay, koji prikazuje zbirke umjetnina iz razdoblja od 1848. do
					1914. godine.
				</p>
			</div>
			<br /><br />
			<div class="za-balu">
				<div class="bala1"></div>
				<div class="bala"></div>
				<div class="bala3"></div>
			</div>
			<br /><br />
			<!--
      <marquee
        ><img src="zaslike/palais.jpg" />&nbsp;<img src="zaslike/palais.jpg"
      /></marquee> -->
			<br />

			<!-- Slajder-->
			<div>
				<div class="for-carousel">
					<br />
					<div class="zuto">Pregled umjetnina:</div>

					<br />
					<div class="carousel">
						<ul class="slides">
							<input type="radio" name="radio-buttons" id="img-1" checked />
							<li class="slide-container">
								<div class="slide-image">
									<img src="zaslike/zaorsay1.jpg" />
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
									<img src="zaslike/zaorsay2.jpg" />
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
									<img src="zaslike/zaorsay6.jpg" />
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
									<img src="zaslike/zaorsay4.jpg" />
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
									<img src="zaslike/zaorsay5.jpg" />
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
					<br />
				</div>
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
	background-color: rgba(139, 133, 144, 1);
	width: 100%;
	height: 200%;
	background-attachment: fixed;
	position: absolute;
	/*z-index: -1;*/
}
.container-za-slike {
	display: flex;
	height: 210px;
	justify-content: center;
	text-align: center;
	width: auto;
}
.pocetneslike {
	min-width: 33.33%;
}
.pocetneslike img {
	width: 100%;
}

.centered {
	position: absolute;
	top: 20%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-weight: bold;
	opacity: 0.5;
	font-size: 40px;
	background-color: white;
	width: 800px;
	color: white;
}

.centered1 {
	position: absolute;
	top: 20%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-weight: bold;
	font-size: 40px;
}
.zatekst {
	text-align: left;
	margin-top: 280px;
	font-weight: bold;
	margin-left: 8%;
	margin-right: 8%;
}
.bala1 {
	height: 20px;
	width: 20px;
	background-color: rgb(240, 242, 229);
	border-radius: 25px;
	margin-left: 20px;
	margin-top: 7px;
}
.bala {
	height: 30px;
	width: 30px;
	background-color: rgb(240, 242, 229);
	border-radius: 25px;
	margin-left: 20px;
}
.bala3 {
	height: 20px;
	width: 20px;
	background-color: rgb(240, 242, 229);
	border-radius: 25px;
	margin-left: 20px;
	margin-top: 7px;
}
.za-balu {
	display: flex;
	margin-left: 700px;
}

.for-carousel {
	background-color: rgba(189, 171, 153, 1);
	width: 100%;
	height: 50%;
}
.zuto {
	font-weight: bold;
	margin-left: 8%;
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
	width: auto;
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
	name: "Orsay",
	data: function () {
		return {
			store,
		};
	},
};
</script>
