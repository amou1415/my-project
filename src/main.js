import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index'
import axios from 'axios';
// import VueRouter from 'vue-router'
// 引入初始化样式
import './assets/css/init.css'
// 引入动画库
import './assets/css/animate.min.css'
import App from './App.vue'

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.$axios = axios;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')