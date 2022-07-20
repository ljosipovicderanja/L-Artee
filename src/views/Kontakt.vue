<template>
  <body>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <div class="responzivna">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.9660869534264!2d13.845919915500017!3d44.86298517909841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477cd338adff6e35%3A0x97f9677c06c5b5c6!2sFakultet%20informatike%20u%20Puli!5e0!3m2!1shr!2shr!4v1658244609263!5m2!1shr!2shr"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <p>
        <a href="mailto:larte@gmail.com"
          ><font-awesome-icon
            icon="fa-solid fa-envelope"
          />&nbsp;larte@gmail.com</a
        >
        <br /><br />
        <font-awesome-icon icon="fa-solid fa-clock" />&nbsp;Radno vrijeme
        službe:&nbsp;PON - PET : 0 - 24h
      </p>
    </div>
  </body>
</template>

<style scoped>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: rgb(217, 215, 107);
  font-weight: bold;
  font-size: 1.2vw;
}
.responzivna {
  overflow: hidden;
  padding-bottom: 35%;
  position: relative;
  height: 0;
  margin-top: 9rem;
  /*border: 7px solid red;*/
}
.responzivna iframe {
  left: 6rem;
  height: 100%;
  width: 40%;
  position: absolute;
}
p {
  margin-left: 50rem;
  margin-top: 13%;
}

/*.wallpaper {
  width: 100%;
  height: 100vh;
  background-attachment: fixed;
  position: absolute;
}*/
a:link {
  color: black;
}
a:hover {
  color: rgb(179, 122, 18);
}
</style>

<script>
//import Map from "./components/Map.vue";
import store from "@/store";
store.stanje = 0;

export default {
  name: "Kontakt",
  //  components: {
  //    Map,
  //  },
  data: function () {
    return {
      store,
    };
  },
};
</script>
