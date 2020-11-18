import {ResponseResultCaptchaCodeEnum, ResponseResultCodesEnum} from '../api/api';
import {FormAction, stopSubmit} from 'redux-form';
import {AuthAPI} from "../api/auth-api";
import {SecurityAPI} from "../api/security-api";
import {BaseThunkType, InferActionsTypes} from "./redux-store";

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captchaURL: null as string | null,
};

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
        case 'SET_CAPTCHA_URL':
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};

export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'SET_USER_DATA',
        payload: {
            userId,
            email,
            login,
            isAuth,
        },
    } as const),
    setCaptchaURL: (captchaURL: string) => ({
        type: 'SET_CAPTCHA_URL',
        payload: {
            captchaURL
        },
    } as const)
}

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let data = await AuthAPI.me();
    if (data.resultCode === ResponseResultCodesEnum.Success) {
        let {id, email, login} = data.data;
        dispatch(actions.setAuthUserData(id, email, login, true));
    }

};

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    let data = await SecurityAPI.captcha();
    let captchaURL = data.url;
    dispatch(actions.setCaptchaURL(captchaURL))

};

export const Login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType =>
    async (dispatch) => {
        let data = await AuthAPI.login(email, password, rememberMe, captcha);

        if (data.resultCode === ResponseResultCodesEnum.Success) {
            dispatch(getAuthUserData());
        } else {
            if (data.resultCode === ResponseResultCaptchaCodeEnum.CaptchaIsRequired) {
                dispatch(getCaptchaUrl())
            }
            let message = data.messages.length > 0
                ? data.messages[0]
                : 'Some error';
            dispatch(stopSubmit('login', {_error: message}));
        }
    };

export const Logout = (): ThunkType =>
    async (dispatch) => {
        let response = await AuthAPI.logout();

        if (response.data.resultCode === ResponseResultCodesEnum.Success) {
            dispatch(actions.setAuthUserData(null, null, null, false));
        }

    };

export default authReducer;

export type InitialStateType = typeof initialState;
type ThunkType = BaseThunkType<ActionsTypes | FormAction>
type ActionsTypes = InferActionsTypes<typeof actions>