'use client';
import { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { storeSlice } from '@/redux/features/storeSlice';

// interface StoreProps {}

export interface ItemProduct {
    name: string;
    price: string;
}

const Store = () => {
    const dispatch = useDispatch<AppDispatch>();

    const product = useAppSelector((state) => state.store.values?.products);

    const item = {
        name: 'iPhone 14 Pro max',
        price: '30,000,000',
    } as ItemProduct;

    const handleGetAllProduct = () => {
        dispatch(storeSlice.actions.getAllProduct(item));
    };
    return (
        <div className="w-full min-h-[700px] bg-slate-50 flex flex-col items-center justify-center">
            <button onClick={handleGetAllProduct} className="text-2xl font-bold text-black">
                Get All Product
            </button>
            {product && (
                <h2 className="text-4xl font-bold text-black">{JSON.stringify(product)}</h2>
            )}
        </div>
    );
};

export default Store;
