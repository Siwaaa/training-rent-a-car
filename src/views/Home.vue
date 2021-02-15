<template>
  <div>
    <header class="flex justify-between items-center mb-12">
      <div class="text-3xl">
        <FilterType></FilterType>
      </div>
      <div class="text-blue-900">
        Add new
        <Button>+</Button>
      </div>
    </header>
    <div class="grid grid-cols-3 gap-4">
      <ItemCar
        
      />
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import FilterType from "../components/FilterType.vue";
import ItemCar from '../components/ItemCar.vue';
import { mapActions } from 'vuex';

export default {
  name: "Home",
  components: { Button, FilterType, ItemCar },
  methods: {
    ...mapActions(['GET_TRANSPORT']),
  },
  created() {
    this.GET_TRANSPORT()
  },
};
</script>

<style>
</style>