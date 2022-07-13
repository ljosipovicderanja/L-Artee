<template>
  <body id="p2">
    <br /><br />
    <div class="zagaleriju">
      <div class="prikaz">
        <label v-if="store.currentUser" class="gumb">
          <font-awesome-icon icon="fa-solid fa-plus " class="iplus" />
          <input @change="handlechange" type="file" accept="image/*" />
        </label>
        <label v-else @click="handleClick" class="gumb">
          <font-awesome-icon icon="fa-solid fa-plus " class="iplus" />
        </label>
        <div v-for="img in images" :key="img" class="img2">
          <img :src="img" style="height: 300px; width: auto" />
        </div>
      </div>
    </div>

    <div class="t1">
      <p>Podijeli svoje dojmove</p>
    </div>
    <!--
      <hr
      style="
        width: 19%;
        text-align: left;
        margin-left: 0;
        border-color: black;
        margin-left: 15px;
      "
    />
    -->

    <div class="zakomentare">
      <form class="input-group" @submit.prevent="dodajkomentar">
        <input
          v-if="store.currentUser"
          class="form-control"
          placeholder="Napisi komentar..."
          v-model="novikomentar"
        />
        <input
          v-else
          @click="handleClick"
          class="form-control"
          placeholder="Napisi komentar..."
          v-model="novikomentar"
        />
        <button
          class="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
        >
          Objavi
        </button>
      </form>
      <div v-if="error" class="error">{{ error }}</div>
      <div
        class="komentariContainer"
        v-for="komentar in komentari"
        :key="komentar.id"
      >
        <div class="komentarContainer">
          <div class="">
            <strong>{{ komentar.user || "unknown" }}</strong>
          </div>
          <div class="smece">
            <div class="">{{ komentar.komentar }}</div>
            <div style="margin-left: auto">
              <font-awesome-icon
                v-if="store.currentUser && komentar.user === store.currentUser"
                style="
                  font-size: 1.5rem !important;
                  cursor: pointer;
                  color: #5f083a;
                "
                icon="fa-solid fa-trash-can"
                @click="deleteKomentar(komentar.id)"
              />
            </div>
          </div>
          <div class="datum">{{ moment(komentar.objavljeno).fromNow() }}</div>
        </div>
      </div>
    </div>

    <br /><br /><br />
  </body>
</template>


<style>
.smece {
  display: flex;
}

.komentariContainer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.error {
  background-color: rgba(255, 100, 100, 0.8);
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 10px;
  color: white !important;
}

.input-group {
  margin-bottom: 2rem;
}

.datum {
  margin-left: auto;
  color: grey;
}

.komentarContainer {
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.8);
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 5px 5px 10px grey;
}

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
  padding: 15px;
  width: 100%;
  height: 350px;
  overflow-x: scroll;
  overflow-y: hidden;
}

/* width */
.zagaleriju::-webkit-scrollbar {
  width: 10px;
}

/* Track */
.zagaleriju::-webkit-scrollbar-track {
  background: rgb(253, 255, 195);
}

/* Handle */
.zagaleriju::-webkit-scrollbar-thumb {
  background: rgb(209, 209, 113);
}
/*rgb(188, 190, 102)*/
/* Handle on hover */
.zagaleriju::-webkit-scrollbar-thumb:hover {
  background: rgb(143, 167, 86);
}

.zakomentare {
  border-radius: 25px;
  background: rgb(235, 239, 116);
  padding: 25px;
  width: 100%;
  height: fit-content;
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
  padding: 4px;
}
.img2:last-child {
  padding-right: 1rem;
}

.gumb {
  border-radius: 50px;
  background-color: #5f083a;
  width: 100px;
  height: 100px;
  margin-top: 100px;
  margin-left: 20px;
  margin-right: 30px;
  cursor: pointer;
}
.iplus {
  margin: 42px;
  color: white;
}
.spoj1 {
  display: flex;

  margin: 25px;
}

.dugi1 {
  width: 100%;
}

.kom {
  border-radius: 25px;
  border-color: rgb(217, 205, 126);
  background-color: rgb(217, 205, 126);
  height: 50px;
  padding-right: 85%;
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
import { storage, db } from "@/firebase";
import store from "@/store";
store.stanje = 0;
export default {
  name: "Galerija",
  data: function () {
    return {
      store,
      image: null,
      images: [],
      novikomentar: "",
      komentari: [],
      error: "",
    };
  },
  methods: {
    handleClick() {
      return this.$router.push("/korisnik");
    },
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
    async dodajkomentar() {
      if (this.novikomentar.length < 5) {
        this.error = "Komentar mora sadržavati bar 5 znakova.";
        setTimeout(() => {
          this.error = "";
        }, 5000);
        return;
      }
      await db.collection("komentari").add({
        user: this.store.currentUser,
        komentar: this.novikomentar,
        objavljeno: Date.now(),
      });
      this.novikomentar = null;
      this.getkomentar();
    },
    async deleteKomentar(id) {
      await db
        .collection("komentari")
        .doc(id)
        .delete()
        .then(() => this.getkomentar())
        .catch((e) => console.log(e));
    },
    getkomentar() {
      let arr = [];
      let querry = db
        .collection("komentari")
        .orderBy("objavljeno", "desc")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            arr.push({ id: doc.id, ...doc.data() });
          });
        });
      this.komentari = arr;
    },
  },

  /* 
  
  ...doc.data() => {
    {
      user: 'test@test.com',
      komentar: 'test',
      ...
    }
  }
  
  */
  mounted() {
    this.fetchimages();
    this.getkomentar();
    console.log(this.images);
    // this.getkomentar();
  },
};
</script>