import { FunctionComponent } from 'react';
import SkeletonAvatar from '../SkeletonAvatar';

interface SkeletonAvatarProfileProps {}

const SkeletonAvatarProfile: FunctionComponent<SkeletonAvatarProfileProps> = () => {
    return (
        <div className="animate-pulse translate-y-[-25%] flex items-center flex-col">
            <div className="w-[152px] h-[152px] cursor-pointer flex flex-col items-center justify-center rounded-full overflow-hidden border-4 border-white">
                <SkeletonAvatar avatarProfile />
            </div>
            <div className="flex items-center flex-col w-[200px]">
                <div className="bg-slate-400 w-full h-6 my-2 rounded-xl"></div>
                <div className="bg-slate-400 w-[30%] self-start h-4 my-2 rounded-xl"></div>
                <div className="bg-slate-400 w-full h-4 my-2 rounded-xl"></div>
            </div>
        </div>
    );
};

export default SkeletonAvatarProfile;
