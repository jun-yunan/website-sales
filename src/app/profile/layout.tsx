import CoverImage from '@/components/Profile/CoverImage';
import { FunctionComponent, useEffect } from 'react';
import EditProfile from '@/components/Profile/EditProfile';
import Introduce from '@/components/Profile/Introduce';
import Avatar from '@/components/Profile/Avatar';
import CreatePost from '@/components/Profile/CreatePost';
import { useSession } from 'next-auth/react';
import { useAppSelector } from '@/redux/hooks';

interface LayoutProfileProps {
    children: React.ReactNode;
}

const LayoutProfile: FunctionComponent<LayoutProfileProps> = ({ children }) => {
    return (
        <div className="container-light min-h-[700px] bg-[#f5f5f7]">
            <div className=" w-[70%] m-h-[100px] relative flex items-center flex-col">
                <div className="w-full h-[500px] phone:h-[400px] relative flex items-center flex-col my-4 rounded-xl shadow-xl">
                    <CoverImage />
                    <Avatar />
                    <div className="w-[95%] h-[250px] flex phone:flex-col justify-center phone:justify-normal mt-4 relative">
                        <CreatePost />
                        <EditProfile />
                    </div>
                </div>
                <div className="flex w-full  justify-between relative h-full">
                    <Introduce />
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LayoutProfile;
