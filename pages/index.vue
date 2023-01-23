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
    <div class="absolute mt-[4em] border-t-2 border-gray-300 w-full">
        <div class="flex  px-2">
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
  components: {Task, Agents, Map}
}
</script>