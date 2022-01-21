<template>
  <div class="main">
    <Banner></Banner>
    <Content></Content>
  </div>
</template>

<script>
import Banner from '../components/home/Banner'
import Content from '../components/home/Content'
export default {
  components: {
    Banner,
    Content
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 100vw;
  min-height: calc(100vh - 60px);
}
</style>
