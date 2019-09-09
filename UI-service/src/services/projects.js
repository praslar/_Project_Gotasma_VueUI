import NetworkHelper from './NetworkHelper'

export const getProjects = async() => {
    return await NetworkHelper.requestGet('/projects')
}

<<<<<<< HEAD
export const addProject = async() => {
    return await NetworkHelper.requestGet()
=======
export const getProjectByID = async(id) => {
    return await NetworkHelper.requestGet('/projects/' + id)
>>>>>>> 636b9742bb487598a648276b988b1c23639128c3
}