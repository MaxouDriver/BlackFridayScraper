<template>
  <button
    class="btn-default border border-solid font-bold uppercase py-3 rounded-full outline-none focus:outline-none mr-1 mb-1"
    :class="colorClass"
    type="button"
    style="transition: all .15s ease"
  >
    <i :class="iconClass" aria-hidden="true"></i>
  </button>
</template>

<script>
export default {
  name: "icon-button",
  props: {
    iconClass: String
  },
  data() {
    return {
      plusColorClass:
        "text-green-500 bg-transparent border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600",
      minusColorClass:
        "text-red-500 bg-transparent border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600",
      defaultColorClass:
        "text-pink-500 bg-transparent border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600"
    };
  },
  computed: {
    colorClass() {
      switch (this.iconClass) {
        case "fa fa-plus":
          return this.plusColorClass;
        case "fa fa-minus":
          return this.minusColorClass;
        default:
          return this.defaultColorClass;
      }
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
