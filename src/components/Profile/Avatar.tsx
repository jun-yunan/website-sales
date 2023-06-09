/* eslint-disable @next/next/no-img-element */
'use client';

import { ChangeEvent, FormEvent, FunctionComponent, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useGetUserByIdQuery, useUpdateAvatarMutation } from '@/redux/services/userApi';
import SkeletonAvatarProfile from '../Skeleton/SkeletonPofile/SkeletonAvatarProfile';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SkeletonLoadingUpdateAvatar from '../Skeleton/SkeletonLoadingUpdateAvatar';

interface AvatarProps {}

const Avatar: FunctionComponent<AvatarProps> = () => {
    const [updateAvatar, resultUpdateAvatar] = useUpdateAvatarMutation();
    const { data: session, status } = useSession();

    const { data, isError, isFetching } = useGetUserByIdQuery(
        { _id: session?.user._id as string },
        { skip: !session?.user._id }
    );

    const [show, setShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    useEffect(() => {
        if (resultUpdateAvatar.isSuccess && resultUpdateAvatar.data.status) {
            toast.success('Update avatar successfully!!!');
        }
    }, [resultUpdateAvatar]);

    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (selectedFile) {
            const formData = new FormData();
            formData.append('avatar', selectedFile);
            updateAvatar({ _id: session?.user._id as string, data: formData });
        }
    };

    const handleUpdateAvatar = () => {
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };

    if (show) {
        return (
            <div className="w-full h-full fixed bg-slate-600 top-0 right-0 bg-opacity-70 flex flex-col items-center justify-center z-10">
                <div className=" text-color min-w-[50%] min-h-[500px] bg-[white] flex flex-col rounded-2xl shadow-xl">
                    <div className="flex p-4 justify-between items-center">
                        <p className="text-2xl font-semibold">Profile photo</p>
                        <FontAwesomeIcon
                            onClick={handleClose}
                            icon={faXmark}
                            className="text-2xl cursor-pointer py-3 px-4 hover:bg-slate-300 rounded-full transition-all duration-500 ease-in-out"
                        />
                    </div>
                    <div className="border-b-2 border-y-slate-200"></div>
                    {resultUpdateAvatar.isLoading ? (
                        <SkeletonLoadingUpdateAvatar />
                    ) : (
                        <div className="w-[280px] h-[280px] my-10 self-center flex items-center justify-center rounded-full overflow-hidden border-2 border-[#444]">
                            <img
                                src={
                                    // 'https://media.licdn.com/dms/image/D4D03AQEXExV7MOfuJA/profile-displayphoto-shrink_800_800/0/1686653970613?e=1692230400&v=beta&t=NpHZGrm0CGeiTc-vEjzkRi4PIWPtnt2stCCMR3qSUyY' ||
                                    selectedImage || data?.user?.avatar
                                }
                                alt={data?.user?.name}
                                className="w-[280px] h-[280px] object-cover"
                            />
                        </div>
                    )}
                    <div className="border-b-2 border-y-slate-200"></div>
                    <div className="flex justify-around p-5">
                        <div className="text-xl cursor-pointer font-semibold px-4 self-center items-center justify-center flex bg-white rounded-2xl text-[#161617] border-2 border-[#161617] hover:bg-[#161617] hover:text-[white] transition-all duration-500 ease-in-out">
                            <form onSubmit={handleSubmitForm}>
                                <input
                                    type="file"
                                    id="upload_file"
                                    name="avatar"
                                    onChange={handleImageUpload}
                                    hidden
                                />
                                <input type="submit" hidden id="button_submit" />
                            </form>
                            <label
                                htmlFor="upload_file"
                                className="flex items-center cursor-pointer"
                            >
                                <p className="text-xl font-semibold mr-2">Add Photo</p>
                                <FontAwesomeIcon icon={faCamera} className="" />
                            </label>
                        </div>

                        <label
                            htmlFor="button_submit"
                            // onClick={handleSubmit}
                            className="text-xl font-semibold px-4 self-center items-center justify-center flex bg-white rounded-2xl text-[#161617] border-2 border-[#161617] hover:bg-[#161617] hover:text-[white] transition-all duration-500 ease-in-out"
                        >
                            Save Photo
                        </label>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="absolute top-[150px] left-[24px] phone:top-[85px] flex items-center flex-col">
                {status === 'loading' || isFetching ? (
                    <SkeletonAvatarProfile />
                ) : (
                    <>
                        <div
                            onClick={handleUpdateAvatar}
                            className="w-[152px] h-[152px] hover:opacity-90 transition-all duration-300 ease-in-out phone:w-[85px] phone:h-[85px] cursor-pointer self-start flex flex-col items-center justify-center rounded-full overflow-hidden border-4 border-white"
                        >
                            {data?.user?.avatar ? (
                                <img
                                    src={data?.user?.avatar as string}
                                    alt={data?.user?.name as string}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div></div>
                            )}
                        </div>
                        <div className="flex flex-col max-w-[280px] self-start phone:min-w-[100px] ">
                            <h2 className="phone:text-base text-2xl font-semibold">
                                {data?.user?.name}
                            </h2>
                            <h2 className="text-2xl font-semibold">--</h2>
                            <p className="phone:hidden phone:text-sm">{data?.user?.address}</p>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Avatar;
