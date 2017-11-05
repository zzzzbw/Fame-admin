import Vue from 'vue'
import App from './App'
import router from './router'
import Api from './util/api'
import FameUtil from './util/fame'
import Moment from 'moment'
import hljs from 'highlight.js/lib/highlight' // 引入lib而不是整个文件

import { Message } from 'element-ui'

// 引入需要的语言
['javascript', 'python', 'java', 'xml'].forEach((langName) => {
  const langModule = require(`highlight.js/lib/languages/${langName}`)
  hljs.registerLanguage(langName, langModule)
})

// 引用highlight
Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

// 时间过滤器
Vue.filter('time', function (data, fmt) {
  fmt = fmt || 'YYYY-MM-DD hh:mm'
  return Moment(data).format(fmt)
})

Vue.config.productionTip = false
Vue.prototype.$api = Api
Vue.prototype.$util = FameUtil
Vue.prototype.$moment = Moment
Vue.prototype.$message = Message
Vue.prototype.$hljs = hljs

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
