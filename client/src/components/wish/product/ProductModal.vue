<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="grid  place-items-center">
            <div class="w-11/12 m-6 bg-white">
              <h1 class="text-xl font-semibold">
                Add a product,
                <span class="font-normal">
                  please fill in the informations to continue
                </span>
              </h1>
              <form class="mt-6" v-on:submit.prevent="addProduct">
                <div class="flex justify-between mt-2 gap-3">
                  <span class="w-1/2">
                    <label
                      for="name"
                      class="block text-xs font-semibold text-gray-600 uppercase"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      v-model="name"
                      name="name"
                      placeholder="Skate"
                      class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      required
                    />
                  </span>
                  <span class="w-1/2">
                    <label
                      for="description"
                      class="block text-xs font-semibold text-gray-600 uppercase"
                    >
                      Description
                    </label>
                    <input
                      id="description"
                      v-model="description"
                      type="text"
                      name="description"
                      placeholder="Some informations"
                      class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    />
                  </span>
                </div>
                <div class="flex justify-between mt-2 gap-3">
                  <base-button text="Cancel" @click="$emit('close')" />
                  <base-button type="submit" text="Save" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  components: {},
  name: "product-modal",
  data() {
    return {
      name: "",
      description: ""
    };
  },
  methods: {
    addProduct() {
      this.$emit("add-product", {
        name: this.name,
        description: this.description
      });
      this.$emit("close");
    }
  }
};
</script>

<style></style>
