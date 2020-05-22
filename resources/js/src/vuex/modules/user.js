import { displayError, displaySuccess } from '../../services';
import { urls } from '../../config';
import * as types from '../mutation-types';
import { post, patch } from '../../services';
const state = {
    accessToken: localStorage.getItem('token'),
}

const getters = {
    isAuthenticated: state => !!state.accessToken,
}

const actions = {
    /**
     * User Register
     * @param {*} param0
     * @param {*} data
     */
    async register({ commit }, data) {
        const { firstName: first_name, lastName: last_name, email, company, password, returnUrl: return_url }  = data;
        const response = await post(urls.REGISTER, { first_name, last_name, email, company, password, return_url })
        if (response) {
            return this.getters.vueInstance.$router.push({ name: 'Login' })
        }
    },

    /**
     * User Login
     * @param {*} param0
     * @param {*} data
     */
    async login({commit}, data) {
        const { email, password } = data;
        const response = await post(urls.LOGIN, { email, password })
        if (response) {
            localStorage.setItem('token', response.data.access_token);
            commit(types.SET_USER, response.data);
            return this.getters.vueInstance.$router.push({ name: 'Home' })
        }
        
    },

    /**
     * Forgot password
     * @param {*} param0
     * @param {*} data
     */
    async forgotPassword({ commit }, data) {
        commit(types.SET_OVERLAY, true)
        const { email, returnUrl: return_url } = data
        const response = await post(urls.FORGOT_PASSWORD, { email, return_url })
        if (response) {
            return this.getters.vueInstance.$router.push({ name: 'Login' })
        }
    },

    /**
     * Registration verification
     * @param {*} param0
     * @param {*} verify_code
     */
    async registrationVerification({ commit }, verify_code) {
        const response = await patch(urls.REGISTRATION_VERIFICATION, { verify_code })
        if(response) {
            return this.getters.vueInstance.$router.push({ name: 'Login' })
        }
    },

    /**
     * Reset password
     * @param {*} param0
     * @param {*} data
     */
    async resetPassword({ commit }, data) {
        const { password, verify_code } = data
        const response = await patch(urls.RESET_PASSWORD, { password, verify_code })
        if(response) {
            return this.getters.vueInstance.$router.push({ name: 'Login' })
        }
    },

    logout({ commit }) {
        localStorage.removeItem('token');
        commit(types.SET_USER, { access_token: null });
        return this.getters.vueInstance.$router.push({ name: 'Login' })
    }
}

const mutations = {
    [types.SET_USER](state, data) {
        const { access_token: accessToken } = data;
        state.accessToken = accessToken;
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}
