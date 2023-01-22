<script>
export default {
  name: "AppHeader",
}
</script>

<template>
  <div class="ml-[3em] h-[4.3rem] relative w-full bg-light-gray">
    <div class="py-2 select-top z-10">
      <select name="select" v-model="selectedValue" class="z-5 select-body outline-none border border-gray-100 text-md capitalize py-1 rounded cursor-pointer bg-gray-100 text-gray-900">
        <option value="" disabled selected>Select</option>
        <option :value="option.id" class=" outline-none capitalize bg-white text-gray-900 text-lg p-2"  v-for="option in options" :key="option.id" >{{ option.label }}</option>
      </select>
      <div class="relative">
        <input v-model="inputValue" type="text" tabindex="1" class=" w-full input-box bg-gray-100 border-l-1 border-gray-300 p-2 outline-none" placeholder="Search for anything here" />
        <button class="absolute right-[1em] top-[13px]">
          <Icon @click="log" name="bi:search" class="cursor-pointer font-bolder text-gray-600 text-lg md:text-xl"></Icon>
        </button>
      </div>
      <div class="flex ">
         <Icon name="bi:bell"></Icon>
        <img src="https://res.cloudinary.com/chuksmbanaso/image/upload/v1647635322/media/pic2_c0wzar.jpg" alt="profile-icon"
          class="h-[52px] w-[52px]" />
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
