<template>
  <div class="homeBody">
    <div class="indexImg">
      <v-app>
        <v-parallax
          src="http://www.100game.cn/uploads/200603/1-2006030Z92b29.jpg"
          height="500"
        >
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <h1 class="text-h3 font-weight-bold mb-4">「宝石研物语:血缘之证」</h1>
              <h4 style="margin: 70px 0 100px 0;" class="subheading text-h6 font-weight-regular">惊悚解谜日式RPG 在光暗交汇中解明真相</h4>
            </v-col>
          </v-row>
        </v-parallax>
      </v-app>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
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
