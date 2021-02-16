<template>
  <div class="flex rounded-2xl bg-white p-4 text-sm">
    <div class="con-img w-24 mr-4">
      <img :src="transports.image" alt="" class="rounded-2xl overflow-hidden">
    </div>
    <div class="con-text">
      <h2 class="name">{{transports.name}}</h2>
      <p class="text-gray-500 font-light mb-4">{{transports.description}}</p>
      <p class="text-pink-600 font-semibold">{{transports.rent}}$/h</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemCar',
  props: {
    transports: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  data() {
    return {

    }
  },
  
}
</script>

<style>

</style>