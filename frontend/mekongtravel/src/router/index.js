import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path:"/",
        name:'login',
        component: () => import('../App.vue')
    },
    {
        path:'/register',
        name: 'Register',
        component: () => import('../views/register.vue')
    }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

export default router