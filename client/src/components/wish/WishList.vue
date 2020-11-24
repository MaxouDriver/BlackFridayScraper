<template>
  <div class="flex flex-wrap">
    <h1 v-if="products.length === 0">No product found</h1>
    <wish-card
      v-for="(product, index) in products"
      v-bind:key="index"
      :product="product"
      @delete-product="() => deleteProduct(product)"
    />
  </div>
</template>

<script>
import axios from "axios";
import WishCard from "./WishCard.vue";

export default {
  components: { WishCard },
  name: "wish-list",
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
      this.products = [];
      this.loading = true;
      axios
        .get("http://localhost:4000/products")
        .then(response => {
          this.loading = false;
          this.products = response.data;
        })
        .catch(err => (this.error = err.toString()));
    },
    deleteProduct(productToDelete){
      axios
        .delete("http://localhost:4000/products/" + productToDelete.id)
        .then(response => {
          if (response.status === 200)
            this.products = this.products.filter(product => product.id !== productToDelete.id);
        })
        .catch(err => (this.error = err.toString()));
    }
  }
};
</script>

<style></style>
