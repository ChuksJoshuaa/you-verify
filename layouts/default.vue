<template>
    <div  className="flex relative">
        <div v-if="isSidebarOpen" class="w-72 fixed sidebar">
            <Sidebar />
        </div>
        <div v-else className="w-0">
            <Sidebar />
        </div>    
        <div v-if="isMedianSidebarOpen" className="fixed w-72 top-0 z-[9999]">
            <Sidebar @close-sidebar-modal="isMedianSidebarOpen = false"/>
        </div>    
        <div class="bg-main-bg min-h-screen w-full" :class="isSidebarOpen ? 'ml-72': (isMedianSidebarOpen && isSidebarOpen) ? '' : 'flex-2'">
            <div>
                <AppHeader />
                <div>
                    <div v-if="isSidebarOpen"  class="close-button mt-[-3.1em]">
                        <Icon @click="isSidebarOpen = false" name="fa6-solid:arrow-left" class="p-2 text-4xl rounded-full bg-main-bg shadow-lg cursor-pointer hover:bg-light-gray hover:text-[#fff]"></Icon>
                    </div>
                    <div v-else  class="p-2 mt-[-3.4em] mr-[3em] hide-icon">
                        <Icon @click="isSidebarOpen = true" name="fa6-solid:arrow-right" class="p-2 text-3xl rounded-full bg-main-bg shadow-lg cursor-pointer hover:bg-light-gray hover:text-[#fff]"></Icon>
                    </div>

                    <div class="show-icon p-2 mt-[-3.4em] mr-[3em]">
                        <Icon @click="isMedianSidebarOpen = true;" name="fa6-solid:arrow-right"
                            class="p-2 text-3xl rounded-full bg-main-bg shadow-lg cursor-pointer hover:bg-light-gray hover:text-[#fff]"></Icon>
                    </div>
                </div>
            </div>
            <div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>


<script setup>
const isSidebarOpen = useState('isSidebarOpen', () => true)
const isMedianSidebarOpen = useState('isMedianSidebarOpen', () => false)
</script>
