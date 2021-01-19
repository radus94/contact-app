<template>
  <div class="search flex justify-center">
    <div class="left pr-4 w-6/12">
      <input class="w-full h-8 rounded" type="text" v-model="searchParam" />
    </div>
    <div>
      <button class="bg-indigo-200 px-5 py-1 rounded" @click="openModal">
        Add Contact
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      openParam: true,
      searchParam: ""
    };
  },
  methods: {
    openModal() {
      this.$emit("openModal", this.openParam);
    }
  },
  watch: {
    searchParam: function(val) {
      this.$emit("searchParam", val);
    }
  }
};
</script>