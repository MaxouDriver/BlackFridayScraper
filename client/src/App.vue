<template>
  <navbar />
  <!-- route outlet -->
  <!-- component matched by the route will render here -->

  <router-view></router-view>
</template>

<script>
import axios from "axios";
import constants from "./constants";
import Navbar from "./components/navbar/Navbar.vue";

export default {
  components: { Navbar },
  name: "App",
  created() {
        this.fetchUser(); // Check if user is authenticated
    },
    methods: {
        fetchUser() {
            axios
            .get(`http://${constants.API_HOST}:${constants.API_PORT}/user`, {
              headers: {
                Authorization: 'Bearer ' + this.$store.getters.authenticatedUser?.token
              }
            })
            .then(response => {
              // If the result is 401 then the token is no longer valid, remove the local user
              if (response.status === 401)
                  this.$store.dispatch("deleteUser");
              })
           .catch(err => {
            if (err.response && err.response.status === 401)  this.$router.push("/")
            else console.log(err)
          });
        }
    }
};
</script>

<style>

</style>
