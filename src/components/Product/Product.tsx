'use client';

import { FunctionComponent } from 'react';

import { useAppSelector } from '@/redux/store';

interface ProductProps {
    children?: React.ReactNode;
}

const getAllProduct = async (pageNumber: string) => {
    const response = await fetch(`http://localhost:8080/api/products?page=${pageNumber}&limit=20`, {
        // next: { revalidate: 30 },
        cache: 'no-store',
    });
    if (!response.ok) return null;
    return response.json();
};

const Product = async ({ children }: ProductProps) => {
    const pageNumber = useAppSelector((state) => state.product.product.pageNumber);
    // const allProduct = await getAllProduct(pageNumber);
    // console.log(allProduct);

    return <div className="w-full min-h-[500px] flex flex-col text-color">{children}</div>;
};

export default Product;
