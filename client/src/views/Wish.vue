<template>
  <header-component
    title="Your wishes."
    description="Feel free to add news product in your wishlist."
  />
  <section>
    <div class="container mx-auto px-4">
      <wish-list />
    </div>
  </section>
</template>
<script>
import HeaderComponent from "../components/Header.vue";
import WishList from "../components/wish/WishList.vue";

export default {
  name: "wish-page",
  components: {
    HeaderComponent,
    WishList
  }
};
</script>
