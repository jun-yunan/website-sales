import CoverImage from '@/components/Profile/CoverImage';
import { FunctionComponent } from 'react';
import EditProfile from '@/components/Profile/EditProfile';
import Introduce from '@/components/Profile/Introduce';
import Avatar from '@/components/Profile/Avatar';
import CreatePost from '@/components/Profile/CreatePost';

interface LayoutProfileProps {
    children: React.ReactNode;
}

const LayoutProfile: FunctionComponent<LayoutProfileProps> = ({ children }) => {
    return (
        <div className="container-light min-h-[700px] bg-[#f5f5f7]">
            <div className=" w-[70%] m-h-[700px] relative flex items-center flex-col">
                <div className="w-full min-h-[400px] relative flex items-center flex-col my-4 rounded-xl shadow-xl overflow-hidden">
                    <CoverImage />
                    <div className="w-[95%] flex-1 flex phone:flex-col justify-between phone:justify-normal mt-4 relative">
                        <Avatar />
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
