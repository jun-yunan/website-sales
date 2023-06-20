/* eslint-disable @next/next/no-img-element */
import { useCreatePostMutation } from '@/redux/services/postsApi';
import { faFaceSmile, faImage, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { useSession } from 'next-auth/react';
import { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface FormCreatePostProps {}

export interface FormCreatePost {
    content: string;
    image: string;
}

const FormCreatePost: FunctionComponent<FormCreatePostProps> = () => {
    const [postContent, setPostContent] = useState('');
    const [showEmoji, setShowEmoji] = useState(false);
    const [selectedEmoji, setSelectedEmoji] = useState('');
    const [imagePost, setImagePost] = useState('');
    const [fileImage, setFileImage] = useState<File | null>(null);

    const { register, handleSubmit } = useForm<FormCreatePost>();

    const [createPost, resultCreatePost] = useCreatePostMutation();
    const { data: session, status } = useSession();

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

    const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (session?.user._id) {
            const formData = new FormData();
            fileImage && formData.append('image', fileImage);
            formData.append('data', postContent + selectedEmoji);
            createPost({
                _id: session?.user._id as string,
                accessToken: session?.user.accessToken,
                data: formData,
            });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmitForm} className="my-4 flex flex-col w-full overflow-auto">
                <textarea
                    {...register('content')}
                    value={postContent + selectedEmoji}
                    name="content"
                    onChange={(e) => {
                        setPostContent(e.target.value);
                        setSelectedEmoji('');
                    }}
                    spellCheck={false}
                    className="pb-[25%] overflow-y-hidden text-2xl phone:text-xl placeholder:text-2xl phone:placeholder:text-xl outline-none resize-none overflow-hidden"
                    placeholder="What do you want to talk about?"
                />

                {imagePost && (
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

                <input type="submit" hidden id="submitForm" />
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
                            setSelectedEmoji((prev) => prev + emojiData.emoji);
                        }}
                    />
                )}
            </div>
        </>
    );
};

export default FormCreatePost;
