import Loading from '@/components/Loading';
import SkeletonProduct from '@/components/Product/SkeletonProduct';
import { FunctionComponent } from 'react';

interface LoadingPageProductProps {}

const LoadingPageProduct: FunctionComponent<LoadingPageProductProps> = () => {
    return (
        <div className="w-full flex flex-col items-center min-h-[500px] pb-[150px] relative">
            <Loading />
            {/* <SkeletonProduct /> */}
        </div>
    );
};

export default LoadingPageProduct;
