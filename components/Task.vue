<template>
  <div class="bg-white h-screen w-full">
    <div class="h-[3rem] bg-blue-gray w-full border-b-1 border-gray-100">
      <h2 class="py-2 px-4 text-gray-50 font-bold text-md md:text-xl">
        Tasks
      </h2>
    </div>
    <div class="h-[3rem] px-4 py-2 w-full border-b-1 border-gray-100 task-head">
      <div v-for="item in userStatus.slice(0, 3)" :key="item.id">
          <button class="text-md md:text-xl" :value="item.status" @click="handle" :class="changeStatus === item.status ? 'font-bold text-[#22A6B5] pb-3 border-b-2 border-[#22A6B5]':''">{{ item.status }}</button>
      </div>
    </div>
    <div class="h-full w-full">
      <div v-for="item in users" :key="item.id">
        <h2>{{item.name}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { userData } from '~~/utils/userData';
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
    const findData = this.userStatus.filter((item) => item.status === this.changeStatus)
    this.users = findData
    this.dataLength = findData.length
  },

  methods: {
    handle(e) {
      this.changeStatus = e.target.value
      const findData = this.userStatus.filter((item) => item.status  === this.changeStatus)
      this.users = findData
      this.dataLength = findData.length
    }
  }
 }
</script>

<style>

</style>