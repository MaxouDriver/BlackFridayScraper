<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h1>Add site</h1>
          </div>

          <div class="modal-body">
            <slot name="body">
              <span class="text-gray-700">Name</span>
              <input
                class="form-input mt-1 block w-full"
                v-model="name"
                placeholder="Name"
              />

              <span class="text-gray-700">Url</span>
              <input
                class="form-input mt-1 block w-full"
                v-model="url"
                placeholder="Url"
              />

              <span class="text-gray-700">TargetHtml</span>
              <input
                class="form-input mt-1 block w-full"
                v-model="htmlTarget"
                placeholder="TargetHtml"
              />

              <span class="text-gray-700">Value</span>
              <input
                class="form-input mt-1 block w-full"
                v-model="value"
                placeholder="Value"
              />

              <span class="text-gray-700">ProductId</span>
              <input
                class="form-input mt-1 block w-full"
                v-model="productId"
                placeholder="ProductId"
              />
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <base-button
                text="Cancel"
                @click="$emit('close')"
                :negatif="true"
              />
              <base-button text="Save" @click="addSite" :negatif="false" />
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import BaseButton from "../../global/BaseButton.vue";
export default {
  components: { BaseButton },
  name: "link-modal",
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
