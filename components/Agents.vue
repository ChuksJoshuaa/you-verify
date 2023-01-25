<template>
<div class="bg-white h-screen w-full overflow-auto">
  <div class="h-[3rem] bg-blue-gray w-full border-b-1 border-gray-100">
    <h2 class="py-2 px-4 text-gray-50 font-bold text-md md:text-xl">
      Agents
    </h2>
  </div>
  <div class="h-[3rem] px-4 py-2 w-full border-b-1 border-gray-100 task-head">
    <div v-for="item in agentTitle" :key="item.id">
      <div>
        <Icon name="fa6-solid:circle"  :class="item.status === 'All' ? 'opacity-0' : item.status === 'Online' ? 'font-bold green-icon' : 'font-bold red-icon'"></Icon>
        <button class="text-md md:text-xl capitalize cursor-pointer ml-2" :value="item.status" @click="handle"
          :class="changeStatus === item.status ? 'font-bold text-[#22A6B5] pb-3 border-b-2 border-[#22A6B5]' : ''">{{
          item.status
          }}</button>
      </div>
    </div>
  </div>
  <div class="h-full w-full">
    <div v-for="item in agents" :key="item.id" class="p-4 border-b-1 border-gray-100">
      <div class="new-container">
        <div>
          <img class="h-[52px] md:h-[72px] w-[52px] md:w-[72px] rounded-full" :src="`${item.image}`" :alt="`${item.name}`" />
        </div>
        <div class="flex flex-col items-start ml-3">
          <p class="font-medium text-md md:text-lg text-start capitalize">{{item.name}}</p>
          <p class="text-gray-400 text-start">{{item.phone}}</p>
          <p class="text-gray-900 text-start capitalize opacity-50">{{item.location}}</p>
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
import { agentTitleData, agentData } from '~~/utils/agentData';
export default {
  data() {
    return {
      agentTitle: [],
      agentsData: [],
      changeStatus: "",
      dataLength: "",
      agents: []
    }
  },

  created() {
    this.agentTitle = agentTitleData
    this.agentsData = agentData
    this.changeStatus = "All"
    this.agents = findData(this.agentsData, this.changeStatus)
    this.dataLength = findData.length
  },

  methods: {
    handle(e) {
      this.changeStatus = e.target.value
      this.agents = findData(this.agentsData, this.changeStatus)
      this.dataLength = findData.length
    }
  }
}
</script>

<style>

</style>