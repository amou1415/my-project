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
    <el-dialog
      title="登陆"
      :visible.sync="dialog"
      width="30%"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialog = false">取 消</el-button>
        <el-button type="primary" @click="dialog = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    login() {
      this.dialog = true;
    },
  },
};
</script>

<style lang="less" scoped>
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
