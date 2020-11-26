<template>
  <div class="flex justify-center m-7">
    <h1 v-if="products.length === 0">No product found</h1>
    <icon-button iconClass="fa fa-plus" @click="showModal = true" />
  </div>
  <div class="flex justify-start flex-wrap mt-10 gap-10">
    <wish-card
      v-for="(product, index) in products"
      v-bind:key="index"
      :product="product"
      @delete-product="() => deleteProduct(product)"
    />
  </div>
  <product-modal
    v-if="showModal"
    @close="showModal = false"
    @add-product="addProduct"
  />
</template>

<script>
import axios from "axios";
import WishCard from "./WishCard.vue";
import ProductModal from "./product/ProductModal.vue";

export default {
  components: { WishCard, ProductModal },
  name: "wish-list",
  data() {
    return {
      showModal: false
    };
  },
  created() {
    this.fetchData();
  },
  computed: {
    products(){
      return this.$store.getters.productList
    }
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      axios
        .get("http://localhost:4000/products", {
          headers: {
            Authorization: 'Bearer ' + this.$store.getters.authenticatedUser?.token
          }
        })
        .then(response => {
            if (response.status === 200) this.$store.dispatch("setProduct", response.data);
            if (response.status === 401)  this.$router.push("/")
        })
        .catch(err => {
          if (err.response.status === 401)  this.$router.push("/")
        });
    },
    addProduct(product) {
      axios
        .post("http://localhost:4000/products/", { product: product }, {
          headers: {
            Authorization: 'Bearer ' + this.$store.getters.authenticatedUser?.token
          }
        })
        .then(response => {
          if (response.status === 200)
            this.$store.dispatch("addProduct", response.data);

          if (response.status === 401) this.$router.push("/")
        })
        .catch(err => {
          if (err.response.status === 401)  this.$router.push("/")
        });
    },
    deleteProduct(productToDelete) {
      axios
        .delete("http://localhost:4000/products/" + productToDelete.id, {
          headers: {
            Authorization: 'Bearer ' + this.$store.getters.authenticatedUser?.token
          }
        })
        .then(response => {
          if (response.status === 200)
            this.$store.dispatch("deleteProduct", productToDelete);

          if (response.status === 401) this.$router.push("/")
        })
        .catch(err => {
          if (err.response.status === 401)  this.$router.push("/")
        });
    }
  }
};
</script>

<style></style>
