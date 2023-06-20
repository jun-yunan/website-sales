/* eslint-disable @next/next/no-img-element */
import {
    faComment,
    faEllipsis,
    faPencil,
    faShare,
    faThumbsUp,
    faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { FunctionComponent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { profileSlice } from '@/redux/features/profileSlice';

interface PostItemProps {
    image: string;
    content: string;
    author: { name: string; avatar: string };
    postId: string;
}

const PostItem: FunctionComponent<PostItemProps> = ({ image, content, author, postId }) => {
    const dispatch = useAppDispatch();
    const { data: session, status } = useSession();
    const [showModel, setShowModel] = useState(false);

    const handleDeletePost = (postId: string) => {
        dispatch(profileSlice.actions.handleShowModel());
        if (postId) {
            dispatch(profileSlice.actions.setPostId(postId));
        }
    };

    const handleEditPost = () => {};

    return (
        <div className="my-4 bg-white w-[70%] phone:w-full rounded-2xl shadow-xl flex flex-col relative p-6 min-h-[200px]">
            <Tippy
                // visible
                offset={[10, 0]}
                placement="bottom-end"
                interactive
                render={(attrs) => (
                    <div
                        className="box bg-neutral-600 bg-opacity-80 rounded-xl shadow-xl min-w-[250px] phone:min-w-[150px] phone:text-sm phone:min-h-[100px] phone:font-normal min-h-[150px] text-white text-lg font-medium"
                        tabIndex={-1}
                        {...attrs}
                    >
                        <div className="w-full h-full flex flex-col">
                            <div
                                onClick={() => handleDeletePost(postId)}
                                className="flex cursor-pointer px-4 py-2 w-full items-center hover:bg-white hover:text-color mt-4 phone:mt-2"
                            >
                                <FontAwesomeIcon icon={faTrashCan} className="mr-2" />
                                <p>Xoá bài viết</p>
                            </div>
                            <div
                                onClick={handleEditPost}
                                className="flex cursor-pointer px-4 py-2 w-full items-center hover:bg-white hover:text-color"
                            >
                                <FontAwesomeIcon icon={faPencil} className="mr-2" />
                                <p>Chỉnh sửa bài viết</p>
                            </div>
                        </div>
                    </div>
                )}
            >
                <FontAwesomeIcon
                    icon={faEllipsis}
                    className="absolute text-3xl phone:text-xl top-0 right-0 px-3 py-2 transition-all duration-300 ease-in-out m-2 cursor-pointer hover:bg-slate-300 rounded-[50%]"
                />
            </Tippy>
            <div className="flex items-center ">
                <div className="flex items-center mr-3 justify-center rounded-[50%] overflow-hidden phone:w-[50px] phone:h-[50px] w-[80px] h-[80px]">
                    <Image
                        src={author.avatar}
                        alt=""
                        width={80}
                        height={80}
                        className="object-cover phone:w-[50px] phone:h-[50px]"
                    />
                </div>

                <div className="flex flex-col items-start h-[65px] phone:h-[45px] justify-between">
                    <p className="text-xl font-medium phone:text-base">{author.name}</p>
                    <p className="text-xl font-medium phone:text-base">---</p>
                </div>
            </div>

            <div className="flex flex-col">
                <p className=" my-6 text-lg font-normal">{content}</p>

                {image && (
                    <div>
                        <img
                            src={image}
                            alt=""
                            className="w-[100%] phone:w-full phone:max-h-[250px] rounded-xl max-h-[400px] object-cover"
                        />
                    </div>
                )}
            </div>

            <div className="border border-y-slate-300 mt-8 mb-1"></div>

            <div className=" w-full flex justify-around">
                <FontAwesomeIcon
                    className="phone:text-lg text-xl p-3 rounded-[50%] hover:bg-slate-200 transition-all duration-300 ease-in-out cursor-pointer"
                    icon={faThumbsUp}
                />
                <FontAwesomeIcon
                    className="phone:text-lg text-xl p-3 rounded-[50%] hover:bg-slate-200 transition-all duration-300 ease-in-out cursor-pointer"
                    icon={faComment}
                />
                <FontAwesomeIcon
                    className="phone:text-lg text-xl p-3 rounded-[50%] hover:bg-slate-200 transition-all duration-300 ease-in-out cursor-pointer"
                    icon={faShare}
                />
            </div>
        </div>
    );
};

export default PostItem;
