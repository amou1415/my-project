<template>
  <div class="viewport clearfix">
    <!-- logo -->
    <div class="logo fl">
      <img src="../../assets/images/logo.jpg" alt="logo">
      <h1>鹏珏游戏</h1>
    </div>

    <!-- 登陆/注册 -->
    <div class="user fr">
      <img src="../../assets/images/denglu.png" alt="头像">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
  .viewport {
    width: 100vw;
    padding: 5px;
    background-color: rgb(241, 139, 139);
    overflow: hidden;

    .logo {
      width: 130px;
    }
    h1 {
      position: absolute;
      margin-left: -999999999px;
    }

    .user {
      width: 30px;
      cursor: pointer;
    }
  }
</style>
