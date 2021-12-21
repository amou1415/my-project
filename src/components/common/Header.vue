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
      <!-- 未登陆头像 -->
      <img
        src="../../assets/images/denglu.png"
        @click.stop="login"
        v-if="!succ_img"
        alt="头像"
      />
      <!-- 登陆后头像 -->
      <img 
      src="../../assets/images/yuhangyuan.png" class="animate__animated animate__fadeInDown cancel_hand" 
      v-if="succ_img" alt="头像" />
    </div>

    <!-- 登陆 -->
    <login-dialog :dialog="dialog" @sand-close-dialog="close"></login-dialog>
  </div>
</template>
<script>
import loginDialog from "../Login";

export default {
  name: "Header",
  components: {
    loginDialog,
  },
  data() {
    return {
      dialog: false,
      loader: null,
      loading: false,
      msg:'',
      succ_img:false
    };
  },
  watch: {
    
  },
  methods: {
    login() {
      this.dialog = true;
    },
    close(msg) {
      this.dialog = false;
      if(msg != ''){
        console.log(msg);
        this.msg = msg;
        this.succ_img = true;
      }
    },
  },
};
</script>

<style lang="less" scoped>
// 登陆成功取消头像鼠标点击手势 取消
.cancel_hand {
  cursor: initial;
}
// 对话框logo
.title-img {
  display: block;
  width: 120px;
}

// 登陆按钮等待动画
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

// 头部全局视口
.viewport {
  width: 100vw;
  padding: 15px 75px;

  .logo {
    width: 125px;
    overflow: hidden;
  }
  h1 {
    position: absolute;
    margin-left: -999999999px;
  }

  // 导航
  .nav {
    max-width: 340px;
    overflow-y: auto;
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

  // 头像
  .user {
    width: 30px;
    cursor: pointer;
    border-radius: 50%;
    overflow: hidden;
  }
}
</style>
