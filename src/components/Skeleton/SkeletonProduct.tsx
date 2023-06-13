import { FunctionComponent } from 'react';
import SkeletonItemProduct from './SkeletonItemProduct';

interface SkeletonProductProps {}

const SkeletonProduct: FunctionComponent<SkeletonProductProps> = () => {
    return (
        <div className="w-full h-full animate-pulse flex flex-col justify-center items-center">
            <div className="h-8 w-[50%] mb-[50px] bg-slate-200 mx-auto rounded-lg"></div>
            <div className="w-full flex items-center justify-center flex-wrap">
                <SkeletonItemProduct />
                <SkeletonItemProduct />
                <SkeletonItemProduct />
                <SkeletonItemProduct />
                <SkeletonItemProduct />
                <SkeletonItemProduct />
                <SkeletonItemProduct />
                <SkeletonItemProduct />
            </div>
        </div>
    );
};

export default SkeletonProduct;
