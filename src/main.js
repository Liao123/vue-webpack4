import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import './comm/rem'
import router from './router/index.js'
// import 'amfe-flexible'
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  /*路由发生改变修改页面的title */
  if(to.meta.title) {
    document.title = to.meta.title
  }
  next();
});
// new Vue({
//   router,
//   render: h => h(App),
// }).$mount('#app')

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
