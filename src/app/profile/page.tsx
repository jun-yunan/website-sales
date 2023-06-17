import { FunctionComponent } from 'react';
import CoverImage from '@/components/Profile/CoverImage';
import Avatar from '@/components/Profile/Avatar';
import EditProfile from '@/components/Profile/EditProfile';
import CreatePost from '@/components/Profile/CreatePost';

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
    return (
        <div className="bg-white w-[75%] h-full relative flex items-center flex-col my-8 rounded-xl shadow-xl overflow-hidden ">
            <CoverImage />
            <div className="w-[95%] flex-1 flex justify-between mt-2">
                <Avatar />
                <CreatePost />
                <EditProfile />
            </div>
        </div>
    );
};

export default Profile;
