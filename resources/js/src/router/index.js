import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import RegistrationVerification from '../views/RegistrationVerification.vue'
import ResetPassword from '../views/ResetPassword.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Registration',
        component: Registration
    },
    {
        path: '/forgot-password',
        name: 'ForgotPassword',
        component: ForgotPassword
    },
    {
        path: '/registration-verification',
        name: 'RegistrationVerification',
        component: RegistrationVerification
    },
    {
        path: '/reset-password',
        name: 'ResetPassword',
        component: ResetPassword
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if(to.path == '/' && to.query.verify_token) {
        const { verify_token: t } = to.query
        next({
            path: '/registration-verification',
            query: { t }
        })
    } else if (to.path == '/' && to.query.reset_pwd) {
        const { reset_pwd: verify_code } = to.query
        next({
            path: '/reset-password',
            query: { verify_code }
        })
    }
    else {
        next()
    }
})

export default router
