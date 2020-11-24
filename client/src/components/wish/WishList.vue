<template>
  <div class="flex flex-wrap">
    <h1 v-if="products.length === 0">No product found</h1>
    <base-button text="+" @click="showModal = true" :negatif="false" />
    <wish-card
      v-for="(product, index) in products"
      v-bind:key="index"
      :product="product"
      @delete-product="() => deleteProduct(product)"
    />
    <product-modal
      v-if="showModal"
      @close="showModal = false"
      @add-product="addProduct"
    />
  </div>
</template>

<script>
import axios from "axios";
import WishCard from "./WishCard.vue";
import ProductModal from "./product/ProductModal.vue";
import BaseButton from "../global/BaseButton.vue";

export default {
  components: { WishCard, BaseButton, ProductModal },
  name: "wish-list",
  data() {
    return {
      loading: false,
      products: [],
      error: null,
      showModal: false
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
    addProduct(product) {
      axios
        .post("http://localhost:4000/products/", { product: product })
        .then(response => {
          if (response.status === 200)
            this.products = [...this.products, response.data];
        })
        .catch(err => (this.error = err.toString()));
    },
    deleteProduct(productToDelete) {
      axios
        .delete("http://localhost:4000/products/" + productToDelete.id)
        .then(response => {
          if (response.status === 200)
            this.products = this.products.filter(
              product => product.id !== productToDelete.id
            );
        })
        .catch(err => (this.error = err.toString()));
    }
  }
};
</script>

<style></style>
