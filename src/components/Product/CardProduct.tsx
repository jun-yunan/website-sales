/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { FunctionComponent } from 'react';

interface CardProductProps {
    children?: React.ReactNode;
    title?: string;
    nameProduct?: string;
    price?: string;
    image?: string;
    colorTextWhite?: boolean;
    colorTextBlack?: boolean;
}

const CardProduct: FunctionComponent<CardProductProps> = ({
    children,
    nameProduct,
    image,
    price,
    title,
    colorTextWhite,
    colorTextBlack,
}) => {
    return (
        <div className="w-[400px] h-[500px] bg-white text-color flex-shrink-0 relative rounded-2xl overflow-hidden shadow-sm">
            <div className={colorTextWhite ? 'absolute p-6 text-white' : 'absolute p-6 text-color'}>
                <h2>{nameProduct}</h2>
                <div className={colorTextWhite ? 'title-sm-dark-light' : 'title-sm-dark'}>
                    {children}
                </div>
                <p>{price || title}</p>
            </div>
            <Image
                className="w-full h-full object-cover"
                width={400}
                height={500}
                src={image || ''}
                alt={nameProduct || ''}
            />
        </div>
    );
};

export default CardProduct;
