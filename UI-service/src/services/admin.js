import NetworkHelper from './NetworkHelper'

export const getAdmin = async() => {
    return await NetworkHelper.requestHttp('/admin.json')
}