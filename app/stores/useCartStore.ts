// /stores/useCartStore.ts
import { defineStore } from 'pinia'

interface CartItem {
  id: string
  productName: string
  price: string
  quantity: number
  image: string
  department: string
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),

  getters: {
    //reduceฟังชั่น array ไว้รวมค่าจากarray เป็นค่าเดียว
    cartCount: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),

    totalPrice: (state) =>
      state.items.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0),
  },

  actions: {
    addToCart(product: Product) {
      if (!product?.id || !product?.price) return
      const existing = this.items.find((item) => item.id === product.id)
      if (existing) {
        existing.quantity += 1
      } else {
        this.items.push({
          id: product.id,
          productName: product.productName,
          price: product.price,
          quantity: 1,
          image: product.image,
          department: product.department,
        })
      }
    },

    removeFromCart(id: string) {
      this.items = this.items.filter((item) => item.id !== id)
    },

    clearCart() {
      this.items = []
    },

    decreaseQuantity(id: string) {
      const existing = this.items.find((item) => item.id === id)
      if (existing) {
        if (existing.quantity > 1) {
          existing.quantity -= 1
        } else {
          this.removeFromCart(id)
        }
      }
    },
  },
})
