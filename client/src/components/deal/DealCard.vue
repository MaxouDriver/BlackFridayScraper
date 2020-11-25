<template>
  <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
    <div
      class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
    >
      <div class="px-4 py-5 flex-auto">
        <div
          class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
        >
          <i class="fas fa-award"></i>
        </div>
        <h6 class="text-xl font-semibold">{{ product.name }}</h6>
        <div v-if="siteWithLowestPrice">
          <h4 class="text-xl font-semibold">
            {{ siteWithLowestPrice.value }} €
          </h4>
          <p class="mt-2 mb-4 text-gray-600">
            Available on :
            <a :href="siteWithLowestPrice.url">
              {{ siteWithLowestPrice.name }}
            </a>
          </p>
        </div>
        <div v-else>
          <p class="text-xl font-semibold">
            No site linked
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "deal-list-view",
  props: ["product"],
  data() {
    return {
      siteWithLowestPrice: null
    };
  },
  created() {
    this.siteWithLowestPrice = this.getSiteWithLowestPrice();
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchData"
  },
  methods: {
    getSiteWithLowestPrice() {
      return this.product.sites ? this.product.sites.reduce(
        (prev, current) => (prev.value < current.value ? prev : current),
        0
      ) : null;
    }
  }
};
</script>

<style></style>
