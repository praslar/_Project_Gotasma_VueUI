import DashView from './components/Dash.vue'
// Import Views - Dash
import DashboardView from './components/views/Dashboard.vue'
import MemberView from './components/views/Member.vue'

// Routes
const routes = [{
    path: '/',
    component: DashView,
    children: [{
            path: 'dashboard',
            alias: '',
            component: DashboardView,
            name: 'Dashboard',
            meta: { description: 'View all project' }
        },
        {
            path: 'member',
            component: MemberView,
            name: 'Member',
            meta: { description: 'View all member' }
        }
    ]
}, {
    // not found handler
    path: '*'
}]

export default routes
