<template>
  <body>
    <div class="wallpaper"><Map /></div>
  </body>
</template>

<style scoped>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: black;
}
.wallpaper {
  background-color: rgb(217, 215, 107);
  width: 100%;
  height: 100vh;
  background-attachment: fixed;
  position: absolute;
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
