import NetworkHelper from './NetworkHelper'

export const getProjects = async() => {
    return await NetworkHelper.requestGet('/projects')
}

export const addProj = async() => {
    return await NetworkHelper.requestGet('/addProject.json')
}