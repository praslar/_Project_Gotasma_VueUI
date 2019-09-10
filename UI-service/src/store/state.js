export default {
    adminInfo: {
        id: 'admin',
        fullName: 'Coffee Cat',
        email: 'coffaacat@gmail.com',
        country: 'Heaven',
        avatar: '/static/img/stock/giphy.gif',
        aboutAvatar: '/static/img/stock/giphy.gif',
        aboutBackground: '/static/img/about.jpg',
        role: 'Task Planning'
    },
    // gantt chart header default options
    headerOptions: {
        title: {
            label: 'Coffee Cat ',
            html: false
        },
        locale: {
            name: 'en',
            Now: 'Now',
            'X-Scale': 'Width',
            'Y-Scale': 'Height',
            'Task list width': 'Task width',
            'Before/After': 'Expand',
            'Display task list': 'Hide Task'
        }
    },
    // task default preloading
    tasks: [{
        id: 0,
        label: 'Preloading',
        user: 'Preloading',
        start: 1568566800000 + 86400000 * 4,
        duration: 3 * 24 * 60 * 60 * 1000,
        type: 'project'
    }],
    resources: [],
    users: [],
    projects: [],
    project: {},
    exceptions: [],
    exceptionDatesList: []
}