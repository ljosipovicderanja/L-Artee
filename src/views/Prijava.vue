<template>
  <div class="pozadina">
    <br /><br />
    <div class="bijeli">
      <br />
      <h1>PRIJAVA</h1>
      <!-- registracija???-->
      <br />
      <div class="prviinput">
        <label for="email">E-mail :&nbsp;&nbsp;</label>
        <input
          v-model="email"
          type="email"
          style="border-radius: 20px; background-color: rgb(188, 201, 176)"
        />
      </div>
      <div class="prviinput">
        <label for="pass">Lozinka :&nbsp;</label>
        <input
          v-model="password"
          type="password"
          style="border-radius: 20px; background-color: rgb(188, 201, 176)"
        />
      </div>
      <div class="zapotvrdit">
        <input type="button" @click="login()" value="POTVRDI" class="potvrdi" />
      </div>
    </div>
  </div>
</template>


<script>
import store from "@/store";
import { firebase } from "@/firebase";
import router from "@/router";

store.stanje = 0;
export default {
  name: "Prijava",
  data: function () {
    return {
      store,
      email: "",
      password: "",
    };
  },
  methods: {
    login () {
      

      console.log('Prijava: ' + this.email);
      console.log(this.$router);
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then( (result) => {
        console.log('Uspješna prijava', result);
        
      })
      .catch(function (e) {
        console.error('Greška',e);
      });
    }
  }
};
</script>

<style>
.pozadina {
  width: 100%;
  height: 100%;
  background-color: #7e0000;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-attachment: fixed;
  position: absolute;
}
body#p3 {
  padding: 25px;

  color: rgb(0, 0, 0);
  height: 100%;
}
.bijeli {
  background-color: rgb(255, 255, 255);
  height: 550px;
  margin: 20px;
  border-radius: 40px;
  margin: auto;
  width: 40%;
  /*border: 3px solid #73ad21;*/
  padding: 10px;
  margin-top: 80px;
}
h1 {
  text-align: center;
  margin: 10px;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 25px;
  margin-top: 20px;
}
.prviinput {
  text-align: center;
  margin: 10px;
  font-size: 25px;
  border-radius: 20px;
  padding: 20px;
}
.potvrdi {
  background-color: rgba(133, 198, 93, 1);
  border-radius: 20px;
  width: 150px;
  height: 40px;
  font-weight: bold;
}
.zapotvrdit {
  text-align: center;
  margin-top: 70px;
}
</style>

