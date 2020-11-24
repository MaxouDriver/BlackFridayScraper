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
  @apply px-4 py-2 rounded text-white;
}

.btn-active {
  @apply focus:bg-blue-200 hover:bg-blue-300;
}
</style>
