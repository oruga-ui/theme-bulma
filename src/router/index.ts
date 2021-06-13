import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/steps',
    name: 'Steps',
    component: () => import('../components/Steps.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
