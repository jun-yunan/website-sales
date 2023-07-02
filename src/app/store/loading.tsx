import Loading from '@/components/Loading/Loading';
import { FunctionComponent } from 'react';

interface LoadingStoreProps {}

const LoadingStore: FunctionComponent<LoadingStoreProps> = () => {
    return (
        <div className="w-full min-h-[700px] bg-white">
            <Loading />
        </div>
    );
};

export default LoadingStore;
