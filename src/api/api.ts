import axios from 'axios';
import {UsersType} from "../types/types";

export const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '51707569-2172-436d-84e1-481fec77399c',
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