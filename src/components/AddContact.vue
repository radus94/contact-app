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
          v-model="contactData.name"
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
          v-model="contactData.number"
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
          v-model="contactData.email"
        />
      </div>
      <span class="text-sm text-red-500" v-if="errorParam"
        >First/Last and Number are required</span
      >
      <button
        class="bg-gray-300 float-right py-1 px-2 mt-2 rounded"
        @click="addContact(contactData)"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script>
import { Validator } from "vee-validate";

const dictionary = {
  en: {
    messages: {
      alpha_spaces: field =>
        `${field} - contains only alphabetic characters and space`
    }
  }
};

Validator.localize(dictionary);
// const validator = new Validator()

export default {
  name: "AddContact",
  data() {
    return {
      contactData: {
        id: 0,
        name: "",
        number: "",
        email: ""
      },
      closeParam: false,
      errorParam: false
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeModal", this.closeParam);
    },
    addContact(payload) {
      payload.id = Date.now();
      if (this.contactData.name == false || this.contactData.number == false) {
        this.errorParam = true;
      } else {
        this.errorParam = false;
        this.$store.dispatch("POST_CONTACTS_API", payload);
        this.closeModal();
      }
    }
  }
};
</script>