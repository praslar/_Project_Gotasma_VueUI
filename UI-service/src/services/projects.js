import NetworkHelper from './NetworkHelper'

export const getProjects = async() => {
    return await NetworkHelper.requestGet('/projects')
}

export const getProjectByID = async(id) => {
    return await NetworkHelper.requestGet('/projects/' + id)
}