
export default {
    state: {
        notification: []
    },
    actions: {
        ADD_NOTIF({commit}, notification) {
            commit('PUSH_NOTIFICATION', notification)
        },
        REMOVE_NOTIF({commit}, notification) {
            commit('REMOVE_NOTIFICATION', notification)
        }
    },
    mutations: {
        PUSH_NOTIFICATION(state, notification) {
            state.notification.push({
                ...notification,
                id: Date.now()
            })
        },
        REMOVE_NOTIFICATION(state, notificationToRemove) {
            state.notification = state.notification.filter(notification => {
                return notification.id != notificationToRemove.id
            })
        }
    },
    getters: {
        NOTIFICATION(state) {
            return state.notification
        }
    }
}