/* eslint-disable @next/next/no-img-element */
'use client';

import {
    useCreatePostMutation,
    useGetPostByIdQuery,
    useUpdatePostMutation,
} from '@/redux/services/postsApi';
import { faFaceSmile, faImage, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, FunctionComponent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FormCreatePost } from '../CreatePost/FormCreatePost';

interface FormEditPostProps {
    params: { postId: string };
}

const FormEditPost: FunctionComponent<FormEditPostProps> = ({ params }) => {
    const { data: session, status } = useSession();

    const {
        data: post,
        isError,
        isLoading,
        isSuccess,
    } = useGetPostByIdQuery(
        {
            accessToken: session?.user.accessToken as string,
            postId: params.postId,
            userId: session?.user._id as string,
        },
        { skip: !session?.user._id }
    );
    const [showEmoji, setShowEmoji] = useState(false);
    const [selectedEmoji, setSelectedEmoji] = useState('');
    const [imagePost, setImagePost] = useState('');
    const [fileImage, setFileImage] = useState<File | null>(null);
    const [postContent, setPostContent] = useState('');

    const router = useRouter();

    const { register, handleSubmit } = useForm<FormCreatePost>();

    const [updatePost, resultUpdatePost] = useUpdatePostMutation();

    const handleSelectImage = (event: ChangeEvent<HTMLInputElement>) => {
        const image = event.target.files?.[0];

        if (image) {
            setFileImage(image);
            const reader = new FileReader();
            reader.onload = () => {
                setImagePost(reader.result as string);
            };
            reader.readAsDataURL(image);
        }
    };

    console.log(resultUpdatePost);

    const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (session?.user._id) {
            const formDataUpdatePost = new FormData();
            fileImage && formDataUpdatePost.append('image', fileImage);
            formDataUpdatePost.append('content', postContent);

            try {
                await toast.promise(
                    updatePost({
                        accessToken: session.user.accessToken as string,
                        postId: params.postId,
                        userId: session.user._id as string,
                        data: formDataUpdatePost,
                    }).unwrap(),
                    {
                        pending: 'Please wait...',
                        success: 'Update post successfully!!! 👌',
                        error: 'Update post fail!!! 🤯',
                    }
                );
            } catch (error) {
                console.log(error);
            }
        }
    };

    useEffect(() => {
        if (isSuccess) {
            setPostContent(post?.post.content);
        }
    }, [isSuccess, post, router]);

    useEffect(() => {
        if (resultUpdatePost.isSuccess) {
            router.push('/profile');
        }
    }, [resultUpdatePost, router]);

    return (
        <div>
            <form onSubmit={handleSubmitForm} className="my-4 flex flex-col w-full overflow-auto">
                {isSuccess && (
                    <textarea
                        value={postContent}
                        name="content"
                        onChange={(e) => {
                            setPostContent(e.target.value);
                            setSelectedEmoji('');
                        }}
                        spellCheck={false}
                        className="pb-[25%] overflow-y-hidden text-2xl phone:text-xl placeholder:text-2xl phone:placeholder:text-xl outline-none resize-none overflow-hidden"
                        placeholder="What do you want to talk about?"
                    />
                )}

                {imagePost ? (
                    <div className="relative w-full h-[280px] flex items-center justify-center">
                        <FontAwesomeIcon
                            icon={faXmark}
                            onClick={() => setImagePost('')}
                            className="absolute top-0 right-0 py-2 hover:bg-black px-3 m-2 text-xl text-white bg-black bg-opacity-30 cursor-pointer rounded-[50%]"
                        />
                        <img
                            src={imagePost}
                            alt={''}
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                ) : (
                    <>
                        {isSuccess && post?.post.image ? (
                            <div className="relative w-full h-[280px] flex items-center justify-center">
                                <img
                                    src={post?.post.image}
                                    alt={''}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </>
                )}
                <input
                    {...register('image')}
                    type="file"
                    accept="image/*"
                    name="image"
                    hidden
                    id="add-photo"
                    onChange={handleSelectImage}
                />

                <input type="submit" hidden id="submitFormEditPost" />
            </form>
            <div className="w-full">
                <label htmlFor="add-photo" className="mr-2">
                    <Tippy content="Add Photo">
                        <FontAwesomeIcon
                            icon={faImage}
                            className="text-2xl phone:text-xl px-4 py-4 shadow-lg cursor-pointer duration-300 transition-all rounded-full bg-gray-200 hover:bg-slate-300"
                        />
                    </Tippy>
                </label>
                <button onClick={() => setShowEmoji(!showEmoji)}>
                    <FontAwesomeIcon
                        icon={faFaceSmile}
                        className="text-2xl phone:text-xl px-4 py-4 shadow-lg cursor-pointer duration-300 transition-all rounded-full bg-gray-200 hover:bg-slate-300"
                    />
                </button>
                {showEmoji && (
                    <EmojiPicker
                        autoFocusSearch={false}
                        lazyLoadEmojis={true}
                        onEmojiClick={(emojiData: EmojiClickData, event: globalThis.MouseEvent) => {
                            setPostContent((prev) => prev + emojiData.emoji);
                            // setSelectedEmoji((prev) => prev + emojiData.emoji);
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default FormEditPost;
