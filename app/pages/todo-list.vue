<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
const todos = ref(<{ id: number; name: string }[]>[])

onMounted(() =>{
    const savedTodos = localStorage.getItem('todos')
    if(savedTodos){
        todos.value= JSON.parse(savedTodos)
    }
})
watch(todos,(newVal)=>{
    localStorage.setItem('todos',JSON.stringify(newVal)) 
},{deep:true})

const addTodo = (task:string) =>{
    if(task.trim() !==''){
        todos.value.push({
            id:todos.value.length +1,
            name:task
        })
    }
}

const deleteTodo = (id:number) =>{
    todos.value = todos.value.filter(todo => todo.id !==id)
}
const editTodo = (id:number,newName:string) =>{
    const todo = todos.value.find(todo => todo.id ===id)
    if(todo){
        todo.name = newName
    }
}
</script>

<template >
    <Navbar/>
    <div class="container mx-auto p-4 mt-6 ">
        <div class=" mb-4">
            <h1 class="text-3xl font-bold my-1">My Tasks</h1>
            
            <p class="text-[#6E7989]">Manage your tasks and productive.</p>
        </div>
        <div class="mt-8 bg-white h-26 border-1 border-[#E6EBF2] shadow-sm rounded-lg p-4 flex  items-center">
            <div class="w-full">
                <AddTasks @add-task="addTodo"/> <!-- รับaddTo มาจาก componentลูก -->
            </div>
        </div>  
        <div>
            <h2 class="text-2xl font-bold my-4">Tasks</h2>
            <div class=" border-1 border-[#E6EBF2] shadow-md rounded-lg   overflow-y-auto">
                <TaskList :todos="todos" @delte-task ="deleteTodo " @edit-task="editTodo "/> <!-- ส่งตัวแปร todos ไปเป็น prop    แต่ถ้าใช้ todos="todos" มันจะส่ง string เฉยๆ -->
            </div>
        </div>
    </div>
</template>

