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
      <div class="relative bg-slate-200 h-screen" :class="latest === true ? 'width-container mr-0':'full-container mr-0'">
          <Map />
          <div class="absolute h-screen top-0 left-0 flex task-closing" :class="showTask ? 'task-z':'task-y'">
            <div :class="showTask === false ? 'block':'hidden'">
              <Icon name="fa6-solid:angle-right" v-on:click="showTaskNow"
                class="text-3xl md:text-5xl rounded  p-2 md:p-4 bg-dark-bg text-gray-50 font-bold cursor-pointer mr-[-0.2rem]" :class="showAgent === true ? 'task-icon-hide':''"></Icon>
            </div>
            <Task v-if="showTask" />
            <div :class="showTask === false ? 'hidden':'block'">
              <Icon name="fa6-solid:angle-left"
                class="text-3xl md:text-5xl rounded p-2 md:p-4 bg-dark-bg text-gray-50 font-bold cursor-pointer"
                :class="showAgent ? 'task-close-bar':''"
                @click="closeTask"></Icon> 
            </div>
          </div>
          <div class="absolute  h-screen top-0 right-0 flex agent-closing" :class="showAgent === false ? 'flex-row-reverse agent-y':'agent-z'">
            <div :class="showAgent === false ? 'hidden':'block'" >
              <Icon name="fa6-solid:angle-right"
                class="text-3xl md:text-5xl rounded p-2 md:p-4 bg-dark-bg text-gray-50 font-bold cursor-pointer"
                :class="showTask ? 'agent-close-bar':''"
                @click="closeAgent"></Icon>
            </div>
            <Agents v-if="showAgent" />
            <div :class="showAgent === false ? 'block':'hidden'">
              <Icon name="fa6-solid:angle-left" @click="showAgentNow"
                class="text-3xl md:text-5xl rounded p-2 md:p-4 bg-dark-bg text-gray-50 font-bold cursor-pointer ml-[-0.3rem]" :class="showTask === true ? 'agent-icon-hide':''"></Icon>
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
      screenSize: null,
    }
  },

  watch: {
    check: function () {
      console.log(this.check)
    },
    screenSize: function () {
      console.log(this.screenSize)
    }
  },

  computed: {
    latest() {
      return this.check
     }
  },

  created: function () {
    if (typeof window !== 'undefined') {
      const yes = window?.innerWidth

      this.screenSize = yes
    }
  },

  mounted() {
    if (this.screenSize <= 1550) {
      this.showTask = false
      this.showAgent = false
     } 
  },

  methods: {
    closeTask() {
       this.showTask = false
    },

    closeAgent() {
      this.showAgent = false
    },

    showTaskNow() {
      if (this.screenSize <= 1550) {
        this.showTask = true;
        this.showAgent = false
      }

      else {
        this.showTask = true
      }
    },

    showAgentNow() {
      if (this.screenSize <= 1550) {
        this.showAgent = true;
        this.showTask = false
      }

      else {
        this.showAgent = true
      }
    }
  },

}
</script>