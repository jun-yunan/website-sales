/* eslint-disable @next/next/no-img-element */
'use client';

import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent } from 'react';
import UpdateCoverImage from './UpdateCoverImage';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { profileSlice } from '@/redux/features/profileSlice';
import { useSession } from 'next-auth/react';
import { useGetUserByIdQuery } from '@/redux/services/userApi';
import SkeletonCoverImage from '../Skeleton/SkeletonPofile/SkeletonCoverImage';

interface CoverImageProps {}

const CoverImage: FunctionComponent<CoverImageProps> = () => {
    const dispatch = useAppDispatch();
    const isShowUpdateCoverImage = useAppSelector((state) => state.profile.showUpdateCoverImage);
    const handleUpdateCoverImage = () => {
        dispatch(profileSlice.actions.showUpdateCoverImage());
    };

    const { data: session, status } = useSession();
    const { data: user } = useGetUserByIdQuery(
        { _id: session?.user._id as string },
        { skip: !session?.user._id }
    );

    return (
        <>
            {isShowUpdateCoverImage && <UpdateCoverImage />}
            <div className="w-full h-[300px] phone:h-[150px] rounded-t-xl overflow-hidden flex items-center justify-center relative">
                {status === 'loading' ? (
                    <SkeletonCoverImage />
                ) : (
                    <>
                        {user?.user?.coverImage ? (
                            <img
                                src={user?.user?.coverImage}
                                alt=""
                                className="w-full h-full object-cover outline-none border-none"
                            />
                        ) : (
                            <div></div>
                        )}
                    </>
                )}
                <div
                    onClick={handleUpdateCoverImage}
                    className="absolute top-[2%] right-[2%] py-3 px-4 hover:bg-slate-700 transition-all duration-500 ease-in-out cursor-pointer rounded-full text-white text-3xl"
                >
                    <FontAwesomeIcon icon={faCamera} />
                </div>
            </div>
        </>
    );
};

export default CoverImage;
