<template>
  <div id="app" class="bg-gray-200 pt-2 pb-2.5 h-screen">
    <div id="nav" class="container w-8/12 bg-gray">
      <Search @openModal="clickOpen" @searchParam="searchParam" />
      <ContactTable :searchContact="searchContact" />
      <AddContact v-if="modalAdd" @closeModal="clickOpen" />
      <NotificationsList />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ContactTable from "./components/ContactTable.vue";
import Search from "./components/Search.vue";
import AddContact from "./components/AddContact.vue";
import NotificationsList from "./components/NotificationsList.vue";

export default {
  components: {
    ContactTable,
    Search,
    AddContact,
    NotificationsList
  },
  data() {
    return {
      modalAdd: false,
      searchContact: ""
    };
  },
  methods: {
    ...mapActions(["GET_CONTACTS_FROM_API"]),
    clickOpen(value) {
      this.modalAdd = value;
    },
    searchParam(val) {
      console.log(val);
      this.searchContact = val;
    }
  },
  mounted() {
    this.GET_CONTACTS_FROM_API();
  }
};
</script>
