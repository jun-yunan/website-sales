import { configureStore } from '@reduxjs/toolkit';
import storeReducer from './features/storeSlice';
import productReducer from './features/productSlice';
import profileReducer from './features/profileSlice';
import authReducer from './features/authSlice';
import { userApi } from './services/userApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        store: storeReducer,
        product: productReducer,
        profile: profileReducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
