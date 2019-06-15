// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import testComponent from './components/HelloWorld.vue'
import testJson from './components/test.vue'

require ('./mock/index.js')
import vueSwiper from 'vue-awesome-swiper'
 
import 'swiper/dist/css/swiper.css'  //引入样式

Vue.prototype.$http = axios
Vue.config.productionTip = false

// 注册组件
Vue.component('my-test-compontent', testComponent)
Vue.component('my-test-json', testJson)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
