import { FunctionComponent } from 'react';

interface SkeletonCoverImageProps {}

const SkeletonCoverImage: FunctionComponent<SkeletonCoverImageProps> = () => {
    return <div className="w-full h-full animate-pulse bg-neutral-300"></div>;
};

export default SkeletonCoverImage;
