<template>
  <div id="app" class="ban_selected_text">
    <Header></Header>
    <router-link to="/" replace>Home</router-link> |
    <router-link to="/about" replace>About</router-link>
  <router-view/>
  </div>
</template>

<script>

import Header from './components/common/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
