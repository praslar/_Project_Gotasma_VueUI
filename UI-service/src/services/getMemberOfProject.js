import NetworkHelper from './NetworkHelper'

export const getMemberOfProject = async() => {
    return await NetworkHelper.requestGet('/getMemberOfProject.json')
}