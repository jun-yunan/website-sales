/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import { useSession } from 'next-auth/react';
import { TextField } from '@mui/material';

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
    const { data: session, status } = useSession();

    return (
        <div className="bg-white w-[75%] h-full flex flex-col my-8 rounded-xl shadow-xl overflow-hidden ">
            <div className="w-full h-[200px] flex items-center justify-center relative">
                <img
                    src={
                        'https://images.pexels.com/photos/1111318/pexels-photo-1111318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    }
                    alt="background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute left-[2%] bottom-[-140px] flex items-center flex-col">
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
            </div>

            <div className="flex flex-col items-center">
                <h2 className="title-sm-dark">Thông tin cơ bản</h2>
                <TextField label="Standard" variant="standard" />
            </div>
        </div>
    );
};

export default Profile;
