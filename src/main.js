import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select, Input } from 'element-ui';
Vue.use(Button)
Vue.use(Select)
Vue.use(Input)
// Vue.use(Message)
Vue.use(ElementUI);

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
