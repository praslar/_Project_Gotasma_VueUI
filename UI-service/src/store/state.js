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
    // tasks: [{
    //     id: 0,
    //     label: 'Preloading',
    //     user: 'Preloading',
    //     start: 1567875600000,
    //     duration: 1 * 24 * 60 * 60 * 1000,
    //     type: 'project'
    // }],

    // test tasks
    // tasks: [
    //     {
    //       id: 1,
    //       label: 'Phan tich va thiet ke',
    //       user: 'Thang Pham',
    //       start: 1567443600000,
    //       duration: 259200000,
    //       type: 'project'
    //     },
    //     {
    //       id: 2,
    //       label: 'Make some noise',
    //       user: 'John Doe',
    //       start: 1567962000000,
    //       duration: 1036800000,
    //       type: 'project'
    //     },
    //     {
    //       id: 3,
    //       label: 'With great power comes great responsibility',
    //       user: 'Peter Parker',
    //       start: 1567962000000,
    //       duration: 432000000,
    //       style: {color: '#eee'},
    //       type: 'task',
    //       parentId: 2
    //     },
    //     {
    //       id: 4,
    //       label: 'Courage is being scared to death, but saddling up anyway.',
    //       user: 'John Wayne',
    //       start: 1568566800000,
    //       duration: 172800000,
    //       type: 'task',
    //       parentId: 2
    //     },
    //     {
    //       id: 5,
    //       label: 'Put that toy AWAY!',
    //       user: 'Clark Kent',
    //       start: 1568739600000,
    //       duration: 259200000,
    //       type: 'task',
    //       parentId: 2
    //     },
    //     {
    //       id: 6,
    //       label: 'Frick this',
    //       user: 'Clark Kent',
    //       start: 1568566800000,
    //       duration: 86400000,
    //       type: 'task'
    //     },
    //     {
    //       id: 7,
    //       label: 'Can you not?',
    //       user: 'Thang Pham',
    //       start: 1568739600000,
    //       duration: 345600000,
    //       type: 'task'
    //     },
    //     {
    //       id: 8,
    //       label: 'Do something to make that thing works',
    //       user: 'John Doe',
    //       start: 1568048400000,
    //       duration: 432000000,
    //       type: 'task'
    //     },
    //     {
    //       id: 9,
    //       label: 'Make that thing to see if that thing works',
    //       user: 'Peter Parker',
    //       start: 1568307600000,
    //       duration: 172800000,
    //       type: 'task'
    //     },
    //     {
    //       id: 10,
    //       label: 'Go to heaven if you done',
    //       user: 'Thang Pham',
    //       start: 1568912400000,
    //       duration: 432000000,
    //       type: 'task'
    //     }
    // ],
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