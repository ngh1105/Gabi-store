import axios from "axios";
import { API_URL } from "./config";

const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

const refreshToken = async () => {
    try {
        const res = await axiosInstance.post(`/auth/refresh`, null, {
            headers: { 
                'skip-interceptor': true 
            },
            withCredentials: true,
        });

        // Set back access token to local storage
        const currUser = localStorage.getItem('user');
        if (currUser) {
            const user = JSON.parse(currUser);
            user.accessToken = res.data.accessToken;

            localStorage.setItem("user", JSON.stringify(user));
        }

        return {
            isSuccess: true,
            response: res.data
        }
    }
    catch (err) {
        if (err.response) {
            return {
                isSuccess: false,
                response: err.response.data
            }
        }

        console.log(err);
        
        return {
            isSuccess: false,
            response: { message: "Unknown error when post request" }
        }
    }
}

// Request interceptor for API calls
axiosInstance.interceptors.request.use(
    async config => {

        let accessToken = "";

        const currUser = localStorage.getItem('user');
        if (currUser) {
            const user = JSON.parse(currUser);
            accessToken = user.accessToken;
        }

        config.headers = {
            'authorization': accessToken,
        }

        return config;
    },
    error => {
        Promise.reject(error)
    }
);

// Response interceptor for API calls
axiosInstance.interceptors.response.use((response) => {
    return response
}, async (error) => {

    const originalRequest = error.config;

    if (originalRequest.headers['skip-interceptor']) {
        return Promise.reject(error);
    }

    if ((error.response.status === 401 && error.response.data.invalidToken)
        && !originalRequest._retry) {

        const resData = await refreshToken();

        if (resData.isSuccess) {
            axios.defaults.headers.common['authorization'] = resData.response.accessToken;

            //console.log("refresh token");
            originalRequest._retry = true;

            // Parse data to json again
            if (originalRequest.headers['Content-Type'] === "application/json") {
                originalRequest.data = JSON.parse(originalRequest.data);
            }

            return axiosInstance(originalRequest);
        } else {
            // Dispatch failed event
            const event = new CustomEvent('refreshTokenFailed');
            window.dispatchEvent(event);
        }
    }

    return Promise.reject(error);
});

const Api = {
    Get:  async (path) => {
        try {
            const res = await axiosInstance.get(path);
    
            return {
                isSuccess: true,
                response: res.data
            }
        }
        catch (err) {
            if (err.response) {
                return {
                    isSuccess: false,
                    response: err.response.data
                }
            }
    
            console.log(err);
    
            return {
                isSuccess: false,
                response: { message: "Unknown error when post request" }
            }
        }
    },

    Post: async (path, data, config = undefined) => {
        try {
            const res = await axiosInstance.post(path, data, config);
    
            return {
                isSuccess: true,
                response: res.data
            }
        }
        catch (err) {
            if (err.response) {
                return {
                    isSuccess: false,
                    response: err.response.data
                }
            }
    
            console.log(err);
    
            return {
                isSuccess: false,
                response: { message: "Unknown error when post request" }
            }
        }
    },

    Put: async (path, data, config = undefined) => {
        try {
            const res = await axiosInstance.put(path, data, config);
    
            return {
                isSuccess: true,
                response: res.data
            }
        }
        catch (err) {
            if (err.response) {
                return {
                    isSuccess: false,
                    response: err.response.data
                }
            }
    
            console.log(err);
    
            return {
                isSuccess: false,
                response: { message: "Unknown error when post request" }
            }
        }
    },

    Patch: async (path, data, config = undefined) => {
        try {
            const res = await axiosInstance.patch(path, data, config);
    
            return {
                isSuccess: true,
                response: res.data
            }
        }
        catch (err) {
            if (err.response) {
                return {
                    isSuccess: false,
                    response: err.response.data
                }
            }
    
            console.log(err);
    
            return {
                isSuccess: false,
                response: { message: "Unknown error when post request" }
            }
        }
    },

    Delete: async (path) => {
        try {
            const res = await axiosInstance.delete(path);
    
            return {
                isSuccess: true,
                response: res.data
            }
        }
        catch (err) {
            if (err.response) {
                return {
                    isSuccess: false,
                    response: err.response.data
                }
            }
    
            console.log(err);
    
            return {
                isSuccess: false,
                response: { message: "Unknown error when post request" }
            }
        }
    }
}

export default Api;