'use client';

import { FunctionComponent, useEffect, useState } from 'react';
import CardProduct from './CardProduct';

interface FeaturedProductsProps {}

const FeaturedProducts: FunctionComponent<FeaturedProductsProps> = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const products = [
        <CardProduct key={1} />,
        <CardProduct key={2} />,
        <CardProduct key={3} />,
        <CardProduct key={4} />,
        <CardProduct key={5} />,
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
        }, 3000); // Thay đổi giá trị 3000 thành thời gian chuyển slide mong muốn (milisecond)

        return () => clearInterval(interval);
    }, []);

    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
    };

    return (
        <div className="ml-[270px] min-w-[1000px] flex">
            <div style={{ transform: `translateX(-${currentIndex * 100}%)` }} className="flex">
                {products.map((product, index) => (
                    <div key={index} style={{ width: '100%' }}>
                        {product}
                    </div>
                ))}
            </div>
            <button className="button text-color" onClick={handlePrevSlide}>
                Previous
            </button>
            <button className="button text-color" onClick={handleNextSlide}>
                Next
            </button>
        </div>
    );
};

export default FeaturedProducts;
