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
    addExceptions(context, payload) {
        console.log(payload, 'add')
        Services.addExceptions(payload)
            .catch(error => {
                console.log(error)
            })
    },
    deleteExceptions(context, payload) {
        console.log('ID1', payload)
        Services.deleteExceptions(payload)
            .catch(error => {
                console.log('error', payload)
                console.log(error)
            })
    }
}