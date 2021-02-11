<template>
  <div class="a">
    Rent
    <select x-cloak id="select" value="valueFilter">
      <option v-for="(item, index) in arrayTypes" :key="index">
        {{item}}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "FilterType",
  data() {
    return {
      valueFilter: '',
      arrayTypes: ['Car', 'Ship', 'Fly']
    }
  },
};
</script>

<style>
</style>