<template>
  <div class="viewport clearfix">
    <!-- logo -->
    <div class="logo fl">
      <img src="../../assets/images/logo.jpg" alt="logo" />
      <h1>鹏珏游戏</h1>
    </div>

    <!-- 导航 -->
    <div class="nav fl">
      <ul class="clearfix">
        <li class="nav-item fl">
          <router-link to="/" replace>
            <box class="text">首页</box>
          </router-link>
        </li>
        <li class="nav-item fl">
          <router-link to="/top" replace>
            <box class="text">排行榜</box>
          </router-link>
        </li>
        <li class="nav-item fl">
          <router-link to="/new-game" replace>
            <box class="text">新游</box>
          </router-link>
        </li>
        <li class="nav-item fl">
          <router-link to="/about" replace>
            <box class="text">联系我们</box>
          </router-link>
        </li>
        <li class="nav-item fl">
          <router-link to="/open-platform" replace>
            <box class="text">开放平台</box>
          </router-link>
        </li>
      </ul>
    </div>

    <!-- 登陆/注册 -->
    <div class="user fr">
      <img
        src="../../assets/images/denglu.png"
        @click.stop="dialog = true"
        alt="头像"
      />
      <img src="../../assets/images/yuhangyuan.png" v-if="false" alt="头像" />
    </div>

    <!-- 登陆对话框 -->
    <v-app>
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="450px">
          <v-card>
            <!-- title-img -->
            <v-card-title>
              <img
                class="title-img"
                src="../../assets/images/logo.jpg"
                alt="logo"
              />
            </v-card-title>

            <!-- title -->
            <v-card-title>
              <span class="font-weight-bold text-h5">登陆</span>
            </v-card-title>

            <!-- 对话内容 -->
            <v-card-text>
              <v-container>
                <v-col cols="12">
                  <v-text-field label="用户名*" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="密码*"
                    type="password"
                    required
                  ></v-text-field>
                </v-col>
              </v-container>
            </v-card-text>

            <!-- 对话框按钮 -->
            <v-card-actions>
              <v-spacer></v-spacer>

              <!-- 取消 -->
              <v-btn :disabled="loading" class="ma-2" color="info" @click="dialog = false">
                取消
              </v-btn>

              <!-- 登陆 -->
              <v-btn
                class="ma-2"
                :loading="loading"
                :disabled="loading"
                color="info"
                @click="loader = 'loading'"
              >
                登陆
                <template v-slot:loader>
                  <span class="custom-loader">
                    <v-icon light>mdi-cached</v-icon>
                  </span>
                </template>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-app>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      loader: null,
      loading: false,
    };
  },
  watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },
  methods: {
    login() {
      this.dialog = true;
    },
  },
};
</script>

<style lang="less" scoped>
.title-img {
  display: block;
  width: 120px;
}
.custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
.viewport {
  width: 100vw;
  padding: 15px 50px;

  .logo {
    width: 125px;
    overflow: hidden;
  }
  h1 {
    position: absolute;
    margin-left: -999999999px;
  }

  .nav {
    width: 400px;
    margin-left: 20px;

    .nav-item {
      padding: 3.5px 10px;
      font-size: 14px;

      .text {
        display: block;
        border-bottom: 0px solid #262626;
      }
    }
    .nav-item:hover {
      .text {
        border-bottom: 2px solid #262626;
      }
    }
  }

  .user {
    width: 30px;
    cursor: pointer;
    border-radius: 50%;
    overflow: hidden;
  }
}
</style>
