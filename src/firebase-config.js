import firebase from 'firebase';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAnoLhtoiVcDcPEcsrQRBT2Jywp8sY3Hbs",
    authDomain: "todoapp-c50fa.firebaseapp.com",
    projectId: "todoapp-c50fa",
    storageBucket: "todoapp-c50fa.appspot.com",
    messagingSenderId: "1093683271985",
    appId: "1:1093683271985:web:301b0489a0aa221935b810",
    measurementId: "G-RMEK7416C2"
  };

const fire = firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
export{db}
export default {fire}