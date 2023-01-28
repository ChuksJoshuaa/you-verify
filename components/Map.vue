<template>
  <div>
     <div class="flex justify-between">
      <div>
        <Icon name="fa6-solid:angle-left"
          v-if="showIcon"
          class="text-5xl rounded p-4 bg-dark-bg text-gray-50 font-bold cursor-pointer ml-[-0.3rem]"
          @click="$emit('close-task-modal')" v-on:click="changeIcon" ></Icon>
          <Icon name="fa6-solid:angle-right"
          v-else
            class="text-5xl rounded p-4 bg-dark-bg text-gray-50 font-bold cursor-pointer mr-[-0.2rem]"
            @click="$emit('open-task-modal')" v-on:click="changeIconNow"></Icon>
      </div>
      <div>
        <Icon name="fa6-solid:angle-right"
          v-if="showAgent"
          class="text-5xl rounded p-4 bg-dark-bg text-gray-50 font-bold cursor-pointer mr-[-0.2rem]"
          @click="$emit('close-agent-modal')" v-on:click="changeAgent"></Icon>
          <Icon name="fa6-solid:angle-left" 
            v-else
            class="text-5xl rounded p-4 bg-dark-bg text-gray-50 font-bold cursor-pointer ml-[-0.3rem]"
            @click="$emit('open-agent-modal')" v-on:click="changeAgentNow"></Icon>
      </div>
     </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      showIcon: true,
      showAgent: true,
    }
  },

  methods: {
    changeIcon() {
      this.showIcon = false
      
    },
    changeAgent() {
      this.showAgent = false
    },
    changeIconNow() {
      this.showIcon = true
    },
    changeAgentNow() {
      this.showAgent = true
    }
  }
}
</script>

<style>

</style>