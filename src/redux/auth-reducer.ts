import {AuthAPI, SecurityAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL';

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captchaURL: null as string | null,
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload,
                userId123: '111',
            };

        default:
            return state;
    }
};

type SetAuthUserDataActionPayloadType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean | null,
}

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserData =
    (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
        type: SET_USER_DATA,
        payload: {
            userId,
            email,
            login,
            isAuth,
        },
    });

type SetCaptchaActionURL = {
    type: typeof SET_USER_DATA,
    payload: { captchaURL: string }
}

export const setCaptchaURL = (captchaURL: string): SetCaptchaActionURL => ({
    type: SET_USER_DATA,
    payload: {
        captchaURL
    },
});

export const getAuthUserData = () => async (dispatch: any) => {
    let response = await AuthAPI.me();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }

};
export const getCaptchaUrl = () => async (dispatch: any) => {
    let response = await SecurityAPI.captcha();
    let captchaURL = response.data.url;
    dispatch(setCaptchaURL(captchaURL))

};

export const Login = (email: string, password: string, rememberMe: boolean, captcha: string) =>
    async (dispatch: any) => {
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
    return async (dispatch: any) => {
        let response = await AuthAPI.logout();

        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }

    };
};
export default authReducer;