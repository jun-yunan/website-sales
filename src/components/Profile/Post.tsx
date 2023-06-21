'use client';

import { useGetPostQuery } from '@/redux/services/postsApi';
import { useSession } from 'next-auth/react';
import { FunctionComponent, useEffect, useState } from 'react';
import PostItem from './PostItem';
import { useAppSelector } from '@/redux/hooks';
import ConfirmDeletePost from './ConfirmDeletePost';
import { Posts } from '@/types/posts';

interface PostProps {}

const Post: FunctionComponent<PostProps> = () => {
    const { data: session, status } = useSession();
    const isShowModel = useAppSelector((state) => state.profile.showModel);
    const [posts, setPosts] = useState<Posts>();

    const { data, isError, isLoading, isSuccess } = useGetPostQuery(
        {
            _id: session?.user._id as string,
            accessToken: session?.user.accessToken as string,
        },
        { skip: !session?.user._id || !session.user.accessToken }
    );

    // useEffect(() => {
    //     if (isSuccess && data.posts && Array.isArray(data.posts)) {
    //         const sortedPosts = data.posts.sort(
    //             (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    //         );
    //         setPosts({ ...data, posts: sortedPosts });
    //     }
    // }, [data, isSuccess]);

    return (
        <>
            {isShowModel && <ConfirmDeletePost />}
            <div className="w-[100%]  text-color flex flex-col items-center">
                {data?.posts?.map((post) => (
                    <PostItem
                        postId={post._id}
                        key={post._id}
                        author={post.author}
                        content={post.content}
                        image={post.image}
                    />
                ))}
            </div>
        </>
    );
};

export default Post;
