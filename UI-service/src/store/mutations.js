export default {
    GET_RESOURCES(state, resources) {
        state.resources = resources
    },
    GET_PROJECTS(state, projects) {
        state.projects = projects
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
    GET_EXCEPTIONS(state, exceptions) {
        state.exceptions = exceptions
    },
    ADD_EXCEPTION() {
        console.log('add done')
    },
    DELETE_EXCEPTION() {
        console.log('delete done')
    }
}