<template>
  <div>
    <header class="flex justify-between items-center mb-12">
      <div class="text-3xl">
        <FilterType v-model="value" />
      </div>
      <div class="text-blue-900">
        Add new
        <ButtonComp @click.native="openForm">+</ButtonComp>
      </div>
    </header>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <ItemCar v-for="item in transports" :key="item.id" :transports="item" />
    </div>
    <Form v-show="vis" @clickClose="closeForm" @sendForm="handlerForm"/>
  </div>
</template>

<script>
import ButtonComp from "../components/ButtonComp.vue";
import FilterType from "../components/FilterType.vue";
import ItemCar from "../components/ItemCar.vue";
import Form from '../components/Form.vue';
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: { ButtonComp, FilterType, ItemCar, Form },
  data() {
    return {
      value: "",
      filterTrans: null,
      vis: false
    };
  },
  computed: {
    ...mapGetters(["allTransports"]),
    transports() {
      return this.filterTrans || this.allTransports;
    },
  },
  methods: {
    ...mapActions(["GET_TRANSPORT", "ADD_TRANSPORT"]),
    openForm() {
      this.vis = true
      document.body.style.overflowY = "hidden";
    },
    closeForm() {
      this.vis = false
      document.body.style.overflowY = "auto";
    },
    handlerForm(data) {
      this.ADD_TRANSPORT(data)
      this.closeForm()
    }
  },
  created() {
    this.GET_TRANSPORT();
  },
  watch: {
    value: function (val, oldVal) {
      this.filterTrans =
        val !== "all"
          ? this.allTransports.filter((item) => item.type === val)
          : this.allTransports;
      console.log(this.filterTrans);
      console.log("новое значение: %s, старое значение: %s", val, oldVal);
    },
  },
};
</script>

<style>
</style>