import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'a92959bc-32ea-4783-8fa7-1c7579bca808'
    }
});

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    setUnfollow: (userId) => {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    },

    setFollow: (userId) => {
        return instance.post(`follow/${userId}`, null)
            .then(response => response.data);
    },

    setAuthMe: () => {
        return instance.get(`auth/me`, {
            withCredentials: true
        })
            .then(response => response)
    },

    setUser: (userId) => {
        return instance.get(`profile/ ${userId}`, {
            withCredentials: true
        })
            .then(response => response)
    }

}