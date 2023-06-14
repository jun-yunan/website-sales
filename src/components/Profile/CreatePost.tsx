/* eslint-disable @next/next/no-img-element */
'use client';

import { FunctionComponent } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

interface CreatePostProps {}

const CreatePost: FunctionComponent<CreatePostProps> = () => {
    const { data: session, status } = useSession();

    return (
        <div className="min-w-[50%] h-full flex flex-col items-center mt-4">
            <div className="flex flex-col text-color">
                <div className="mb-10">
                    <p className="text-2xl font-semibold">Activity</p>
                    <p className="text-xl font-semibold text-[#0a66c2] hover:underline cursor-pointer">
                        0 followers
                    </p>
                </div>
                <div>
                    <p className='className="text-2xl font-semibold'>You haven’t posted yet</p>
                    <p>Posts you share will be displayed here.</p>
                </div>
                <Link
                    href={'#'}
                    className="mt-10 py-1  items-center px-4 justify-center flex bg-white rounded-2xl text-base font-semibold text-[#161617] border-2 border-[#161617] hover:bg-[#161617] hover:text-[white] transition-all duration-500 ease-in-out"
                >
                    <p className="text-2xl mr-2">Create a post</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        className="mercado-match"
                        width="24"
                        height="24"
                        focusable="false"
                    >
                        <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default CreatePost;
