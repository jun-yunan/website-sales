'use client';

import { FunctionComponent } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import FormCreatePost from '@/components/Profile/CreatePost/FormCreatePost';
import InfoAuthor from '@/components/Profile/CreatePost/InfoAuthor';
import TitleHeader from '@/components/Profile/TitleHeader';
import HorizontalLine from '@/components/Profile/HorizontalLine';
import FormEditPost from '@/components/Profile/EditPost/FormEditPost';

interface EditPostPageProps {
    params: { postId: string };
}

const EditPostPage: FunctionComponent<EditPostPageProps> = ({ params }) => {
    return (
        <div className="fixed top-[60px]  left-0 bg-gray-500 bg-opacity-40 w-full h-full flex flex-col items-center justify-center">
            <div className="py-2 px-6 rounded-xl flex flex-col shadow-xl bg-white translate-y-[-5%] phone:translate-y-[-15%] phone:h-[500px] text-color w-[50%] phone:w-[90%] h-[600px] overflow-auto">
                <TitleHeader />
                <HorizontalLine />
                <InfoAuthor />
                <FormEditPost params={params} />
                {/* <FormCreatePost /> */}
                <HorizontalLine />
                <label
                    htmlFor="submitFormEditPost"
                    className="py-2 w-[50%] hover:bg-[#161617] hover:text-white cursor-pointer hover-smooth flex items-center justify-center rounded-lg self-end px-8 border-2 border-[#161617] text-color font-semibold text-2xl"
                >
                    <p>Save</p>
                </label>
            </div>
        </div>
    );
};

export default EditPostPage;
