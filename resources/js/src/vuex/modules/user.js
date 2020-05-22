import { displayError, displaySuccess } from '../../services';
import { urls } from '../../config';
// import * as types from '../mutation-types';
import { post, patch } from '../../services';
const state = {

}

const getters = {

}

const actions = {
    /**
     * User Register
     * @param {*} param0
     * @param {*} data
     */
    async register({ commit }, data) {
        commit('SET_OVERLAY', true);
        let { firstName: first_name, lastName: last_name, email, company, password, returnUrl: return_url }  = data;
        try {
            await post(urls.REGISTER, { first_name, last_name, email, company, password, return_url })
            commit('SET_OVERLAY', false)
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
        commit('SET_OVERLAY', true)
        let { email, password } = data;
        try {
            let response = await post(urls.LOGIN, { email, password })
            console.log(response)
            commit('SET_OVERLAY', false)
            /**
             * Set token to local storage here before redirecting to Home page
             * So that it can be used further authenticated request
             */
            return this.getters.vueInstance.$router.push({ name: 'Home' })
        } catch (error) {
            commit('SET_OVERLAY', false)
            displayError(this, error)
        }
    },

    /**
     * Forgot password
     * @param {*} param0
     * @param {*} data
     */
    async forgotPassword({ commit }, data) {
        commit('SET_OVERLAY', true)
        let { email, returnUrl: return_url } = data
        try {
            await post(urls.FORGOT_PASSWORD, { email, return_url })
            commit('SET_OVERLAY', false)
            displaySuccess(this, 'Reset password link has sent to your registered email.');
            return this.getters.vueInstance.$router.push({ name: 'Login' })
        } catch (error) {
            commit('SET_OVERLAY', false)
            displayError(this, error)
        }
    },

    /**
     * Registration verification
     * @param {*} param0
     * @param {*} verify_code
     */
    async registrationVerification({ commit }, verify_code) {
        commit('SET_OVERLAY', true)
        try {
            await patch(urls.REGISTRATION_VERIFICATION, { verify_code })
            commit('SET_OVERLAY', false)
            displaySuccess(this, 'Email verified successfully.');
            this.getters.vueInstance.$router.push({ name: 'Login' })
        } catch (error) {
            commit('SET_OVERLAY', false)
            displayError(this, error)
        }
    },

    /**
     * Reset password
     * @param {*} param0
     * @param {*} data
     */
    async resetPassword({ commit }, data) {
        commit('SET_OVERLAY', true)
        const { password, verify_code } = data
        console.log('data', data);
        try {
            await patch(urls.RESET_PASSWORD, { password, verify_code })
            commit('SET_OVERLAY', false)
            displaySuccess(this, 'Password reset successfully');
            this.getters.vueInstance.$router.push({ name: 'Login' })
        } catch (error) {
            commit('SET_OVERLAY', false)
            displayError(this, error)
        }
    }
}

const mutations = {

}

export default {
    state,
    getters,
    actions,
    mutations,
}
