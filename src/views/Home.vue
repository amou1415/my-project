<template>
  <div class="homeBody">
    <div class="indexImg">
      <v-parallax
        src="http://www.100game.cn/uploads/200603/1-2006030Z92b29.jpg"
        height="350"
      >
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="text-h4 font-weight-thin mb-4">Vuetify</h1>
            <h4 class="subheading">Build your application today!</h4>
          </v-col>
        </v-row>
      </v-parallax>
    </div>
  </div>
</template>

<script>
export default {
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
  min-height: 150vh;
  .indexImg {
    width: 100vw;
    padding: 0px 30px 10px 30px;
  }
}
</style>
