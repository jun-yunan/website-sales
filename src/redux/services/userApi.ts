import { FormInfoProfile } from '@/components/Profile/EditProfile/FormEditInfo';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import Cookies from 'js-cookie';
import { GetIntroduce, UploadImage, UserSignIn } from '@/types/users';
import { FormDataState } from '@/components/Form/Form';
import { FormEditIntroduce } from '@/app/profile/edit-introduce/page';

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
    coverImage: string;
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

        signUp: builder.mutation<
            { email: string; name: string; message: string; status: boolean },
            { name: string; password: string; email: string }
        >({
            query: (data) => ({
                url: '/users/sign-up',
                method: 'POST',
                body: data,
            }),
        }),

        signIn: builder.mutation<UserSignIn, { email: string; password: string }>({
            query: (data) => ({
                url: '/users/sign-in',
                method: 'POST',
                body: data,
            }),
        }),

        createIntroduce: builder.mutation<
            { message: string; request: any },
            { data: FormEditIntroduce; accessToken: string; userId: string }
        >({
            query: ({ accessToken, data, userId }) => ({
                url: `/users/${userId}/profile/introduce`,
                method: 'POST',
                body: data,
                headers: { authorization: `JWT ${accessToken}` },
            }),
            invalidatesTags: (result, error, data) =>
                error ? [] : [{ type: 'Posts', id: 'introduce' }],
        }),

        getIntroduceById: builder.query<GetIntroduce, { userId: string; accessToken: string }>({
            query: ({ accessToken, userId }) => ({
                url: `/users/${userId}/profile/introduce`,
                headers: { authorization: `JWT ${accessToken}` },
            }),
            providesTags: (result) => {
                if (result) {
                    return [
                        { type: 'Posts' as const, id: 'introduce' },
                        { type: 'Posts' as const, id: 'LIST' },
                    ];
                }
                return [{ type: 'Posts' as const, id: 'LIST' }];
            },
        }),
        updateCoverImage: builder.mutation<any, { userId: string; accessToken: string; data: any }>(
            {
                query: ({ accessToken, data, userId }) => ({
                    url: `/users/${userId}/profile/cover-image`,
                    method: 'POST',
                    headers: { authorization: `JWT ${accessToken}` },
                    body: data,
                }),
                invalidatesTags: (result, error, data) =>
                    error ? [] : [{ type: 'Posts', id: data.userId }],
            }
        ),
        // getAllPost: builder.query<
        //     { message: string; posts: {} },
        //     { userId: string; accessToken: string }
        // >({
        //     query: ({ accessToken, userId }) => ({
        //         url: `/users/${userId}/posts`,
        //         headers: { authorization: `JWT ${accessToken}` },
        //     }),
        // }),
    }),
});

export const {
    useGetUserByIdQuery,
    useUpdateProfileMutation,
    useUpdateAvatarMutation,
    useSignUpMutation,
    useSignInMutation,
    useCreateIntroduceMutation,
    useGetIntroduceByIdQuery,
    useUpdateCoverImageMutation,
    // useGetAllPostQuery,
} = userApi;
