import Vue from 'vue'
// 导入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 导入vuetify
import vuetify from '@/plugins/vuetify'

// 导入路由
import router from './router/index'

import axios from 'axios';

// 引入初始化样式
import './assets/css/init.css'
// 引入动画库
import './assets/css/animate.min.css'

import qs from 'qs'

import App from './App.vue'

Vue.use(ElementUI).use(qs)

Vue.config.productionTip = false

Vue.prototype.$axios = axios;

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')