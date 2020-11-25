<template>
  <p class="text-sm font-bold text-gray-600 flex items-center">
    {{ site.name }}
  </p>
  <div class="flex">
    <a :href="site.url" class="text-sm text-gray-600 flex-3 items-center">
      {{ site.url }}
    </a>
    <icon-button
      class="flex-3"
      iconClass="fa fa-minus"
      @click="$emit('delete-site')"
    />
  </div>
</template>

<script>
export default {
  name: "site-card",
  props: ["site"]
};
</script>

<style></style>
