<template>
  <button
    class="btn-default"
    :class="{ 'bg-red-500': negatif, 'bg-blue-500': !negatif }"
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
  width: 5vw;
  height: 5vw;
  max-width: 5vw;
  max-height: 5vw;
  @apply px-4 py-2 rounded text-white;
}
</style>
