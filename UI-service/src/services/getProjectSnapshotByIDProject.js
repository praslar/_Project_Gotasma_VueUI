import NetworkHelper from './NetworkHelper'

export const getProjectSnapshotByIDProject = async() => {
    return await NetworkHelper.requestGet('/getProjectSnapshotByIDProject.json')
}