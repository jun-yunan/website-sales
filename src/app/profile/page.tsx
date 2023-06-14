/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import { useSession } from 'next-auth/react';
import { TextField } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import EditIcon from '@mui/icons-material/Edit';
import CoverImage from '@/components/Profile/CoverImage';
import Avatar from '@/components/Profile/Avatar';
import InfoUser from '@/components/Profile/InfoUser';
import EditProfile from '@/components/Profile/EditProfile';
import CreatePost from '@/components/Profile/CreatePost';

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
    const { data: session, status } = useSession();

    return (
        <div className="bg-white w-[75%] h-full relative flex items-center flex-col my-8 rounded-xl shadow-xl overflow-hidden ">
            <CoverImage />
            <div className="w-[95%] flex-1 flex justify-between mt-2">
                <Avatar />
                {/* <InfoUser /> */}
                <CreatePost />
                <EditProfile />
            </div>
        </div>
    );
};

export default Profile;
