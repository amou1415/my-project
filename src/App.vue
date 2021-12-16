<template>
  <div id="app" class="ban_selected_text">
    <Header></Header>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/common/Header";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style lang="less">
.v-application--wrap {
  min-height: 0 !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
