import { FunctionComponent } from 'react';
import { FadeLoader, MoonLoader } from 'react-spinners';

interface SkeletonLoadingUpdateAvatarProps {}

const SkeletonLoadingUpdateAvatar: FunctionComponent<SkeletonLoadingUpdateAvatarProps> = () => {
    return (
        <div className="w-[280px] bg-gray-100 animate-pulse h-[280px] my-10 self-center flex items-center justify-center rounded-full overflow-hidden border-2 border-[#444]">
            <MoonLoader color="#6c757d" size={80} speedMultiplier={0.6} />
            {/* <div className="flex items-center justify-center bg-red-200">
                <FadeLoader color="#6c757d" height={20} margin={3} width={5} />
            </div> */}
        </div>
    );
};

export default SkeletonLoadingUpdateAvatar;
