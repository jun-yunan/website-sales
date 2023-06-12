import { faDongSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface ProductItemProps {
    image: string;
    nameProduct: string;
    price: string;
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ image, nameProduct, price }) => {
    return (
        <Link
            href={'#'}
            className="w-[250px] h-[440px] p-[30px] rounded-2xl shadow-lg flex flex-col items-center bg-white m-4"
        >
            <Image
                src={image}
                width={230}
                height={230}
                alt={nameProduct}
                className="flex-shrink-0"
            />
            <div className="flex flex-col justify-between items-center flex-1 mt-[30px]">
                <p className="text-lg font-semibold text-color">{nameProduct}</p>
                <p className="text-xl font-semibold text-[#d70018]">
                    {price} <FontAwesomeIcon icon={faDongSign} />
                </p>
            </div>
        </Link>
    );
};

export default ProductItem;
