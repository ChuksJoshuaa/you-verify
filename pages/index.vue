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
        <div class="main-container">
          <Task />
          <Map />
          <Agents />
        </div>
    </div>
  </div>
</template>


<script>
import Task from "../components/Task.vue"
import Agents from "../components/Agents.vue"
import Map from "../components/Map.vue"


export default {
  components: { Task, Agents, Map },

  data() {
    return {
      hideTask: false
    }
  },

  methods: {
    hideButton() {
      this.hideTask = true
    }
  }
}
</script>