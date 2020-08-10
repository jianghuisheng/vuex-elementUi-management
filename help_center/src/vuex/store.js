import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  userinfo: JSON.parse(localStorage.getItem("userinfo"))
};

const mutations = {
  // eslint-disable-next-line no-shadow
  SAVE_USERINFO(state, userinfo) {
    console.log("函数被触发了。");
    localStorage.setItem("userinfo", JSON.stringify(userinfo));
    state.userinfo = userinfo;
  }
};

export default new Vuex.Store({
  state,
  mutations
});
