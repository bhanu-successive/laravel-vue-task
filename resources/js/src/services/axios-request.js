/**
 * This file contains generic methods to make http requests
 */

import axios from 'axios';
import { makeUrl } from '../utils';

axios.defaults.headers.post['Content-Type'] = 'application/json';

export function get(uri, params) {
    let url = makeUrl(uri, params)
    return axios.get(url);
}

export async function post(uri, requestParams) {
    let url = makeUrl(uri)
    return axios.post(url, requestParams, { headers: { 'content-type': 'application/json' }});
}

export async function patch(uri, requestParams) {
    let url = makeUrl(uri)
    return axios.patch(url, requestParams, { headers: { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
}

