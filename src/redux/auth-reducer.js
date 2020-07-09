import {AuthAPI, SecurityAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaURL: null,
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {
        userId,
        email,
        login,
        isAuth,
    },
});
export const setCaptchaURL = (captchaURL) => ({
    type: SET_USER_DATA,
    payload: {
        captchaURL
    },
});

export const getAuthUserData = () => async (dispatch) => {
    let response = await AuthAPI.me();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }

};
export const getCaptchaUrl = () => async (dispatch) => {
    let response = await SecurityAPI.captcha();
    let captchaURL = response.data.url;
    dispatch(setCaptchaURL(captchaURL))

};

export const Login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await AuthAPI.login(email, password, rememberMe, captcha);

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0
            ? response.data.messages[0]
            : 'Some error';
        dispatch(stopSubmit('login', {_error: message}));
    }
};
export const Logout = () => {
    return async (dispatch) => {
        let response = await AuthAPI.logout();

        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }

    };
};

export default authReducer;
