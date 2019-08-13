import DashView from './components/Dash.vue'
// Import Views - Dash
import MemberView from './components/views/Member.vue'
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

    // not found handler
  path: '*'
}]

export default routes
