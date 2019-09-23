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
    tasks: [{
            id: 939145,
            name: 'Clark Kent',
            start: 1568566800000,
            duration: 1 * 24 * 60 * 60 * 1000,
            status: 'OVERLOAD',
            type: 'task',
            style: {
                base: {
                    fill: '#f75c4c',
                    stroke: '#f75c4c'
                }
            },
            progress: 0
        },
        {
            id: 27,
            name: 'Thang Pham',
            start: 1568566800000 - 86400000,
            duration: 3 * 24 * 60 * 60 * 1000,
            status: 'NORMAL',
            type: 'milestone',
            style: {
                base: {
                    fill: '#1EBC61',
                    stroke: '#0EAC51'
                }
            },
            progress: 0
        }, {
            id: 3,
            email: 'johnnyboydoe@gmail.com',
            name: 'John Wayne',
            start: 1568566800000 + 86400000 * 5,
            duration: 3 * 24 * 60 * 60 * 1000,
            status: 'NORMAL',
            type: 'milestone',
            style: {
                base: {
                    fill: '#1EBC61',
                    stroke: '#0EAC51'
                }
            },
            progress: 0
        }, {
            id: 4,
            name: 'Peter Parker',
            start: 1568566800000 + 86400000 * 2,
            duration: 2 * 24 * 60 * 60 * 1000,
            status: 'NORMAL',
            type: 'milestone',
            style: {
                base: {
                    fill: '#1EBC61',
                    stroke: '#0EAC51'
                }
            },
            progress: 0
        }, {
            id: 5,
            name: 'John Doe',
            start: 1568566800000 + 86400000 * 6,
            duration: 6 * 24 * 60 * 60 * 1000,
            status: 'OVERLOAD',
            type: 'milestone',
            style: {
                base: {
                    fill: '#f75c4c',
                    stroke: '#f75c4c'
                }
            },
            progress: 0
        },
        {
            id: 6,
            name: 'John Doe',
            start: 1568566800000 + 86400000 * 6,
            duration: 6 * 24 * 60 * 60 * 1000,
            status: 'OVERLOAD',
            type: 'milestone',
            style: {
                base: {
                    fill: '#f75c4c',
                    stroke: '#f75c4c'
                }
            },
            progress: 0
        }
    ],
    tasksTest: [{
            id: 9,
            label: 'Phan tich va thiet ke',
            start: 1568826000000,
            duration: 259200000,
            type: 'project',
            progress: 0,
            style: {
                base: {
                    fill: '#3fb0ac',
                    'stroke-width': 2,
                    stroke: '#173e43'
                }
            }
        },
        {
            id: 90,
            label: 'Phan tich va thiet ke',
            user: 'Thang Pham',
            start: 1568826000000,
            duration: 259200000,
            parentId: 9,
            collapsed: true,
            type: 'task',
            progress: 100
        },
        {
            id: 10,
            label: 'Make some noise',
            start: 1567875600000,
            duration: 518400000,
            type: 'project',
            progress: 0
        },
        {
            id: 11,
            label: 'With great power comes great responsibility',
            user: 'Peter Parker',
            parentId: 10,
            start: 1567875600000,
            duration: 345600000,
            collapsed: true,
            type: 'task',
            progress: 100
        },
        {
            id: 12,
            label: 'Courage is being scared to death, but saddling up anyway.',
            user: 'John Wayne',
            parentId: 10,
            start: 1568307600000,
            duration: 172800000,
            type: 'task',
            progress: 100
        },
        {
            id: 13,
            label: 'being scared to death',
            start: 1568653200000,
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
            id: 17,
            label: 'Make some noise',
            start: 1567875600000,
            duration: 691200000,
            type: 'project',
            progress: 0,
            style: {
                base: {
                    fill: '#3fb0ac',
                    'stroke-width': 2,
                    stroke: '#173e43'
                }
            }
        },
        {
            id: 18,
            label: 'With great power comes great responsibility',
            user: 'Peter Parker',
            parentId: 17,
            start: 1567875600000,
            duration: 345600000,
            collapsed: true,
            type: 'task',
            progress: 100
        },
        {
            id: 19,
            label: 'Courage is being scared to death, but saddling up anyway.',
            user: 'John Wayne',
            parentId: 17,
            start: 1568307600000,
            duration: 172800000,
            type: 'task',
            progress: 100
        },
        {
            id: 20,
            label: 'Courage is being scared to death, but saddling up anyway.',
            user: 'John Wayne',
            parentId: 17,
            start: 1568653200000,
            duration: 172800000,
            type: 'task',
            progress: 100
        }
        // {
        //     id: 14,
        //     label: 'anyway',
        //     user: 'John Wayne',
        //     start: 1568307600000,
        //     duration: 172800000,
        //     type: 'project',
        //     progress: 100,
        //     style: {
        //         base: {
        //             fill: '#3fb0ac',
        //             'stroke-width': 2,
        //             stroke: '#173e43'
        //         },
        //         'tree-row-bar': {
        //             fill: '#1EBC61',
        //             stroke: '#0EAC51'
        //         },
        //         'tree-row-bar-polygon': {
        //             stroke: '#0EAC51'
        //         }
        //     }
        // },
        // {
        //     id: 182,
        //     label: 'being scared to death',
        //     user: 'John Wayne',
        //     parentId: 14,
        //     start: 1568307600000,
        //     duration: 172800000,
        //     type: 'task',
        //     progress: 0
        // },
        // {
        //     id: 172,
        //     label: 'being fucked',
        //     user: 'John Wayne',
        //     parentId: 14,
        //     start: 1568307600000,
        //     duration: 172800000,
        //     type: 'task',
        //     progress: 0
        // },
        // {
        //     id: 170,
        //     label: 'yucked',
        //     user: 'John Wayne',
        //     start: 1568653200000,
        //     duration: 86400000,
        //     type: 'milestone',
        //     dependentOn: [14],
        //     progress: 0
        // }
    ],
    resources: [],
    users: [],
    projects: [],
    project: {},
    exceptions: [],
    exceptionDatesList: []
}