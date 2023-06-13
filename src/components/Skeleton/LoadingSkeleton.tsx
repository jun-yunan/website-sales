import { FunctionComponent } from 'react';

interface LoadingSkeletonProps {}

const LoadingSkeleton: FunctionComponent<LoadingSkeletonProps> = () => {
    return (
        <>
            <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-[50%] mx-auto">
                <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                    <div className="flex-1 space-y-6 py-1">
                        <div className="h-2 bg-slate-700 rounded"></div>
                        <div className="space-y-3">
                            <div className="flex flex-col justify-between">
                                <div className="h-2 bg-slate-700 rounded mb-4"></div>
                                <div className="h-2 bg-slate-700 rounded"></div>
                            </div>
                            <div className="h-2 bg-slate-700 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoadingSkeleton;
