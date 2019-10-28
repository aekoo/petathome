import Vuex from '@wepy/x';

export default new Vuex.Store({
  state: {
    openId: '',
  },
  mutations: {
    changeData(state, { key, value }) {
      state[key] = value;
    }
  },
  actions: {
    setStoreData({ commit }, { key, value }) {
      commit('changeData', { key, value });
    },
  }
});
