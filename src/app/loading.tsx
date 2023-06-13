import Loading from '@/components/Loading/Loading';
import { FunctionComponent } from 'react';

interface LoadingHomeProps {}

const LoadingHome: FunctionComponent<LoadingHomeProps> = () => {
    return (
        <div className="w-full min-h-[500px] flex flex-col items-center justify-center bg-white">
            <Loading />
        </div>
    );
};

export default LoadingHome;
