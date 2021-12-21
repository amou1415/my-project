<template>
  <!-- 登陆对话框 -->
  <v-app>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="450px">
        <v-card>
          <!-- title-img -->
          <v-card-title>
            <img class="title-img" src="../assets/images/logo.jpg" alt="logo" />
          </v-card-title>

          <!-- title -->
          <v-card-title>
            <span class="font-weight-bold text-h5">登陆</span>
          </v-card-title>

          <!-- 对话内容 -->
          <v-card-text>
            <v-container>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  v-model="u_name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="密码*"
                  type="password"
                  required
                  v-model="pw"
                ></v-text-field>
              </v-col>
            </v-container>
            <small>*首次登陆即注册</small>
          </v-card-text>

          <!-- 对话框按钮 -->
          <v-card-actions>
            <v-spacer></v-spacer>

            <!-- 取消 -->
            <v-btn :disabled="loading" class="ma-2" color="info" @click="close">
              取消
            </v-btn>

            <!-- 登陆 -->
            <v-btn
              class="ma-2"
              :loading="loading"
              :disabled="loading"
              color="info"
              @click="login"
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
</template>

<script>
import axios from "axios";
import qs from "qs";

export default {
  name: "Login",
  data() {
    return {
      loader: null,
      loading: false,
      u_name: "",
      pw: "",
    };
  },
  props: ["dialog"],
  watch: {},
  methods: {
    close() {
      this.$emit("sand-close-dialog");
    },
    login() {
      this.loader = "loading";
      const l = this.loader;
      this[l] = !this[l];
      let that_ = this;
      axios
        .post(
          "/api/login",
          qs.stringify({ username: this.u_name, password: this.pw })
        )
        .then(function (res) {
          console.log(res);
          that_[l] = false;
        })
        .catch(function (err) {
          console.log(err);
          that_[l] = false;
        });
      this.loader = null;
    },
  },
};
</script>

<style scoped>
.title-img {
  display: block;
  width: 120px;
}

/* 登陆按钮等待动画 */
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
</style>
