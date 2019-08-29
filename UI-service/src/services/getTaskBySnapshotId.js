import NetworkHelper from './NetworkHelper'

export const getTaskBySnapshotId = async() => {
    return await NetworkHelper.requestGet('/getTaskBySnapshotId.json')
}