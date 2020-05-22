/**
 * This file contains generic methods to make http requests
 */

import axios from 'axios';
import { makeUrl } from '../utils';
import store from '../vuex';
import  * as types  from '../vuex/mutation-types';
import { displayError, displaySuccess } from '../services';

axios.defaults.headers.post['Content-Type'] = 'application/json';

export function get(urlInfo, params) {
    let url = makeUrl(urlInfo.uri, params)
    return axios.get(url, {}, { headers: { 'content-type': 'application/json' } })
        .then(response => {
            store.commit(types.SET_OVERLAY, false)
            displaySuccess(urlInfo.successMessage)
            return response;
        }).catch(error => {
            store.commit(types.SET_OVERLAY, false)
            displayError(error)
            return false;
        });
}

export async function post(urlInfo, requestParams) {
    store.commit(types.SET_OVERLAY, true)
    let url = makeUrl(urlInfo.uri)
    return axios.post(url, requestParams, { headers: { 'content-type': 'application/json' }})
        .then(response => {
            store.commit(types.SET_OVERLAY, false)
            displaySuccess(urlInfo.successMessage)
            return response;
        }).catch(error => {
            store.commit(types.SET_OVERLAY, false)
            displayError(error)
            return false;
        });
}

export async function patch(urlInfo, requestParams) {
    store.commit(types.SET_OVERLAY, true)
    let url = makeUrl(urlInfo.uri)
    return axios.patch(url, requestParams, { headers: { 'content-type': 'application/json' } })
        .then(response => {
            store.commit(types.SET_OVERLAY, false)
            displaySuccess(urlInfo.successMessage)
            return response;
        }).catch(error => {
            store.commit(types.SET_OVERLAY, false)
            displayError(error)
            return false;
        });
}

