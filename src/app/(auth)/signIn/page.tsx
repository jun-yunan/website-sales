'use client';

import Cookies from 'js-cookie';
import { signIn } from 'next-auth/react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from '@/redux/store';
import ButtonLogin from '@/components/Button/ButtonLogin';
import { FormEvent, FunctionComponent, useEffect, useState } from 'react';
import { AppDispatch } from '@/redux/store';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface SignInProps {}

const SignIn: FunctionComponent<SignInProps> = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const dispatch = useDispatch<AppDispatch>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const result = await signIn('credentials', {
                redirect: false,
                email: email,
                password: password,
            });

            if (result?.error) {
                console.log(result.error);
            } else {
                console.log(result);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (session?.user.accessToken) {
            Cookies.set('accessToken', session?.user.accessToken || '');
            router.push('/');
        }
    }, [router, session?.user.accessToken]);

    return (
        <div className="w-full min-h-[500px] bg-slate-400 flex items-center flex-col">
            <form className="flex flex-col mt-4" onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    onChange={handleEmailChange}
                    className="text-slate-800 mb-4 p-3 rounded-lg text-base shadow-md focus:text-rose-600 outline-none font-semibold"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={handlePasswordChange}
                    className="text-slate-800 mb-4 p-3 rounded-lg text-base shadow-md focus:text-rose-600 outline-none font-semibold"
                />
                <button
                    type="submit"
                    className="bg-sky-500 p-2 rounded-lg shadow-lg text-xl font-bold mb-4"
                >
                    Login In
                </button>
            </form>
            <ButtonLogin />
        </div>
    );
};

export default SignIn;
