<template>
  <div class="slotContainer">
      <slot>
          <div class="content">
            <p>暂无更多～</p>
          </div>
      </slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .slotContainer {
        width: 100%;

        .content {
            width: 100%;
            font-size: 14px;
            color: rgb(158, 158, 158);
            text-align: center;
        }
    }
</style>