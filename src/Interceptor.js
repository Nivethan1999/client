import axios from "axios";

const Interceptor = axios.create({
    baseURL: 'http://localhost:5000',
});

Interceptor.interceptors.request.use(
    config => {
        const token = localStorage.getItem('auth_token');
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        config.headers['Content-Type'] = 'application/json';
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default Interceptor;