import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: localStorage
})

const state = {
  products: []
}

const getters = {
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

const mutations = {
  [types.ADD_TO_CART] (state, { prod }) {
      state.products.push(prod)
  },
  [types.DELETE_FROM_CART] (state, { prod }) {
    let index = state.products.indexOf(prod)
    state.products.splice(index, 1)
  }
} 

const actions = {
	addToCart({ commit }, prod){
		commit(types.ADD_TO_CART, {
      prod
		})
  },
	deleteFromCart({ commit }, prod){
		commit(types.DELETE_FROM_CART, {
      prod
		})
  },
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins: [vuexPersist.plugin]
})
