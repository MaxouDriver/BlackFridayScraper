<template>
  <navbar />
  <!-- route outlet -->
  <!-- component matched by the route will render here -->

  <router-view></router-view>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar },
  name: "App"
};
</script>

<style>
body{
  background-color: aliceblue;
}
</style>
