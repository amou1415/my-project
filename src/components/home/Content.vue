<template>
  <main>
    <div class="content clearfix">
        <Games></Games>
        <NewGames></NewGames>
    </div>
  </main>
</template>

<script>
export default {
    components:{
        'Games' : () => import('../home/ContentLeft'),
        'NewGames' : () => import('../home/ContentRight'),
    }
};
</script>

<style lang="less" scoped>
    .content {
        width: 100vw;
        padding: 0 6vw;
    }
</style>
