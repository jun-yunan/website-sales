import { Posts, GetPost } from '@/types/posts';
import { CreatePost, ResponseServer } from '@/types/users';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type PostResponse = Posts[];

export const postApi = createApi({
    reducerPath: 'postApi',
    tagTypes: ['GetPosts'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api' }),
    endpoints: (builder) => ({
        getPost: builder.query<Posts, { _id: string; accessToken: string }>({
            query: ({ _id, accessToken }) => {
                return {
                    url: `/users/${_id}/posts`,
                    headers: { authorization: `JWT ${accessToken}` },
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
                accessToken?: string;
                data: any;
            }
        >({
            query: ({ _id, accessToken, data }) => {
                return {
                    url: `/users/${_id}/posts`,
                    method: 'POST',
                    headers: { authorization: `JWT ${accessToken}` },
                    body: data,
                };
            },
            invalidatesTags: (result, error, data) =>
                error ? [] : [{ type: 'GetPosts', id: 'LIST' }],
        }),

        deletePost: builder.mutation<
            ResponseServer,
            { postId: string; accessToken: string; userId: string }
        >({
            query: ({ postId, accessToken, userId }) => ({
                url: `/users/${userId}/posts/${postId}`,
                method: 'DELETE',
                headers: { authorization: `JWT ${accessToken}` },
            }),
            invalidatesTags: (result, error, data) =>
                error ? [] : [{ type: 'GetPosts', id: data.postId }],
        }),
    }),
});

export const { useCreatePostMutation, useGetPostQuery, useDeletePostMutation } = postApi;
