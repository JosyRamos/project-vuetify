import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VMask from "v-mask"
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate);

Vue.use(VMask);
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
