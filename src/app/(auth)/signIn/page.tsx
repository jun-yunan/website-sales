'use client';

import { signIn } from 'next-auth/react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from '@/redux/store';
import ButtonLogin from '@/components/ButtonLogin';
import { FormEvent, FunctionComponent, useState } from 'react';
import { AppDispatch } from '@/redux/store';

interface SignInProps {}

const SignIn: FunctionComponent<SignInProps> = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    // console.log(email, password);

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
                    // onClick={() => signIn('credentials')}
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
