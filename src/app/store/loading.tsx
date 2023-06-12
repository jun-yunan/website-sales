import Loading from '@/components/Loading';
import { FunctionComponent } from 'react';

interface LoadingStoreProps {}

const LoadingStore: FunctionComponent<LoadingStoreProps> = () => {
    return (
        <div className="w-full min-h-[500px] bg-white">
            <Loading />
        </div>
    );
};

export default LoadingStore;
