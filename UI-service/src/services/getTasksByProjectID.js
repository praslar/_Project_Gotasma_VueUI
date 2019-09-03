import NetworkHelper from './NetworkHelper'

export const getTasksByProjectID = async() => {
    return await NetworkHelper.requestGet('/getTasksByProjectID.json')
}