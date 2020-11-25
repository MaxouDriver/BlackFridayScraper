<template>
  <button
    class="w-1/2 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none rounded-full"
    :type="type"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "base-button",
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "button"
    }
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
