import Vue from 'vue'
import App from './App.vue'

import './styles/quasar.styl'
import 'quasar/dist/quasar.ie.polyfills'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import Quasar from 'quasar'
import i18n from './i18n'
Vue.use(Quasar, {
  config: {}
})

Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
