import NetworkHelper from './NetworkHelper'

export const getUsers = async() => {
    return await NetworkHelper.requestHttp('/members.json')
}