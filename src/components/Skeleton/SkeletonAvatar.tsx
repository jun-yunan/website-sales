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
                    ? 'animate-pulse flex items-center justify-center overflow-hidden w-[152px] h-[152px] bg-slate-400 rounded-full'
                    : 'animate-pulse flex items-center justify-center overflow-hidden w-[40px] h-[40px] bg-slate-400 rounded-full'
            }
        >
            <img
                width="100"
                height="100"
                src="https://img.icons8.com/ios/100/gender-neutral-user--v1.png"
                alt="gender-neutral-user--v1"
            />
        </div>
    );
};

export default SkeletonAvatar;
