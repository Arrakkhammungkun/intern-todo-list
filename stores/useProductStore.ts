import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Product {
  id: string
  createdAt: string
  price: string
  productName: string
  product: string
  department: string
  image: string
}

export const useProductStore = defineStore('product', () => {
  const products = ref<Product[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchProducts() {
    loading.value = true
    error.value = null
    try {
      const res = await $fetch<Product[]>('https://68d35a39214be68f8c6589da.mockapi.io/api/v1/store')
      products.value = res
    } catch (err) {
      error.value = 'เกิดข้อผิดพลาดในการโหลด'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  const productCount = computed(() => products.value.length)

  return { products, loading, error, fetchProducts, productCount }
})