import Vue from 'vue'
import App from './App.vue'
import VueClipboard from 'vue-clipboard2'
import VueFullPage from 'vue-fullpage.js'
import './assets/css/reset.css'
import './plugins/element.js'

Vue.use(VueFullPage)
Vue.use(VueClipboard)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
