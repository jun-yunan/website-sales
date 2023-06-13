'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { FunctionComponent } from 'react';

interface ButtonLoginProps {}

const ButtonLogin: FunctionComponent<ButtonLoginProps> = () => {
    return (
        <div>
            <button
                className="m-5 bg-white p-2 rounded-lg shadow-lg text-xl font-bold text-slate-700 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75"
                onClick={() => signIn('google')}
            >
                <Image
                    width="50"
                    height="50"
                    src="https://img.icons8.com/color/96/google-logo.png"
                    alt="google-logo"
                />
                <p className="ml-6">Sign in with Google</p>
            </button>
        </div>
    );
};

export default ButtonLogin;
