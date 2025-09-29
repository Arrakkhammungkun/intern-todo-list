// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
  ],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
    nitro: {
    preset: 'node-server'  
  },
  css: ['~/assets/css/main.css'],
  vite: {
  plugins: [
    tailwindcss(),
  ],    
  },
})
