import Vue from 'vue'
import Router from 'vue-router'
import TestView from '@/page/testview'
import Swiper from '@/page/swiper.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'TestView',
      component: TestView
    },
    {
      path: '/swiper',
      name: 'Swiper',
      component: Swiper
    }
  ]
})
