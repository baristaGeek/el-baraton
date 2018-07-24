import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

const state = {
  products: []
}

const getters = {
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

// const mutations = {
//     addToCart (state) {
//       state.products.push(1)
//     },
//     decrement (state) {
//       state.count--
//     }
// }

const mutations = {
  
    [types.ADD_TO_CART] (state, { name }) {
        // const record = state.products.find(p => p.id === id)

        state.products.push(name)
  
      //   if (!record) {
      //     state.added.push({
      //       id,
      //       quantity: 1
      //     })
      //   } else {
      //     record.quantity++
      //   }
      // }
  }
} 

// const actions = {
//     addToCart: ({ commit }) => commit('addToCart'),
//     decrement: ({ commit }) => commit('decrement'),
// }

const actions = {
	addToCart({ commit }, prod){
		commit(types.ADD_TO_CART, {
		  name: prod.name
		})
	}
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
