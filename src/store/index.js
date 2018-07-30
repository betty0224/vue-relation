import Vue from "vue";
import Vuex from "vuex";
import types from "./mutation-types";
import * as api from "../service/getData";

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true, //process.env.NODE_ENV !== 'production', 直接修改state 抛出异常

  getters: {
    loading: state => state.loading,
    menuList: state => state.menuList,
    userInfo: state => state.userInfo,
  },
  state: {
    loading: false,
    menuList: {},
    userInfo: {name:'佚名'}
  },
  mutations: {
    //只能同步的函数
    [types.SET_USER_INFO] (state, info) {
      state.userInfo = info;
    },
    [types.TOGGLE_LOADING] (state) {
      state.loading = !state.loading;
    },
    [types.LOAD_MENU] (state, menu) {
      state.menuList = menu;
    },
  },
  actions:{
    //异步的函数
  }
});
export default store;
