import DashView from './components/Dash.vue'
// Import Views - Dash
import MemberView from './components/views/Member.vue'
import ProjectManagement from './components/views/ProjectManagement.vue'
import HistoryView from './components/views/History.vue'
import ProjectsView from './components/views/Project.vue'
// Routes
const routes = [{
        path: '/',
        component: DashView,
        children: [{
                path: 'projectManagement',
                alias: '',
                component: ProjectManagement,
                name: 'ProjectManagement',
                meta: { description: 'View all projects' }
            },
            {
                path: 'member',
                component: MemberView,
                name: 'Member',
                meta: { description: 'View all member' }
            },
            {
                path: 'project',
                component: ProjectsView,
                name: 'Project',
                meta: { description: 'View project detail' }
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