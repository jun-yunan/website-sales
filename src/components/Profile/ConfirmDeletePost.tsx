import { profileSlice } from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useDeletePostMutation } from '@/redux/services/postsApi';
import { isEntityError } from '@/utils/helpers';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSession } from 'next-auth/react';
import { FunctionComponent, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';

interface ConfirmDeletePostProps {}

const ConfirmDeletePost: FunctionComponent<ConfirmDeletePostProps> = () => {
    const postId = useAppSelector((state) => state.profile.postId);
    const dispatch = useAppDispatch();
    const { data: session, status } = useSession();
    const [deletePost, resultDeletePost] = useDeletePostMutation();

    console.log(resultDeletePost);

    const handleClose = () => {
        dispatch(profileSlice.actions.handleHideModel());
    };

    const handleDelete = async () => {
        try {
            if (session?.user) {
                await deletePost({
                    userId: session.user._id,
                    accessToken: session.user.accessToken,
                    postId,
                }).unwrap();
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (resultDeletePost.isSuccess && resultDeletePost.data.status) {
            dispatch(profileSlice.actions.handleHideModel());
            toast.success(resultDeletePost.data.message);
        }

        if (isEntityError(resultDeletePost.error)) {
            toast.error(resultDeletePost.error.data.error as string);
        }
    }, [dispatch, resultDeletePost]);

    return (
        <div className="w-full h-full bg-slate-300 bg-opacity-40 z-30 text-color text-3xl  fixed flex items-center justify-center">
            <ToastContainer />
            <div className="bg-white mb-[250px] w-[50%] min-h-[30%] flex flex-col items-center rounded-xl shadow-xl p-6">
                <div className="relative flex items-center w-full">
                    <p className="self-center mx-auto font-semibold">Xoá bài viết</p>
                    <FontAwesomeIcon
                        onClick={handleClose}
                        icon={faXmark}
                        className="absolute right-0 px-3 py-2 cursor-pointer transition-all duration-300 ease-in-out rounded-[50%] hover:bg-slate-300"
                    />
                </div>
                <div className="border-2 border-y-slate-200 my-4 w-full"></div>
                <p className="text-2xl">
                    Xóa bài viết sẽ không thể khôi phục. Bạn có chắc chắn muốn xoá bài viết này?
                </p>
                <div className="flex items-center self-end mt-5">
                    <button
                        onClick={handleClose}
                        className="mr-4 py-2 px-6 font-semibold transition-all duration-300 ease-in-out  hover:bg-[#161617] hover:text-white text-lg border-2 border-[#161617] rounded-xl shadow-xl"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleDelete}
                        className="py-2 px-6 font-semibold transition-all duration-300 ease-in-out hover:bg-red-700 hover:text-white text-lg border-2 border-red-700 text-red-700 rounded-xl shadow-xl"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDeletePost;
