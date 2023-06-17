import axios from 'axios';
import Cookies from 'js-cookie';

interface httpReq {
    path: string;
    option?: {
        params: {
            [key: string]: string | string[] | undefined;
        };
    };
    data?: any;
}

const httpRequest = axios.create({
    // baseURL: `${process.env.URL_API_LOCAL}`,
    baseURL: 'http://localhost:3001/api',
    // timeout: 5000,
});

httpRequest.interceptors.request.use(
    (config) => {
        const accessToken = Cookies.get('accessToken');
        config.headers['authorization'] = `JWT ${accessToken}`;
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
    const response = await httpRequest.post(path, data, option);
    return response.data;
};

export const put = async ({ path, data, option }: httpReq) => {
    const response = await httpRequest.put(path, data, option);
    return response.data;
};
