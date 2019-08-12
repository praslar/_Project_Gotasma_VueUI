import DashView from './components/Dash.vue'
// Import Views - Dash
import DashboardView from './components/views/Dashboard.vue'
// Routes
const routes = [
  {
    path: '/',
    component: DashView,
    children: [
      {
        path: 'dashboard',
        alias: '',
        component: DashboardView,
        name: 'Dashboard',
        meta: {description: 'Overview of environment'}
      }
    ]
  }, {
    // not found handler
    path: '*'
  }
]

export default routes
