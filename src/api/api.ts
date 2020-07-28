import axios from 'axios';
import {ProfileType} from "../types/types";

const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '51707569-2172-436d-84e1-481fec77399c',
    },
});

export const UsersAPI = {
    getUsers(currentPage = 1, pageSise = 10) {
        return instanse
            .get(`users?page=${currentPage}&count=${pageSise}`);
    },
    follow(userId: number) {
        return instanse.post(`follow/${userId}`);
    },
    unfollow(userId: number) {
        return instanse
            .delete(`follow/${userId}`);
    },
    getProfile(userId: number) {
        console.warn('Old API method must be changed');
        return ProfileAPI.getProfile(userId);
    },
};
export const ProfileAPI = {
    getProfile(userId: number) {
        return instanse.get(`profile/${userId}`);
    },
    getStatus(userId: number) {
        return instanse.get(`profile/status/` + userId);
    },
    updateStatus(status: string) {
        return instanse.put(`profile/status`, {status: status});
    },
    savePhoto(photoFIle: any) {
        const formData = new FormData();
        formData.append('image', photoFIle)
        return instanse.put(`profile/photo`, formData)
    },
    saveProfile(profile: ProfileType) {
        return instanse.put(`profile`, profile);
    }
};

export enum ResponseResultCodes {
    Success = 0,
    Error = 1
}

export enum ResponseResultCaptchaCode {
    CaptchaIsRequired = 10
}

type MeResponseType = {
    data: { id: number, login: string, email: string }
    messages: Array<string>
    resultCode: ResponseResultCodes
}
type LoginResponseType = {
    data: { userId: number }
    messages: Array<string>
    resultCode: ResponseResultCodes | ResponseResultCaptchaCode
}

export const AuthAPI = {
    me() {
        return instanse.get<MeResponseType>(`auth/me`).then(res => res.data);
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instanse.post<LoginResponseType>(`auth/login`, {
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

export const SecurityAPI = {
    captcha() {
        return instanse.get(`security/get-captcha-url`)
    }
}
export const DialogsAPI = {
    getDialogs() {
        return instanse.get(`dialogs`)
    },
    getChatting(id: number) {
        return instanse.put('dialogs/' + id)
    },
    getMessages(id: number) {
        return instanse.get(`dialogs/${id}/messages`)
    },
    getOldMessages(id: number, date: string) {
        return instanse.get(`dialogs/${id}/messages/new?newerThen=${date}`)
    },
    sendMessage(id: number, body: string) {
        return instanse.post(`dialogs/${id}/messages`, {body: body})
    },
    deleteMessage(messageId: number) {
        return instanse.delete(`dialogs/messages/${messageId}`)
    },
    restoreMessage(messageId: number) {
        return instanse.put(`dialogs/messages/${messageId}/restore`)
    }

}
