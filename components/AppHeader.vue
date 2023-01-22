<script>
export default {
  name: "AppHeader",
}
</script>

<template>
  <div class="ml-[2em] h-[4.3rem] relative">
    <div class="py-2 select-top z-10">
      <select name="All" v-model="selectedValue" class="z-5 select-body outline-none border border-gray-100 text-md capitalize py-1 rounded cursor-pointer bg-gray-100 text-gray-900">
        <option :value="option.id" class="outline-none capitalize bg-white text-gray-900 text-lg p-2"  v-for="option in options" :key="option.id" >{{ option.label }}</option>
      </select>
    </div>
    <div></div>
    <div></div>
  </div>
</template>


<script setup>
import data from "~~/utils/options";
const options = useState('options', () => data)
const selectedValue = useState('selectedValue', () => "All")

</script>
