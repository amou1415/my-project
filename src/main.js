import Vue from 'vue'
// 导入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 导入vuetify
import vuetify from '@/plugins/vuetify'

// 导入路由
import router from './router/index'

// 导入axios
import axios from 'axios';

// 引入初始化样式
import './assets/css/init.css'
// 引入动画库
import './assets/css/animate.min.css'
// 引入点赞、评论、下载icon
import './assets/fonts/iconfont.css'
import './assets/fonts/iconfont'

// 导入懒加载插件
import VueLazyload from 'vue-lazyload'

import qs from 'qs'
import App from './App.vue';
// 导入pinia
import { createPinia, PiniaVuePlugin } from 'pinia';

Vue.use(ElementUI).use(qs).use(VueLazyload).use(PiniaVuePlugin);
const pinia = createPinia();

Vue.config.productionTip = false

Vue.prototype.$axios = axios;

new Vue({
  router,
  vuetify,
  pinia,
  render: h => h(App),
}).$mount('#app')