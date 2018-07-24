import Vue from 'vue'
import App from './components/App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueLocalStorage from 'vue-localstorage'
import swal from 'sweetalert'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vuex from 'vuex'
import store from './store'

Vue.use(Vuex);
Vue.use(VueLocalStorage);
Vue.use(BootstrapVue);

Vue.component('font-awesome-icon', FontAwesomeIcon)

var numeral = require('numeral');

library.add(faShoppingCart)

Vue.config.productionTip = false


new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
