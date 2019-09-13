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
    testTask: [{
            id: 1,
            label: 'Test break task',
            user: 'Cat boss',
            start: 1567962000000,
            duration: 5 * 24 * 60 * 60 * 1000,
            type: 'milestone',
            style: {
                base: {
                    fill: '#f75c4c',
                    stroke: '#f75c4c'
                }
            },
            progress: 100
        },
        {
            id: 2,
            label: 'Test break task',
            user: 'Cat boss',
            start: 1567962000000,
            duration: 10 * 24 * 60 * 60 * 1000,
            type: 'milestone',
            style: {
                base: {
                    fill: '#f75c4c',
                    stroke: '#f75c4c'
                }
            },
            progress: 0
        }
        // {
        //     id: 2,
        //     label: 'Test break task',
        //     user: 'Cat boss',
        //     start: 1567962000000 + 86400000 * 8,
        //     duration: 2 * 24 * 60 * 60 * 1000,
        //     type: 'task',
        //     style: {
        //         base: {
        //             fill: '#f75c4c',
        //             stroke: '#f75c4c'
        //         }
        //     },
        //     dependentOn: [1],
        //     progress: 100
        // }
    ],
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
    resources: [],
    users: [],
    projects: [],
    project: {},
    exceptions: [],
    exceptionDatesList: []
}