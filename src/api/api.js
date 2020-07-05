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
};

export const AuthAPI = {
    me() {
        return instanse.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instanse.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instanse.delete(`auth/login`);
    },
};
