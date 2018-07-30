import HelloWorld from '@/components/HelloWorld';
import login from '@/components/pages/login'

const routes = [
  {path:'/login',component: login},
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }
];


export default routes;
