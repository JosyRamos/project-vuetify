import Vue from 'vue'
import Router from 'vue-router'
import Implementacoes from '@/components/Implementacoes'


Vue.use(Router);

const routes = [
  {
    name: 'Implementacoes',
    path:'/',
    component:Implementacoes,
  }
]

const router = new Router({ routes })
export default router