import { FunctionComponent } from 'react';

interface SkeletonItemProductProps {}

const SkeletonItemProduct: FunctionComponent<SkeletonItemProductProps> = () => {
    return (
        <div className="w-[250px] h-[440px] p-[30px] rounded-2xl shadow-lg flex flex-col items-center bg-white m-4">
            <div className="h-[230px] w-[230px] flex-shrink-0 bg-neutral-300 rounded-xl"></div>
            <div className="flex flex-col w-full justify-between flex-1 mt-[30px]">
                <div className="h-5 bg-neutral-300 rounded-md"></div>
                <div className="h-5 bg-neutral-300 rounded-md"></div>
                <div className="h-5 bg-neutral-300 rounded-md"></div>
            </div>
        </div>
    );
};

export default SkeletonItemProduct;
