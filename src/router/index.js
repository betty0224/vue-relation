import Vue from 'vue';
import Router from 'vue-router';
import {sync} from "vuex-router-sync";
import routerConfig from './routes';
import store from '../store';

Vue.use(Router);

//定义路由
const router = new Router({
  routes: routerConfig,
  //mode: 'history'
});
  sync(store ,router);

router.beforeEach((route, redirect, next) => {
  if (!window.sessionStorage.getItem('token') && route.path !=='/login') {
    next({
      path:'/login',
      query:{redirect: route.fullPath}
    });
  }else{
    next();
  }
});

export default router;
