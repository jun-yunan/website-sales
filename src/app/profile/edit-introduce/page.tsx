'use client';

import MultipleSelect from '@/components/Profile/EditIntroduce/MultipleSelect';
import SelectVariants from '@/components/Profile/EditIntroduce/SelectVariants';
import { useCreateIntroduceMutation, useGetIntroduceByIdQuery } from '@/redux/services/userApi';
import { faMusic, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TextField } from '@mui/material';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { FunctionComponent, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

interface EditIntroducePageProps {}

export interface FormEditIntroduce {
    studying: string;
    living: string;
    work: string;
    social: string;
    interests: string;
}

const EditIntroducePage: FunctionComponent<EditIntroducePageProps> = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormEditIntroduce>();

    const { data: session, status } = useSession();
    const [createIntroduce, resultCreateIntroduce] = useCreateIntroduceMutation();
    const {
        data: introduce,
        isError,
        isLoading,
        isSuccess,
    } = useGetIntroduceByIdQuery(
        {
            accessToken: session?.user.accessToken as string,
            userId: session?.user._id as string,
        },
        { skip: !session?.user._id }
    );

    console.log(introduce);

    const onSubmit: SubmitHandler<FormEditIntroduce> = async (data) => {
        try {
            if (data && session?.user) {
                await createIntroduce({
                    data,
                    accessToken: session.user.accessToken as string,
                    userId: session.user._id as string,
                }).unwrap();
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (resultCreateIntroduce.isSuccess) {
            toast.success(resultCreateIntroduce.data.message);
        }
    }, [resultCreateIntroduce]);

    return (
        <div className="bg-neutral-400 w-full h-full flex flex-col  items-center fixed top-[60px] left-0 bg-opacity-40">
            <div className="w-[45%] rounded-xl shadow-lg p-6 min-h-[500px] bg-white text-color mt-[5%]">
                <div className="w-full flex justify-between items-center">
                    <p className="text-3xl">Edit introduce</p>
                    <Link href={'/profile'}>
                        <FontAwesomeIcon
                            icon={faXmark}
                            className="text-3xl px-4 rounded-full  py-3 hover:bg-slate-300 hover-smooth cursor-pointer"
                        />
                    </Link>
                </div>
                <div className="border border-neutral-300 mt-2 w-full mb-5"></div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full h-full">
                    <div className="mb-4">
                        <TextField
                            id="standard-basic"
                            label="Đang học tại?"
                            variant="standard"
                            defaultValue={introduce?.introduce.studying}
                            {...register('studying')}
                            sx={{ width: '100%' }}
                        />
                    </div>
                    <div className="mb-4">
                        <TextField
                            id="standard-basic"
                            label="Sống tại?"
                            variant="standard"
                            defaultValue={introduce?.introduce.living}
                            {...register('living')}
                            sx={{ width: '100%' }}
                        />
                    </div>
                    <div className="mb-4">
                        <TextField
                            id="standard-basic"
                            label="Làm việc tại?"
                            variant="standard"
                            defaultValue={introduce?.introduce.work}
                            {...register('work')}
                            sx={{ width: '100%' }}
                        />
                    </div>
                    <div className="mb-4">
                        <TextField
                            id="standard-basic"
                            label="Liên kết mạng xã hội"
                            defaultValue={introduce?.introduce.social}
                            variant="standard"
                            {...register('social')}
                            sx={{ width: '100%' }}
                        />
                    </div>
                    <div className="mb-4">
                        <SelectVariants
                            register={register}
                            interests={introduce?.introduce.interests as string}
                        />
                    </div>
                    <button
                        type="submit"
                        className="self-end py-2 w-[50%] mt-6 rounded-lg text-lg hover-smooth font-semibold hover:bg-[#161617] hover:text-white border-2 border-[#161617]"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditIntroducePage;
