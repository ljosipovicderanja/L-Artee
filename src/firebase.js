import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBoBmJ88Sqt9PaTomdzSmwE-BhgZbJHjhw",
    authDomain: "l-arte.firebaseapp.com",
    projectId: "l-arte",
    storageBucket: "l-arte.appspot.com",
    messagingSenderId: "495350972316",
    appId: "1:495350972316:web:fc4f4f50c3af1e865a1259"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();
  let storage = firebase.storage();

  export { 
      firebase, db, storage 
  };