<template>
  <header-component
    title="Your custom Black Friday deals."
    description="This web site help you manage the product your want. By simply adding them to your wishlist and the lowest price will be showned bellow."
  />
  <section class="pb-20 bg-gray-300 -mt-24">
    <div class="container mx-auto px-4">
      <deals-list />
    </div>
  </section>
</template>
<script>
import HeaderComponent from "../components/Header.vue";
import DealsList from "../components/deal/DealsList.vue";

export default {
  name: "home-page",
  components: {
    HeaderComponent,
    DealsList
  }
};
</script>
