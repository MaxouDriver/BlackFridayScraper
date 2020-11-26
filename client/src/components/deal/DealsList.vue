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
import axios from "axios";

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
      axios
        .get("http://localhost:4000/products", {
          headers: {
            Authorization: 'Bearer ' + this.$store.getters.authenticatedUser?.token
          }
        })
        .then(response => {
            if (response.status === 200) this.$store.dispatch("setProduct", response.data);
            if (response.status === 401) this.$router.push("/")
        })
        .catch(err => {
          if (err.response.status === 401)  this.$router.push("/")
        });
    },
  }
};
</script>

<style></style>
