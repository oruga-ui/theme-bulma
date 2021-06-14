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
  },
  {
    path: '/slider',
    name: 'Slider',
    component: () => import('../components/Slider.vue')
  },
  {
    path: '/pagination',
    name: 'Pagination',
    component: () => import('../components/Pagination.vue')
  },
  {
    path: '/collapse',
    name: 'Collapse',
    component: () => import('../components/Collapse.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('../components/Form.vue')
  },
  {
    path: '/autocomplete',
    name: 'Autocomplete',
    component: () => import('../components/Autocomplete.vue')
  },
  {
    path: '/tagsinput',
    name: 'Tagsinput',
    component: () => import('../components/Tagsinput.vue')
  },
  {
    path: '/button',
    name: 'Button',
    component: () => import('../components/Button.vue')
  },
  {
    path: '/tabs',
    name: 'Tabs',
    component: () => import('../components/Tabs.vue')
  },
  {
    path: '/tooltip',
    name: 'Tooltip',
    component: () => import('../components/Tooltip.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
