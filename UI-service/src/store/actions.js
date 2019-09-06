import * as Services from '../services'

export default {
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
    getProjects({ commit }) {
        Services.getProjects()
            .then((response) => {
                commit('GET_PROJECTS', response)
            })
            .catch(error => {
                console.log(error)
            })
    }
}