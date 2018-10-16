import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from 'jquery'
import bootstrap from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(jquery)
Vue.use(bootstrap)

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
