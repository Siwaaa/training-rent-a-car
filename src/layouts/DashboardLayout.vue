<template>
  <div class="font-sans sm:container sm:mx-auto mb-5">
    <Header />
    <div class="w-full h-auto bg-gray-100 rounded-3xl p-10">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  name: 'DashboardLayout',
  components: {Header},
  computed: {
    
  },
}
</script>

<style>

</style>