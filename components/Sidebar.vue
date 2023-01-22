

<template>
    <div>
        <div class="border-b-2 border-gray-200 h-[4.3rem] flex items-center bg-white">
            <img src="https://res.cloudinary.com/chuksmbanaso/image/upload/v1674124276/media/logo_iffgzd.svg" alt="youverify logo" class="image-box m-auto mt-[-2em] ml-[1.6em] cursor-pointer" />    
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
            <div class="w-full bg-dark-grey">
                <div v-for="item in link.links" :key="item.id" class="py-4 w-full">
                    <NuxtLink class="active-link py-3" to="/" @click="selectedOption = item.name" :class="selectedOption === item.name ? 'link-style':''">
                        <span class="span-link" :class="selectedOption === item.name ? 'option' :'text-gray-300'"><Icon name="Dashboard"></Icon></span>
                        <span class="span-link mx-2" :class="selectedOption === item.name ? 'option' :'text-gray-300'">{{ item.name }}</span>
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
