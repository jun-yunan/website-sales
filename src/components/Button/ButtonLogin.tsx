'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { FunctionComponent } from 'react';

interface ButtonLoginProps {}

const ButtonLogin: FunctionComponent<ButtonLoginProps> = () => {
    return (
        <div className="phone:w-full">
            <button
                className="my-5 phone:w-full border border-[#161617] rounded-xl shadow-lg text-lg phone:text-base font-semibold py-2 px-6 text-color flex items-center justify-center hover:bg-neutral-100  transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75"
                onClick={() => signIn('google')}
            >
                <Image
                    width="35"
                    height="35"
                    src="https://img.icons8.com/color/96/google-logo.png"
                    alt="google-logo"
                />
                <p className="ml-6">Sign in with Google</p>
            </button>
        </div>
    );
};

export default ButtonLogin;
