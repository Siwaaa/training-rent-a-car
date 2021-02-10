<template>
  <button class="btn btn-green">
  <slot/>
</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    title: {
      type: String,
      // required: true,
      default: 'title',
      validator(value) {
        return value
      } 
    },
  },
  data: () => ({
    counter: 0,
  }),
  methods: {
  }
}
</script>

<style>
  .btn {
    @apply py-2 px-4 font-semibold rounded-lg shadow-md;
  }
  .btn-green {
    @apply text-white bg-green-500 hover:bg-green-700;
  }
</style>
