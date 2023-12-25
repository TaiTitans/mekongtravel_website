import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path:"/",
        name:'Home',
        component: () => import('../App.vue')
    },
    {
        path:'/register',
        name: 'Register',
        component: () => import('../views/register.vue')
    },
    {
        path:'/login',
        name: 'Login',
        component: () => import('../views/login.vue')
    },
    {
        path:'/homepage',
        name: 'HomePage',
        component: () => import('../views/homepage/homepage.vue')
    }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

export default router