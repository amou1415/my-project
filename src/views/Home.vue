<template>
  <div class="homeBody">
    <Banner></Banner>
  </div>
</template>

<script>
import Banner from '../components/Banner'
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
.homeBody {
  width: 100vw;
  min-height: calc(100vh - 60px);

  .indexImg {
    width: 100vw;
    padding: 0px 5.859vw 10px 5.859vw;
  }
}
</style>
