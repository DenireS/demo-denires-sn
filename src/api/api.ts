import axios from 'axios';
import {UsersType} from "../types/types";

export const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '81258c3c-ad0c-4f0f-8b39-093f9db7592d',
    },
});

export enum ResponseResultCodesEnum {
    Success = 0,
    Error = 1
}

export enum ResponseResultCaptchaCodeEnum {
    CaptchaIsRequired = 10
}

export type GetItemsType = {
    items: Array<UsersType>
    totalCount: number
    error: string | null
}

export type APIResponseType<D = {}, RC = ResponseResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}