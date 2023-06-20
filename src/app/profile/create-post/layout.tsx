'use client';

import CoverImage from '@/components/Profile/CoverImage';
import EditProfile from '@/components/Profile/EditProfile';
import InfoUser from '@/components/Profile/InfoUser';
import Avatar from '@/components/Profile/Avatar';
import { FunctionComponent } from 'react';
import CreatePost from '@/components/Profile/CreatePost';

interface LayoutCreatePostProps {
    children: React.ReactNode;
}

const LayoutCreatePost: FunctionComponent<LayoutCreatePostProps> = ({ children }) => {
    return (
        <div className="bg-white w-[75%] h-full relative flex items-center flex-col my-8 rounded-xl shadow-xl overflow-hidden ">
            <CoverImage />
            <div className="w-[95%] flex-1 flex justify-between mt-2">
                <Avatar />
                {/* <InfoUser /> */}
                <CreatePost />

                <EditProfile />
            </div>
            {children}
        </div>
    );
};

export default LayoutCreatePost;
