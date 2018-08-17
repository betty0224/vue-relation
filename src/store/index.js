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
    menuList: [
      {"id":1,"parentId":null,"sort":0,"name":"数描画像","href":"/relationSearch","icon":"fa fa-dashboard","children":[],"isShow":"1"},
      {"id":31,"parentId":null,"sort":1,"name":"全息搜索","href":"/dashboard","icon":"fa fa-upload","children":[],"isShow":"1"},
      {"id":913,"parentId":null,"sort":0,"name":"场景大厅","href":"/test/1/1/2","icon":"fa fa-area-chart","children":[] ,"isShow":"1"},
      {"id":93,"parentId":null,"sort":0,"name":"话单分析","href":"/test/1/2","icon":"fa fa-area-chart","children":
              [
                {"id":103,"parentId":913,"sort":0,"name":"话单分析","href":"/test/2/1","icon":"fa fa-image","children":[],"isShow":"1"},
                {"id":104,"parentId":913,"sort":0,"name":"分析快照","href":"/test/2/1","icon":"fa fa-image","children":[],"isShow":"1"},
                {"id":105,"parentId":913,"sort":0,"name":"历史话单","href":"/test/2/1","icon":"fa fa-image","children":[],"isShow":"1"}
            ],
        "isShow":"1"},
      {"id":102,"parentId":null,"sort":3,"name":"关系配置","href":"/test/2","icon":"fa fa-download","children":
                [
                  {"id":103,"parentId":102,"sort":0,"name":"雪花配置","href":"/test/2/1","icon":"fa fa-image","children":[],"isShow":"1"},
                  {"id":104,"parentId":102,"sort":0,"name":"关系配置","href":"/test/2/1","icon":"fa fa-image","children":[],"isShow":"1"},
                  {"id":105,"parentId":102,"sort":0,"name":"简单关系","href":"/test/2/1","icon":"fa fa-image","children":[],"isShow":"1"}
                ],
        "isShow":"1"},
      {"id":6,"parentId":null,"sort":6,"name":"主题配置","href":"/sys","icon":"fa fa-cog","children":
                [
                  {"id":108,"parentId":6,"sort":0,"name":"主题数据抽取配置","href":"/sys/resource","icon":"fa fa-database","children":[],"isShow":"1"},
                  {"id":109,"parentId":6,"sort":0,"name":"索引配置","href":"/sys/resource","icon":"fa fa-database","children":[],"isShow":"1"},
                  {"id":110,"parentId":6,"sort":0,"name":"主题表管理","href":"/sys/resource","icon":"fa fa-database","children":[],"isShow":"1"},
                  {"id":111,"parentId":6,"sort":0,"name":"标签任务管理","href":"/sys/resource","icon":"fa fa-database","children":[],"isShow":"1"},
                  {"id":112,"parentId":6,"sort":0,"name":"百科数据源配置","href":"/sys/resource","icon":"fa fa-database","children":[],"isShow":"1"}
                ],
        "isShow":"1"},
      {"id":7,"parentId":null,"sort":1,"name":"系统配置","href":"/sys/menuList","icon":"fa fa-navicon","children":
                [
                  {"id":113,"parentId":7,"sort":0,"name":"图库管理","href":"/sys/resource","icon":"fa fa-database","children":[],"isShow":"1"},
                  {"id":114,"parentId":7,"sort":0,"name":"操作记录","href":"/sys/resource","icon":"fa fa-universal-access","children":[],"isShow":"1"},
                  {"id":115,"parentId":7,"sort":0,"name":"日志管理","href":"/sys/resource","icon":"fa fa-database","children":[],"isShow":"1"}
                ],
        "isShow":"1"},
      {"id":9,"parentId":null,"sort":3,"name":"触网报警","href":"/sys/userList","icon":"fa fa-user-plus","children":
                [
                  {"id":116,"parentId":9,"sort":2,"name":"实时报警","href":"/sys/roleList","icon":"fa fa-universal-access","children":[],"isShow":"1"},
                  {"id":117,"parentId":9,"sort":2,"name":"警情管理","href":"/sys/roleList","icon":"fa fa-universal-access","children":[],"isShow":"1"},
                  {"id":118,"parentId":9,"sort":2,"name":"报警配置","href":"/sys/roleList","icon":"fa fa-universal-access","children":[],"isShow":"1"}
                ],
        "isShow":"1"}
    ],
    sidebar: {
      collapsed: false
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
