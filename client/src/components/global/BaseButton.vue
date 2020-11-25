<template>
  <button
    class="btn-default text-pink-500 bg-transparent border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1"
    type="button"
    style="transition: all .15s ease"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "base-button",
  props: {
    text: String,
    negatif: Boolean
  }
};
</script>

<style scoped>
.btn-default {
  width: 2vw;
  height: 2vw;
  max-width: 2vw;
  max-height: 2vw;
}
</style>
