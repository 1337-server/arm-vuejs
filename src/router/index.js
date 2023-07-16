import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
        }
    },
    {
        path: '/history',
        name: 'history',
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/TestingView.vue')
        }
    },
    {
        path: '/view_logs',
        name: 'View logs',
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/TestingView.vue')
        }
    },
    {
        path: '/database',
        name: 'View database',
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/TestingView.vue')
        }
    },
    {
        path: '/arm_settings',
        name: 'arm_settings',
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/TestingView.vue')
        }
    },
    {
        path: '/send_to_api',
        name: 'send_to_api',
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/TestingView.vue')
        }
    },
    {
        path: '/change_password',
        name: 'change_password',
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/TestingView.vue')
        }
    },
    {
        path: '/welcome',
        name: 'Welcome',
        component: function () {
            return import('../views/HomeView.vue')
        }
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
