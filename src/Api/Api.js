import * as axios from "axios";

const dbContext = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: { "API-KEY": "ff75c00e-43f4-4f84-a791-d1a1e19ce1be" }
});

export const usersAPI = {
    getFindUsers(currentPage = 1, pageSize = 20) {
        return dbContext.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        });
    },
    follow(id) {
        return dbContext.post(`follow/${id}`);
    },
    unfollow(id) {
        return dbContext.delete(`follow/${id}`);
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        if (userId !== null && userId !== undefined) {
            return dbContext.get(`profile/` + userId);
        }
    },
    getStatus(userId) {
        if (userId !== null && userId !== undefined) {
            return dbContext.get(`profile/status/` + userId);
        }
    },
    updateStatus(status) {
        alert(status);
        return dbContext.put(`profile/status`, { status: status });
    }
}

export const authAPI = {
    getUser() {
        return dbContext.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return dbContext.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return dbContext.delete(`auth/login`);
    }
}