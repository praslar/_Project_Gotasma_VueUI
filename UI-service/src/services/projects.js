import NetworkHelper from './NetworkHelper'

export const getProj = async() => {
    return await NetworkHelper.requestHttp('/projects.json')
}