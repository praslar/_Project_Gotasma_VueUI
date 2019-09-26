export default {
    // =====================RESOURCES================================
    GET_RESOURCES(state, resources) {
        state.resources = resources
    },
    ADD_RESOURCE() {
        console.log('add resource done')
    },
    DELETE_RESOURCE() {
        console.log('delete resource done')
    },
    EDIT_RESOURCE() {
        console.log('edit resource done')
    },
    // ==========================PROJECTs=============================
    GET_PROJECTS(state, projects) {
        state.projects = projects
    },
    GET_HIGHLIGHTED_PROJECTS(state, projects) {
        state.highlightedProjects = projects
    },
    HIGHLIGHT_PROJECT() {
        console.log('highlighted one project')
    },
    ADD_PROJECT() {
        console.log('added one project')
    },
    DELETE_PROJECT() {
        console.log('deleted one project')
    },
    GET_PROJECT_BY_ID(state, project) {
        state.project = project
    },
    ADD_USER_TO_PROJECT() {
        console.log('added one user to project')
    },
    // =============================EXCEPTIONS===========================
    GET_EXCEPTIONS(state, exceptions) {
        state.exceptions = exceptions
    },
    ADD_EXCEPTION() {
        console.log('add exception done')
    },
    DELETE_EXCEPTION() {
        console.log('delete exception done')
    },
    // ===========local action=====
    addTask: (state, newTaskInfo) => {
        state.tasksTest.push({
            parentId: newTaskInfo.parentId,
            id: newTaskInfo.id,
            label: newTaskInfo.label,
            start: (newTaskInfo.start).valueOf(),
            duration: newTaskInfo.duration * 86400000,
            progress: newTaskInfo.progress,
            type: newTaskInfo.type,
            parents: newTaskInfo.parents,
            style: {
                base: {
                    fill: '#3fb0ac',
                    'stroke-width': 2,
                    stroke: '#173e43'
                }
            }
        })
    },
    addSumTask: (state, newTaskInfo) => {
        state.tasksTest.push({
            id: newTaskInfo.id,
            label: newTaskInfo.label,
            start: (newTaskInfo.start).valueOf(),
            duration: newTaskInfo.duration * 86400000,
            progress: newTaskInfo.progress,
            type: newTaskInfo.type
        })
    },
    addMilestone: (state, newTaskInfo) => {
        state.tasksTest.push({
            id: newTaskInfo.id,
            parentId: newTaskInfo.parentId,
            label: newTaskInfo.label,
            start: (newTaskInfo.start).valueOf(),
            duration: 86400000,
            progress: 100,
            type: 'milestone',
            style: {
                base: {
                    fill: '#de3131',
                    'stroke-width': 2,
                    stroke: '#de3131'
                }
            }
        })
    },
    breakTask: (state, breakTaskInfo) => {
        // console.log('lala2', breakTaskInfo.id)
        state.tasksTest.splice(state.tasksTest.findIndex(task => task.id === breakTaskInfo.adjacentId) + 1, 0, {
            parentId: breakTaskInfo.parentId,
            id: breakTaskInfo.id,
            label: breakTaskInfo.label,
            start: breakTaskInfo.start,
            duration: breakTaskInfo.duration,
            progress: breakTaskInfo.progress,
            type: breakTaskInfo.type,
            style: breakTaskInfo.style
        })
    },
    deleteThisTask(state, idTaskDelete) {
        if (state.tasksTest.length !== 1) {
            for (let i = 0; i < state.tasksTest.length; i++) {
                if (state.tasksTest[i].id === idTaskDelete) {
                    if (state.tasksTest[i].children.length === 0) {
                        state.tasksTest.splice(state.tasksTest.findIndex(deleteTask => deleteTask.id === idTaskDelete), 1)
                    } else {
                        state.tasksTest[i].allChildren.forEach(child => {
                            state.tasksTest.splice(state.tasksTest.findIndex(deleteTask => deleteTask.id === child), 1)
                        })
                        state.tasksTest.splice(state.tasksTest.findIndex(deleteTask => deleteTask.id === idTaskDelete), 1)
                    }
                    break
                }
            }
        } else {
            alert('cannot delete anymore')
        }
    },
    assignMember(state, info) {
        console.log(info.newTaskInfo)
        console.log(info.currentTask)
        for (let i = 0; i < state.tasksTest.length; i++) {
            if (state.tasksTest[i].id === info.currentTask.id) {
                for (let j = 0; j < info.newTaskInfo.user.length; j++) {
                    state.tasksTest[i].user += info.newTaskInfo.user[j].name + '  '
                }
            }
        }
    }
}