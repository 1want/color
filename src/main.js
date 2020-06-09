import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueClipboard from 'vue-clipboard2'

import './assets/css/reset.css'
import './plugins/element.js'

Vue.use(VueClipboard)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
