<template>
  <div :class="typeClass" class="border-2 rounded mt-1 p-1">
    <span>{{ notification.message }}</span>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["notification"],
  data() {
    return {
      timeout: null
    };
  },
  computed: {
    typeClass() {
      return "bg-green-100 border-green-500";
    }
  },
  methods: {
    ...mapActions(["REMOVE_NOTIF"])
  },
  created() {
    this.timeout = setTimeout(() => {
      this.REMOVE_NOTIF(this.notification);
    }, 2000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  }
};
</script>