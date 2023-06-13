import Loading from '@/components/Loading/Loading';
import SkeletonProduct from '@/components/Skeleton/SkeletonProduct';
import { FunctionComponent } from 'react';

interface LoadingPageProductProps {}

const LoadingPageProduct: FunctionComponent<LoadingPageProductProps> = () => {
    return (
        <div className="w-full min-h-[500px] flex flex-wrap justify-center">
            <div className="w-[80%] h-full flex flex-col bg-white flex-wrap items-center justify-center">
                <SkeletonProduct />
            </div>
        </div>
    );
};

export default LoadingPageProduct;
