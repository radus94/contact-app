<template>
  <div
    class="bg-black bg-opacity-75 add-contact absolute inset-0 z-100 h-screen w-full flex justify-center items-center "
  >
    <div class="bg-gray-400 py-6 px-4 w-2/4 rounded relative">
      <button class="text-white absolute top-1 right-2" @click="closeModal">
        X
      </button>
      <div class="flex flex-col">
        <div class="flex justify-between items-end">
          <label for="">First/Last</label>
          <span class="text-sm text-red-500">{{
            errors.first("First/Last")
          }}</span>
        </div>
        <input
          v-validate="'required|alpha_spaces'"
          name="First/Last"
          type="text"
          class="rounded h-7"
          v-model="contactDataProp.name"
        />
      </div>
      <div class="flex flex-col mt-2">
        <div class="flex justify-between items-end">
          <label for="">Number</label>
          <span class="text-sm text-red-500">{{ errors.first("Number") }}</span>
        </div>
        <input
          v-validate="'required|numeric'"
          name="Number"
          type="text"
          class="rounded h-7"
          v-model="contactDataProp.number"
        />
      </div>
      <div class="flex flex-col mt-2">
        <div class="flex justify-between items-end">
          <label for="">Email</label>
          <span class="text-sm text-red-500">{{ errors.first("Email") }}</span>
        </div>
        <input
          v-validate="'email'"
          name="Email"
          type="text"
          class="rounded h-7"
          v-model="contactDataProp.email"
        />
      </div>
      <button
        class="bg-gray-300 float-right py-1 px-2 mt-2 rounded"
        @click="saveContact(contactDataProp.id)"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "EditContact",
  props: {
    contactData: Object
  },
  data() {
    return {
      contactDataProp: { ...this.contactData }
    };
  },
  computed: {
    ...mapGetters(["CONTACTS"])
  },
  methods: {
    closeModal() {
      this.$emit("closeModal", false);
    },
    saveContact() {
      if (this.contactDataProp.name && this.contactDataProp.number) {
        this.$store.dispatch("POST_EDIT_CONTAC", this.contactDataProp);
        this.closeModal();
      }
    }
  }
};
</script>