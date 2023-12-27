import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Layout',
        component: () => import('../views/homepage/layout.vue'),
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('../App.vue')
            }
        ],
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/register.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/login.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
