import Vue from "vue";
import Vuex from "vuex";
import types from "./mutation-types";
import * as api from "../service/getData";
import { getLocalKey } from '../common/utils';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true, //process.env.NODE_ENV !== 'production', 直接修改state 抛出异常

  getters: {
    loading: state => state.loading,
    menuList: state => state.menuList,
    userInfo: state => state.userInfo,
    sidebar: state => state.sidebar
  },
  state: {
    loading: false,
    menuList: {},
    sidebar: {
      collapsed: getLocalKey('state.sidebar.collapsed','false') === 'true'
    },
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
    [types.TOGGLE_SIDEBAR] (state, collapsed) {
      if (collapsed == null ) collapsed = !state.sidebar.collapsed;
      state.sidebar.collapsed = collapsed;
      window.sessionStorage.setItem('state.sidebar.collapsed',collapsed);
    },
    [types.TOGGLE_SIDEBAR_SHOW] (state,show){
      if(show == null) state.sidebar.show = !state.sidebar.show;
      else{
        state.sidebar.show = show;
      }
      window.sessionStorage.setItem("state.sidebar.show",state.sidebar.show);
    }
  },
  actions:{
    //异步的函数
  }
});
export default store;
