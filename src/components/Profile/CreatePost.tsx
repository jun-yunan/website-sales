/* eslint-disable @next/next/no-img-element */
'use client';

import { FunctionComponent } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import CreateIcon from '@mui/icons-material/Create';

interface CreatePostProps {}

const CreatePost: FunctionComponent<CreatePostProps> = () => {
    const { data: session, status } = useSession();

    return (
        <div className="flex flex-col items-center justify-self-center phone:absolute phone:bottom-[24px]">
            <div className="flex h-[50%] flex-col text-color justify-between">
                <div className="">
                    <p className="text-2xl phone:text-base font-semibold">Activity</p>
                    <p className="text-xl phone:text-base font-semibold text-[#0a66c2] hover:underline cursor-pointer">
                        0 followers
                    </p>
                </div>
                <div>
                    <p className="text-2xl phone:text-base font-semibold">You haven’t posted yet</p>
                    <p className="phone:text-sm">Posts you share will be displayed here.</p>
                </div>
                <Link
                    href={'/profile/create-post'}
                    className="py-1  items-center px-4 justify-center flex bg-white rounded-xl text-base font-semibold text-[#161617] border-2 border-[#161617] hover:bg-[#161617] hover:text-[white] transition-all duration-500 ease-in-out"
                >
                    <p className="text-2xl phone:text-base mr-2">Create a post</p>
                    <CreateIcon />
                </Link>
            </div>
        </div>
    );
};

export default CreatePost;
