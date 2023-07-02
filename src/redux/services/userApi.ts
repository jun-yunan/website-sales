import { FormInfoProfile } from '@/components/Profile/EditProfile/FormEditInfo';
import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { GetIntroduce, UploadImage, UserSignIn } from '@/types/users';
import { FormEditIntroduce } from '@/app/profile/edit-introduce/page';
import { Mutex } from 'async-mutex';
import axios from 'axios';
import { updateAccessToken, updateRefreshToken } from '../features/authSlice';

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
    accessToken: string;
    refreshToken: string;
    exp: number;
}

const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api',
    prepareHeaders: (headers, api) => {
        const accessToken = (api.getState() as RootState).auth.currentUserLogin.accessToken;

        if (accessToken) {
            headers.set('authorization', `JWT ${accessToken}`);
        }
        return headers;
    },
});
const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
    args,
    api,
    extraOptions
) => {
    await mutex.waitForUnlock();
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
        if (!mutex.isLocked()) {
            const release = await mutex.acquire();
            try {
                const userId = (api.getState() as RootState).auth.currentUserLogin._id;
                const refreshToken = (api.getState() as RootState).auth.currentUserLogin
                    .refreshToken;
                const response = await axios('http://localhost:3001/api/auth/refresh-token', {
                    method: 'POST',
                    data: { userId, refreshToken },
                });
                if (response.data) {
                    api.dispatch(updateAccessToken(response.data.newAccessToken));
                    api.dispatch(updateRefreshToken(response.data.newRefreshToken));
                    result = await baseQuery(args, api, extraOptions);
                } else {
                }
            } finally {
                release();
            }
        } else {
            await mutex.waitForUnlock();
            result = await baseQuery(args, api, extraOptions);
        }
    }
    return result;
};

export const userApi = createApi({
    reducerPath: 'userApi',
    // refetchOnFocus: true,
    tagTypes: ['Posts'],
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        getUserById: builder.query<FetchResultUser, { _id: string }>({
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
            { data: FormEditIntroduce; userId: string }
        >({
            query: ({ data, userId }) => ({
                url: `/users/${userId}/profile/introduce`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: (result, error, data) =>
                error ? [] : [{ type: 'Posts', id: 'introduce' }],
        }),

        getIntroduceById: builder.query<GetIntroduce, { userId: string }>({
            query: ({ userId }) => ({
                url: `/users/${userId}/profile/introduce`,
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
        updateCoverImage: builder.mutation<any, { userId: string; data: any }>({
            query: ({ data, userId }) => ({
                url: `/users/${userId}/profile/cover-image`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: (result, error, data) =>
                error ? [] : [{ type: 'Posts', id: data.userId }],
        }),
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
