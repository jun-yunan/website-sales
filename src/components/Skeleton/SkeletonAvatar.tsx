import { FunctionComponent } from 'react';

interface SkeletonAvatarProps {}

const SkeletonAvatar: FunctionComponent<SkeletonAvatarProps> = () => {
    return <div className="animate-pulse w-[40px] h-[40px] bg-slate-200 rounded-full"></div>;
};

export default SkeletonAvatar;
