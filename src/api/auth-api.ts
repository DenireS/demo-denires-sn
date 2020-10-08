import {instanse, ResponseResultCaptchaCodeEnum, ResponseResultCodesEnum, APIResponseType} from "./api";

type MeResponseDataType = {
    id: number
    login: string
    email: string
}

type LoginResponseDataType = {
    userId: number
}
export const AuthAPI = {
    me() {
        return instanse.get<APIResponseType<MeResponseDataType>>(`auth/me`).then(res => res.data);
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instanse.post<APIResponseType<LoginResponseDataType, ResponseResultCodesEnum | ResponseResultCaptchaCodeEnum>>
        (`auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        }).then(res => res.data);
    },
    logout() {
        return instanse.delete(`auth/login`);
    },
};