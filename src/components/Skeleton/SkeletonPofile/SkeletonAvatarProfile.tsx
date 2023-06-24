import { FunctionComponent } from 'react';
import SkeletonAvatar from '../SkeletonAvatar';

interface SkeletonAvatarProfileProps {}

const SkeletonAvatarProfile: FunctionComponent<SkeletonAvatarProfileProps> = () => {
    return (
        <div className="animate-pulse flex items-center flex-col">
            <div className="w-[152px] h-[152px] self-start cursor-pointer flex flex-col items-center justify-center rounded-full overflow-hidden border-4 border-white">
                <SkeletonAvatar avatarProfile />
            </div>
            <div className="flex items-center flex-col w-[200px]">
                <div className="bg-neutral-300 w-full h-6 my-2 rounded-lg"></div>
                <div className="bg-neutral-300 w-[30%] self-start h-4 my-2 rounded-lg"></div>
                <div className="bg-neutral-300 w-full h-4 my-2 rounded-lg"></div>
            </div>
        </div>
    );
};

export default SkeletonAvatarProfile;
