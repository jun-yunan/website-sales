import { Posts } from '@/types/posts';
import { CreatePost, ResponseServer } from '@/types/users';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { Mutex } from 'async-mutex';
import axios from 'axios';
import { updateAccessToken, updateRefreshToken } from '../features/authSlice';

// create a new mutex
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

export const postApi = createApi({
    reducerPath: 'postApi',
    tagTypes: ['GetPosts'],
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        getPost: builder.query<Posts, { _id: string }>({
            query: ({ _id }) => {
                return {
                    url: `/users/${_id}/posts`,
                };
            },
            providesTags: (result) => {
                if (result && Array.isArray(result.posts)) {
                    return [
                        ...result.posts?.map((post) => ({
                            type: 'GetPosts' as const,
                            id: post._id,
                        })),
                        { type: 'GetPosts' as const, id: 'LIST' },
                    ];
                }
                return [{ type: 'GetPosts', id: 'LIST' }];
            },
        }),
        createPost: builder.mutation<
            CreatePost,
            {
                _id: string;
                data: any;
            }
        >({
            query: ({ _id, data }) => {
                return {
                    url: `/users/${_id}/posts`,
                    method: 'POST',
                    body: data,
                };
            },
            invalidatesTags: (result, error, data) =>
                error ? [] : [{ type: 'GetPosts', id: 'LIST' }],
        }),

        deletePost: builder.mutation<ResponseServer, { postId: string; userId: string }>({
            query: ({ postId, userId }) => ({
                url: `/users/${userId}/posts/${postId}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, data) =>
                error
                    ? []
                    : [
                          { type: 'GetPosts', id: data.postId },
                          { type: 'GetPosts', id: 'deletePost' },
                          { type: 'GetPosts', id: 'imagesProfile' },
                      ],
        }),

        getImagesProfileById: builder.query<
            {
                message: string;
                status: boolean;
                imagesProfile: [
                    { image: string; _id: string; author: { coverImage: string; _id: string } }
                ];
            },
            { userId: string }
        >({
            query: ({ userId }) => ({
                url: `/users/${userId}/profile/images`,
            }),
            providesTags: (result) => {
                if (result) {
                    return [
                        { type: 'GetPosts' as const, id: 'imagesProfile' },
                        { type: 'GetPosts', id: 'deletePost' },
                        { type: 'GetPosts' as const, id: 'LIST' },
                    ];
                }
                return [{ type: 'GetPosts', id: 'LIST' }];
            },
        }),
        getPostById: builder.query<
            { message: string; params: {}; post: { content: string; image: string; _id: string } },
            { postId: string; userId: string }
        >({
            query: ({ postId, userId }) => ({
                url: `/users/${userId}/posts/${postId}`,
            }),
            providesTags: (result) => {
                if (result) {
                    return [
                        { type: 'GetPosts' as const, id: 'getPostById' },
                        { type: 'GetPosts' as const, id: 'LIST' },
                    ];
                }
                return [{ type: 'GetPosts', id: 'LIST' }];
            },
        }),

        updatePost: builder.mutation<
            {
                message: string;
                request: {};
                data: any;
                params: { userId: string; postId: string };
            },
            {
                postId: string;
                userId: string;
                data: any;
            }
        >({
            query: ({ data, postId, userId }) => ({
                url: `/users/${userId}/posts/${postId}`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: (result, error, data) =>
                error ? [] : [{ type: 'GetPosts', id: 'LIST' }],
        }),
    }),
});

export const {
    useCreatePostMutation,
    useGetPostQuery,
    useDeletePostMutation,
    useGetImagesProfileByIdQuery,
    useGetPostByIdQuery,
    useUpdatePostMutation,
} = postApi;
