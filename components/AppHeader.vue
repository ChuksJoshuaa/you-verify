<script>
export default {
  name: "AppHeader",
}
</script>

<template>
  <div class="ml-[3em] h-[5rem] relative w-full bg-light-gray px-2">
    <div class="py-2 select-top z-10">
      <select name="select" v-model="selectedValue" class="z-5 select-body outline-none border border-gray-100 text-md capitalize py-1 rounded cursor-pointer bg-gray-100 text-gray-900">
        <option value="" disabled selected>Select</option>
        <option :value="option.id" class=" outline-none capitalize bg-white text-gray-900 text-lg p-2"  v-for="option in options" :key="option.id" >{{ option.label }}</option>
      </select>
      <div class="relative">
        <input v-model="inputValue" type="text" tabindex="1" class="w-full input-box bg-gray-100 border-l-1 border-gray-300 p-2 outline-none" placeholder="Search for anything here" />
        <button class="absolute right-[1em] top-[13px]">
          <Icon @click="log" name="bi:search" class="cursor-pointer font-bold text-gray-600 text-lg md:text-2xl"></Icon>
        </button>
      </div>
      <div class="px-3 profile-check w-full">
        <div class="relative mr-3">
          <Icon name="bi:bell-fill"
            class="ml-2 md:ml-[1em] font-bold cursor-pointer text-[#22A6B5] h-[62px] w-[62px] p-4 shadow-lg bg-main-bg rounded-lg"></Icon>
            <h4 class="absolute top-0 right-0 text-xl text-center font-bold text-gray-50 rounded-full bg-red-600 h-[30px] w-[30px]">2</h4>
         </div>
        <img src="https://res.cloudinary.com/chuksmbanaso/image/upload/v1647635322/media/pic2_c0wzar.jpg" alt="profile-icon"
          class="h-[52px] md:h-[62px] w-[52px] md:w-[62px] rounded-full image-left mr-3" />

         <div class="flex">
          <h3 class=" text-center font-bold text-gray-900 text-md md:text-xl mr-4">Solomon</h3>
          <Icon name="fa6-solid:angle-down" class=" text-lg md:text-2xl font-bold ml-3"></Icon>
         </div>
      </div>
    </div>
    
  </div>
</template>


<script setup>
import data from "~~/utils/options";
const options = useState('options', () => data)
const selectedValue = useState('selectedValue', () => "")
const inputValue = useState('inputValue', () => "")

function log() {
  const selectValue = `selectedValue: ${selectedValue.value}`
  const selectInput = `inputValue: ${inputValue.value}`

  if (!selectedValue.value || !inputValue.value) {
    return alert("Please fill all fields")
  }

  console.log(selectValue)
  console.log(selectInput)

  selectedValue.value = ""
  inputValue.value = ""
 
}

</script>

<style>
select {
  color: #999;
}
</style>
