export default {
    getResources: state => {
        return state.resouces.filter(project => project.id)
    }
}