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
        const response = await httpRequest.post({ path: '/signup', data: { data } });
        return response;
    } catch (error) {
        console.error(error);
    }
};
