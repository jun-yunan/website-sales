/* eslint-disable @next/next/no-img-element */
'use client';

import { FunctionComponent } from 'react';
import { useSession } from 'next-auth/react';

interface AvatarProps {}

const Avatar: FunctionComponent<AvatarProps> = () => {
    const { data: session, status } = useSession();

    return (
        <div className="translate-y-[-25%] flex items-center flex-col">
            <div className="w-[152px] h-[152px] flex flex-col items-center justify-center rounded-full overflow-hidden border-4 border-white">
                <img
                    src={session?.user.image}
                    alt={session?.user.name}
                    className="w-[152px] h-[152px] object-cover"
                />
            </div>
            <div className="flex flex-col">
                <h2 className="text-2xl font-semibold">{session?.user.name}</h2>
                <h2 className="text-2xl font-semibold">--</h2>
                <p>Ho Chi Minh City, Vietnam</p>
            </div>
        </div>
    );
};

export default Avatar;
