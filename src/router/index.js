import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Newcard from '../views/Newcard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/new-card',
    name: 'Newcard',
    component: Newcard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
