import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'


Vue.config.productionTip = false

//挂载之后会在vue的原型上创建和赋值该创建的store，然后所有组件可以使用该store中的东西
// Vue.prototype.$store=store

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
