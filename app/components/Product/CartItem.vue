<script setup lang="ts">
import { defineProps } from 'vue'
import { useCartStore } from '~~/stores/useCartStore'

const props = defineProps<{ item: any }>()

const cartStore = useCartStore()

function handleRemove() {
  cartStore.removeFromCart(props.item.id)
}
</script>

<template>
  <div class="flex justify-between items-center border-b p-4 bg-white">
    <div class="flex items-center space-x-4">
      <img :src="props.item.image" :alt="item.productName" class="w-16 h-16 object-cover rounded-md" />
      <div>
        <p class="font-semibold text-gray-800">{{ item.productName }}</p>
        <p class="text-sm text-gray-600">x {{ item.quantity }}</p>
      </div>
    </div>
    <div class="flex items-center space-x-4">
      <span class="font-bold text-green-600">฿{{ (parseFloat(item.price) * item.quantity).toFixed(2) }}</span>
      <button
        @click="handleRemove"
        class="bg-red-600 text-white py-1 px-3 rounded-md hover:bg-red-700 transition-colors"
      >
        Remove
      </button>
    </div>
  </div>
</template>