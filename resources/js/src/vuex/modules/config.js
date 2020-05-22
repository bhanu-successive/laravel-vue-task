import * as types from '../mutation-types'
const state = {
    overlay: false,
    vueInstance: {}
}

const getters = {
    overlay: state => state.overlay,
    vueInstance: state => state.vueInstance,
}

const actions = {
    setOverlay({ commit }, action) {
        commit(types.SET_OVERLAY, action);
    },

    setVueInstance({ commit }, vueInstance) {
        commit(types.SET_VUE_INSTANCE, vueInstance)
    }
}

const mutations = {
    [types.SET_OVERLAY](state, data) {
        state.overlay = data;
    },

    [types.SET_VUE_INSTANCE](state, data) {
        state.vueInstance = data;
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
}