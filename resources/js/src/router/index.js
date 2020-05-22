import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import RegistrationVerification from '../views/RegistrationVerification.vue'
import ResetPassword from '../views/ResetPassword.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
        meta: {
            guest: true
        },
    },
    {
        path: '/register',
        name: 'Registration',
        component: Registration,
        meta: {
            guest: true
        },
    },
    {
        path: '/forgot-password',
        name: 'ForgotPassword',
        component: ForgotPassword,
        meta: {
            guest: true
        },
    },
    {
        path: '/registration-verification',
        name: 'RegistrationVerification',
        component: RegistrationVerification,
        meta: {
            guest: true
        },
    },
    {
        path: '/reset-password',
        name: 'ResetPassword',
        component: ResetPassword,
        meta: {
            guest: true
        },
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            requiresAuth: true
        },
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('token') == null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.guest)) {
        if (localStorage.getItem('token') == null) {
            next()
        }
        else {
            next({ path: '/home' })
        }
    } else {
        next()
    }
})

router.beforeEach((to, from, next) => {
    if(to.path == '/') {
        const { redirect = null, status } = to.query;
        if (redirect) {
            next({
                path: redirect,
                query: { status }
            })
        } else {
            next()
        }
        
    } else {
        next()
    }
})


export default router
