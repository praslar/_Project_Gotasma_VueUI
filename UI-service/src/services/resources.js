import NetworkHelper from './NetworkHelper'

export const getResources = async() => {
    return await NetworkHelper.requestGet('/resources')
}

export const addResources = async(resources) => {
    return await NetworkHelper.requestPost('/resources', resources)
}