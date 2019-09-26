// let arr = ''
export default {
    exceptionDays: (state) => {
        let arr = []
        state.exceptions.forEach(exception => {
            if (exception.date[1] - exception.date[0] === 86400000) {
                arr.push(exception.date[0])
            } else {
                do {
                    arr.push(exception.date[0])
                    exception.date[0] += 86400000
                } while (exception.date[0] < exception.date[1])
            }
        })
        return arr
    },
    getChange: state => state.project.tasks
}