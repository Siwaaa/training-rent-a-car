import Vue from 'vue'
import Vuex from 'vuex'
import { getVehicles } from '../api/request.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    transports: []
  },
  mutations: {
    updateTrans(state, trans) {
      state.transports = trans
    }
  },
  actions: {
    async GET_TRANSPORT(ctx) {
      await getVehicles().then(
        result => ctx.commit('updateTrans', result),
        error => alert('Ошибка загрузки данных. Попробуйте обновить страницу',error)
      );
    },
  },
  getters: {
    allTransports(state) {
      return state.transports
    }
  }
})
