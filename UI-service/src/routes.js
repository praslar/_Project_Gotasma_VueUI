import DashView from './components/Dash.vue'
// Import Views - Dash
import MemberView from './components/views/Member.vue'
import ProjectsManagementView from './components/views/ProjectsManagement.vue'

// Routes
const routes = [{
  path: '/',
  component: DashView,
  children: [{
    path: 'projectsManagement',
    alias: '',
    component: ProjectsManagementView,
    name: 'Projects Management',
    meta: { description: 'View all projects' }
  },
  {
    path: 'member',
    component: MemberView,
    name: 'Member',
    meta: { description: 'View all member' }
  }
  ]
}, {
  path: '*'
}]

export default routes
