import { ItemProduct } from '@/app/store/page';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitState {
    values: StoreState;
}

interface StoreState {
    products: null | any;
    isLoading: boolean;
    status: boolean;
    message: string;
}

const initialState = {
    values: {
        products: null,
        isLoading: false,
        status: false,
        message: 'idle',
    } as StoreState,
} as InitState;

export const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        getAllProduct: (state, action: PayloadAction<ItemProduct>) => {
            state.values.products = action.payload;
        },
    },
});

const storeReducer = storeSlice.reducer;
export default storeReducer;
