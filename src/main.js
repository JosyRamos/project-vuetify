import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VMask from "v-mask";
import Vuelidate from 'vuelidate';
import VueRouter from 'vue-router';
import Implementacoes from './components/Implementacoes.vue';
import FirebaseVue from './firebase';


Vue.use(Vuelidate);
Vue.use(VueRouter);
Vue.use(FirebaseVue);
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
