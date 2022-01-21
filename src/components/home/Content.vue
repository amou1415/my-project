<template>
  <main>
    <div class="content clearfix">
        <Games></Games>
        <NewGames></NewGames>
    </div>
  </main>
</template>

<script>
import Games from '../home/Left'
import NewGames from '../home/Right'
export default {
    components:{
        Games,
        NewGames
    }
};
</script>

<style lang="less" scoped>
    .content {
        width: 100vw;
        padding: 0 6vw;
    }
</style>
