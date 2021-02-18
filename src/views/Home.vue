<template>
  <div>
    <header class="flex justify-between items-center mb-12">
      <div class="text-3xl">
        <FilterType v-model="value" />
      </div>
      <div class="text-blue-900">
        Add new
        <Button>+</Button>
      </div>
    </header>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <ItemCar v-for="item in transports" :key="item.id" :transports="item" />
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import FilterType from "../components/FilterType.vue";
import ItemCar from "../components/ItemCar.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: { Button, FilterType, ItemCar },
  data() {
    return {
      value: "",
      filterTrans: null,
    };
  },
  computed: {
    ...mapGetters(["allTransports"]),
    transports() {
      return this.filterTrans || this.allTransports;
    },
  },
  methods: {
    ...mapActions(["GET_TRANSPORT"]),
  },
  created() {
    this.GET_TRANSPORT();
  },
  watch: {
    value: function (val, oldVal) {
      this.filterTrans = (val !== "all") ? this.allTransports.filter(item => item.type === val) : this.allTransports; 
      console.log(this.filterTrans);
      console.log("новое значение: %s, старое значение: %s", val, oldVal);
    },
  },
};
</script>

<style>
</style>