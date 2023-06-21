import Loading from '@/components/Loading/Loading';
import { FunctionComponent } from 'react';

interface LoadingSignInProps {}

const LoadingSignIn: FunctionComponent<LoadingSignInProps> = () => {
    return (
        <div className="w-full min-h-[500px] flex flex-col items-start justify-center z-20 bg-white">
            <Loading />
        </div>
    );
};

export default LoadingSignIn;
