import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from 'jquery'
import bootstrap from 'bootstrap-vue'
import axios from 'axios'


Vue.config.productionTip = false
Vue.use(jquery)
Vue.use(bootstrap)
Vue.prototype.$http=axios


new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
