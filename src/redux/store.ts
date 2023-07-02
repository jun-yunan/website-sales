import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storeReducer from './features/storeSlice';
import productReducer from './features/productSlice';
import profileReducer from './features/profileSlice';
import authReducer from './features/authSlice';
import { userApi } from './services/userApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { rtkQueryErrorLogger } from '@/middleware';

import { postApi } from './services/postsApi';
// import rtkQueryErrorLogger from '@/middleware';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
// import { authApi } from './services/authApi';
import { authApi } from './services/authApi';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const rootReducer = combineReducers({
    auth: authReducer,
    store: storeReducer,
    product: productReducer,
    profile: profileReducer,
    [userApi.reducerPath]: userApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    // reducer: {
    //     auth: authReducer,
    //     store: storeReducer,
    //     product: productReducer,
    //     profile: profileReducer,
    //     [userApi.reducerPath]: userApi.reducer,
    //     [postApi.reducerPath]: postApi.reducer,
    // },
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(userApi.middleware, postApi.middleware, authApi.middleware, rtkQueryErrorLogger),
});

export let persistor = persistStore(store);
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
