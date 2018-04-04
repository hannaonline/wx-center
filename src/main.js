// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import axios from 'axios'
import $ from 'jquery'

Vue.prototype.$http= axios

// axios.defaults.baseURL = 'http://local.wx.cntv.cn/'

import "./less/common.less";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<router-view/>'
})
