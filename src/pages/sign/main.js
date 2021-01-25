import Vue from 'vue'
import App from './App.vue'
import animated from 'animate.css'
import httpRequest from "@/utils/httpRequest";
import  Dialog from 'element-ui'

Vue.use(animated)
Vue.use(Dialog)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')

Vue.prototype.$http = httpRequest // ajax请求方法
