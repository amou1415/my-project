<template>
  <div class="gameList fl">
    <Sloter>
      <div class="item" v-for="item in list" :key="item.id">
        <!-- 游戏标题内容 -->
        <div class="gameTitle clearfix">
          <div class="appLogo fl">
            <router-link :to="{ path: '/details', query: { id: item.id } }">
              <img v-lazy="item.logo" :key="item.id" :alt="item.name" />
            </router-link>
          </div>
          <router-link :to="{ path: '/details', query: { id: item.id } }">
            <h3 class="item_title" v-text="item.name"></h3>
          </router-link>
          <p class="lab">
            <label v-text="item.lab1"></label>
            <label v-text="item.lab2"></label>
          </p>
        </div>
        <!-- 游戏描述、展示 -->
        <div class="gameImg">
          <img v-lazy="item.bigimg" :key="item.id" style="position: absolute" />
          <div class="mask"></div>
          <div class="img_msg clearfix">
            <h3 v-text="item.game_msg"></h3>
            <!-- 点赞 -->
            <div class="icons fl">
              <span @click="changeColor" class="iconfont icon-dianzan"></span>
            </div>
            <!-- 评论 -->
            <div class="icons fl">
              <router-link :to="{ path: '/details', query: { id: item.id } }">
                <span class="iconfont icon-icon_msg"></span>
              </router-link>
            </div>
            <!-- 下载 -->
            <div class="icons fl">
              <a :href="item.download" class="iconfont icon-xiazai1"></a>
            </div>
          </div>
        </div>
      </div>
    </Sloter>
  </div>
</template>

<script>
import axios from "axios";
import { mapStores } from "pinia";
import { useUserStore } from "../../store/user";
import Sloter from "../common/Slot";

// 还可优化滑到底部加载更多

export default {
  components: {
    Sloter,
  },
  data() {
    return {
      list: "",
      isActive: false,
      likeThis: "#aaa",
    };
  },
  computed: {
    ...mapStores(useUserStore),
  },
  mounted() {
    this.getList();
  },
  methods: {
    changeColor(e) {
      e.target.style.color = "rgb(8, 124, 219)"
    },
    getList() {
      let that_ = this;
      axios
        .post("/api/getGameList")
        .then((res) => {
          that_.list = res.data.list;
          useUserStore().gameList = res.data.list;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.gameList {
  width: 64.063vw;
  margin-top: 1.563vw;

  .item {
    width: 100%;
    height: 39.609vw;
    margin-top: 1.563vw;
    margin-bottom: 1.563vw;
    padding: 1.563vw;
    box-shadow: -0.156vw 0.078vw 4.006px #cecccc;

    .gameTitle {
      width: 61.25vw;
      height: 5vw;

      .appLogo {
        width: 5vw;
        height: 5vw;
        background-size: cover;
        background-position: 100% 100%;
        background-repeat: no-repeat;
        margin-right: 1.563vw;
      }
      .title {
        height: 5vw;
      }
      .lab {
        color: #aaa;
        margin-top: 20px;
        font-size: 13px;

        label {
          margin-right: 7px;
        }
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
        height: 8.594vw;
        margin-top: 20vw;
        background-color: rgba(0, 0, 0, 0.7);
        clip-path: polygon(0 100%, 100% 0, 100% 100%);
        transform: translateY(8.594vw);
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
        .icons {
          position: absolute;
          right: 40px;
          bottom: 3.125vw;
          margin: 0 0.781vw;
          color: #333;

          .icon-dianzan {
            cursor: pointer;
          }
        }
      }
      .img_msg :nth-child(2) {
        color: #aaa;
        font-size: 22px;
        right: 100px;
        transform: translateY(7.813vw);
        transition: transform 0.3s;
      }
      .img_msg :nth-child(3) {
        color: #0aad0a;
        font-size: 22px;
        right: 53px;
        transform: translateY(9.375vw);
        transition: transform 0.4s;
      }
      .img_msg :nth-child(4) {
        color: #ccb807;
        font-size: 22px;
        right: 10px;
        transform: translateY(10.938vw);
        transition: transform 0.45s;
      }
    }

    .gameImg:hover {
      .mask {
        transform: translateY(0px);
      }
      .img_msg h3 {
        transform: translateY(0px);
      }
      .icons {
        transform: translateY(0.781vw);
      }
    }
  }
}
</style>
