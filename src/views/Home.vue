<template>
  <div class="main">
    <Banner></Banner>
    
  </div>
</template>

<script>
import Banner from '../components/home/Banner'
export default {
  components: {
    Banner,
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
