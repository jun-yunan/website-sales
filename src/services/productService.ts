import { httpRequest } from '@/utils';

export const getProducts = async (numberPage: string) => {
    try {
        const response = await httpRequest.get({
            path: '/products',
            option: {
                params: {
                    numberPage,
                    limit: '4',
                },
            },
        });

        return response;
    } catch (error) {
        console.error(error);
    }
};
