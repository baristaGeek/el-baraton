import Vue from 'vue'
import App from './components/App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)
Vue.use(BootstrapVue);

var numeral = require('numeral');

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
