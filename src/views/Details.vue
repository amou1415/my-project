<template>
  <div class="content" style="background-color: #eeeeee">
    <div class="viewport clearfix">
      <!-- 面包屑 -->
      <div class="bread_nav clearfix">
        <ul>
          <li class="fl">首页&nbsp;&nbsp;》&nbsp;游戏详情 &nbsp;》&nbsp;</li>
        </ul>
      </div>
      <!-- 详情 -->
      <div class="detail fl clearfix">
        <div class="logo fl">
          <img :src="game.logo" :alt="game.alt" />
        </div>
        <div class="app_title fl clearfix">
          <div class="appname" fl>
            <h2 v-text="game.name"></h2>
            <p style="color: #aaa; font-size: 14px">
              <label v-text="game.lab1"></label>
              <label v-text="game.lab2"></label>
            </p>
            <p v-text="game.dev" style="color: #53d0fc; font-size: 14px"></p>
            <div class="btn_download">
              <a class="click_a" :href="game.download">下载</a>
            </div>
          </div>
          <div class="pop fr">
            <div class="pop_val">
              <p
                v-text="game.card_title"
                style="margin-bottom: 10px; font-size: 20px; font-weight: 600"
              ></p>
              <p
                v-text="game.score"
                style="
                  margin-bottom: 10px;
                  font-weight: 800;
                  font-size: 30px;
                  color: gold;
                "
              ></p>
              <p
                v-text="game.num_people"
                style="margin-bottom: 10px; color: #aaa"
              ></p>
            </div>
          </div>
        </div>

        <div class="newtop_num">
          <p>
            <label v-text="game.lab3"></label>
            <label v-text="game.lab4 + '  >>'"></label>
          </p>
        </div>

        <div class="tab_detail fl">
          <el-tabs v-model="activeName">
            <!-- 游戏介绍 -->
            <el-tab-pane label="游戏介绍" name="first">
              <div class="dev_say ban_selected_text">
                <div class="dev_title clearfix">
                  <div class="title_text fl">
                    <h3>开发者的话</h3>
                  </div>
                  <div class="cooperation fr">
                    <span class="iconfont icon-yirenzheng"
                      ><i>冰狐官方合作厂商</i></span
                    >
                  </div>
                </div>
                <div class="say_text" v-text="game_review.dev_say"></div>
              </div>
              <div class="warm">
                <div class="warm_title">
                  <h3><span class="iconfont icon-tixing"></span>温馨提醒</h3>
                </div>
                <div class="warm_content" v-text="game_review.warm"></div>
              </div>
              <div class="screenshots">
                <div class="screenshots_title">
                  <h3>游戏截图</h3>
                </div>
                <div class="screenshots_content">
                  <p v-text="game_review.game_review"></p>
                  <div class="screenshots_img clearfix">
                    <img
                      :src="game_review.game_img1"
                      :alt="game_review.game_img1_alt"
                    />
                    <img
                      :src="game_review.game_img2"
                      :alt="game_review.game_img2_alt"
                    />
                    <img
                      :src="game_review.game_img3"
                      :alt="game_review.game_img3_alt"
                    />
                  </div>
                </div>
              </div>
              <div class="apk_msg clearfix">
                <div class="apk_title">
                  <h3>详细信息</h3>
                </div>
                <ul>
                  <li><span v-text="game_review.game_detailed1"></span></li>
                  <li><span v-text="game_review.game_detailed2"></span></li>
                  <li><span v-text="game_review.game_detailed3"></span></li>
                  <li><span v-text="game_review.game_detailed4"></span></li>
                  <li><span v-text="game_review.game_detailed5"></span></li>
                </ul>
              </div>
            </el-tab-pane>
            <!-- 评价 -->
            <el-tab-pane label="评价" name="second">
              <h1>1</h1>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <!-- 其他开发者相关游戏 -->
      <div class="popular fr" style="margin-right: 0.734vw">
        <div class="popular_game_title clearfix">
          <div class="title_text fl">
            <h2>其他开发者相关游戏</h2>
          </div>
        </div>

        <div
          class="popular_games"
          v-for="(item, index) in novelList"
          :key="index"
        >
          <div class="game clearfix">
            <div class="popular_games_logo fl">
              <router-link :to="{ path: '/details', query: { id: item.id } }">
                <img :src="item.logo" :alt="item.alt" />
              </router-link>
            </div>
            <div class="popular_games_content_detail fl">
              <h4>
                <router-link
                  v-text="item.name"
                  :to="{ path: '/details', query: { id: item.id } }"
                ></router-link>
              </h4>
              <p style="font-size: 12px !important; color: #aaa">
                <label
                  for=""
                  v-text="item.lab1"
                  style="margin-right: 5px"
                ></label>
                <label
                  for=""
                  v-text="item.lab2"
                  style="margin-right: 5px"
                ></label>
              </p>
              <p style="font-size: 14px !important">
                <label
                  for=""
                  style="color: rgb(219, 191, 29); margin-right: 5px"
                  v-text="item.score + '分'"
                ></label>
                <label
                  for=""
                  v-text="item.popular2 + item.popular3"
                  style="color: #aaa"
                ></label>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div>
    <h1 v-text="id"></h1>
    <h1>{{ msg }}</h1>
  </div> -->
</template>

<script setup>
import { mapStores } from "pinia";
import { useUserStore } from "../store/user";
import { computed } from "@vue/composition-api";
import axios from "axios";
import qs from "qs";

const mainStore = useUserStore();

export default {
  data() {
    return {
      id: "",
      msg: "",
      game: "",
      novelList: [],
      activeName: "first",
      game_review: [],
    };
  },
  computed: {
    ...mapStores(mainStore),
  },
  watch: {},
  mounted() {
    this.getMsg();
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    getMsg() {
      this.id = this.$route.query.id;
      axios
        .post("/api/getGameList", qs.stringify({ id: this.id }))
        .then((res) => {
          this.game = res.data.list[0];
          this.game_review = res.data.list[0];
          // console.log(res.data.list,'this.novelList');
        })
        .catch((err) => {
          console.error(err);
        });
      axios
        .post("/api/getGameList")
        .then((res) => {
          this.novelList = res.data.list
            .filter((item) => {
              return item.score >= 6;
            })
            .sort(function (a, b) {
              return b.score - a.score;
            })
            .slice(10, 20);
        })
        .catch((err) => {
          console.error(err);
        });
      this.msg = computed(() => mainStore.userMsg);
      console.log(this.msg, "msg");
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 100vw;
  .viewport {
    margin: 0 auto;
    padding: 0 4vw;
    width: @width39;

    .bread_nav {
      height: 2.344vw;
      height: @height30;
      width: @width50;
      width: @width50;
      li {
        color: @color0;
        font-size: 0.938vw;
        font-size: 12px;
        line-height: 2.344vw;
        line-height: @height30;
      }
    }
    .popular {
      margin-top: 40px;
      width: 340px;
      .popular_game_title {
        width: 100%;
        height: 50px;
        
        .title_text {
          height: 50px;

          h2 {
            line-height: 50px;
          }
        }
      }
      .popular_games {
        width: 100%;
        padding: 5px 10px;

        .game {
          width: 100%;
          height: 90px;
          background-color: #f5f5f5;
          position: relative;
          .popular_games_logo {
            width: 70px;
            height: 70px;
            margin: 10px;
            background-size: cover;
            background-position: 100% 100%;
            background-repeat: no-repeat;
          }
          .popular_games_content {
            height: 89.997px;
            width: 198.4px;
            padding: 9.997px;
            &:nth-child(1) {
              font-size: 18px;
              margin-bottom: 5px;
            }
            &:nth-child(2) {
              margin-bottom: 5px;
              label {
                font-size: 12px;
                margin-right: 5px;
              }
            }
            &:nth-child(3) {
              label {
                font-size: 12px;
                margin-right: 12px;
              }
            }
            p {
              color: @color0;
              color: @color0;
              font-size: 12px;
            }
          }
          .popular_games_content_detail {
            height: 89.997px;
            padding: 9.997px;
            width: 198.4px;
          }
        }
      }
    }
    .detail {
      background-color: @color1;
      height: 12 @height39;
      margin-bottom: 20px;
      padding: 30px;
      position: relative;
      width: 65%;
      .newtop_num {
        height: @height30;
        line-height: @height30;
        position: absolute;
        top: 223px;
        width: 92%;
        p {
          color: @color0;
          font-size: 14px;
          label {
            &:nth-child(1) {
              margin-left: 10px;
              margin-right: 140px;
            }
          }
        }
      }
      .logo {
        background-position: 100% 100%;
        background-repeat: no-repeat;
        background-size: cover;
        height: @height16;
        width: 192px;
      }
      .app_title {
        height: @height16;
        left: 222px;
        position: absolute;
        width: 513px;
        .appname {
          height: @height41;
          left: 0;
          padding: 20px;
          position: absolute;
          width: 360px;
          h2 {
            margin-bottom: 10px;
          }
          p {
            margin-bottom: 10px;
            label {
              margin-right: 15px;
            }
          }
          .btn_download {
            background-image: linear-gradient(
              -225deg,
              #ac32e4 0%,
              @color4 48%,
              @color5 100%
            );
            border-radius: 10px;
            color: @color1;
            height: @height33;
            line-height: @height33;
            margin-left: 160px;
            text-align: center;
            width: @width38;
          }
        }
        .pop {
          border-radius: 0.781vw;
          box-shadow: 1px 1px 22px #d4d4d4;
          height: 150.003px;
          padding-top: 1.563vw;
          padding: 0.781vw;
          position: absolute;
          right: 5px;
          text-align: center;
          width: 150.003px;
        }
      }
      .tab_detail {
        margin-top: 20px;
      }
      .dev_say {
        margin-top: 20px;
        width: @width50;

        .dev_title {
          border-left: 4px solid @color3;
          height: @height30;
          width: @width50;

          .title_text {
            line-height: @height30;
            text-indent: 1em;
          }
          .cooperation {
            line-height: @height30;
            span {
              color: @color3;
              font-size: 14px;
            }
          }
        }
        .say_text {
          padding: 20px;
          width: @width50;
        }
      }
      .warm {
        background-color: #ebebeb;
        border-radius: 15px;
        margin-top: 20px;
        .warm_title {
          color: #9b9b9b;
          height: @height32;
          line-height: @height32;
          text-indent: 2em;
          width: @width50;
          span {
            font-size: 20px;
            height: @height32;
            width: @width50;
          }
        }
        .warm_content {
          padding: 20px;
          width: @width50;
        }
      }
      .screenshots {
        margin-top: 40px;
        width: @width50;
        .screenshots_title {
          border-left: 4px solid @color3;
          height: @height30;
          line-height: @height30;
          margin-bottom: 15px;
          text-indent: 1em;
        }
        .screenshots_content {
          p {
            margin-bottom: 15px;
            text-indent: 2em;
          }
          .screenshots_img {
            width: @width50;
            img {
              float: left;
              margin-left: 10px;
              margin: 15px 5px;
              overflow-x: auto;
              width: @width35;
            }
          }
        }
      }
      .apk_msg {
        margin-top: 20px;
        width: @width50;
        ul {
          li {
            border-bottom: 1px solid @color0;
            float: left;
            margin: 3px;
            width: calc(92% / 2);
            height: 40px;
            text-align: center;
            line-height: 40px;
            font-size: 16px;
            cursor: pointer;
          }
        }
        .apk_title {
          border-left: 4px solid @color3;
          text-indent: 1em;
        }
      }
    }
  }
}
// Color variables (appears count calculates by raw css)
@color0: #aaaaaa; // Appears 21 times
@color1: #ffffff; // Appears 13 times
@color2: #53d0fc; // Appears 8 times
@color3: #0aad0a; // Appears 8 times
@color4: #7918f2; // Appears 2 times
@color5: #4801ff; // Appears 2 times
@color6: #ac32e4; // Appears 2 times
@color7: #f5f5f5; // Appears 2 times
@color8: #cecccc; // Appears 2 times

// Width variables (appears count calculates by raw css)
@width10: 49.997px; // Appears 2 times
@width14: 61.25vw; // Appears 2 times
@width17: 3.906vw; // Appears 2 times
@width22: 1280px; // Appears 3 times
@width27: 140px; // Appears 2 times
@width33: 580px; // Appears 2 times
@width35: 200px; // Appears 3 times
@width38: 150px; // Appears 2 times
@width39: 1280px; // Appears 7 times
@width42: 180px; // Appears 2 times
@width45: 784px; // Appears 2 times
@width50: 100%; // Appears 48 times

// Height variables (appears count calculates by raw css)
@height5: 7.031vw; // Appears 2 times
@height6: 3.906vw; // Appears 3 times
@height9: 1.953vw; // Appears 2 times
@height12: 6.25vw; // Appears 2 times
@height16: 192px; // Appears 2 times
@height21: 200px; // Appears 4 times
@height26: 180px; // Appears 4 times
@height29: 25px; // Appears 3 times
@height30: 30px; // Appears 9 times
@height32: 35px; // Appears 3 times
@height33: 40px; // Appears 3 times
@height35: 50px; // Appears 4 times
@height36: 64px; // Appears 3 times
@height39: 80px; // Appears 3 times
@height40: 90px; // Appears 2 times
@height41: 100%; // Appears 27 times
@height42: 5vw; // Appears 3 times
</style>
