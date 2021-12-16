import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios';
// 引入初始化样式
import './assets/common.css'
import App from './App.vue'

Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
}).$mount('#app')
