'use client';
/* eslint-disable @next/next/no-img-element */
import { useGetUserByIdQuery } from '@/redux/services/userApi';
import {
    faBriefcase,
    faGraduationCap,
    faHeart,
    faHouse,
    faLink,
    faMusic,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSession } from 'next-auth/react';
import { FunctionComponent } from 'react';

interface IntroduceProps {}

const Introduce: FunctionComponent<IntroduceProps> = () => {
    const { data: session, status } = useSession();

    const {
        data: user,
        isLoading,
        isError,
        isSuccess,
    } = useGetUserByIdQuery({ _id: session?.user._id as string }, { skip: !session?.user._id });
    return (
        <div className="bg-white flex-shrink-0 phone:hidden w-[39%] overflow-auto my-4 h-[550px] rounded-xl shadow-xl sticky top-[10%] text-color">
            <div className="p-6 w-full h-full flex flex-col">
                <p className="text-2xl font-semibold">Giới thiệu</p>
                <div className="w-full border border-neutral-300 my-2"></div>
                <div className="flex flex-col">
                    <div className="flex items-center text-base font-medium">
                        <FontAwesomeIcon className="mr-2" icon={faGraduationCap} />
                        <p>Học tại Tay Do University</p>
                    </div>
                    <div className="flex items-center text-base font-medium">
                        <FontAwesomeIcon className="mr-2" icon={faHouse} />
                        <p>Sống tại Cần Thơ</p>
                    </div>
                    <div className="flex items-center text-base font-medium">
                        <FontAwesomeIcon className="mr-2" icon={faBriefcase} />
                        <p>Làm việc tại VNG Group</p>
                    </div>

                    <div className="flex items-center text-base font-medium">
                        <FontAwesomeIcon className="mr-2" icon={faLink} />
                        <p>Liên kết mạng xã hội</p>
                    </div>

                    <div className="flex text-base font-medium flex-col">
                        <p>Sở Thích</p>
                        <div className="flex items-center">
                            <FontAwesomeIcon className="mr-2" icon={faMusic} />
                            <p>Nghe Nhạc</p>
                        </div>
                    </div>

                    <button className="my-2 self-center font-medium text-lg rounded-lg hover:bg-[#161617] hover:text-white hover-smooth px-8 border-2 border-[#161617]">
                        Chỉnh sửa giới thiệu
                    </button>
                </div>
                <div className="w-full border border-neutral-300 my-2"></div>
                <div className="flex flex-col items-center">
                    <p className="text-lg font-medium">Bộ sưu tập</p>
                    <div className="flex flex-wrap">
                        <img
                            src={user?.user?.avatar}
                            alt=""
                            className="w-[100px] h-[150px] object-cover m-2 rounded-md hover:opacity-80 hover-smooth cursor-pointer"
                        />
                        <img
                            src={user?.user?.avatar}
                            alt=""
                            className="w-[100px] h-[150px] object-cover m-2 rounded-md hover:opacity-80 hover-smooth cursor-pointer"
                        />
                        <img
                            src={user?.user?.avatar}
                            alt=""
                            className="w-[100px] h-[150px] object-cover m-2 rounded-md hover:opacity-80 hover-smooth cursor-pointer"
                        />
                        {/* <img
                            src={user?.user?.avatar}
                            alt=""
                            className="w-[100px] h-[150px] object-cover m-2 rounded-md hover:opacity-80 hover-smooth cursor-pointer"
                        /> */}
                    </div>
                    <button className="my-2 font-medium text-lg rounded-lg hover:bg-[#161617] hover:text-white hover-smooth px-8 border-2 border-[#161617]">
                        Xem tất cả
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Introduce;
