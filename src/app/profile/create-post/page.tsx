/* eslint-disable @next/next/no-img-element */
'use client';

import { useGetUserByIdQuery } from '@/redux/services/userApi';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { ChangeEvent, FunctionComponent, useState } from 'react';
import { useSession } from 'next-auth/react';
import InfoAuthor from '@/components/Profile/CreatePost/InfoAuthor';
import FormCreatePost from '@/components/Profile/CreatePost/FormCreatePost';

interface CreatePostPageProps {}

const CreatePostPage: FunctionComponent<CreatePostPageProps> = () => {
    const [postContent, setPostContent] = useState('');
    const [showEmoji, setShowEmoji] = useState(false);
    const [selectedEmoji, setSelectedEmoji] = useState('');
    const [imagePost, setImagePost] = useState('');
    const { data: session, status } = useSession();

    const { data, isLoading, isSuccess } = useGetUserByIdQuery(
        { _id: session?.user._id as string },
        { skip: !session?.user._id }
    );

    console.log(selectedEmoji);

    const handleSelectImage = (event: ChangeEvent<HTMLInputElement>) => {
        const image = event.target.files?.[0];

        if (image) {
            const reader = new FileReader();
            reader.onload = () => {
                setImagePost(reader.result as string);
            };
            reader.readAsDataURL(image);
        }
    };

    return (
        <div className="fixed top-[60px] left-0 w-screen z-20 h-full translate-y-[-32px] flex flex-col items-center justify-center bg-[#444] bg-opacity-60">
            <div className="relative flex flex-col w-[40%] phone:min-w-[80%] phone:max-h-[65%] max-h-[80%] translate-y-[-5%] bg-white phone:translate-y-[-25%] rounded-xl shadow-xl px-6">
                <Link
                    href={'/profile'}
                    className="absolute top-0 right-0 text-3xl phone:text-2xl hover:bg-slate-200 py-2 px-4 rounded-full transition-all duration-500 ease-in-out"
                >
                    <FontAwesomeIcon icon={faXmark} />
                </Link>
                <InfoAuthor />
                <FormCreatePost />
                <div className="w-full border-b-2 border-y-slate-300 mt-2"></div>
                <label
                    className="btn-light phone:text-xl my-5 self-end cursor-pointer w-[50%]"
                    htmlFor="submitForm"
                >
                    Post
                </label>
            </div>
        </div>
    );
};

export default CreatePostPage;
