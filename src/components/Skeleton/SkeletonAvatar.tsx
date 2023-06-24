/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from 'react';

interface SkeletonAvatarProps {
    avatarProfile?: boolean;
}

const SkeletonAvatar: FunctionComponent<SkeletonAvatarProps> = ({ avatarProfile }) => {
    return (
        <div
            className={
                avatarProfile
                    ? 'animate-pulse flex items-center justify-center overflow-hidden w-[152px] h-[152px] bg-neutral-300 rounded-full'
                    : 'animate-pulse flex items-center justify-center overflow-hidden w-[40px] h-[40px] bg-neutral-300 rounded-full'
            }
        ></div>
    );
};

export default SkeletonAvatar;
