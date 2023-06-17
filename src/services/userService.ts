// import httpRequest from '@/utils/httpRequest';
import { httpRequest } from '@/utils';

import { FormDataState } from '@/components/Form/Form';

export const getAllUser = async () => {
    try {
        const response = await httpRequest.get({
            path: '/getAllUser',
            option: { params: { type: '23', bla: 'fdsfds' } },
        });
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const signUp = async (data: FormDataState) => {
    try {
        const response = await httpRequest.post({ path: '/signup', data });
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const uploadPhoto = async (data: any) => {
    try {
        const response = await httpRequest.post({ path: '/users/profile/avatar', data });
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const updateInfoProfile = async (formData: any) => {
    try {
        const response = await httpRequest.put({ path: '/users/profile', data: formData });
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const getUserById = async (userId: string) => {
    try {
        const response = await httpRequest.get({ path: `/users/${userId}` });
        return response;
    } catch (error) {
        console.error(error);
    }
};
