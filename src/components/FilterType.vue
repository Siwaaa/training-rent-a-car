<template>
  <div class="a">
    Rent
    <select
      x-cloak
      id="select"
      value="valueFilter"
      class="text-indigo-700"
      @change="$emit('input', $event.target.value)"
    >
      <option v-for="(item, index) in arrayTypes" :key="index">
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "FilterType",
  data() {
    return {
      valueFilter: "",
      arrayTypes: ["all", "airship", "rocket", "helicopter", "plane"],
    };
  },
};
</script>

<style>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: none;
  cursor: pointer;
}
</style>