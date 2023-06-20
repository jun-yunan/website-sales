import { configureStore } from '@reduxjs/toolkit';
import storeReducer from './features/storeSlice';
import productReducer from './features/productSlice';
import profileReducer from './features/profileSlice';
import authReducer from './features/authSlice';
import { userApi } from './services/userApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { rtkQueryErrorLogger } from '@/middleware';
import { postApi } from './services/postsApi';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        store: storeReducer,
        product: productReducer,
        profile: profileReducer,
        [userApi.reducerPath]: userApi.reducer,
        [postApi.reducerPath]: postApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware, postApi.middleware, rtkQueryErrorLogger),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
