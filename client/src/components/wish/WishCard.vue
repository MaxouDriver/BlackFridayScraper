<template>
  <div
    class="flex-1 right-0 bottom-0 top-0 bg-white mt-20 rounded-lg shadow-lg mb-8"
  >
    <div class="flex flex-col mx-4 py-3 border-b border-gray-200">
      <div class="mt-4 p-4 flex flex-col flex-nowrap">
        <div class="mt-4 flex justify-between">
          <span class="flex-9 font-extrabold text-lg text-gray-900">{{
            product.name
          }}</span>
          <icon-button
            class="flex-1"
            iconClass="fa fa-minus"
            @click="$emit('delete-product')"
          />
        </div>

        <span class="text-base text-gray-600 mt-1">{{
          product.description
        }}</span>
      </div>
    </div>
    <div class="mx-4 py-3 border-b border-gray-200">
      <div class="px-8">
        <div class="flex-col space-x-4 mb-4">
          <div class="flex justify-between">
            <span class="font-extrabold text-xl text-gray-900 my-4"
              >Sources sites</span
            >
            <icon-button
              iconClass="fa fa-plus"
              class="flex-auto ml-5"
              @click="showModal = true"
            />
          </div>
          <h1 v-if="sites.length === 0">No sites found for this product</h1>
          <site-card
            v-for="(site, index) in sites"
            v-bind:key="index"
            :site="site"
            @delete-site="() => deleteSite(site)"
          />
        </div>
      </div>
    </div>
    <site-modal
      v-if="showModal"
      @close="showModal = false"
      @add-site="addSite"
      :product="product"
    />
  </div>
</template>

<script>
import axios from "axios";
import SiteCard from "./site/SiteCard";
import SiteModal from "./site/SiteModal";
import constants from "../../constants";

export default {
  name: "wish-card",
  props: ["product"],
  components: {
    SiteCard,
    SiteModal
  },
  data() {
    return {
      sites: [],
      showModal: false
    };
  },
  created() {
    this.sites = this.product.sites || [];
  },
  methods: {
    addSite(site) {
      axios
        .post(`http://${constants.API_HOST}:${constants.API_PORT}/sites`, { site: site }, {
          headers: {
            Authorization: 'Bearer ' + this.$store.getters.authenticatedUser?.token
          }
        })
        .then(response => {
          if (response.status === 200) {
            this.$store.dispatch("addProductSites", response.data);
            this.sites = [...this.sites, response.data];
          }
          if (response.status === 401) this.$router.push("/")
        })
        .catch(err => {
          if (err.response && err.response.status === 401)  this.$router.push("/")
            else console.log(err)
        });
    },
    deleteSite(siteToDelete) {
      axios
        .delete(`http://${constants.API_HOST}:${constants.API_PORT}/sites/` + siteToDelete.id, {
          headers: {
            Authorization: 'Bearer ' + this.$store.getters.authenticatedUser?.token
          }
        })
        .then(response => {
          if (response.status === 200) {
            this.$store.dispatch("deleteProductSites", siteToDelete);
            this.sites = this.sites.filter(site => site.id !== siteToDelete.id);
          }
          if (response.status === 401) this.$router.push("/")
        })
        .catch(err => {
          if (err.response && err.response.status === 401)  this.$router.push("/")
            else console.log(err)
        });
    }
  }
};
</script>

<style scope>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 20%;
  max-height: 80vh;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
</style>
