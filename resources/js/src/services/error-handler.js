
export function displayError(storeInstance, error) {
    const { message, params = {} } = error.response.data.error;
    if (Object.keys(params).length) {
        for (var key of Object.keys(params)) {
            fireToast(storeInstance, 'danger', `${params[key].code}#${params[key].desc}`, { title: 'Error' });
        }
    } else {
        fireToast(storeInstance, 'danger', message, { title: 'Error'});
    }
}

export function displaySuccess(storeInstance, message) {
    fireToast(storeInstance, 'success', message, { title: 'Success' });
}

function fireToast(storeInstance, variant, data, option) {
    console.log('Methods', storeInstance)
    storeInstance.getters.vueInstance.$bvToast.toast(data, {
        title: option.title || 'Notification',
        solid: true,
        variant: variant || 'default',
    })
}
