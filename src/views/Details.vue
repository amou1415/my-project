<template>
  <h1 v-text="id"></h1>
</template>

<script>
export default {
  data() {
    return {
        id:''
    };
  },
  mounted() {
    this.getMsg();
  },
  methods: {
    getMsg() {
      this.id = this.$route.query.id
    },
  },
};
</script>

<style></style>
