import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface CartItem {
  id: string
  productName: string
  price: string
  quantity: number
  image: string
  department: string
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])

  function addToCart(product: any) {
    if (!product?.id || !product?.price) return 
    const existing = items.value.find(item => item.id === product.id)
    if (existing) {
      existing.quantity += 1
    } else {
      items.value.push({
        id: product.id,
        productName: product.productName,
        price: product.price,
        quantity: 1,
        image: product.image,
        department: product.department,
      })
    }
  }

  function removeFromCart(id: string) {
    items.value = items.value.filter(item => item.id !== id)
  }

  function clearCart() {
    items.value = []
  }

  const totalPrice = computed(() =>
    items.value.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0)
  )

  const cartCount = computed(() => items.value.reduce((sum, item) => sum + item.quantity, 0))

  return { items, addToCart, removeFromCart, clearCart, totalPrice, cartCount }
})