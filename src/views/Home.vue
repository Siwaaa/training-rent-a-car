<template>
  <div>
    <header class="flex justify-between items-center">
      <div class="text-3xl">
        <FilterType></FilterType>
      </div>
      <div class="">
        Add new
        <Button>+</Button>
      </div>
    </header>
    <div class=""></div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import FilterType from "../components/FilterType.vue";

export default {
  name: "Home",
  components: { Button, FilterType },
};
</script>

<style>
</style>