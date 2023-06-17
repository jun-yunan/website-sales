import Loading from '@/components/Loading/Loading';
import { FunctionComponent } from 'react';

interface LoadingProfileProps {}

const LoadingProfile: FunctionComponent<LoadingProfileProps> = () => {
    return (
        <div className="w-full min-h-[500px] flex flex-col items-center justify-center bg-white">
            <Loading />
        </div>
    );
};

export default LoadingProfile;
