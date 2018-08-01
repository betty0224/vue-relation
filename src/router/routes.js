import HelloWorld from '@/components/HelloWorld';
import login from '@/components/pages/login';
import app from "../App.vue";

const routes = [
  {path:'/login',component: login},
  {
    path: '',component: app,children: [
      {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
      }
    ]
  }

];


export default routes;
