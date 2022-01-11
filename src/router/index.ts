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
    path: '/taginput',
    name: 'Taginput',
    component: () => import('../components/Taginput.vue')
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
  },
  {
    path: '/skeleton',
    name: 'Skeleton',
    component: () => import('../components/Skeleton.vue')
  },
  {
    path: '/notification',
    name: 'Notification',
    component: () => import('../components/Notification.vue')
  },
  {
    path: '/dropdown',
    name: 'Dropdown',
    component: () => import('../components/Dropdown.vue')
  },
  {
    path: '/datepicker',
    name: 'Datepicker',
    component: () => import('../components/Datepicker.vue')
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import('../components/Table.vue')
  },
  {
    path: '/modal',
    name: 'Modal',
    component: () => import('../components/Modal.vue')
  },
  {
    path: '/timepicker',
    name: 'Timepicker',
    component: () => import('../components/Timepicker.vue')
  },
  {
    path: '/sidebar',
    name: 'Sidebar',
    component: () => import('../components/Sidebar.vue')
  },
  {
    path: '/loading',
    name: 'Loading',
    component: () => import('../components/Loading.vue')
  },
  {
    path: '/radio',
    name: 'Radio',
    component: () => import('../components/Radio.vue')
  },
  {
    path: '/icon',
    name: 'Icon',
    component: () => import('../components/Icon.vue')
  },
  {
    path: '/select',
    name: 'Select',
    component: () => import('../components/Select.vue')
  },
  {
    path: '/field',
    name: 'Field',
    component: () => import('../components/Field.vue')
  },
  {
    path: '/carousel',
    name: 'Carousel',
    component: () => import('../components/Carousel.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
