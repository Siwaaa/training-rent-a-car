import Vue from 'vue'
import Vuex from 'vuex'
import { getVehicles } from '../api/request.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    transports: JSON.parse(localStorage.getItem('transports')) || null
  },
  mutations: {
    updateTrans(state, trans) {
      state.transports = trans
    },
    addTrans(state, trans) {
      state.transports.unshift(trans)
    }
  },
  actions: {
    async GET_TRANSPORT(ctx) {
      await getVehicles().then(
        result => {
          ctx.commit('updateTrans', result);
          localStorage.setItem('transports', JSON.stringify(result))
        },
        error => {
          alert('Искусственная ошибка загрузки данных. Давайте обновим страницу', error)
          this.$router.push('/')
        }
      );
    },
    ADD_TRANSPORT(ctx, data) {
      ctx.commit('addTrans', data);
    }
  },
  getters: {
    allTransports(state) {
      return state.transports
    }
  }
})
