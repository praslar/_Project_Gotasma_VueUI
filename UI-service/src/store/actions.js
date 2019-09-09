import * as Services from '../services'

export default {
    // Resources actions
    getResources({ commit }) {
        Services.getResources()
            .then((response) => {
                commit('GET_RESOURCES', response)
            })
            .catch(error => {
                console.log(error)
            })
    },
    addResources(resources) {
        Services.addResources(resources)
            .then((response) => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    },
    // Project actions
    getProjects({ commit }) {
        Services.getProjects()
            .then((response) => {
                commit('GET_PROJECTS', response)
            })
            .catch(error => {
                console.log(error)
            })
    },
    getProjectById({ commit }, payload) {
        Services.getProjectByID(payload)
            .then((response) => {
                commit('GET_PROJECT_BY_ID', response)
            })
            .catch(error => {
                console.log(error)
            })
    },
    addProject({ commit }, payload) {
        Services.addProject(payload)
        .then((response) => {
            commit('ADD_PROJECT', response)
        })
        .catch(error => {
            console.log(error)
        })
    },
    deleteProject({ commit }, payload) {
        Services.deleteProject(payload)
        .then((response) => {
            commit('DELETE_PROJECT', response)
        })
        .catch(error => {
            console.log(error)
        })
    },
    // Exception actions
    getExceptions({ commit }) {
        Services.getExceptions()
            .then((response) => {
                commit('GET_EXCEPTIONS', response)
            })
            .catch(error => {
                console.log(error)
            })
    },
    addExceptions({ commit }, payload) {
        Services.addExceptions(payload)
            .then((response) => {
                commit('ADD_EXCEPTION')
            })
            .catch(error => {
                console.log(error)
            })
    },
    deleteExceptions({ commit }, payload) {
        Services.deleteExceptions(payload)
            .then((response) => {
                commit('DELETE_EXCEPTION')
            })
            .catch(error => {
                console.log('error', payload)
                console.log(error)
            })
    }
}