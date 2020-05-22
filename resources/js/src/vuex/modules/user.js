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
        commit(types.SET_OVERLAY, true);
        let { firstName: first_name, lastName: last_name, email, company, password, returnUrl: return_url }  = data;
        try {
            await post(urls.REGISTER, { first_name, last_name, email, company, password, return_url })
            commit(types.SET_OVERLAY, false)
            displaySuccess(this, 'Account create successfully. Please verify your account');
            return this.getters.vueInstance.$router.push({ name: 'Login' })
        } catch (error) {
            commit('SET_OVERLAY', false)
            displayError(this, error)
        }
    },

    /**
     * User Login
     * @param {*} param0
     * @param {*} data
     */
    async login({commit}, data) {
        commit(types.SET_OVERLAY, true)
        let { email, password } = data;
        try {
            let response = await post(urls.LOGIN, { email, password })
            console.log(response)
            commit(types.SET_OVERLAY, false)
            
            localStorage.setItem('token', response.data.access_token);
            commit(types.SET_USER, response.data);
            return this.getters.vueInstance.$router.push({ name: 'Home' })
        } catch (error) {
            commit(types.SET_OVERLAY, false)
            displayError(this, error)
        }
    },

    /**
     * Forgot password
     * @param {*} param0
     * @param {*} data
     */
    async forgotPassword({ commit }, data) {
        commit(types.SET_OVERLAY, true)
        let { email, returnUrl: return_url } = data
        try {
            await post(urls.FORGOT_PASSWORD, { email, return_url })
            commit(types.SET_OVERLAY, false)
            displaySuccess(this, 'Reset password link has sent to your registered email.');
            return this.getters.vueInstance.$router.push({ name: 'Login' })
        } catch (error) {
            commit(types.SET_OVERLAY, false)
            displayError(this, error)
        }
    },

    /**
     * Registration verification
     * @param {*} param0
     * @param {*} verify_code
     */
    async registrationVerification({ commit }, verify_code) {
        commit(types.SET_OVERLAY, true)
        try {
            await patch(urls.REGISTRATION_VERIFICATION, { verify_code })
            commit(types.SET_OVERLAY, false)
            displaySuccess(this, 'Email verified successfully.');
            this.getters.vueInstance.$router.push({ name: 'Login' })
        } catch (error) {
            commit(types.SET_OVERLAY, false)
            displayError(this, error)
        }
    },

    /**
     * Reset password
     * @param {*} param0
     * @param {*} data
     */
    async resetPassword({ commit }, data) {
        commit(types.SET_OVERLAY, true)
        const { password, verify_code } = data
        try {
            await patch(urls.RESET_PASSWORD, { password, verify_code })
            commit(types.SET_OVERLAY, false)
            displaySuccess(this, 'Password reset successfully');
            this.getters.vueInstance.$router.push({ name: 'Login' })
        } catch (error) {
            commit(types.SET_OVERLAY, false)
            displayError(this, error)
        }
    },

    logout({ commit }) {
        localStorage.removeItem('token');
        commit(types.SET_USER, { access_token: null });
        this.getters.vueInstance.$router.push({ name: 'Login' })
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
