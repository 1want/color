import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
  import(/*webpackChunkName: 'home' */ '../views/home/index.vue')
const Search = () =>
  import(/*webpackChunkName: 'home' */ '../views/search/index.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '*',
    redirect: '/home'
  }
]

const router = new VueRouter({
  routes
})

export default router
