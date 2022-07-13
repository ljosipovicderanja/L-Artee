<template>
  <div id="app">
    <div v-if="store.stanje == 0">
      <nav id="nav" class="navbar">
        <a class="navbar-brand">
          <router-link to="/muzeji">
            <font-awesome-icon icon="fa-solid fa-house" class="ikona"
          /></router-link>
          <router-link to="/muzeji">&nbsp;L'Arte</router-link>
        </a>
        <router-link to="/rezervacije">REZERVACIJE</router-link>
        <router-link to="/galerija">GALERIJA</router-link>
        <router-link to="/kontakt">KONTAKT</router-link>
        <a v-if="store.currentUser" href="#" @click.prevent="SignOut()"
          >ODJAVA</a
        >
        <p v-if="store.currentUser" class="email">{{ store.currentUser }}</p>
        <router-link v-if="!store.currentUser" to="/korisnik"
          >Postani korisnik / prijavi se</router-link
        >
        <br />
      </nav>
    </div>

    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  overflow-x: hidden;
  height: 100vh;
}

#nav {
  padding: 20px;
  background-color: black;
  position: absolute;
  width: 100%;
  z-index: 99;
  a {
    font-weight: 300;
    color: white;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.ikona {
  position: relative;
}
.ikona font-awesome-icon {
  position: absolute;
  top: 0px;
  right: 0px;
}
.email {
  font-weight: 300;
  color: white;
  margin-top: 12px;
}
</style>
<script>
import store from "@/store";
import { db, firebase } from "@/firebase";
import router from "@/router";

export default {
  data: function () {
    return {
      store,
    };
  },
  methods: {
    SignOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          store.authenticated = null;
          store.currentUser = false;
          console.log(store.currentUser);
        });
    },
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      const currentRoute = router.currentRoute;
      if (user) {
        store.authenticated = true;
        console.log("Current user: ", user.email);
        if (!currentRoute.meta.needsUser) {
          router.push({ name: "Muzeji" });
        }
        db.collection("user")
          .doc(user.email)
          .get()
          .then(function (doc) {
            if (doc.exists) {
              const data = doc.data();
              (store.email = data.email), console.log(store.email);
            } else {
              console.log("Document does not exist!");
            }
          })
          .catch(function (error) {
            console.log("Error getting document:", error);
          });
        store.currentUser = user.email;
      } else {
        console.log("Korisnik nije prijavljen");
        store.currentUser = null;
        if (currentRoute.meta.needsUser) {
          router.push({ name: "Rezervacije" });
        }
      }
    });
  },
};
</script>
