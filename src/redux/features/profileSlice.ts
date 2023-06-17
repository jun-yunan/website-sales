import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userService } from '@/services';
import { FormInfoProfile } from '@/components/Profile/EditProfile/FormEditInfo';
import { ResultFetchUpdateInfoProfile } from '@/types/profile';

type InitialState = {
    resUploadPhoto: ResUploadPhoto;
    updateInfoProfile: UpdateInfoProfile;
};

interface ResUploadPhoto {
    isLoading: boolean;
    message: string;
    status: boolean;
    result: any;
}

interface UpdateInfoProfile {
    isLoading: boolean;
    message: string;
    status: boolean;
    data: any;
}

const initialState = {
    resUploadPhoto: {
        isLoading: false,
        message: 'idle',
        status: false,
        result: null,
    } as ResUploadPhoto,

    updateInfoProfile: {
        isLoading: false,
        message: 'idle',
        status: false,
        data: null,
    } as UpdateInfoProfile,
} as InitialState;

export const fetchUploadPhoto = createAsyncThunk('profile/fetchUploadPhoto', async (data: any) => {
    const response = await userService.uploadPhoto(data);
    return response as any;
});

export const fetchUpdateInfoProfile = createAsyncThunk(
    'profile/fetchUpdateInfoProfile',
    async (formData: FormInfoProfile) => {
        const response = await userService.updateInfoProfile(formData);
        return response as ResultFetchUpdateInfoProfile;
    }
);

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUploadPhoto.pending, (state, action: PayloadAction<any>) => {
                state.resUploadPhoto.isLoading = true;
                state.resUploadPhoto.message = 'loading';
                state.resUploadPhoto.status = false;
            })
            .addCase(fetchUploadPhoto.fulfilled, (state, action: PayloadAction<any>) => {
                state.resUploadPhoto.isLoading = false;
                state.resUploadPhoto.message = 'idle';
                state.resUploadPhoto.status = true;
                state.resUploadPhoto.result = action.payload;
            })
            .addCase(fetchUpdateInfoProfile.pending, (state, action) => {
                state.updateInfoProfile.isLoading = true;
                state.updateInfoProfile.message = 'loading';
                state.updateInfoProfile.status = false;
            })
            .addCase(fetchUpdateInfoProfile.fulfilled, (state, action) => {
                state.updateInfoProfile.isLoading = false;
                state.updateInfoProfile.message = 'idle';
                state.updateInfoProfile.status = true;
                state.updateInfoProfile.data = action.payload;
            });
    },
});

const profileReducer = profileSlice.reducer;
export default profileReducer;
