
// import {ref, onUnmounted} from 'vue' 
import * as firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'

export const firebaseApp= firebase.initializeApp({
 apiKey: "AIzaSyCftxJfKLda--unY5EJ5nboAeFkwa4D2uM",
  authDomain: "project-vuetify-458e1.firebaseapp.com",
  databaseURL: "https://project-vuetify-458e1-default-rtdb.firebaseio.com",
  projectId: "project-vuetify-458e1",
  storageBucket: "project-vuetify-458e1.appspot.com",
  messagingSenderId: "867605529478",
  appId: "1:867605529478:web:fadd646574305366f76207",
  measurementId: "G-ZBFYLR5W2Z"
})
  export default function install(Vue){
    Object.defineProperty(Vue.prototype,'$firebase', {
      get(){
        return firebaseApp

      }
    })
  }
  // const userCollection = db.collection('users');
 
//  export const createUser = user=>{
//    return userCollection.add(user)
//  }
//  export const getUser = async id=>{
//    const user = await userCollection.doc(id).get()
//    return user.exists ? user.data() : null
//  }
//  export const uptadeUser = (id, user)=>{
//    return userCollection.doc(id).uptade(user)
//  }
//  export const deleteUser = id=>{
//    return userCollection.doc(id).delete()
//  }
//  export const userLoadUser =()=>{
//    const users = ref([]) 
//    const close = userCollection.onSnapshot(snapshot =>{
//      users.value = snapshot.docs.map(doc =>({id: doc.id, ...doc.data()}))
//    })
//    onUnmounted(close)
//    return users

//   }


