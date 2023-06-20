'use client';
import { FunctionComponent } from 'react';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Button from '../Button/Button';
import Cookies from 'js-cookie';
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface AuthProps {}

const Auth: FunctionComponent<AuthProps> = () => {
    const { data: session, status } = useSession();

    // console.log(session?.user);

    if (session && session.user) {
        return (
            <div className="flex items-end flex-col ">
                <div className="flex items-center">
                    <p>{session.user?.name || session.user.name}</p>
                </div>

                <button
                    onClick={() => {
                        Cookies.remove('accessToken');
                        signOut();
                    }}
                    className="btn-light"
                >
                    Đăng xuất
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
