<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h1>Add product</h1>
          </div>

          <div class="modal-body">
            <slot name="body">
              <span class="text-gray-700">Name</span>
              <input
                class="form-input mt-1 block w-full"
                v-model="name"
                placeholder="Name"
              />

              <span class="text-gray-700">Description</span>
              <input
                class="form-input mt-1 block w-full"
                v-model="description"
                placeholder="Description"
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
              <base-button text="Save" @click="addProduct" :negatif="false" />
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
