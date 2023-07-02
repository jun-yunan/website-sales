'use client';

import { useGetPostQuery } from '@/redux/services/postsApi';
import { useSession } from 'next-auth/react';
import { FunctionComponent, useEffect, useState } from 'react';
import PostItem from './PostItem';
import { useAppSelector } from '@/redux/hooks';
import ConfirmDeletePost from './ConfirmDeletePost';
import { Posts } from '@/types/posts';
import SkeletonPostItem from '../Skeleton/SkeletonPofile/SkeletonPostItem';
import { toast } from 'react-toastify';

interface PostProps {}

const Post: FunctionComponent<PostProps> = () => {
    const { data: session, status } = useSession();
    const isShowModel = useAppSelector((state) => state.profile.showModel);

    const { data, isError, isLoading, isSuccess } = useGetPostQuery(
        {
            _id: session?.user._id as string,
            accessToken: session?.user.accessToken as string,
        },
        { skip: !session?.user._id || !session.user.accessToken }
    );

    // console.log(data);
    // console.log(isError);

    useEffect(() => {
        if (isError) {
            toast.error(data?.error);
        }
    }, [data, isError]);

    return (
        <>
            {isShowModel && <ConfirmDeletePost />}
            <div className="w-[60%] phone:w-full h-full text-color flex flex-col items-center">
                {status === 'loading' || isLoading ? (
                    <SkeletonPostItem />
                ) : (
                    data?.posts?.map((post) => (
                        <PostItem
                            createdAt={post.createdAt}
                            postId={post._id}
                            key={post._id}
                            author={post.author}
                            content={post.content}
                            image={post.image}
                        />
                    ))
                )}
            </div>
        </>
    );
};

export default Post;
