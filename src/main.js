import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import animated from 'animate.css'
import App from './App.vue'

Vue.use(ElementUI);
Vue.use(animated)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
