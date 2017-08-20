import Vue from 'vue'
import App from './App'
import router from './router'
import { get, post } from './util/http'
import FameUtil from './util/fame'
import ElementUI from 'element-ui'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.$util = FameUtil

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
