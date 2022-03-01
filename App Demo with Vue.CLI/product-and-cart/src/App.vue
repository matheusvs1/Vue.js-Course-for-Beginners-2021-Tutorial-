<template>
  <header class="top-bar spread">
    <nav class="top-bar-nav">
      <router-link to="/" class="top-bar-link">
        <i class="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </router-link>
      <router-link to="/productsAvailable" class="top-bar-link">
        <span>Products</span>
      </router-link>
      <router-link to="/past-orders" class="top-bar-link">
        <span>Past Orders</span>
      </router-link>
    </nav>
    <div @click="toggleSideBar" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart ({{ totalQuantity }})</span>
    </div>
  </header>
  <router-view :inventory="inventory" :addToCart="addToCart"/> <!--router-view is like a temporaly placeholder from any contens i'll want to show in future-->
  <Sidebar
    v-if="showSideBar" :toggle="toggleSideBar" :cart="cart" :inventory="inventory" :remove="removeitem"
  />
</template>
<!--rounter-link and rounter-view, both are componets came form 'router'-->
<script>
import Sidebar from '@/components/Sidebar.vue'
import food from './food.json'

export default {
  components: {
    Sidebar
  },
  data () {
    return {
      showSideBar: false,
      inventory: food,
      cart: {}
    }
  },
  computed: {
    totalQuantity () {
      return Object.values(this.cart).reduce((acc, curr) => {
        return acc + curr
      }, 0)
    }
  },
  methods: {
    addToCart (name, quantity) {
      if (!this.cart[name]) this.cart[name] = 0
      this.cart[name] += quantity
    },
    toggleSideBar () {
      this.showSideBar = !this.showSideBar
    },
    removeitem (name) {
      delete this.cart[name]
    }
  }
}
</script>
<style scoped>

</style>
