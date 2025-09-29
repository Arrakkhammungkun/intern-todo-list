<script setup lang="ts">
import { defineProps } from 'vue'
import { useCartStore } from '~~/stores/useCartStore'
import { Product } from '~~/stores/useProductStore'
const props = defineProps<{ product: Product }>()

const cartStore = useCartStore()

function handleAdd() {
  cartStore.addToCart(props.product)
}
</script>

<template>
  <div class="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow">
    <img
      :src="product.image"
      :alt="product.productName || 'Product'"
      class="w-full h-48 object-cover rounded-md mb-4"
    />
    <h3 class="text-lg font-semibold text-gray-800">{{ product.productName || 'Unnamed Product' }}</h3>
    <p class="text-sm text-gray-600">{{ product.department || 'Unknown Department' }}</p>
    <p class="text-xl font-bold text-green-600 mt-2">฿{{ product.price ? parseFloat(product.price).toFixed(2) : 'N/A' }}</p>
    <button
      @click="handleAdd"
      class="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
    >
      Add to Cart
    </button>
  </div>
</template>