<template>
  <div class="font-sans container mx-auto mb-5">
    <Header />
    <div class="w-full h-screen bg-gray-100 rounded-3xl p-10">
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