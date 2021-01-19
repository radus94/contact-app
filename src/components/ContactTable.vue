<template>
  <div class="table pt-3 w-full">
    <!-- {{CONTACTS}} -->
    <table id="phonebook" class="w-full">
      <thead class="bg-orange-300 rounded-md">
        <tr class="rounded-md">
          <th class="py-2 px-10 border-r border-gray-300 box-border">Nr.</th>
          <th class="p-2 border-l border-gray-300 border-r box-border">
            First/Last
          </th>
          <th class="p-2 border-r border-gray-300 box-border">Number</th>
          <th class="p-2 border-r border-gray-300 box-border">Email</th>
          <th class="p-2 box-border"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(contact, key) in contacts" :key="key">
          <td class="p-2 text-center">{{ key + 1 }}</td>
          <td class="p-2 text-center">{{ contact.name }}</td>
          <td class="p-2 text-center">{{ contact.number }}</td>
          <td class="p-2 text-center">{{ contact.email }}</td>
          <td class="p-2 text-center flex justify-around">
            <button @click="editElement(contact.id)">
              Edit
            </button>
            <button @click="deleteContact(contact.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <EditContact
      v-if="modalEdit"
      @closeModal="clickOpen"
      :contactData="contactData"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import EditContact from "./EditContact.vue";

export default {
  name: "ContactTable",
  components: {
    EditContact
  },
  props: {
    searchContact: String
  },
  data() {
    return {
      modalEdit: false,
      contactData: []
    };
  },
  computed: {
    ...mapGetters(["CONTACTS"]),
    contacts() {
      if (this.searchedContact().length > 0) {
        return this.searchedContact();
      } else return this.CONTACTS;
    }
  },
  methods: {
    deleteContact(id) {
      this.$store.dispatch("DELETE_CONTACTS_API", id);
    },
    openModal() {
      this.modalEdit = true;
    },
    clickOpen(value) {
      this.modalEdit = value;
    },
    editElement(id) {
      this.openModal();
      this.contactData = this.CONTACTS.find(item => item.id == id);
    },
    searchedContact() {
      return this.CONTACTS.filter(item => {
        if (item.name.includes(this.searchContact)) {
          return item;
        }
      });
    }
  }
};
</script>