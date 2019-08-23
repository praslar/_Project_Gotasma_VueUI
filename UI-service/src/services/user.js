import NetworkHelper from './NetworkHelper'

export const getUsers = async() => {
    return await NetworkHelper.requestGet('/members.json')
}

export const addUser = async(user) => {
    let token = localStorage.getItem('token')
    return await NetworkHelper.requestGet('/addUser.json', token)
}

export const login = (username, password) => {
    return new Promise((resolve, reject) => {
        NetworkHelper.requestPost('/login.json', { username, password })
            .then(loginInfo => {
                localStorage.setItem('token', loginInfo.token)
                resolve(loginInfo)
            })
            .catch(error => {
                console.log(error)
                reject(error)
            })
    })
}