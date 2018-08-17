import relationSearch from '../components/relationSearch.vue';
import dashboard from '../components/dashboard.vue';
import login from '../components/pages/login.vue';
import app from "../App.vue";

const routes = [
  {path:'/login',component: login},
  {
    path: '',component: app,children: [
      {
        path: '/relationSearch',
        component: relationSearch
      },
      {
        path:'/dashboard',
        component: dashboard
      }
    ]
  }

];


export default routes;
