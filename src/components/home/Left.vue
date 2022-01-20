<template>
  <div class="gameList fl">
    <div class="item">
      <!-- 游戏标题内容 -->
      <div class="gameTitle clearfix">
        <div class="appLogo fl">
          <router-link :to="{ path: '/details', query: { id: 1 } }">
            <img src="" alt="" />
          </router-link>
        </div>
        <h3>
          <router-link :to="{ path: '/details', query: { id: 1 } }">
            猫
          </router-link>
        </h3>
        <p class="lab">
          <label></label>
        </p>
      </div>
      <!-- 游戏描述、展示 -->
      <div class="gameImg">
        <img
          src="https://www.100game.cn/uploads/200601/1-200601103400Z6.jpg"
          style="position: absolute"
        />
        <div class="mask"></div>
        <div class="img_msg">
          <h3>在线撸猫开店，打造你的猫咪咖啡厅！</h3>
          <div class="icons">
            <p class="iconfont icon-dianzan">1</p>
            <router-link :to="{ path: '/details', query: { id: 1 } }">
              <p class="iconfont icon-icon_msg">2</p>
            </router-link>
            <a href="#" class="iconfont icon-xiazai1">3</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.gameList {
  width: 820px;
  margin-top: 20px;

  .item {
    width: 100%;
    height: 507px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px;
    box-shadow: -2px 1px 4px #cecccc;

    .gameTitle {
      width: 784px;
      height: 64px;

      .appLogo {
        width: 64px;
        height: 64px;
        background-size: cover;
        background-position: 100% 100%;
        background-repeat: no-repeat;
        margin-right: 20px;
      }
      .title {
        height: 5vw;
      }
      .lab {
        color: #aaa;
        margin-top: 20px;
        font-size: 13px;
      }
    }

    .gameImg {
      position: relative;
      width: 61.25vw;
      height: 28.594vw;
      margin-top: 1.563vw;
      margin-bottom: 0.547vw;
      background-size: cover;
      background-position: 100% 100%;
      background-repeat: no-repeat;
      overflow: hidden;

      .mask {
        position: absolute;
        width: 100%;
        height: 110px;
        margin-top: 256px;
        background-color: rgba(0, 0, 0, 0.7);
        clip-path: polygon(0 100%, 100% 0, 100% 100%);
        transform: translateY(110px);
        transition: transform 0.25s;
      }
      .img_msg {
        width: 100%;
        height: 100%;
        padding: 40px;
        font-family: "montserrat";

        h3 {
          color: #fff;
          transform: translateY(30px);
          transition: transform 0.4s;
        }
      }
      .icon {
        position: absolute;
        right: 40px;
        bottom: 40px;
        margin: 0 10px;
        color: #333;
        transform: translateY(75px);
        transition: transform 0.45s;
      }
      .icons :nth-child(1) {
        color: #aaa;
        font-size: 22px;
        transition: color 0.1s;
      }
    }

    .gameImg:hover {
      .mask {
        transform: translateY(0px);
      }
      .img_msg h3 {
        transform: translateY(0px);
      }
    }
  }
}
</style>
