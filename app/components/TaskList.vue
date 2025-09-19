

<script setup lang="ts">
import { ref } from "vue"

defineProps<{ todos:{id:number, name:string}[] }>()
const emit = defineEmits(['delte-task','edit-task']) //สร้าง event เพื่อเรียกใช้ฟังชันจากหน้าหลัก

const deleteTodo=(id:number) =>{
    emit('delte-task',id) //ส่ง id ไป หน้า หลัก
}

const editid = ref<number |null>(null)
const newName = ref('')

const startEdit = (id:number,name:string) =>{
    editid.value = id
    newName.value = name
}
const saveEdit = (id:number) =>{
    if(newName.value.trim() !==''){
        emit('edit-task',id,newName.value) 
        editid.value = null
        newName.value = ''
    }
}
const cancelEdit = () =>{
    editid.value = null
    newName.value = ''
}
</script>
<template>
  <ul class="bg-white rounded-lg space-y-2">
    <li v-for="todo in todos" :key="todo.id" class="border-b border-[#E6EBF2] p-4 flex justify-between items-center">
      <template v-if="editid === todo.id">
        <input v-model="newName" type="text" class="border border-[#DFE5EC] rounded px-2 py-1 mr-4 w-full">
        <div class="space-x-2 whitespace-nowrap">
        <button @click="saveEdit(todo.id)" class="bg-[#2AC769] text-white px-3 py-1 rounded mr-2">
          Save
        </button>
        <button @click="cancelEdit" class="bg-[#FF7E8D] text-black px-3 py-1 rounded">
          Cancel
        </button>
        </div>

      </template>
      <template v-else>
        <span class="text-[#525E6F]">{{todo.name}}</span>
        <div class="space-x-2  ">
          <button @click="startEdit(todo.id,todo.name)" class="bg-[#F1F5F9] text-[#546174] px-3 py-1 rounded">
            Edit
          </button>
          <button @click="deleteTodo(todo.id)" class="bg-[#FEF2F2] text-[#E03C3C] px-3 py-1 rounded">
            Delete
          </button>
        </div>
      </template>

    </li>
  </ul>
</template>
