import Vue from 'vue'
import Router from 'vue-router'
import XRecommend from '@/components/XRecommend'
import xhadoop from '@/components/Xhadoop'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'XRecommend',
      component: XRecommend
    },
    {
      path: '/XRecommend',
      name: 'XRecommend',
      component: XRecommend
    },
    {
      path: '/Xhadoop',
      name: 'Xhadoop',
      component: xhadoop
    }
  ]
})
