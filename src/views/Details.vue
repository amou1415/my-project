<template>
  <div>
    <h1 v-text="id"></h1>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script setup>
import { mapStores } from "pinia";
import { useUserStore } from "../store/user";
import { computed } from "@vue/composition-api";

const mainStore = useUserStore();

export default {
  data() {
    return {
      id: "",
      msg: "",
    };
  },
  computed: {
    ...mapStores(mainStore),
  },
  watch: {
    
  },
  mounted() {
    this.getMsg();
  },
  methods: {
    getMsg() {
      this.id = this.$route.query.id;
      this.msg = computed(() => mainStore.userMsg);
      console.log(this.msg, "msg");
    },
  },
};
</script>

<style></style>
