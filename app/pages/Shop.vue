<script setup lang="ts">
import { onMounted } from 'vue'
import { useProductStore } from '~~/stores/useProductStore'
import { useCartStore } from '~~/stores/useCartStore'

const productStore = useProductStore()
const cartStore = useCartStore()

onMounted(() => {
  productStore.fetchProducts()
})
</script>

<template>
  <div class="container mx-auto p-4">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold text-gray-800">Shopping</h1>
        <NuxtLink to="/Cart" >
        <div class="text-lg">
          ตะกร้าสินค้า: <span class="font-semibold">{{ cartStore.cartCount }} ชิ้น</span> (฿{{ cartStore.totalPrice.toFixed(2) }})
        </div>
      </NuxtLink>
    </div>
    <div v-if="productStore.loading" class="text-center text-gray-600">กำลังโหลด...</div>
    <div v-else-if="productStore.error" class="text-center text-red-600">{{ productStore.error }}</div>
    <div v-else-if="!productStore.products.length" class="text-center text-gray-600">ไม่มีสินค้า</div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <ProductCard v-for="p in productStore.products" :key="p.id" :product="p" />
    </div>
  </div>
</template>