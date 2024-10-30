import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/components/auth/Login.vue';
import Register from '@/components/auth/Register.vue';
import DashBoard from '@/components/dashboard/DashBoard.vue';
import Users from "@/components/dashboard/Users.vue";

const routes = [
    { path: '/', component: Login },
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '/dashboard', name: 'Dashboard', component: DashBoard },
    { path: '/users', name: 'Users', component: Users},

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('authToken');
    if(to.meta.requiresAuth && !isAuthenticated) {
        next('/login');
    } else {
        next();
    }
});

export default router;
