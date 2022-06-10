import {createRouter, createweHistory} from 'vue-router'
// import { component } from 'vue/types/umd'

const routes =[
  {
    path:'/',
    name:'novoComponente',
    component:novoComponente
  },
]

const router = createRouter({
  history:createweHistory(),
  routes
})
export default router