<template>
  <main class="wrapper">
    <h1>Products</h1>

    <div class="card-container">
      <ProductCard v-for="(product, index) in inventory.slice(0,6)"
        :key="product.id"
        class="card"
        :index="index"
        :product="product"
        :addToCart="addToCart"/>
    </div>
  </main>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'Product-available',
  props: ['inventory', 'addToCart'],
  components: {
    ProductCard: ProductCard
  }
}
</script>
<style scoped>
</style>
