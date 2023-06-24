'use client';
import { useGetImagesProfileByIdQuery } from '@/redux/services/postsApi';
/* eslint-disable @next/next/no-img-element */
import { useGetIntroduceByIdQuery, useGetUserByIdQuery } from '@/redux/services/userApi';
import {
    faBaseball,
    faBriefcase,
    faFilm,
    faGamepad,
    faGraduationCap,
    faHeart,
    faHouse,
    faLink,
    faMusic,
    faPencil,
    faPlane,
    faPodcast,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { FunctionComponent, useState } from 'react';
import SchoolIcon from '@mui/icons-material/School';

interface IntroduceProps {}

const Introduce: FunctionComponent<IntroduceProps> = () => {
    const [showEditIntroduce, setShowEditIntroduce] = useState(false);
    const { data: session, status } = useSession();

    const {
        data: user,
        isLoading,
        isError,
        isSuccess,
    } = useGetUserByIdQuery({ _id: session?.user._id as string }, { skip: !session?.user._id });

    const { data: introduce } = useGetIntroduceByIdQuery(
        {
            accessToken: session?.user.accessToken as string,
            userId: session?.user._id as string,
        },
        { skip: !session?.user._id }
    );

    const { data: imagesProfile } = useGetImagesProfileByIdQuery(
        {
            accessToken: session?.user.accessToken as string,
            userId: session?.user._id as string,
        },
        { skip: !session?.user._id }
    );

    console.log(imagesProfile);

    return (
        <div className="bg-white flex-shrink-0 phone:hidden w-[39%] overflow-auto my-4 h-[600px] rounded-xl shadow-xl sticky top-[10%] text-color">
            <div className="p-6 w-full h-full flex flex-col">
                <p className="text-2xl font-semibold">Giới thiệu</p>
                <div className="w-full border border-neutral-300 my-2"></div>
                <div className="flex flex-col">
                    <div className="flex items-center text-base font-medium">
                        <FontAwesomeIcon className="mr-2" icon={faGraduationCap} />
                        <p>Học tại {introduce?.introduce.studying}</p>
                    </div>
                    <div className="flex items-center text-base font-medium">
                        <FontAwesomeIcon className="mr-2" icon={faHouse} />
                        <p>Sống tại {introduce?.introduce.living}</p>
                    </div>
                    <div className="flex items-center text-base font-medium">
                        <FontAwesomeIcon className="mr-2" icon={faBriefcase} />
                        <p>Làm việc tại {introduce?.introduce.work}</p>
                    </div>

                    <div className="flex items-center text-base font-medium">
                        <FontAwesomeIcon className="mr-2 self-start mt-2" icon={faLink} />
                        <Link
                            href={(introduce?.introduce.social as string) || ''}
                            target="_blank"
                            className="hover:underline"
                        >
                            {introduce?.introduce.social}
                        </Link>
                    </div>

                    <div className="flex text-base font-medium flex-col">
                        <p className="font-semibold">Sở Thích</p>
                        <div className="flex items-center">
                            {introduce?.introduce.interests === 'game' && (
                                <FontAwesomeIcon className="mr-2" icon={faGamepad} />
                            )}
                            {introduce?.introduce.interests === 'music' && (
                                <FontAwesomeIcon className="mr-2" icon={faMusic} />
                            )}
                            {introduce?.introduce.interests === 'draw' && (
                                <FontAwesomeIcon className="mr-2" icon={faPencil} />
                            )}
                            {introduce?.introduce.interests === 'podcast' && (
                                <FontAwesomeIcon className="mr-2" icon={faPodcast} />
                            )}
                            {introduce?.introduce.interests === 'movie' && (
                                <FontAwesomeIcon className="mr-2" icon={faFilm} />
                            )}
                            {introduce?.introduce.interests === 'sport' && (
                                <FontAwesomeIcon className="mr-2" icon={faBaseball} />
                            )}
                            {introduce?.introduce.interests === 'travel' && (
                                <FontAwesomeIcon className="mr-2" icon={faPlane} />
                            )}
                            <p>{introduce?.introduce.interests}</p>
                        </div>
                    </div>

                    <Link
                        href={'/profile/edit-introduce'}
                        scroll={true}
                        className="my-2 self-center font-medium text-lg rounded-lg hover:bg-[#161617] hover:text-white hover-smooth px-8 border-2 border-[#161617]"
                    >
                        Chỉnh sửa giới thiệu
                    </Link>
                </div>
                <div className="w-full border border-neutral-300 my-2"></div>
                <div className="flex flex-col items-center">
                    <p className="text-lg font-medium">Bộ sưu tập</p>
                    <div className="flex flex-wrap">
                        {imagesProfile?.imagesProfile ? (
                            imagesProfile.imagesProfile.map(
                                (item) =>
                                    item.image !== '' && (
                                        <img
                                            key={item._id}
                                            src={item.image}
                                            alt=""
                                            className="w-[100px] h-[150px] object-cover m-2 rounded-md hover:opacity-80 hover-smooth cursor-pointer"
                                        />
                                    )
                            )
                        ) : (
                            <div></div>
                        )}
                        {user?.user?.coverImage ? (
                            <img
                                src={user?.user?.coverImage}
                                alt=""
                                className="w-[100px] h-[150px] object-cover m-2 rounded-md hover:opacity-80 hover-smooth cursor-pointer"
                            />
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduce;
