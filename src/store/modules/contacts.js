import Axios from 'axios'

export default {
    state: {
        contacts: []
    },
    actions: {
        GET_CONTACTS_FROM_API({ commit }) {
            return Axios('http://localhost:3000/contacts', {
                method: "GET"
            })
                .then((response) => {
                    commit('SET_CONTACTS_TO_STATE', response.data)
                    return response.data
                })
                .catch((error) => {
                    return error
                })
        },
        POST_CONTACTS_API({ commit, dispatch }, payload) {
            Axios.post('http://localhost:3000/contacts', payload)
                .then((response) => {
                    commit('ADD_CONTACTS_TO_STATE', response.data)
                    dispatch('ADD_NOTIF', {
                        type: 'succes',
                        message: 'Contact added'
                    })
                })
        },
        POST_EDIT_CONTAC({ commit, dispatch}, payload) {
            Axios.put('http://localhost:3000/contacts/' + payload.id, payload)
                .then((response) => {
                    commit('EDIT_CONTACTS', response.data)
                    dispatch('ADD_NOTIF', {
                        type: 'succes',
                        message: 'Contact edited'
                    })
                })
        },
        DELETE_CONTACTS_API({commit, dispatch}, id) {
            Axios.delete('http://localhost:3000/contacts/' + id)
            .then(() => {
                commit('DELETE_CONTACT_FROM_STATE', id)
                dispatch('ADD_NOTIF', {
                    type: 'succes',
                    message: 'Contact deleted'
                })
            })
        }
    },
    mutations: {
        SET_CONTACTS_TO_STATE: (state, contacts) => {
            state.contacts = contacts
        },
        ADD_CONTACTS_TO_STATE: (state, contact) => {
            state.contacts.push(contact)
        },
        EDIT_CONTACTS: (state, contact) => {
            let idx = state.contacts.findIndex(element => element["id"] === contact.id)
            state.contacts.splice(idx, 1, contact)
        },
        DELETE_CONTACT_FROM_STATE: (state, id) => {
            state.contacts = state.contacts.filter(item => {
                return item.id != id
            })
        },
    },
    getters: {
        CONTACTS(state) {
            return state.contacts
        }
    }
}