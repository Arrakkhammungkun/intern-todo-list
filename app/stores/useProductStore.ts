import axios from 'axios'
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

export const useProductStore = defineStore('product', {
  state: () => ({
    url: {
      list: 'https://68d35a39214be68f8c6589da.mockapi.io/api/v1/store',
    },
    products: [] as Product[],
    loading: false,
    error: null as string | null,
  }),

  getters: {
    productCount: (state) => state.products.length,
  },

  actions: {
    async getProducts() {
      this.loading = true
      this.error = null
      try {
        const res = await axios.get(this.url.list)
        if (res.status === 200) {
          this.products = res.data
          return res.data
        } else {
          return false
        }
      } catch (error: any) {
        this.error = 'เกิดข้อผิดพลาดในการโหลดสินค้า'
        console.error(error)
        return false
      } finally {
        this.loading = false
      }
    },

  },
})
