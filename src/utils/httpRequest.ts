import axios from 'axios';
import Cookies from 'js-cookie';

interface httpReq {
    path: string;
    option?: {
        params: {
            [key: string]: string | string[] | undefined;
        };
    };
    data?: object;
}

const httpRequest = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' },
});

httpRequest.interceptors.request.use(
    (config) => {
        const accessToken = Cookies.get('accessToken');
        config.headers['authorization'] = `Bearer ${accessToken}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const get = async ({ path, option }: httpReq) => {
    const response = await httpRequest.get(path, option);
    return response.data;
};

export const post = async ({ path, data, option }: httpReq) => {
    const response = await httpRequest.post(path, data);
    return response.data;
};

// export default httpRequest;
