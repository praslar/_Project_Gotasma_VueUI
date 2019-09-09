export default {
    GET_RESOURCES(state, resources) {
        state.resources = resources
    },
    GET_PROJECTS(state, projects) {
        state.projects = projects
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