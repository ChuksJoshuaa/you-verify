<template>
  <div class="relative bg-white h-screen w-full overflow-auto">
    <div class="h-[2rem] md:h-[3rem] bg-blue-gray w-full border-b-1 border-gray-100">
      <h2 class="py-1 md:py-2 px-2 md:px-4 text-gray-50 font-bold text-md md:text-xl">
        Tasks
      </h2>
    </div>
    <div class="h-[2.6rem] md:h-[3rem] px-2 md:px-4 py-2 w-full border-b-1 border-gray-100 task-head">
      <div v-for="item in userStatus.slice(0, 3)" :key="item.id">
         <div class="flex flex-nowrap" :class="changeStatus === item.status ? 'font-bold text-[#22A6B5] pb-3 border-b-2 border-[#22A6B5]':''">
          <button class="text-sm md:text-xl capitalize ml-0 md:ml-1 cursor-pointer" :value="item.status" @click="handle"
            >{{removeOne(item.status, checkLength)}} {{ item.status
            }}</button>
         </div> 
      </div>
    </div>
    <div class="h-full w-full">
      <div v-for="item in users" :key="item.id" class="p-2 md:p-4 border-b-1 border-gray-100">
        <div class="agent-container">
          <div class="flex flex-col items-start mt-1 ml-1 md:ml-3">
            <Icon name="fa6-solid:plus" class="text-2xl md:text-4xl rounded-full p-2 bg-blue-gray text-white cursor-pointer"></Icon>
            <h2 class="opacity-50 text-gray-900 capitalize text-sm md:text-lg">Assign <br />Agent</h2>
          </div>
          <div class="flex flex-col items-start ml-4 md:ml-5">
            <p class="font-medium text-sm md:text-lg text-start capitalize">{{item.name}}</p>
            <p class="text-gray-400 text-start text-sm md:text-lg">{{item.address.slice(0, 27)}}...</p>
            <div class="flex justify-between">
              <Users class="mt-1 text-[#22A6B5] opacity-50"/>
              <h2 class="px-2 text-gray-400 text-sm md:text-lg">{{ item.bank}}</h2>
            </div>
            <p class="mt-3 text-[blue] font-small text-sm md:text-lg opacity-100">{{item.createdAt}}</p>
          </div>
          <div class="mt-5">
            <Icon name="fa6-solid:angle-right" class="font-bold cursor-pointer text-gray-900 text-md md:text-2xl"></Icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { userData } from '~~/utils/userData';
import { findData, findLength, removeDigit, sliceNumber } from '~~/utils/raw';


export default {
  name: "Task",
  
  data() {
    return {
      userStatus: [],
      users: [],
      changeStatus: "",
      checkLength: [],
      removeOne: "",
      getSlice: sliceNumber
    }
  },
  
  created() {
    this.userStatus = userData
    this.changeStatus = "Unassigned"
    this.users = findData(this.userStatus, this.changeStatus)
    this.checkLength = findLength(this.userStatus)
    this.removeOne = removeDigit
  },

  methods: {
    handle(e) {
      this.changeStatus = e.target.value
      this.users = findData(this.userStatus, this.changeStatus)
    }
  },
}
</script>

<style>

</style>