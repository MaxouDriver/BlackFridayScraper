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
import axios from "axios";
import DealCard from "./DealCard.vue";

export default {
  components: { DealCard },
  name: "deal-list-view",
  data() {
    return {
      loading: false,
      products: [],
      error: null
    };
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
      this.error = null;
      this.post = [];
      this.loading = true;
      // replace `getPost` with your data fetching util / API wrapper
      axios
        .get("http://localhost:4000/products")
        .then(response => {
          this.loading = false;
          this.products = response.data;
        })
        .catch(err => (this.error = err.toString()));
    }
  }
};
</script>

<style></style>
