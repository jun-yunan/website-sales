/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from 'react';

interface ItemCategoryProps {
    children?: React.ReactNode;
    image: string;
    title?: string;
}

const ItemCategory: FunctionComponent<ItemCategoryProps> = ({ children, image, title }) => {
    return (
        <div className="flex flex-col items-center mx-[15px]">
            <img src={image} alt={title} className="w-[120px] h-[75px] object-cover mb-4" />
            <p className="text-color font-semibold text-base">{children}</p>
        </div>
    );
};

export default ItemCategory;
