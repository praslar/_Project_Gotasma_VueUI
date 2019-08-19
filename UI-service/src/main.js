// Import ES6 Promise
import 'es6-promise/auto'

// Import System requirements
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueDateNow from 'vue-date-now'
import VModal from 'vue-js-modal'

import routes from './routes'
import store from './store'
import VueSplit from 'vue-split-panel'

// Import Views - Top level
import AppView from './components/App.vue'

Vue.use(VueRouter)
Vue.use(VueSplit)
Vue.use(VueDateNow)
Vue.use(VModal, { dialog: true })
    // Routing logic
var router = new VueRouter({
    routes: routes,
    mode: 'history',
    linkExactActiveClass: 'active',
    scrollBehavior: function(to, from, savedPosition) {
        return savedPosition || { x: 0, y: 0 }
    }
})

// Start out app!
// eslint-disable-next-line no-new
new Vue({
    el: '#root',
    router: router,
    store: store,
    render: h => h(AppView)
})

// change this. demo
window.bugsnagClient = window.bugsnag('02fe1c2caaf5874c50b6ee19534f5932')
window.bugsnagClient.use(window.bugsnag__vue(Vue))