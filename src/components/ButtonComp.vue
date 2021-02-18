<template>
  <button class="btn btn-blue">
    <slot />
  </button>
</template>

<script>
export default {
  name: "ButtonComp",
  props: {
  },
  data: () => ({
    
  }),
  methods: {},
};
</script>

<style>
.btn {
  @apply py-2 px-4 font-semibold rounded-lg shadow-md;
}
.btn-blue {
  @apply text-white bg-blue-700 hover:bg-blue-900;
}
</style>
