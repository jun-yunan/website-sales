import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import { logOut, setInfoUser, updateAccessToken } from '../features/authSlice';

// import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
// import { tokenReceived, loggedOut } from './authSlice';
import { Mutex } from 'async-mutex';

// create a new mutex
const mutex = new Mutex();
const baseQuery = fetchBaseQuery({ baseUrl: 'http://localhost:3001/api', method: '' });
const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
    args,
    api,
    extraOptions
) => {
    // wait until the mutex is available without locking it
    await mutex.waitForUnlock();
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
        // checking whether the mutex is locked
        if (!mutex.isLocked()) {
            const release = await mutex.acquire();
            try {
                const refreshResult = await baseQuery('/auth/refresh-token', api, extraOptions);
                if (refreshResult.data) {
                    // api.dispatch(tokenReceived(refreshResult.data));
                    api.dispatch(updateAccessToken(refreshResult.data as string));
                    // retry the initial query
                    result = await baseQuery(args, api, extraOptions);
                } else {
                    // api.dispatch(logOut());
                }
            } finally {
                // release must be called once the mutex should be released again.
                release();
            }
        } else {
            // wait until the mutex is available without locking it
            await mutex.waitForUnlock();
            result = await baseQuery(args, api, extraOptions);
        }
    }
    return result;
};

export const authApi = createApi({
    reducerPath: 'authApi',

    // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api' }),
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        getUser: builder.mutation<any, void>({
            query: () => ({
                url: '/auth/test',
                body: { message: 'fdsfsdf' },
                method: 'POST',
            }),
        }),
    }),
});

export const { useGetUserMutation } = authApi;
