<template>
  <div
    class="header relative flex content-center items-center justify-center"
    style="min-height: 75vh;"
  >
    <div class="container relative mx-auto">
      <div class="items-center flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div class="pr-12">
            <h1 class="text-white font-semibold text-5xl">
              {{ title }}
            </h1>
            <p class="mt-4 text-lg text-gray-300">
              {{ description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-view",
  props: ["title", "description"]
};
</script>

<style scoped>
.header{
 background-color: gray; 
}</style>
