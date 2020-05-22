import store from '../vuex';

export function displayError(error) {
    const { message, params = {} } = error.response.data.error;
    if (Object.keys(params).length) {
        for (var key of Object.keys(params)) {
            fireToast('danger', `${params[key].code}#${params[key].desc}`, { title: 'Error' });
        }
    } else {
        fireToast('danger', message, { title: 'Error'});
    }
}

export function displaySuccess(message) {
    fireToast('success', message, { title: 'Success' });
}

function fireToast(variant, data, option) {
    const { vueInstance } = store.getters;
    vueInstance.$bvToast.toast(data, {
        title: option.title || 'Notification',
        solid: true,
        variant: variant || 'default',
    })
}
