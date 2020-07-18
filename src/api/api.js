import * as axios from 'axios';

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
    follow(userId) {
        return instanse.post(`follow/${userId}`);
    },
    unfollow(userId) {
        return instanse
            .delete(`follow/${userId}`);
    },
    getProfile(userId) {
        console.warn('Old API method must be changed');
        return ProfileAPI.getProfile(userId);
    },
};
export const ProfileAPI = {
    getProfile(userId) {
        return instanse.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instanse.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instanse.put(`profile/status`, {status: status});
    },
    savePhoto(photoFIle) {
        const formData = new FormData();
        formData.append('image', photoFIle)
        return instanse.put(`profile/photo`, formData)
    },
    saveProfile(profile) {
        return instanse.put(`profile`, profile);
    }
};

export const AuthAPI = {
    me() {
        return instanse.get(`auth/me`);
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instanse.post(`auth/login`, {email, password, rememberMe, captcha});
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
    getChatting(id) {
        return instanse.put('dialogs/' + id)
    },
    getMessages(id) {
        return instanse.get(`dialogs/${id}/messages`)
    },
    getOldMessages(id,date) {
        return instanse.get(`dialogs/${id}/messages/new?newerThen=${date}`)
    },
    sendMessage(id, body) {
        return instanse.post(`dialogs/${id}/messages`, {body: body})
    },
    deleteMessage(messageId) {
        return instanse.delete(`dialogs/messages/${messageId}`)
    },
    restoreMessage(messageId) {
        return instanse.put(`dialogs/messages/${messageId}/restore`)
    }

}
