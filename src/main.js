import Vue from 'vue'
import App from './App'
import router from './router'
import Api from './util/api'
import FameUtil from './util/fame'
import ElementUI from 'element-ui'
import 'font-awesome/css/font-awesome.min.css'

import Moment from 'moment'

// 时间过滤器
Vue.filter('time', function (data, fmt) {
  fmt = fmt || 'YYYY-MM-DD hh:mm'
  return Moment(data).format(fmt)
})

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$api = Api
Vue.prototype.$util = FameUtil
Vue.prototype.$moment = Moment

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
