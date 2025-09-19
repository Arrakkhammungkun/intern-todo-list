

<!--AddTasks-->
<script setup lang="ts">
    import { ref } from "vue"
    const todos = ref([])
    const name = ref('')
    const emit = defineEmits(['add-task'])

    const addTodo = () =>{
        if(name.value.trim() !==''){
            emit('add-task',name.value)
            name.value=''
        }
    }

</script>
<template>

    <div class="w-full flex p-2">
        <input type="text" key="task" v-model="name" placeholder="Add a new task..." class="w-full border shadow-sm border-[#DFE5EC] rounded px-4 py-2 mr-2 bg-[#F8FAFC]">
        <button @click="addTodo" class="bg-blue-500 text-white px-4 py-2 rounded font-bold whitespace-nowrap" >Add Task</button>
    </div>
</template>
