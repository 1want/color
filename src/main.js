import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueClipboard from 'vue-clipboard2'
import 'fullpage.js/vendors/scrolloverflow'
// import './fullpage.scrollHorizontally.min'
import VueFullPage from 'vue-fullpage.js'

import './assets/css/reset.css'
import './plugins/element.js'

Vue.use(VueFullPage)
Vue.use(VueClipboard)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
