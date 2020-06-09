import Vue from 'vue'
import VueRouter from 'vue-router'

const Color = () =>
  import(/*webpackChunkName: 'home' */ '../views/color/index.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Color
  },
  {
    path: '/color',
    component: Color
  },
  {
    path: '*',
    redirect: '/color'
  }
]

const router = new VueRouter({
  routes
})

export default router
