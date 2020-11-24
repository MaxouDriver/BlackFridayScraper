<template>
  <p class="text-sm font-bold text-gray-600 flex items-center">
    {{ site.name }}
  </p>
  <div class="flex">
    <a :href="site.url" class="text-sm text-gray-600 flex items-center">
      {{ site.url }}
    </a>
    <base-button text="-" @click="$emit('delete-site')" :negatif="true" />
  </div>
</template>

<script>
export default {
  name: "link-card",
  props: ["site"]
};
</script>

<style></style>
