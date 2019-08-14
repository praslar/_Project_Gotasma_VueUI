import DashView from './components/Dash.vue'
// Import Views - Dash
import MemberView from './components/views/Member.vue'
import ProjectsView from './components/views/Projects.vue'
import HistoryView from './components/views/History.vue'
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
},
{
  path: '/history',
  component: HistoryView,
  name: 'History'
}
]
export default routes
