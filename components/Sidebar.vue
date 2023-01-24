

<template>
    <div class="sidebar-container">
        <div class="border-b-1 border-gray-100 h-[5rem] flex items-center bg-white" @click="$emit('close-sidebar-modal')">
            <img src="https://res.cloudinary.com/chuksmbanaso/image/upload/v1674124276/media/logo_iffgzd.svg" alt="youverify logo" class="image-box m-auto mt-[-1.5em] ml-[1.6em] cursor-pointer" />
                <div class="hide-median-icon">
                    <Icon  name="fa6-solid:arrow-left"
                        @click="$emit('close-sidebar-modal')"
                        class="p-2 text-4xl rounded-full bg-main-bg shadow-lg cursor-pointer hover:bg-light-gray hover:text-[#fff]">
                    </Icon>
                </div>     
        </div>
        <div class="h-[6.4em] bg-dark-blue">
            <div class="py-3 px-6">
                <h1 class="font-bold text-gray-300 text-family text-lg md:text-xl">
                    Cheta And <br /> Daughters Limited
                </h1>
                <p class="font-medium text-gray-300 text-family text-md md:text-lg">
                    RC12345678
                </p>
            </div>
        </div>
        <div class="bg-blue-gray h-screen">
            <div v-for="link in sidebarData" :key="link.title">
            <div class="w-full">
                <div v-for="item in link.links" :key="item.id" class="py-2 w-full">
                    <NuxtLink  to="/" >
                        <div class="flex justify-start w-full px-4 py-3" @click="selectedOption = item.name" :class="selectedOption === item.name ? 'link-style':''">
                            <span class="span-link" :class="selectedOption === item.name ? 'option' :'text-gray-300'" >
                                <Icon :name="`${item.name}`"></Icon>
                            </span>
                            <span class="span-link mx-3" :class="selectedOption === item.name ? 'option' :'text-gray-300'">{{ item.name }}</span>
                        </div>
                    </NuxtLink>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import links from "~~/utils/sidebarData";
const sidebarData = useState('sidebarData', () => links)
const selectedOption = useState('selectedOption', () => "Dashboard")


</script>
