<template>
  <div id="app">
    <component :is="currentComponent" />
  </div>
</template>

<script>
import DashboardLayout from './layouts/DashboardLayout.vue';

export default {
  components: { DashboardLayout },
  name: "App",
  data: () => ({}),
  computed: {
    currentComponent: function () {
      return 'dashboard-layout'
    }
  }
};
</script>

<style>
</style>
