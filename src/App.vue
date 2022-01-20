<template>
  <div id="app" class="ban_selected_text">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
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
