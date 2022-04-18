import Main from '@/pages/Main';
import About from '@/pages/About';
import Bar from '@/pages/Bar';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { 
        path: '/',
        component: Main
    },
    { 
        path: '/bar',
        component: Bar
    },
    { 
        path: '/about',
        component: About
    },
]
 
const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router