<script setup>
const title = ref('You-Verify')
</script>

<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
      <Style type="text/css" children="body { background-color: #fff; }" />
    </Head>
    <div class="absolute mt-[2.7rem] border-t-1 border-gray-100 w-full">
      <div class="relative bg-slate-600 h-screen" :class="latest === true ? 'width-container mr-0':'full-container mr-0'">
          <Map @open-task-modal="showTask = true" @open-agent-modal="showAgent = true" />
          <div class="absolute w-[35%] h-screen top-0 left-0 flex">
            <div :class="showTask === false ? 'block':'hidden'">
              <Icon name="fa6-solid:angle-right" @click="showTaskNow"
                class="text-5xl rounded p-4 bg-dark-bg text-gray-50 font-bold cursor-pointer mr-[-0.2rem]"></Icon>
            </div>
            <Task v-if="showTask"  class="z-50" />
            <div :class="showTask === false ? 'hidden':'block'">
              <Icon name="fa6-solid:angle-left"
                class="text-5xl rounded p-4 bg-dark-bg text-gray-50 font-bold cursor-pointer"
                @click="closeTask"></Icon> 
            </div>
          </div>
          <div class="absolute w-[35%] h-screen top-0 right-0 flex " :class="showAgent === false ? 'flex-row-reverse':''">
            <div :class="showAgent === false ? 'hidden':'block'">
              <Icon name="fa6-solid:angle-right"
                class="text-5xl rounded p-4 bg-dark-bg text-gray-50 font-bold cursor-pointer"
                @click="closeAgent"></Icon>
            </div>
            <Agents v-if="showAgent" />
            <div :class="showAgent === false ? 'block':'hidden'">
              <Icon name="fa6-solid:angle-left" @click="showAgentNow"
                class="text-5xl rounded p-4 bg-dark-bg text-gray-50 font-bold cursor-pointer ml-[-0.3rem]"></Icon>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>


<script>
import Task from "@/components/Task.vue"
import Agents from "@/components/Agents.vue"
import Map from "@/components/Map.vue"

export default {
  components: { Task, Agents, Map },

  props : ["check"],

  data() {
    return {
      showTask: true,
      showAgent: true,
    }
  },

  watch: {
    check: function () {
      console.log(this.check)
    }
  },

  computed: {
    latest() {
      return this.check
     }
  },

  created: function () {
    console.log(this.latest)
  },

  methods: {
    closeTask() {
       this.showTask = false
    },

    closeAgent() {
      this.showAgent = false
    },

    showTaskNow() {
      this.showTask = true
    },

    showAgentNow() {
      this.showAgent = true
    }
  },

}
</script>