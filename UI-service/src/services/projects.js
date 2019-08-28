import NetworkHelper from './NetworkHelper'

export const getProj = async() => {
    return await NetworkHelper.requestGet('/projects.json')
}

export const addProj = async() => {
    return await NetworkHelper.requestGet('/addProject.json')
}

