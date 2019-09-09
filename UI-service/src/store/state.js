import dayjs from 'dayjs'

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
        start: 1567875600000,
        duration: 1 * 24 * 60 * 60 * 1000,
        type: 'project'
    }],
    // Gant default options
    options: {
        scope: {
            before: 1,
            after: 80
        },
        maxRows: 1000,
        maxHeight: 1000,
        times: {
            timeZoom: 21
        },
        row: {
            height: 20
        },
        calendar: {
            hour: {
                display: false
            }
        },
        chart: {
            progress: {
                bar: false
            },
            text: {
                display: false
            },
            expander: {
                display: false
            }
        },
        taskList: {
            expander: {
                straight: true
            },
            columns: [{
                    id: 1,
                    label: 'ID',
                    value: 'id',
                    width: 35
                },
                {
                    id: 2,
                    label: 'Description',
                    value: 'label',
                    width: 100,
                    expander: true,
                    html: true,
                    events: {
                        click: ({ data }) => {
                            console.log(data)
                            this.showTaskModal(data)
                        }
                    }
                },
                {
                    id: 3,
                    label: 'Assignee',
                    value: 'user',
                    width: 80
                },
                {
                    id: 3,
                    label: 'Start',
                    value: task => dayjs(task.start).format('DD-MM-YYYY'),
                    width: 78
                },
                {
                    id: 4,
                    label: 'End',
                    value: task => dayjs(task.startTime + task.duration).format('DD-MM-YYYY'),
                    width: 78
                }
            ]
        }
    },
    resources: [],
    projects: [],
    project: {},
    exceptions: []
}