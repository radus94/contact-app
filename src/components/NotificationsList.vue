<template>
  <div class="notification-list fixed bottom-0 right-0 mr-10 mb-8">
    <NotificationMessage
      v-for="notification in NOTIFICATION"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import NotificationMessage from "./NotificationMessage.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    NotificationMessage
  },
  computed: {
    ...mapGetters(["NOTIFICATION"])
  }
};
</script>