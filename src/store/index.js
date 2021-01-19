import Vue from 'vue'
import Vuex from 'vuex'
import contacts from './modules/contacts.js'
import notification from './modules/notification.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        contacts,
        notification
    }
})