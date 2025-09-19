<script setup>
const MenuItem = ['Home','Projects','Teams']
</script>

<template>

    <div class="bg-[#F8FAFC] h-16 border-1 border-[#E6EBF2] flex justify-between items-center p-1 px-4">
        <div class=" w-full text-2xl font-bold">
            ToDo-Lists
        </div>
        <div class=" w-full flex justify-end ">

            <div class="flex">
                <ul class="text-[#6E7989]">
                    <li v-for="item in MenuItem" :key="item" class="inline-block px-4 py-2 hover:text-black cursor-pointer">
                        {{ item }}
                    </li>
                </ul>
            </div>
            <div>
                <img class="w-10 h-10 rounded-full" src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="Avatar"/>
            </div>
        </div>
    </div>
</template>