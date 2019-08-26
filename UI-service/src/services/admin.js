import NetworkHelper from './NetworkHelper'

export const getAdmin = async() => {
    return await NetworkHelper.requestGet('/admin.json')
}