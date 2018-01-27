import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    username: '',
    games: []
}

const getters = {
    getUsername(state) {
        return state.username
    },
    getAllGames(state) {
        return state.games
    }
}

const mutations = {
    changeUsername(state, payload) {
        state.username = payload.username
    },
    updateGames(state, payload) {
        state.games = payload.games
    }
}

const actions = {
    fetchUserGames({ commit }, payload) {
        commit ('changeUsername', payload)
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store