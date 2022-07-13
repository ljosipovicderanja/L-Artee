<template>
	<div class="pozadina">
		<div class="vodoravno">
			<div class="crni1">
				<router-link :to="{ name: 'Louvre' }">
					<img src="zaslike/louvre.jpg" />
					<h1>LOUVRE</h1>
				</router-link>
			</div>

			<div class="crni1">
				<router-link to="/orsay">
					<img src="zaslike/orsay.jpg" />
					<h1>MUZEJ D'ORSAY</h1>
				</router-link>
			</div>
			<div class="crni1">
				<router-link :to="{ name: 'Palais' }">
					<img src="zaslike/palais.jpg" />
					<h1>GRAND PALAIS</h1>
				</router-link>
			</div>
			<div class="crni1">
				<router-link :to="{ name: 'Vangogh' }">
					<img src="zaslike/van-gogh11.jpg" />
					<h1>MUZEJ VAN GOGH</h1>
				</router-link>
			</div>
		</div>
	</div>
</template>

<style>
.pozadina {
	background-color: rgba(16, 108, 53, 1);
	width: 100%;
	min-height: 100%;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	background-attachment: fixed;
	position: absolute;
}
.crni1 {
	background-color: black;

	width: 294px;
	height: 295px;
	padding: 10px;
}
.vodoravno {
	margin-top: 18%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5rem;
}
img {
	width: 275px;
}
h1 {
	margin: 20px;
	color: black;
	font-size: 28px;
	font-weight: bold;
}
</style>

<script>
import store from "@/store";
store.stanje = 0;
export default {
	name: "Muzeji",
	data: function () {
		return {
			store,
		};
	},
};
</script>
