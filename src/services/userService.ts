import httpRequest from '@/utils/httpRequest';
import { FormDataState } from '@/components/Form/Form';

export const getAllUser = async () => {
    try {
        const response = await httpRequest.get('/getAllUser');
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const signUp = async (data: FormDataState) => {
    try {
        const response = await httpRequest.post('/signup', { data });
        return response;
    } catch (error) {
        console.error(error);
    }
};
