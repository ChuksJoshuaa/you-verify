<template>
    <div  className="flex relative">
        <div v-if="isSidebarOpen" class="w-72 fixed sidebar">
            <Sidebar />
        </div>
        <div v-else className="w-0">
            <Sidebar />
        </div>    
        <div class="bg-main-bg min-h-screen w-full" :class="isSidebarOpen ? 'md:ml-72' : 'flex-2'">
            <div>
                <AppHeader />
            </div>
            <div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>


<script setup>
const isSidebarOpen = useState('isSidebarOpen', () => true)
</script>
