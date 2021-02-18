<template>
  <div class="s grid grid-cols-1 md:grid-cols-2 gap-16">
    <div class="left w-auto">
      <img :src="carObj.image" alt="" class="rounded-2xl overflow-hidden w-full">
    </div>
    <div class="right">
      <h1 class="text-xl md:text-4xl mt-4 mb-8">{{ carObj.name }}</h1>
      <div class="route-ul">
        <ul class="text-gray-600 flex mb-4">
          <li><router-link :to="{ name: 'Specifications' }" class="mr-4">Specifications</router-link></li>
          <li><router-link :to="{ name: 'Team' }" class="mr-4">Team</router-link></li>
          <li><router-link :to="{ name: 'RentTerms' }">Rent terms</router-link></li>
        </ul>
        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>
        
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
          <span class="text-pink-600 font-semibold">{{ carObj.rent}} $/h</span>
        </div>
        <ButtonComp>Rent now</ButtonComp>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComp from "../components/ButtonComp.vue";
// import {allTransports} from 'vuex'

export default {
  name: "Car",
  components: { ButtonComp },
  data() {
    return {
      carObj: null
    }
  },
  computed: {

  },
  created() {
    const car = this.$store.getters.allTransports.find(item => item.id === this.$route.params.id)
    if (car) {
      this.carObj = car
    }
  },
};
</script>

<style scoped>
a.router-link-active {
  color: rgb(29, 78, 216);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>