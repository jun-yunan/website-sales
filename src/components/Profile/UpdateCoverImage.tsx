/* eslint-disable @next/next/no-img-element */
import { profileSlice } from '@/redux/features/profileSlice';
import { useAppDispatch } from '@/redux/hooks';
import { useGetUserByIdQuery, useUpdateCoverImageMutation } from '@/redux/services/userApi';
import { faCamera, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSession } from 'next-auth/react';
import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

interface UpdateCoverImageProps {}

interface FormCoverImage {
    coverImage: string;
}

const UpdateCoverImage: FunctionComponent<UpdateCoverImageProps> = () => {
    const [coverImage, setCoverImage] = useState('');
    const [fileImage, setFileImage] = useState<File | null>(null);
    const dispatch = useAppDispatch();
    const handleCloseUpdateCoverImage = () => {
        dispatch(profileSlice.actions.hideUpdateCoverImage());
    };

    const [updateCoverImage, resultUpdateCoverImage] = useUpdateCoverImageMutation();
    const { data: session } = useSession();

    const { register, handleSubmit } = useForm<FormCoverImage>();
    const { data: user } = useGetUserByIdQuery(
        { _id: session?.user._id as string },
        { skip: !session?.user._id }
    );

    const submitFormCoverImage: SubmitHandler<FormCoverImage> = async (data) => {
        if (fileImage) {
            const formCoverImage = new FormData();
            formCoverImage.append('coverImage', fileImage);

            try {
                await toast.promise(
                    updateCoverImage({
                        accessToken: session?.user.accessToken as string,
                        userId: session?.user._id as string,
                        data: formCoverImage,
                    }).unwrap(),
                    {
                        pending: 'Please wait...',
                        success: 'Update cover image successfully!!! 👌',
                        error: 'Update cover image fail!!! 🤯',
                    }
                );
            } catch (error) {
                console.error(error);
            }
        }
    };

    const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            setFileImage(file);
            const reader = new FileReader();
            reader.onload = () => {
                setCoverImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        if (resultUpdateCoverImage.isSuccess) {
            [];
        }
    }, [resultUpdateCoverImage]);

    return (
        <div className="fixed w-full h-full z-30 top-[60px] translate-y-[-8%] left-0 bg-neutral-400 bg-opacity-40 flex flex-col items-center justify-center">
            <div className="w-[50%] p-6 min-h-[400px] flex flex-col rounded-xl shadow-xl bg-white text-color">
                <div className="w-full flex items-center justify-between">
                    <p className="text-2xl font-semibold">Cover Photo</p>
                    <FontAwesomeIcon
                        icon={faXmark}
                        className="text-2xl px-4 py-3 cursor-pointer hover:bg-neutral-200 rounded-full hover-smooth"
                        onClick={handleCloseUpdateCoverImage}
                    />
                </div>
                <div className="w-full border border-neutral-300 mb-8"></div>
                <div className="w-full h-[300px] overflow-hidden rounded-lg">
                    <img
                        // src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg"
                        src={coverImage || user?.user?.coverImage}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-full border border-neutral-300 mb-5 mt-8"></div>

                <form hidden onSubmit={handleSubmit(submitFormCoverImage)}>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleChangeImage}
                        hidden
                        id="cover-image"
                    />

                    {/* <input type="text" hidden {...register('coverImage')} /> */}
                    <input type="submit" id="submitCoverImage" hidden />
                </form>
                <div className="flex items-center self-center w-[60%] justify-between">
                    <label
                        htmlFor="cover-image"
                        className="text-xl font-semibold flex items-center py-1 px-6 border-2 border-[#161617] rounded-xl hover:bg-[#161617] cursor-pointer hover:text-white hover-smooth"
                    >
                        <FontAwesomeIcon icon={faCamera} />
                        <p className="cursor-pointer ml-2">Add photo</p>
                    </label>
                    <label
                        htmlFor="submitCoverImage"
                        className="text-xl font-semibold py-1 px-6 border-2 border-[#161617] rounded-xl hover:bg-[#161617] cursor-pointer hover:text-white hover-smooth"
                    >
                        Save
                    </label>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoverImage;
