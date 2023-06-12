import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { productService } from '@/services';

interface InitState {
    productState: ProductState;
}

interface ProductState {
    isLoading: boolean;
    status: boolean;
    message: string;
    data: any;
    pageNumber: string;
}

const initialState = {
    productState: {
        isLoading: false,
        status: false,
        message: 'idle',
        data: null,
        pageNumber: '1',
    } as ProductState,
} as InitState;

export const fetchGetProduct = createAsyncThunk(
    'product/fetchGetProduct',
    async (numberPage: string) => {
        const response = await productService.getProducts(numberPage);
        return response;
    }
);

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        changeNumberPageProduct: (state, action: PayloadAction<string>) => {
            state.productState.pageNumber = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetProduct.pending, (state, action) => {
                state.productState.isLoading = true;
                state.productState.message = 'Loading';
                state.productState.status = false;
            })
            .addCase(fetchGetProduct.fulfilled, (state, action) => {
                state.productState.isLoading = false;
                state.productState.message = 'idle';
                state.productState.data = action.payload;
                state.productState.status = true;
            });
    },
});

const productReducer = productSlice.reducer;
export default productReducer;
