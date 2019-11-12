import Vuex from '@wepy/x';

export default new Vuex.Store({
  state: {
    openId: '',
    homeCity: '',
    locationInfo: {},
    flag: 0
  },
  mutations: {
    //登录、定位
    changeData(state, { key, value }) {
      state[key] = value;
    },
    //更新状态
    changeFlag(state) {
      state.flag++;
    }
  },
  actions: {
    setStoreData({ commit }, { key, value }) {
      commit('changeData', { key, value });
    },
    changeFlag({ commit }) {
      commit('changeFlag');
    },
  }
});
