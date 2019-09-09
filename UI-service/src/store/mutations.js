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
    GET_PROJECT_BY_ID(state, project) {
        state.project = project
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
    }

}