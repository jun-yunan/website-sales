/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent } from 'react';

interface PreviewProductProps {
    children?: React.ReactNode;
    title: string;
    image: string;
    bgColorWhite?: boolean;
}

const PreviewProduct: FunctionComponent<PreviewProductProps> = ({
    children,
    title,
    image,
    bgColorWhite,
}) => {
    return (
        <div
            className={
                bgColorWhite
                    ? 'w-full min-h-[674px] bg-white flex flex-col items-center'
                    : 'w-full min-h-[674px] bg-[#f5f5f7] flex flex-col items-center'
            }
        >
            <p className="mt-[108px] text-[#1d1d1f] text-[80px] font-bold leading-tight tracking-wide">
                {title}
            </p>
            <ul className="text-2xl leading-tight text-[#86868b] mt-5 font-bold flex flex-col items-center">
                {children}
            </ul>

            <div className="mt-[35px] flex flex-col items-center">
                <p className="text-2xl text-color font-semibold">Theo dõi để biết khi có hàng</p>

                <div className="flex mt-[0.8em]">
                    <div className="btn-dark mr-4">
                        <p>Tìm hiểu thêm</p>
                    </div>

                    <div className="btn-light">
                        <p>Xem giá</p>
                    </div>
                </div>
            </div>

            <div className="mt-[150px] pb-[108px]">
                <img src={image} alt={title} />
            </div>
        </div>
    );
};

export default PreviewProduct;
