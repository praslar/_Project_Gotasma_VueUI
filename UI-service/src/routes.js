import DashView from './components/Dash.vue'
// Import Views - Dash
import MemberView from './components/views/MemberView/Member.vue'
import ProjectsManagementView from './components/views/ProjectsManagementView/ManageProject.vue'
import HistoryView from './components/views/HistoryView/History.vue'
import ProjectDetailView from './components/views/ProjectDetailView/Project.vue'
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
        component: ProjectDetailView,
        name: 'Project',
        meta: { description: 'View project detail' }
    }
]
export default routes