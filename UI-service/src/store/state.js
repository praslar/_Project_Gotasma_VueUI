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
            label: 'Project',
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
    workloadHeaderOptions: {
        title: {
            label: 'Work Load ',
            html: false
        },
        locale: {
            name: 'fr',
            Now: 'Now',
            'X-Scale': 'Width',
            'Y-Scale': 'Height'
        }
    },
    workloadOptions: {
        scope: {
            before: 1,
            after: 80
        },
        maxRows: 500,
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
                display: true
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
                    id: 7,
                    label: 'ID',
                    value: 'id',
                    width: 35
                },
                {
                    id: 8,
                    label: 'Member',
                    value: 'name',
                    width: 180
                },
                {
                    id: 10,
                    label: 'Status',
                    value: 'status',
                    width: 158
                }
            ]
        }
    },
    // task default preloading
    tasksTest: [{
            id: 9,
            label: 'Phan tich va thiet ke',
            start: 1569171600000,
            duration: 691200000,
            type: 'project',
            progress: 0
        },
        {
            id: 90,
            label: 'Phan cmn tich',
            user: ['John Wayne'],
            usersId: [15],
            start: 1569171600000,
            duration: 691200000,
            parentId: 9,
            collapsed: true,
            type: 'task',
            progress: 100,
            style: {
                base: {
                    fill: '#3fb0ac',
                    'stroke-width': 2,
                    stroke: '#173e43'
                }
            }
        },
        {
            id: 10,
            label: 'Make some noise',
            start: 1567875600000,
            duration: 518400000 + 86400000,
            type: 'project',
            progress: 0
        },
        {
            id: 111,
            label: 'With great power comes great responsibility',
            user: ['Peter Parker'],
            usersId: [14],
            parentId: 10,
            start: 1567875600000,
            duration: 345600000,
            collapsed: true,
            type: 'task',
            progress: 100,
            style: {
                base: {
                    fill: '#3fb0ac',
                    'stroke-width': 2,
                    stroke: '#173e43'
                }
            }
        },
        {
            id: 13,
            label: 'Courage is being scared to death, but saddling up anyway.',
            user: ['Clark Kent'],
            usersId: [13],
            parentId: 10,
            start: 1568307600000,
            duration: 172800000,
            type: 'task',
            progress: 100,
            style: {
                base: {
                    fill: '#3fb0ac',
                    'stroke-width': 2,
                    stroke: '#173e43'
                }
            }
        },
        {
            id: 12,
            label: 'being scared to death',
            start: 1568653200000,
            duration: 86400000,
            parentId: 10,
            type: 'milestone',
            progress: 100,
            style: {
                base: {
                    fill: '#de3131',
                    'stroke-width': 2,
                    stroke: '#de3131'
                }
            }
        },
        {
            id: 17,
            label: 'Make some noise',
            start: 1567875600000,
            duration: 691200000 + 86400000,
            type: 'project',
            progress: 0
        },
        {
            id: 18,
            label: 'With great power comes great responsibility',
            user: ['Clark Kent'],
            usersId: [14],
            parentId: 17,
            start: 1567875600000,
            duration: 345600000,
            collapsed: true,
            type: 'task',
            progress: 100,
            style: {
                base: {
                    fill: '#3fb0ac',
                    'stroke-width': 2,
                    stroke: '#173e43'
                }
            }
        },
        {
            id: 19,
            label: 'Courage is being scared to death, but saddling up anyway.',
            user: ['Thang Pham'],
            usersId: [11],
            parentId: 17,
            start: 1568307600000,
            duration: 172800000,
            type: 'task',
            progress: 100,
            style: {
                base: {
                    fill: '#3fb0ac',
                    'stroke-width': 2,
                    stroke: '#173e43'
                }
            }
        },
        {
            id: 20,
            label: 'Courage is being scared to death, but saddling up anyway.',
            user: ['Peter Parker'],
            usersId: [14],
            parentId: 17,
            start: 1568653200000,
            duration: 172800000,
            type: 'task',
            progress: 100,
            style: {
                base: {
                    fill: '#3fb0ac',
                    'stroke-width': 2,
                    stroke: '#173e43'
                }
            }
        },
        {
            id: 1,
            label: 'This one is a mile frcikin stone',
            parentId: 17,
            start: 1568826000000,
            duration: 86400000,
            type: 'milestone',
            progress: 100,
            style: {
                base: {
                    fill: '#de3131',
                    'stroke-width': 2,
                    stroke: '#de3131'
                }
            }
        },
        {
            id: 2121,
            label: 'break me u biactch',
            start: 1569603600000,
            duration: 259200000,
            type: 'project',
            progress: 0
        },
        {
            id: 18889,
            label: 'break me again u bitach',
            user: 'Peter Parker',
            parentId: 2121,
            start: 1569603600000,
            duration: 259200000,
            collapsed: true,
            type: 'task',
            progress: 100,
            style: {
                base: {
                    fill: '#3fb0ac',
                    'stroke-width': 2,
                    stroke: '#173e43'
                }
            }
        }
    ],
    resources: [],
    users: [],
    projects: [],
    project: {},
    exceptions: [],
    exceptionDatesList: [],
    highlightedProjects: []
}