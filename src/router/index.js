import Vue from 'vue'
import Router from 'vue-router'
import routerConfig from './routes';

Vue.use(Router)

//定义路由
const router = new Router({
  routes: routerConfig,
  //mode: 'history'
});

router.beforeEach((route, redirect, next) => {
  if (!window.localStorage.getItem('Authorization') && route.path !=='/login') {
    next({
      path:'/login',
      query:{redirect: route.fullPath}
    });
  }else{
    next();
  }
});

export default router;
