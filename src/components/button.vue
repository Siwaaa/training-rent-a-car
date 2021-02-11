<template>
  <button class="btn btn-blue">
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    title: {
      type: String,
      // required: true,
      default: "title",
      validator(value) {
        return value;
      },
    },
  },
  data: () => ({
    counter: 0,
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
