import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/home',
    children:[
      {
        path: '/home',
        name: '首页',
        component: ()=>import('@/views/dashboard.vue'),
      }
    ]
  }
]

let router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      return savePosition
    } else {
      return { top: 0 }
    }
    
  }
})

export default router;