import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/down',
      name: 'down',
      component: () => import("../pages/down.vue"), 
      meta: { title: '领取会员卡' },
    },
  ]
})

