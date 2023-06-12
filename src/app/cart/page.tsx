// import Loading from '@/components/LoadingSkeleton';

import Loading from '@/components/Loading';
import LoadingSkeleton from '@/components/LoadingSkeleton';
import SkeletonProduct from '@/components/Product/SkeletonProduct';
import { FunctionComponent } from 'react';

interface CartProps {}

const Cart: FunctionComponent<CartProps> = () => {
    return (
        <div className="w-full min-h-[500px] flex flex-col bg-white items-center justify-center">
            {/* <LoadingSkeleton /> */}
            {/* <Loading /> */}
            <div className="w-[80%] h-full flex flex-col bg-white items-center justify-center">
                <SkeletonProduct />
            </div>
        </div>
    );
};

export default Cart;
