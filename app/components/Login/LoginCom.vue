<script setup lang="ts">
import { useUserStore } from "~~/stores/useUserStore";

const userStore = useUserStore()
//เรียกใช้action

function handleLogin(){
    userStore.login('Arrak')
}
</script>


<template>
    <div>
        <p>{{ userStore.welcomeMessage }}</p>
        <button @click="handleLogin">Login</button>
    </div>
</template>


