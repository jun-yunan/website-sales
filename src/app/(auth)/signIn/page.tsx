'use client';

import Cookies from 'js-cookie';
import { signIn } from 'next-auth/react';
import ButtonLogin from '@/components/Button/ButtonLogin';
import { FunctionComponent, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { authSlice, setInfoUser, updateRefreshToken } from '@/redux/features/authSlice';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { TextField } from '@mui/material';
import axios from 'axios';
import { useGetUserMutation } from '@/redux/services/authApi';
import { useGetUserByIdQuery } from '@/redux/services/userApi';

interface SignInProps {}

interface SignInForm {
    email: string;
    password: string;
}

const SignIn: FunctionComponent<SignInProps> = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const dispatch = useAppDispatch();

    const { register, handleSubmit } = useForm<SignInForm>();
    const [getUser, { data }] = useGetUserMutation();

    // const { data: user } = useGetUserByIdQuery(
    //     { _id: session?.user._id as string },
    //     { skip: !session?.user._id }
    // );

    const submitFormSignIn: SubmitHandler<SignInForm> = async (data) => {
        try {
            const user = await signIn('credentials', {
                redirect: false,
                email: data.email,
                password: data.password,
            });
        } catch (error) {
            console.error(error);
        }

        // try {
        //     const user = await axios('http://localhost:3001/api/auth/login', {
        //         method: 'POST',
        //         data,
        //     });
        // } catch (error) {
        //     console.error(error);
        // }
    };

    useEffect(() => {
        if (session?.user) {
            dispatch(setInfoUser(session.user));
            dispatch(updateRefreshToken(session.user.refreshToken));
            Cookies.set('accessToken', session?.user.accessToken || '');
            router.push('/');
        }
    }, [dispatch, router, session]);

    return (
        <div className="w-full h-full flex flex-col">
            <form
                className="flex w-full text-color flex-col mt-4"
                onSubmit={handleSubmit(submitFormSignIn)}
            >
                <div className="w-[40%] phone:w-full my-8">
                    <TextField
                        // name="email"
                        className="bg-white text-xl"
                        type="email"
                        variant="outlined"
                        label="Email"
                        id="outlined-basic"
                        {...register('email', { required: true })}
                        sx={{ width: '100%' }}
                    />
                </div>
                <div className="w-[40%] phone:w-full">
                    <TextField
                        className="bg-white rounded-md"
                        type="password"
                        variant="outlined"
                        label="Password"
                        id="outlined-basic"
                        {...register('password', { required: true })}
                        sx={{ width: '100%' }}
                    />
                </div>
                <Link
                    className="text-base phone:w-full phone:text-white font-semibold w-[40%] hover:underline text-[#0a66c2] mt-3"
                    href={'/'}
                >
                    Forgot password?
                </Link>
                <button
                    type="submit"
                    className="bg-[#0a66c2] phone:w-full  hover:bg-opacity-90 transition-all duration-300 ease-in-out text-white w-[40%] p-2 rounded-lg shadow-md mt-4 text-xl font-bold mb-4"
                >
                    Sign in
                </button>
                <div className="border border-neutral-400 phone:w-full w-[40%] flex justify-center my-4 relative">
                    <p className="absolute translate-y-[-12px] px-2 bg-white">or</p>
                </div>
            </form>
            <ButtonLogin />
        </div>
    );
};

export default SignIn;
