import { defineStore } from 'pinia'

// 1) กำหนด type ของ state
interface UserState {
  name: string
  isLoggedIn: boolean
}

// 2) สร้าง store
export const useUserStore = defineStore('user', {
  // ใส่ type ใน state
  state: (): UserState => ({
    name: '',
    isLoggedIn: false
  }),

  getters: {
    welcomeMessage: (state) => `Welcome, ${state.name}!`
    // หรือ welcomeMessage() { return `Welcome, ${this.name}!` }
  },

  // 4) actions ใช้ตัวเล็กตาม convention
  actions: {
    login(name: string) {
      this.name = name
      this.isLoggedIn = true
    },
    logout() {
      this.name = ''
      this.isLoggedIn = false
    }
  }
})
