import DashView from './components/Dash.vue'
// Import Views - Dash
import Resources from './components/views/Resources/Resources.vue'
import ManageProject from './components/views/ManageProject/ManageProject.vue'
import History from './components/views/History/History.vue'
import Project from './components/views/Project/Project.vue'
import Exception from './components/views/Exception/ManageException.vue'
import Team from './components/views/Team/Team.vue'
import Gantt from './components/views/Project/Gantt.vue'
// Routes
const routes = [{
    path: '/',
    component: DashView,
    children: [{
            path: 'manageproject',
            alias: '',
            component: ManageProject,
            name: 'Projects Management',
            meta: { description: 'View all projects' }
        },
        {
            path: 'resources',
            component: Resources,
            name: 'Resources',
            meta: { description: 'View all resources' }
        },
        {
            path: 'exception',
            component: Exception,
            name: 'Exception',
            meta: { description: 'View Excluded Holiday and day-off' }
        },
        {
            path: 'project/:id/',
            component: Project,
            name: 'Project',
            props: true,
            meta: { description: 'View project detail' },
            children: [{
                    path: 'gantt',
                    props: true,
                    alias: '',
                    component: Gantt,
                    name: 'Gantt',
                    meta: { description: 'Gantt chart' }
                },
                {
                    path: 'team',
                    props: true,
                    component: Team,
                    name: 'Team',
                    meta: { description: 'Team member' }
                },
                {
                    path: 'history',
                    props: true,
                    component: History,
                    name: 'History',
                    meta: { description: 'View project history' }
                }
            ]
        }
    ]
}]
export default routes