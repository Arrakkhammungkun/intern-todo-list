<script setup>
const {data} =await useAsyncData('hello',() =>$fetch('api/hello'))
</script>
<template>
  <div class="bg-black text-white min-h-screen flex flex-col items-center justify-center space-y-4">
    <h1 class="text-2xl font-bold">สวัสดีจาก Nuxt 3</h1>
    <NuxtLink to="/todo">ไปหน้า todo</NuxtLink>
    <NuxtLink to="/todo-list">ไปหน้า todo-list</NuxtLink>
    <NuxtLink to="/shop">ไปหน้า shop</NuxtLink>
    <div v-if="data">
        {{ data.message }}
    </div>
    <h1 class="text-3xl font-bold underline bg-blue-500">
    Hello world!
  </h1>
  <LoginCom/>
  </div>
</template>
