<template>
  <div class="viewport clearfix">
    <!-- logo -->
    <div class="logo fl">
      <img src="../../assets/images/logo.jpg" alt="logo" />
      <h1>鹏珏游戏</h1>
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
  padding: 5px 50px;
  background-color: rgb(241, 139, 139);

  .logo {
    width: 130px;
    overflow: hidden;
  }
  h1 {
    position: absolute;
    margin-left: -999999999px;
  }

  .user {
    width: 30px;
    cursor: pointer;
    border-radius: 50%;
    overflow: hidden;
  }
}
</style>
