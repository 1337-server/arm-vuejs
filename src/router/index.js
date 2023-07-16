import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/History',
        name: 'History',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/History.vue')
        }
    },
    {
        path: '/view_logs',
        name: 'View logs',
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/ViewLogs.vue')
        }
    },
    {
        path: '/database',
        name: 'View database',
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/Database.vue')
        }
    },
    {
        path: '/arm_settings',
        name: 'arm_settings',
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/Settings.vue')
        }
    },
    {
        path: '/send_to_api',
        name: 'send_to_api',
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/SendToAPI.vue')
        }
    },
    {
        path: '/change_password',
        name: 'change_password',
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/ChangePassword.vue')
        }
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
