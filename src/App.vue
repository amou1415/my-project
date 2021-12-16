<template>
  <div id="app" class="ban_selected_text">
    <Header></Header>
    <router-link to="/" class="a" replace>首页</router-link> |
    <router-link to="/about" replace>About</router-link>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .a:hover {
    color: rgb(40, 161, 16);
  }
  .activeClass {
    color: rgb(40, 161, 16);
  }
}
</style>
