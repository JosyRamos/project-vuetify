import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VMask from "v-mask";
import Vuelidate from 'vuelidate';
import VueRouter from 'vue-router';
import Implementacoes from './components/Implementacoes.vue';
import { initializeApp }from "firebase/app";


Vue.use(Vuelidate);
Vue.use(VueRouter);

initializeApp({
  apiKey: "AIzaSyCftxJfKLda--unY5EJ5nboAeFkwa4D2uM",
  authDomain: "project-vuetify-458e1.firebaseapp.com",
  projectId : "project-vuetify-458e1",
  storageBucket:"project-vuetify-458e1.appspot.com",
  messagingSenderId: "867605529478",
  appId: "1:867605529478:web:fadd646574305366f76207",
  measurementId:"G-ZBFYLR5W2Z"

})

const router = new VueRouter({
  routes:[
    {
    path: '/cadastro',
    component: Implementacoes
   },
   {
     path: '/',
     redirect: '/cadastro'
   }
  ]

})

Vue.use(VMask);
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
