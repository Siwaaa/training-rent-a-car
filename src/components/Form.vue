<template>
  <div class="bg w-full fixed inset-0 bg-blue-900 bg-opacity-90">
    <div
      class="bg-white fixed right-0 top-0 lg:w-5/12 w-full h-full p-10 lg:rounded-l-3xl rounded-t-3xl overflow-auto z-10"
    >
      <h1 class="text-4xl mb-10">Add new vehicle</h1>
      <ButtonComp class="absolute top-10 right-10" @click.native="clickClose"
        >x</ButtonComp
      >
      <form @submit.prevent="sendForm">
        <label for="input__file" class="in-btn">Выберите файл</label>
        <input
          type="file"
          maxlength="11"
          name="input__file"
          class="input__file focus:ring-indigo-00 focus:border-indigo-500 block w-full p-3 sm:text-sm bg-gray-100 rounded-md placeholder-gray-400::placeholder text-gray-600 mb-4"
          placeholder="name"
        />
        <input
          type="text"
          v-model="name"
          maxlength="11"
          class="focus:ring-indigo-00 focus:border-indigo-500 block w-full p-3 sm:text-sm bg-gray-100 rounded-md placeholder-gray-400::placeholder text-gray-600 mb-4"
          placeholder="name"
        />
        <input
          type="text"
          v-model="desc"
          class="focus:ring-indigo-00 focus:border-indigo-500 block w-full p-3 sm:text-sm bg-gray-100 rounded-md placeholder-gray-400::placeholder text-gray-600 mb-4"
          placeholder="description"
        />
        <input
          type="number"
          v-model="rent"
          class="focus:ring-indigo-00 focus:border-indigo-500 block w-full p-3 sm:text-sm bg-gray-100 rounded-md placeholder-gray-400::placeholder text-gray-600 mb-10"
          placeholder="rent price"
        />
        <ButtonComp class="w-full">Complete</ButtonComp>
      </form>
    </div>
  </div>
</template>

<script>
import ButtonComp from "./ButtonComp.vue";

export default {
  name: "Form",
  components: { ButtonComp },
  data() {
    return {
      name: "",
      desc: "",
      rent: "",
    };
  },
  methods: {
    clickClose() {
      this.$emit("clickClose");
    },
    sendForm() {
      if (this.name && this.desc && this.rent) {
        this.$emit("sendForm", {
          name: this.name,
          description: this.desc,
          rent: this.rent,
          type: 'custom'
        });
        this.name = this.desc = this.rent = ''
      } else alert('Заполнены не все поля!')
    },
  },
};
</script>

<style>
.bg {
  /* -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(8px); */
}
input[type="file"] {
  opacity: 0;
}
.in-btn {
  @apply focus:ring-indigo-50 focus:border-indigo-500 p-3 sm:text-sm bg-gray-100 rounded-md text-gray-600 mb-4 absolute;
}
</style>