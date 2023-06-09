// 'use client';
// import { FunctionComponent } from 'react';
// import { useDispatch } from 'react-redux';
// import { AppDispatch, useAppSelector } from '@/redux/store';
// import { storeSlice } from '@/redux/features/storeSlice';

import CardProduct from '@/components/Product/CardProduct';
import Category from '@/components/Product/Category';
import FeaturedProducts from '@/components/Product/FeaturedProducts';
import Product from '@/components/Product/Product';
import Resizable from '@/components/Product/Resizable';

// import { FunctionComponent } from 'react';

// // interface StoreProps {}

// export interface ItemProduct {
//     name: string;
//     price: string;
// }

// const Store = () => {
//     const dispatch = useDispatch<AppDispatch>();

//     const product = useAppSelector((state) => state.store.values?.products);

//     const item = {
//         name: 'iPhone 14 Pro max',
//         price: '30,000,000',
//     } as ItemProduct;

//     const handleGetAllProduct = () => {
//         dispatch(storeSlice.actions.getAllProduct(item));
//     };
//     return (
//         <div className="w-full min-h-[700px] bg-slate-50 flex flex-col items-center justify-center">
//             <button onClick={handleGetAllProduct} className="text-2xl font-bold text-black">
//                 Get All Product
//             </button>
//             {product && (
//                 <h2 className="text-4xl font-bold text-black">{JSON.stringify(product)}</h2>
//             )}
//         </div>
//     );
// };

// export default Store;

interface StoreProps {}

const getAllProduct = async () => {
    const response = await fetch('http://localhost:8080/api/products?page=1&limit=20');
    return response.json();
};

export default async function Store() {
    const allProduct = await getAllProduct();

    console.log(allProduct);

    return (
        <div className="w-full min-h-[700px] bg-[#f5f5f7] flex flex-col">
            <div className="mx-auto my-[150px]">
                <h2 className="text-5xl font-bold text-color">Cửa Hàng. Cách tốt nhất để</h2>
                <h2 className="text-5xl font-bold text-color">mua sản phẩm bạn thích.</h2>
            </div>
            <Category />

            <div className="flex mx-auto mt-[150px] mb-[50px]">
                <h2 className="title-sm mr-2">Thế hệ mới nhất.</h2>
                <h2 className="title-sm text-[#6e6e73]">Xem ngay có gì mới.</h2>
            </div>
            <Resizable />
            {/* <FeaturedProducts /> */}
        </div>
    );
}
