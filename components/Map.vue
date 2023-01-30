<template>
  <div>
     <div class="flex justify-between z-10">  
      <div>
          <Icon name="fa6-solid:angle-right"
            class="text-5xl rounded p-4 bg-dark-bg text-gray-50 font-bold cursor-pointer mr-[-0.2rem]"
            @click="$emit('open-task-modal')"></Icon>
      </div>
      <div>
          <Icon name="fa6-solid:angle-left" 
            class="text-5xl rounded p-4 bg-dark-bg text-gray-50 font-bold cursor-pointer ml-[-0.3rem]"
            @click="$emit('open-agent-modal')"></Icon>
      </div>
     </div>
  </div>

</template>


<script>
export default {
  name: "Map",
 
}
</script>

<style>

</style>