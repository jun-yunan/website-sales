import { FunctionComponent } from 'react';

interface SkeletonTextProps {}

const SkeletonText: FunctionComponent<SkeletonTextProps> = () => {
    return (
        <div className="animate-pulse w-full flex items-center justify-center">
            <div className="w-full h-full bg-slate-600"></div>
        </div>
    );
};

export default SkeletonText;
