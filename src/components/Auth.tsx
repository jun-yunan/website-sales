'use client';
import { FunctionComponent } from 'react';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Button from './Button';
import Cookies from 'js-cookie';
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface AuthProps {}

const Auth: FunctionComponent<AuthProps> = () => {
    const { data: session, status } = useSession();

    // console.log(session?.user);

    if (session && session.user) {
        Cookies.set('accessToken', session?.user.accessToken || '');
        return (
            <div className="flex items-center">
                <div className="w-[50px] h-[50px] rounded-[50%] flex overflow-hidden items-center justify-center">
                    {session.user.image ? (
                        <Image
                            className="w-[50px] min-h-[50px] object-cover"
                            width={50}
                            height={50}
                            src={session.user.image || ''}
                            alt={session.user?.name || session.user?.fullName || ''}
                        />
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-12 h-12"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                    )}
                </div>
                <p>{session.user?.fullName || session.user.name}</p>

                <button
                    onClick={() => {
                        Cookies.remove('accessToken');
                        signOut();
                    }}
                    className="btn-primary"
                >
                    Log out
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col">
            {status === 'loading' ? (
                <div>Loading...</div>
            ) : (
                <>
                    <Link href={'/signIn'} className="flex my-1 items-center">
                        <FontAwesomeIcon className="mr-2" icon={faUser} />
                        <p>Đăng nhập</p>
                    </Link>
                    <Link href={'/signUp'} className="flex my-1 items-center">
                        <FontAwesomeIcon className="mr-2" icon={faUserPlus} />
                        <p>Đăng ký</p>
                    </Link>
                </>
            )}
        </div>
    );
};

export default Auth;
