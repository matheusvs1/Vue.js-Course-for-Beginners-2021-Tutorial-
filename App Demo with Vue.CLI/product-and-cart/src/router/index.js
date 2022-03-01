import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import productsAvailable from '../views/productsAvailable.vue'
import pastOrders from '../views/pastOrders.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/productsAvailable',
    name: 'Products Available',
    component: productsAvailable
  },
  {
    path: '/past-orders',
    name: 'Past orders',
    component: pastOrders
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
