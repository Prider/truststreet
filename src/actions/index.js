export const REGISTER_USER = 'register_user';
export const RECOGNIZE_USER = 'recognize_user';
export const LOGIN_USER = 'register_user';
export const HEADER_APP = 'update_header_status'
// function to register user
export function registerUser(data) {
    return {
        type: REGISTER_USER,
        payload: data
    }
}

// function to recognize user
export function recognizeUser(data) {

    return {
        type: RECOGNIZE_USER,
        payload: data
    }
}

// function to register user
export function signInFacebookUser() {
    return {
        type: LOGIN_USER
    }
}

// function to register user
export function updateAppHeader() {
    return {
        type: HEADER_APP
    }
}