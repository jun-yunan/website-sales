'use client';

import { FunctionComponent, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import { TextField } from '@mui/material';
import SelectAutoWidth from '../SelectAutoWidth';
import CountrySelect from '../CountrySelect';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchUpdateInfoProfile } from '@/redux/features/profileSlice';
import { useGetUserByIdQuery, useUpdateProfileMutation } from '@/redux/services/userApi';
import { usePathname } from 'next/navigation';
// import {User}

interface FormEditInfoProps {}

export type FormInfoProfile = {
    name: string;
    birthDay: string;
    address: string;
    numberPhone: string;
    gender: string;
};

const FormEditInfo: FunctionComponent<FormEditInfoProps> = () => {
    const dispatch = useAppDispatch();
    const updateInfoProfile = useAppSelector((state) => state.profile.updateInfoProfile.data);
    const patchName = usePathname();

    const { data: session, status } = useSession();

    const { data, isError, isFetching } = useGetUserByIdQuery({ _id: session?.user._id as string });

    const [updateProfile, resultUpdateProfile] = useUpdateProfileMutation();
    const [currentDate, setCurrentDate] = useState('');

    console.log('updateInfoProfile: ', updateInfoProfile);

    useEffect(() => {
        const dateObj = new Date();
        const year = dateObj.getFullYear();
        const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
        const day = dateObj.getDate().toString().padStart(2, '0');
        const today = `${year}-${month}-${day}`;
        setCurrentDate(today);
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInfoProfile>();

    const onSubmit: SubmitHandler<FormInfoProfile> = (data) => {
        updateProfile({ _id: session?.user._id as string, data });

        // console.log(data);
        // dispatch(fetchUpdateInfoProfile(data));
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="min-h-[300px] flex flex-col justify-between mt-4 text-base font-semibold"
        >
            <TextField
                required
                {...register('name')}
                name="name"
                id="standard-required"
                label="Full Name"
                defaultValue={data?.user?.name}
                variant="standard"
                sx={{ width: '100%' }}
            />

            <TextField
                {...register('birthDay')}
                name="birthDay"
                required
                id="standard-required"
                label="BirthDay"
                type="date"
                defaultValue={data?.user?.birthDay || currentDate}
                onChange={(e) => {
                    setCurrentDate(e.target.value);
                }}
                variant="standard"
                sx={{ width: '100%' }}
            />
            <TextField
                required
                {...register('address')}
                name="address"
                id="standard-required"
                label="Address"
                defaultValue={data?.user?.address}
                variant="standard"
                sx={{ width: '100%' }}
            />
            <SelectAutoWidth register={register} value={data?.user?.gender} />
            <div className="flex items-center">
                <CountrySelect />
                <TextField
                    required
                    {...register('numberPhone')}
                    name="numberPhone"
                    id="standard-required"
                    label="Number Phone"
                    defaultValue={data?.user?.numberPhone}
                    variant="standard"
                    sx={{ marginLeft: 5, flex: 1 }}
                />
            </div>
            <input type="submit" hidden id="submitForm" />
        </form>
    );
};

export default FormEditInfo;
