<template>
  <div class="s grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div class="left w-auto">
      <img src="@/assets/img/a.jpg" alt="" class="rounded-2xl overflow-hidden w-full">
    </div>
    <div class="right">
      <h1 class="text-xl md:text-4xl mt-4 mb-10">XR-74 «Cooper»</h1>
      <div class="route-ul">
        <ul class="text-gray-600">
          <li>Specifications</li>
          <li>Team</li>
          <li>Rent terms</li>
        </ul>
      </div>
      <div class="features mb-10">
        <div class="item flex justify-between items-center mb-2">
          <div class="icon-cont">
            <img src="@/assets/img/i-1.png" alt="" class="w-32 object-cover">
          </div>
          <div class="text-cont text-sm">
            <h3 class="font-medium text-blue-900">A challenge for a true champion</h3>
            <p class="font-light text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
          </div>
        </div>
        <div class="item flex justify-between items-center">
          <div class="icon-cont">
            <img src="@/assets/img/i-2.png" alt="" class="w-32 object-cover">
          </div>
          <div class="text-cont text-sm">
            <h3 class="font-medium text-blue-900">Pilot's sweaty hands</h3>
            <p class="font-light text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center bg-white rounded-2xl p-4">
        <div class="as">
          <span>Rent for </span>
          <span class="text-pink-600 font-semibold">164</span>
        </div>
        <Button>Rent now</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";

export default {
  name: "Car",
  components: { Button },
};
</script>

<style>
</style>