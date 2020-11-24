<template>
  <header-component
    title="Your wishs."
    description="Feel free to add news products in your wishlist."
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
