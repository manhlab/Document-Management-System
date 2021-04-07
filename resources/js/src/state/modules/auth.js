import authService from '../../services/auth'

export const state = {
    currentUser: JSON.parse(sessionStorage.getItem('authUser')),
}

export const mutations = {
    SET_CURRENT_USER(state, newValue) {
        state.currentUser = newValue
        saveSessionState('authUser', newValue)
        saveState('auth.currentUser', newValue)
    },
    UNSET_CURRENT_USER(state) {
        state.currentUser = null
        window.localStorage.removeItem('auth.currentUser')
        window.sessionStorage.removeItem('authUser')
    },
}

export const getters = {
    // Whether the user is currently logged in.
    loggedIn(state) {
        return !!state.currentUser
    },
    userId(state) {
        return state.currentUser.id
    }
}

export const actions = {
    // This is automatically run in `src/state/store.js` when the app
    // starts, along with any other actions named `init` in other modules.
    // eslint-disable-next-line no-unused-vars
    init({ state, dispatch }) {
        dispatch('validate')
    },

    // Logs in the current user.
    login({ commit, dispatch, getters }, { email, password } = {}) {
        return authService.login({email, password}).then(response => {
            commit('SET_CURRENT_USER', response.data)
            return response
        })
    },

    // Logs out the current user.
    logout({ commit }) {
        commit('UNSET_CURRENT_USER')
        return authService.logout()
    },

    // eslint-disable-next-line no-unused-vars
    resetPassword({ commit, dispatch, getters }, { email } = {}) {
        
    },

    // Validates the current user's token and refreshes it
    // with new data from the API.
    // eslint-disable-next-line no-unused-vars
    validate({ commit, state }) {
        return authService.me().then(response => {
            commit('SET_CURRENT_USER', response.data)
            return response.data
        })
    },
}

// ===
// Private helpers
// ===

function saveState(key, state) {
    window.localStorage.setItem(key, JSON.stringify(state))
}

function saveSessionState(key, state) {
    window.sessionStorage.setItem(key, JSON.stringify(state))
}