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
          <v-card-title style="padding: 7px 24px 0px">
            <span class="font-weight-bold text-h5">登陆</span>
          </v-card-title>

          <!-- 对话内容 -->
          <v-card-text>
            <v-container style="padding: 0px 12px 12px 12px">
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-col cols="12">
                  <v-text-field
                    label="昵称*"
                    :rules="rules.name"
                    hide-details="auto"
                    v-model="u_name"
                    name="name"
                    required
                    clearable
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Email*"
                    :rules="rules.email"
                    hide-details="auto"
                    required
                    name="email"
                    clearable
                    v-model="pw"
                  ></v-text-field>
                </v-col>
              </v-form>
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
              :disabled="!valid"
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
  data() {
    return {
      valid: true,
      rules: {
        name: [
          (value) => !!value || "不能为空.",
          (value) => (value || "").length <= 12 || "最大12个字符",
        ],
        email: [
          (value) => !!value || "不能为空.",
          (value) => {
            const pattern =
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(value) || "请输入正确邮箱";
          },
        ],
      },
      loader: null,
      loading: false,
      u_name: "",
      pw: "",
      u_msg: {
        name: "",
        email: "",
      },
    };
  },
  props: ["dialog"],
  watch: {},
  methods: {
    // 关闭对话框
    close() {
      this.$emit("sand-close-dialog", "");
      this.emptyText();
    },
    // 登陆成功
    loginSuccess() {
      this.$emit("sand-close-dialog", this.u_msg);
    },
    // 清除对话框内容
    emptyText() {
      this.u_name = "";
      this.pw = "";
      this.u_msg = {
        name: "",
        email: "",
        id:""
      };
    },
    // 登陆
    login() {
        let that_ = this;
      if (this.u_name == "" || this.pw == "") {
        that_.$message.error({
          message: "请先输入完整信息",
        });
      } else {
        this.loader = "loading";
        const l = this.loader;
        this[l] = !this[l];
        axios
          .post(
            "/api/login",
            qs.stringify({ username: this.u_name, password: this.pw })
          )
          .then((res) => {
            console.log(res);
            if (res.data.msg == 'true') {
              that_.u_msg.name = res.data.user[0].u_name;
              that_.u_msg.email = res.data.user[0].email;
              that_.u_msg.id = res.data.user[0].id;
              that_[l] = false;
              that_.loginSuccess();
              setTimeout(()=>{
                  that_.emptyText();
              },200)
            } else {
              that_.$message.error({
                message: res.data.error,
              });
              that_[l] = false;
            }
          })
          .catch((err) => {
            console.log(err);
            that_.$message.error({
              message: err,
            });
            that_[l] = false;
          });
        this.loader = null;
      }
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
