import Vue from 'vue'
import App from './App.vue'
import animated from 'animate.css'
import httpRequest from "@/utils/httpRequest";

Vue.use(animated)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.prototype.$http = httpRequest // ajax请求方法