'use client';

import { useGetUserByIdQuery } from '@/redux/services/userApi';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { FunctionComponent } from 'react';

interface InfoAuthorProps {}

const InfoAuthor: FunctionComponent<InfoAuthorProps> = () => {
    const { data: session, status } = useSession();

    const { data, isError, isLoading, isSuccess } = useGetUserByIdQuery(
        { _id: session?.user._id as string },
        { skip: !session?.user._id }
    );

    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-shrink-0 items-center py-3 px-4 my-2 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-slate-200">
                <div className="w-[56px] h-[56px] rounded-full flex items-center justify-center overflow-hidden">
                    <Image
                        src={data?.user?.avatar as string}
                        alt={data?.user?.name as string}
                        width={56}
                        height={56}
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col ml-3">
                    <h2 className="text-lg font-semibold phone:text-base">
                        {data?.user?.name}
                        <FontAwesomeIcon icon={faCaretDown} className="text-xl ml-2" />
                    </h2>
                    <h2 className="text-base phone:text-sm">Post to Anyone</h2>
                </div>
            </div>
        </div>
    );
};

export default InfoAuthor;
