import About from '@/pages/About';
import Main from '@/pages/Main';
import BarCompositionApi from '@/pages/BarCompositionApi';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { 
        path: '/',
        component: Main
    },
    {
        path: '/composition',
        component: BarCompositionApi
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