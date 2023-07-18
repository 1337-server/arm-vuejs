import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Database from "@/views/Database.vue";
import ViewLogs from "@/views/ViewLogs.vue";
import History from "@/views/History.vue";
import Settings from "@/views/Settings.vue";
import SendToAPI from "@/views/SendToAPI.vue";
import Help from "@/components/arm settings/Help.vue";
import ChangePassword from "@/views/ChangePassword.vue";
import GeneralInfo from "@/components/arm settings/GeneralInfo.vue";
import SystemInfo from "@/components/arm settings/SystemInfo.vue";

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
        component: History
    },
    {
        path: '/view_logs',
        name: 'View logs',
        component: ViewLogs
    },
    {
        path: '/database',
        name: 'View database',
        component: Database
    },
    {
        path: '/arm_settings',
        name: 'arm_settings',
        component: Settings
    },
    {
        path: '/send_to_api',
        name: 'send_to_api',
        component: SendToAPI
    },
    {
        path: '/change_password',
        name: 'change_password',
        component: ChangePassword
    },
    // Now start accordion sections
    {
        path: '/help',
        name: 'Help',
        component: Help
    },
    {
        path: '/general-info',
        name: 'General info',
        component: GeneralInfo
    },
    {
        path: '/system-info',
        name: 'System info',
        component: SystemInfo
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
