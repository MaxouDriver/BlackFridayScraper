<template>
  <div class="flex flex-wrap">
    <h1 v-if="products.length === 0">No product found</h1>
    <deal-card
      v-for="(product, index) in products"
      v-bind:key="index"
      :product="product"
    />
  </div>
</template>

<script>
import DealCard from "./DealCard.vue";

export default {
  components: { DealCard },
  name: "deal-list-view",
  data() {
    return {
    };
  },
  computed: {
    products(){
      return this.$store.getters.productList
    }
  },
  created() {
    this.fetchData();
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      this.$store.dispatch("fetchProduct");
    }
  }
};
</script>

<style></style>
