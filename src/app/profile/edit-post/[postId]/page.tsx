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

interface EditPostPageProps {}

const EditPostPage: FunctionComponent<EditPostPageProps> = () => {
    return (
        <div className="fixed top-[60px]  left-0 bg-gray-500 bg-opacity-40 w-full h-full flex flex-col items-center justify-center">
            <div className="p-6 rounded-xl shadow-xl bg-white translate-y-[-10%] text-color w-[50%] min-h-[500px]">
                <TitleHeader />
                <HorizontalLine />
                <InfoAuthor />
                <FormCreatePost />
            </div>
        </div>
    );
};

export default EditPostPage;
