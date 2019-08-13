import DashView from './components/Dash.vue'
// Import Views - Dash
import ProjectsView from './components/views/Projects.vue'
// Routes
const routes = [{
  path: '/',
  component: DashView,
  children: [{
    path: 'Projects',
    alias: '',
    component: ProjectsView,
    name: 'Projects',
    meta: { description: 'View all projects' }
  }]
}, {
    // not found handler
  path: '*'
}]

export default routes
