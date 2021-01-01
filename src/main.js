import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import animated from 'animate.css'
import App from './App.vue'
import httpRequest from "@/utils/httpRequest";


Vue.use(ElementUI);
Vue.use(animated)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// 挂载全局
Vue.prototype.$http = httpRequest // ajax请求方法