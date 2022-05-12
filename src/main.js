import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VMask from "v-mask";
import Vuelidate from 'vuelidate';
import { initializeApp }from "firebase/app";
import router from '@/router'


Vue.use(Vuelidate);


initializeApp({
  apiKey: "AIzaSyCftxJfKLda--unY5EJ5nboAeFkwa4D2uM",
  authDomain: "project-vuetify-458e1.firebaseapp.com",
  projectId : "project-vuetify-458e1",
  storageBucket:"project-vuetify-458e1.appspot.com",
  messagingSenderId: "867605529478",
  appId: "1:867605529478:web:fadd646574305366f76207",
  measurementId:"G-ZBFYLR5W2Z"

})



Vue.use(VMask);
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router,
}).$mount('#app')
