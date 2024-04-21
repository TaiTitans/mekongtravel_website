import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TinhThanh from '../views/TinhThanh.vue'
import DiaDiem from '../views/DiaDiem.vue'
import AmThuc from '../views/AmThuc.vue'
import Feedback from '../views/Feedback.vue'
import Login from '../views/Login.vue'
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/admin', 
        name: 'WebDefault', 
        component: TinhThanh 
      },
      {
        path: 'tinhthanh',
        name: 'TinhThanh',
        component: TinhThanh
      },
      {
        path: 'diadiem',
        name: 'DiaDiem',
        component: DiaDiem
      },
      {
        path: 'amthuc',
        name: 'AmThuc',
        component: AmThuc
      },
      {
        path: 'feedback',
        name: 'Feedback',
        component: Feedback
      }

    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next)=>{
  const isAuthenticated = localStorage.getItem('isAuthenticated')

  //Kiểm tra có phải trang login không
  const isLoginPage = to.path === "/login"
  
  if(!isAuthenticated && !isLoginPage){
    localStorage.setItem('redirectPath', to.path)
    console.log(isAuthenticated);
    next('/login')
  }else{
    console.log(isAuthenticated);
    next()
  }
})
export default router
