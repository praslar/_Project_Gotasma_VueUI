import NetworkHelper from './NetworkHelper'

export const getProjects = async() => {
    return await NetworkHelper.requestGet('/projects')
}

export const addProject = async() => {
    return await NetworkHelper.requestGet()
}

export const getProjectByID = async(id) => {
    return await NetworkHelper.requestGet('/projects/' + id)
}