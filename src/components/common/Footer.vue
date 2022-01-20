<template>
  <div class="foot ban_selected_text">
    <div class="viewport clearfix">
      <div class="about">
        <ul>
          <li class="fl" :key="index" v-for="(item, index) of aboutList">
            <a :href="item.href" v-text="item.name"></a>
          </li>
        </ul>
      </div>
      <div class="clause">
        <p style="margin-left: 150px; margin-bottom: 10px">
          本公司产品适合10周岁以上用户使用&nbsp;未成年家长监护
        </p>
        <p>
          <label for="">抵制不良游戏</label>
          <label for="">拒绝盗版游戏</label>
          <label for="">注意自我保护</label>
          <label for="">谨防上当受骗</label>
        </p>
        <p>
          <label for="">适度游戏益脑</label>
          <label for="">沉迷游戏伤身</label>
          <label for="">合理安排时间</label>
          <label for="">享受健康生活</label>
        </p>
        <p style="margin-left: 53px; margin-top: 20px">
          <label
            for=""
            :key="i"
            v-for="(about, i) of company_about"
            v-text="about"
          ></label>
          <label for=""
            ><a href="http://beian.miit.gov.cn/" target="_blank"
              >蜀ICP备xxxxxxx号-1</a
            ></label
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      company_about: ["鹏珏游戏 版权所有"],
      aboutList: [
        {
          name: "关于我们",
          href: "#",
        },
        {
          name: "网盟合作文档",
          href: "#",
        },
        {
          name: "侵权投诉",
          href: "#",
        },
        {
          name: "网站地图",
          href: "#",
        },
        {
          name: "免责声明",
          href: "#",
        },
        {
          name: "官方客服",
          href: "#",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.foot {
  position: relative;
  height: 200px;
  width: 100vw;
  bottom: 0;
  background-color: #2d2d2d;
}
.foot .viewport {
  padding: 0 4vw;
  width: 1280px;
  margin: 0 auto;
}

.foot .about {
  position: absolute;
  color: #cfcccc;
  font-size: 12px;
  margin-top: 30px;
  margin-left: 400px;
}

.foot .about li {
  margin-right: 20px;
}

.foot .clause {
  position: absolute;
  color: #aaa;
  font-size: 12px;
  margin-top: 70px;
  margin-left: 300px;
}

.foot .clause p {
  margin-bottom: 5px;
}

.foot .clause p label {
  margin-right: 100px;
}
</style>
