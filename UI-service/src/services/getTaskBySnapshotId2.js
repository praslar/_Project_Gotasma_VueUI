import NetworkHelper from './NetworkHelper'

export const getTaskBySnapshotId2 = async() => {
    return await NetworkHelper.requestGet('/getTaskBySnapshotId2.json')
}