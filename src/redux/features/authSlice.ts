import { InfoUser } from '@/types/users';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

type InitialState = {
    currentUserLogin: InfoUser;
};

const initialState = {
    currentUserLogin: {
        name: '',
        avatar: '',
        email: '',
        address: '',
        gender: '',
        accessToken: '',
        numberPhone: '',
        birthDay: '',
        _id: '',
        refreshToken: '',
        coverImage: '',
        exp: 0,
        image: '',
    } as InfoUser,
} as InitialState;

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: (state) => {
            state.currentUserLogin = initialState.currentUserLogin;
        },
        setInfoUser: (state, action) => {
            state.currentUserLogin = action.payload;
        },
        updateAccessToken: (state, action: PayloadAction<string>) => {
            state.currentUserLogin.accessToken = action.payload;
        },
        updateRefreshToken: (state, action: PayloadAction<string>) => {
            state.currentUserLogin.refreshToken = action.payload;
        },
    },
    extraReducers: (builder) => {},
});

export const { setInfoUser, logOut, updateAccessToken, updateRefreshToken } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
