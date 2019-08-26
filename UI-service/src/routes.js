import DashView from './components/Dash.vue'
// Import Views - Dash
import MemberView from './components/views/MemberView/Member.vue'
import ProjectsManagementView from './components/views/ProjectsManagementView/ManageProject.vue'
import HistoryView from './components/views/HistoryView/History.vue'
import ProjectDetailView from './components/views/ProjectDetailView/Project.vue'
import Exceptions from './components/views/ExceptionView/ManageExceptions.vue'
import Team from './components/views/MemberView/Team.vue'
import Gantt from './components/views/ProjectDetailView/Gantt.vue'
// Routes
const routes = [{
        path: '/project/:id/',
        component: ProjectDetailView,
        name: 'Project',
        props: true,
        meta: { description: 'View project detail' },
        children: [{
                path: 'gantt',
                alias: '',
                props: ['project'],
                component: Gantt,
                name: 'Gantt',
                meta: { description: 'Gantt chart' }
            },
            {
                path: 'team',
                component: Team,
                name: 'Team',
                meta: { description: 'Team member' }
            }
        ]
    },
    {
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
            },
            {
                path: 'exceptions',
                component: Exceptions,
                name: 'Exceptions',
                meta: { description: 'View Excluded Holiday and day-off' }
            }
        ]
    }
]
export default routes