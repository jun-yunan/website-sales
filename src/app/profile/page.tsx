import { FunctionComponent, useEffect } from 'react';
import CoverImage from '@/components/Profile/CoverImage';
import Avatar from '@/components/Profile/Avatar';
import EditProfile from '@/components/Profile/EditProfile';
import CreatePost from '@/components/Profile/CreatePost';
import Post from '@/components/Profile/Post';

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
    return (
        <div className=" w-[70%] h-full relative flex items-center flex-col">
            <div className="w-full relative flex items-center flex-col my-8 rounded-xl shadow-xl overflow-hidden">
                <CoverImage />
                <div className="w-[95%] flex-1 flex phone:flex-col justify-between phone:justify-normal mt-2 relative">
                    <Avatar />
                    <CreatePost />
                    <EditProfile />
                </div>
            </div>
            <Post />
        </div>
    );
};

export default Profile;
