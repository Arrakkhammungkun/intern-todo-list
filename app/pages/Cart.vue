<script setup lang="ts">
import { useCartStore } from '../stores/useCartStore'
import CartItem from '../components/Product/CartItem.vue' 

const cartStore = useCartStore()
console.log('Cart items:', cartStore.items)
function clearCart() {
  cartStore.clearCart()
}
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>

    <div v-if="!cartStore.items.length" class="text-center text-gray-600">
      สินค้าว่างเปล่า <NuxtLink to="/Shop" class="text-blue-600 hover:underline">กลับหน้า shopping</NuxtLink>
    </div>
    <div v-else>
      <CartItem v-for="item in cartStore.items" :key="item.id" :item="item" />
      <div class="mt-6 flex justify-between items-center">
        <p class="text-xl font-bold">Total: ฿{{ cartStore.totalPrice.toFixed(2) }}</p>
        <button
          @click="clearCart"
          class="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
        >
          Clear Cart
        </button>
      </div>
    </div>
  </div>
</template>