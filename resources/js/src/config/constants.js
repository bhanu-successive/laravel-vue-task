export const urls = {
    REGISTER: {
        uri: '/v1/public/account',
        successMessage: 'Your account has been created successfully. Please verify your account',
        errorMessages: '',
    },
    LOGIN: {
        uri: '/v1/public/auth',
        successMessage: 'Welcome',
        errorMessages: '',
    },
    FORGOT_PASSWORD: {
        uri: '/v1/public/forgot_password',
        successMessage: 'We have sent reset password link to your registered email address.',
        errorMessages: '',
    } ,
    RESET_PASSWORD: {
        uri: '/v1/public/reset_password',
        successMessage: 'Your account password reset successfully',
        errorMessages: '',
    },
    REGISTRATION_VERIFICATION: {
        uri: '/v1/public/account',
        successMessage: 'Registration verified successfully',
        errorMessages: '',
    },
}
