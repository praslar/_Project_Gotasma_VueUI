import NetworkHelper from './NetworkHelper'

export const getHighlightedProject = async() => {
    return await NetworkHelper.requestGet('/getHighlightedProject.json')
}