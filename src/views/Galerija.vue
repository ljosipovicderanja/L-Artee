<template>
  <body id="p2">
    <br /><br />
    <div class="zagaleriju">
      <div class="prikaz">
        <label v-if="store.currentUser" class="gumb">
          <font-awesome-icon icon="fa-solid fa-plus " class="iplus" />
          <input @change="handlechange" type="file" accept="image/*" />
        </label>
        <div v-for="img in images" :key="img" class="img2">
          <img :src="img" style="height: 300px" />
        </div>
      </div>
    </div>

    <div class="t1">
      <p>Podijeli svoje dojmove</p>
    </div>
    <hr
      style="
        width: 19%;
        text-align: left;
        margin-left: 0;
        border-color: black;
        margin-left: 15px;
      "
    />

    <div class="zakomentare">
      <div class="spoj1">
        <div v-if="store.currentUser" class="purple"></div>

        <div v-if="store.currentUser" class="dugi1">
          <input type="text" placeholder="Dodaj komentar..." class="kom" />
        </div>
        <div v-else>Ako želiš komentirati prijavi se...</div>
      </div>
      <div class="spoj2">
        <div class="plavi"></div>
        <div class="dugi2">
          <input type="text" class="kom" />
        </div>
      </div>
    </div>

    <br /><br /><br />
  </body>
</template>


<style>
input[type="file"] {
  display: none;
}

body#p2 {
  background-color: rgba(133, 198, 93, 1);
  padding: 50px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.zagaleriju {
  border-radius: 25px;
  background: rgb(235, 239, 116);
  padding: 20px;
  width: 100%;
  height: 350px;
  overflow-x: scroll;
}
.zakomentare {
  border-radius: 25px;
  background: rgb(235, 239, 116);
  padding: 25px;
  width: 100%;
  height: 400px;
  margin-top: 20px;
}
.t1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 35px;
  font-size: 20px;
  font-weight: bold;
  padding-left: 12px;
}
.prikaz {
  display: flex;
}
.img2 {
  padding: 5px;
}
.gumb {
  border-radius: 50px;
  background-color: rgb(237, 140, 71);
  width: 100px;
  height: 100px;
  margin-top: 100px;
  margin-left: 40px;
  cursor: pointer;
}
.iplus {
  margin: 42px;
  color: rgb(195, 56, 9);
}
.spoj1 {
  display: flex;
  margin: 25px;
}
.kom {
  border-radius: 25px;
  border-color: rgb(217, 205, 126);
  background-color: rgb(217, 205, 126);
  height: 50px;
  margin-top: 13px;
}
.purple {
  border-radius: 50px;
  background-color: #5f083a;
  width: 70px;
  height: 70px;
  margin-right: 30px;
}
.spoj2 {
  display: flex;
  margin: 25px;
}
.plavi {
  border-radius: 50px;
  background-color: #8661ff;
  width: 70px;
  height: 70px;
  margin-right: 30px;
}
</style>

<script>
import { storage } from "@/firebase";
import store from "@/store";
store.stanje = 0;
export default {
  name: "Galerija",
  data: function () {
    return {
      store,
      image: null,
      images: [],
    };
  },
  methods: {
    handlechange(event) {
      this.image = event.target.files[0];
      const storageref = storage.ref();
      const imagename = Date.now() + ".png";
      const imageref = storageref.child(`images/${imagename}`);
      imageref
        .put(this.image)
        .then((snapshot) => {
          console.log("slika uploadana");
          imageref.getDownloadURL().then((url) => this.images.unshift(url));
        })
        .catch((error) => console.log(error));
    },
    fetchimages() {
      const storageref = storage.ref("images");
      let array = [];
      storageref.listAll().then((imagelist) => {
        imagelist.items.forEach((imageref) => {
          imageref.getDownloadURL().then((url) => array.push(url));
        });
      });
      this.images = array;
    },
  },
  mounted() {
    this.fetchimages();
    console.log(this.images);
  },
};
</script>