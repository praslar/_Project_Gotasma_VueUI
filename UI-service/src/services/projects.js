import NetworkHelper from './NetworkHelper'

export const getProjects = async() => {
    return await NetworkHelper.requestGet('/projects')
}

export const addProject = async(project) => {
    return await NetworkHelper.requestPost('/projects', project)
}

export const deleteProject = async(id) => {
    return await NetworkHelper.requestDelete('/projects/' + id)
}

export const getProjectByID = async(id) => {
    return await NetworkHelper.requestGet('/projects/' + id)
}

export const addUserToProject = async(payload) => {
    return await NetworkHelper.requestPut('/projects/' + payload.id + '?_embed=tasks', payload.user)
}