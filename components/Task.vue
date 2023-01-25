<template>
  <div class="bg-white h-screen w-full overflow-auto">
    <div class="h-[3rem] bg-blue-gray w-full border-b-1 border-gray-100">
      <h2 class="py-2 px-4 text-gray-50 font-bold text-md md:text-xl">
        Tasks
      </h2>
    </div>
    <div class="h-[3rem] px-4 py-2 w-full border-b-1 border-gray-100 task-head">
      <div v-for="item in userStatus.slice(0, 3)" :key="item.id">
          <button class="text-md md:text-xl capitalize cursor-pointer" :value="item.status" @click="handle" :class="changeStatus === item.status ? 'font-bold text-[#22A6B5] pb-3 border-b-2 border-[#22A6B5]':''">{{ item.status }}</button>
      </div>
    </div>
    <div class="h-full w-full">
      <div v-for="item in users" :key="item.id" class="p-4 border-b-1 border-gray-100">
        <div class="agent-container">
          <div class="flex flex-col items-center mt-1">
            <Icon name="fa6-solid:plus" class="text-3xl md:text-4xl rounded-full p-2 bg-blue-gray text-white cursor-pointer"></Icon>
            <h2 class="opacity-50 text-gray-900 capitalize">Assign <br />Agent</h2>
          </div>
          <div class="flex flex-col items-center">
            <p class="font-medium text-md md:text-lg text-start capitalize">{{item.name}}</p>
            <p class="text-gray-400 text-start">{{item.address.slice(0, 27)}}...</p>
            <div class="flex justify-between">
              <Users class="mt-1 text-[#22A6B5] opacity-50"/>
              <h2 class="px-4 text-gray-400 ">{{ item.bank}}</h2>
              
            </div>
          </div>
          <div class="mt-5">
            <Icon name="fa6-solid:angle-right" class="font-bold cursor-pointer text-gray-900 text-lg md:text-2xl"></Icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { userData } from '~~/utils/userData';
import { findData } from '~~/utils/raw';
export default {
  data() {
    return {
      userStatus: [],
      users: [],
      changeStatus: "",
      dataLength: ""
    }
  },
  

  created() {
    this.userStatus = userData
    this.changeStatus = "Unassigned"
    this.users = findData(this.userStatus, this.changeStatus)
    this.dataLength = findData.length
  },

  methods: {
    handle(e) {
      this.changeStatus = e.target.value
      this.users = findData(this.userStatus, this.changeStatus)
      this.dataLength = findData.length
    }
  }
 }
</script>

<style>

</style>