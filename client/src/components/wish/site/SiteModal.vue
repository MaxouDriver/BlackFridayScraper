<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="grid  place-items-center">
            <div class="w-11/12 m-6 bg-white">
              <h1 class="text-xl font-semibold">
                Add a site,
                <span class="font-normal">
                  please fill in the informations to continue
                </span>
              </h1>
              <form class="mt-6" v-on:submit.prevent="addSite">
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
                      placeholder="Amazon"
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
                  <span class="w-full">
                    <label
                      for="url"
                      class="block text-xs font-semibold text-gray-600 uppercase"
                    >
                      Url
                    </label>
                    <input
                      id="url"
                      v-model="url"
                      type="text"
                      name="url"
                      placeholder="https://"
                      class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      required
                    />
                  </span>
                </div>
                <div class="flex justify-between mt-2 gap-3">
                  <span class="w-full">
                    <label
                      for="htmlTarget"
                      class="block text-xs font-semibold text-gray-600 uppercase"
                    >
                      TargetHtml
                    </label>
                    <input
                      id="htmlTarget"
                      v-model="htmlTarget"
                      type="text"
                      name="htmlTarget"
                      placeholder="//label"
                      class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      required
                    />
                  </span>
                </div>
                <div class="flex justify-between mt-2 gap-3">
                  <span class="w-1/2">
                    <label
                      for="value"
                      class="block text-xs font-semibold text-gray-600 uppercase"
                    >
                      Value
                    </label>
                    <input
                      id="value"
                      v-model="value"
                      type="text"
                      name="value"
                      placeholder="799"
                      class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      required
                    />
                  </span>
                  <span class="w-1/2">
                    <label
                      for="productId"
                      class="block text-xs font-semibold text-gray-600 uppercase"
                    >
                      ProductId
                    </label>
                    <input
                      id="productId"
                      v-model="productId"
                      type="text"
                      name="productId"
                      placeholder="1"
                      class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    />
                  </span>
                </div>

                <div class="flex justify-between mt-2 gap-3">
                  <button
                    type="button"
                    class="w-1/2 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none rounded-full"
                    @click="$emit('close')"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    class="w-1/2 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none rounded-full"
                  >
                    Save
                  </button>
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
  name: "site-modal",
  data() {
    return {
      name: "",
      url: "",
      htmlTarget: "",
      value: "",
      productId: -1
    };
  },
  created() {},
  watch: {},
  methods: {
    addSite() {
      this.$emit("add-site", {
        name: this.name,
        url: this.url,
        htmlTarget: this.htmlTarget,
        value: this.value,
        productId: this.productId
      });
      this.$emit("close");
    }
  }
};
</script>

<style></style>
