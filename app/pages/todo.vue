<script setup>
const Best_URL ='https://jsonplaceholder.typicode.com/posts'

const todos= ref([])
const loadtodo = async()=>{
    const {data} =await useFetch(`${Best_URL}`) 
    todos.value= data.value
}
const todotext= ref('')

const addTodo =async () => {
    try{
            await useFetch(`${Best_URL}`,{
        method:'post',
        body:{
            name:todotext.value,
        }
    })
    await loadtodo()
    }catch(erorr){
        console.error(erorr)
    }

}
loadtodo()
</script>


<template>
  <div>
    <h1>เกี่ยวกับเรา</h1>
    <NuxtLink to="/">กลับหน้าแรก</NuxtLink>
  </div>
  <div>
    {{ todotext }}
    <input v-model="todotext" type="text">
    <button @click="addTodo()">Add</button>
  </div>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
        {{ todo.id }}
        {{ todo.title}}
    </li>
  </ul>
</template>
