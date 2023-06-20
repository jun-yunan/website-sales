import { FormInfoProfile } from '@/components/Profile/EditProfile/FormEditInfo';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import Cookies from 'js-cookie';
import { UploadImage } from '@/types/users';

export interface FetchResultUser {
    error?: any;
    status?: boolean;
    message?: string;
    request?: any;
    user?: User;
}

export interface User {
    _id: string;
    name: string;
    email: string;
    gender: string;
    birthDay: string;
    address: string;
    numberPhone: string;
    avatar: string;
}

export const userApi = createApi({
    reducerPath: 'userApi',
    // refetchOnFocus: true,
    tagTypes: ['Posts'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/api',
        prepareHeaders: (headers, { getState }) => {
            const accessToken = Cookies.get('accessToken');

            if (accessToken) {
                headers.set('authorization', `JWT ${accessToken}`);
            }

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getUserById: builder.query<FetchResultUser, { _id: string; accessToken?: string }>({
            query: ({ _id }) => `/users/${_id}`,
            providesTags: (result) => {
                if (result) {
                    return [
                        { type: 'Posts' as const, id: result.user?._id },
                        { type: 'Posts' as const, id: 'LIST' },
                    ];
                }
                return [{ type: 'Posts' as const, id: 'LIST' }];
            },
        }),

        updateProfile: builder.mutation<FetchResultUser, { _id: string; data: FormInfoProfile }>({
            query(data) {
                return {
                    url: '/users',
                    method: 'PUT',
                    body: data.data,
                };
            },
            invalidatesTags: (result, error, data) =>
                error ? [] : [{ type: 'Posts', id: data._id }],
        }),

        updateAvatar: builder.mutation<UploadImage, { _id: string; data: any }>({
            query({ _id, data }) {
                return {
                    url: '/users/profile/avatar',
                    method: 'PUT',
                    body: data,
                };
            },
            invalidatesTags: (result, error, data) =>
                error ? [] : [{ type: 'Posts', id: data._id }],
        }),
    }),
});

export const { useGetUserByIdQuery, useUpdateProfileMutation, useUpdateAvatarMutation } = userApi;
