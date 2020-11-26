<template>
  <header-component
    title="Your custom Black Friday deals."
    description="This web site help you manage all the product you want. By simply adding them to your wishlist and the lowest price will be showned bellow."
  />
  <section>
    <div class="container mx-auto px-4">
      <deals-list />
    </div>
  </section>
</template>
<script>
import HeaderComponent from "../components/Header.vue";
import DealsList from "../components/deal/DealsList.vue";

export default {
  name: "deal-page",
  components: {
    HeaderComponent,
    DealsList
  }
};
</script>
