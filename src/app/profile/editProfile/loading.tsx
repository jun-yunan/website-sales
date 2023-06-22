import Loading from '@/components/Loading/Loading';
import { FunctionComponent } from 'react';

interface LoadingEditProfileProps {}

const LoadingEditProfile: FunctionComponent<LoadingEditProfileProps> = () => {
    return (
        <div className="fixed top-[60px] left-0 w-full z-20 h-full flex flex-col items-center justify-center bg-[#444] bg-opacity-40">
            <Loading />
        </div>
    );
};

export default LoadingEditProfile;
