import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  products: []
}

const getters = {
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

const mutations = {
    addToCart (state) {
      state.products.push(1)
    },
    decrement (state) {
      state.count--
    }
}

const actions = {
    addToCart: ({ commit }) => commit('addToCart'),
    decrement: ({ commit }) => commit('decrement'),
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
