import Vue from 'vue'
import App from './App'
import router from './router'
import { get, post } from './util/http'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$get = get
Vue.prototype.$post = post

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
