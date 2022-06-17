import firebase from "firebase/app";
import "firebase/firestore";

 const firebaseConfig={
  apiKey: "AIzaSyCftxJfKLda--unY5EJ5nboAeFkwa4D2uM",
  authDomain: "project-vuetify-458e1.firebaseapp.com",
  databaseURL: "https://project-vuetify-458e1-default-rtdb.firebaseio.com",
  projectId: "project-vuetify-458e1",
  storageBucket: "project-vuetify-458e1.appspot.com",
  messagingSenderId: "867605529478",
  appId: "1:867605529478:web:fadd646574305366f76207",
  measurementId: "G-ZBFYLR5W2Z"
}
  

 firebase.initializeApp(firebaseConfig);
 export const db = firebase.firestore();

 


