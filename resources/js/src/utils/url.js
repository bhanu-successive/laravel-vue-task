
/**
 * hard coding it for now
 * But this has to come from .env
 */
export function baseUrl() {
    return 'https://api.pinchappmail.com/';
}

export function makeUrl(url, params) {
    if (params) {
        for (let param in params) {
            url = url.replace('{' + param + '}', params[param]);
        }
    }
    return baseUrl()+url;
}

export default {
    baseUrl,
    makeUrl,
}
