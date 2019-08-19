import DashView from './components/Dash.vue'
// Import Views - Dash
import MemberView from './components/views/Member.vue'
import ProjectsManagementView from './components/views/ProjectsManagement.vue'
import HistoryView from './components/views/History.vue'
import ProjectsView from './components/views/Project.vue'
// Routes
const routes = [{
        path: '/',
        component: DashView,
        children: [{
                path: 'projectsmanagement',
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
            },
            {
                path: 'history',
                component: HistoryView,
                name: 'History',
                meta: { description: 'View project history' }
            }
        ]
    },

    {
        path: '/project',
        component: ProjectsView,
        name: 'Project',
        meta: { description: 'View project detail' }
    }
]
export default routes