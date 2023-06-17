import { userService } from '@/services';
import { InfoUser, ResultGetUserById } from '@/types/users';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../store';
import { bool } from 'yup';

type InitialState = {
    value: AuthState;
    infoUserLogin: InfoUser;
    resultGetUserById: FetchGetUserById;
    accessToken: string;
};

interface FetchGetUserById {
    isLoading: boolean;
    message: string;
    status: boolean;
    data: any;
}

type AuthState = {
    isAuth: boolean;
    username: string;
    uid: string;
    isModerator: boolean;
};

const initialState = {
    value: {
        isAuth: false,
        username: '',
        uid: '',
        isModerator: false,
    } as AuthState,
    accessToken: '',
    infoUserLogin: {
        name: '',
        avatar: '',
        email: '',
        address: '',
        gender: '',
        accessToken: '',
        numberPhone: '',
        birthDay: '',
    } as InfoUser,

    resultGetUserById: {
        isLoading: false,
        message: 'idle',
        status: false,
        data: null,
    } as FetchGetUserById,
} as InitialState;

export const fetchGetUserById = createAsyncThunk(
    'auth/fetchGetUserById',
    async (userId: string) => {
        const response = await userService.getUserById(userId);
        return response as ResultGetUserById;
    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.accessToken = action.payload;
        },
        logOut: () => {
            return initialState;
        },
        // logIn: (state, action: PayloadAction<string>) => {
        //     return {
        //         value: {
        //             isAuth: true,
        //             username: action.payload,
        //             uid: 'fdsfsdfsfsfeqweqeqe',
        //             isModerator: false,
        //         },
        //     };
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetUserById.pending, (state, action) => {
                state.resultGetUserById.isLoading = true;
                state.resultGetUserById.status = false;
                state.resultGetUserById.message = 'loading';
            })
            .addCase(fetchGetUserById.fulfilled, (state, action) => {
                state.resultGetUserById.isLoading = false;
                state.resultGetUserById.status = true;
                state.resultGetUserById.message = 'idle';
                state.resultGetUserById.data = action.payload;

                // state.infoUserLogin.name = action.payload.user?.name;
                // state.infoUserLogin.avatar = action.payload.user?.image;
                // state.infoUserLogin.address = action.payload.user?.address;
                // state.infoUserLogin.birthDay = action.payload.user?.date;
                // state.infoUserLogin.gender = action.payload.user?.gender;
                // state.infoUserLogin.email = action.payload.user?.email;
                // state.infoUserLogin.numberPhone = action.payload.user?.numberPhone;

                state.infoUserLogin = { ...action.payload.user };
            });
    },
});

const authReducer = authSlice.reducer;
export default authReducer;
