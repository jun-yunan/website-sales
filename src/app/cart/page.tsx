// import Loading from '@/components/LoadingSkeleton';

import Loading from '@/components/Loading';
import LoadingSkeleton from '@/components/LoadingSkeleton';
import { FunctionComponent } from 'react';

interface CartProps {}

const Cart: FunctionComponent<CartProps> = () => {
    return (
        <div className="w-full min-h-[500px] flex flex-col bg-white items-center justify-center">
            <LoadingSkeleton />
            <Loading />
        </div>
    );
};

export default Cart;
