'use client';

import { faBookmark, faBox, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { signOut, useSession } from 'next-auth/react';
import Cookies from 'js-cookie';
import Image from 'next/image';

interface NavbarItemAuthProps {}

const NavbarItemAuth: FunctionComponent<NavbarItemAuthProps> = () => {
    const { data: session, status } = useSession();

    if (session?.user) {
        return (
            <div className="w-full h-full flex justify-between text-color flex-col relative">
                <div className="w-full h-full mb-2 flex flex-col">
                    <div className="w-[90%] my-2 flex mx-auto self-start bg-white rounded-xl">
                        <div className="w-[65px] h-[65px] flex flex-col items-center justify-center rounded-full overflow-hidden mr-2">
                            <Image
                                src={session.user.image}
                                alt={session.user.name}
                                width={65}
                                height={65}
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-color text-base font-semibold">
                                {session.user.name}
                            </p>
                            <p className="text-color text-base font-semibold">------</p>
                        </div>
                    </div>
                    <Link
                        href="/profile"
                        className="w-[90%] self-center items-center justify-center flex bg-white rounded-2xl text-lg font-semibold text-[#161617] border-2 border-[#161617] hover:bg-[#161617] hover:text-[white] transition-all duration-500 ease-in-out"
                    >
                        <p>Xem hồ sơ của tôi</p>
                    </Link>
                </div>
                <div className="mb-2 border-b border-slate-200"></div>
                <div className="w-[90%] self-center">
                    <Link href={'/cart'} className="flex my-2 items-center">
                        <FontAwesomeIcon className="mr-2" icon={faBox} />
                        <p>Đơn hàng</p>
                    </Link>
                    <Link href={'#'} className="flex my-2 items-center">
                        <FontAwesomeIcon className="mr-2" icon={faBookmark} />
                        <p>Mục đã lưu</p>
                    </Link>
                </div>

                <div className="my-2 border-b border-slate-200"></div>

                <button
                    onClick={() => {
                        Cookies.remove('accessToken');
                        signOut();
                    }}
                    className="w-[90%] mb-2 items-center justify-center self-center flex bg-white rounded-2xl text-lg font-semibold text-[#161617] border-2 border-[#161617] hover:bg-[#161617] hover:text-[white] transition-all duration-500 ease-in-out"
                >
                    Đăng xuất
                </button>
            </div>
        );
    }
    return (
        <div className="w-[60%] h-full flex pb-[30px]">
            <div className="w-full h-full mt-8 flex flex-col items-end">
                <div className="flex flex-col items-end">
                    <h2 className="text-2xl font-semibold text-white">Túi của bạn trống.</h2>
                    <p>
                        <Link href={'/signIn'} className="text-sky-500">
                            Đăng nhập
                        </Link>{' '}
                        để xem sản phẩm trong giỏ hàng của bạn.
                    </p>
                </div>
                <div className="flex flex-col items-end mt-12">
                    <Link href={'/signIn'} className="flex my-1 items-center">
                        <FontAwesomeIcon className="mr-2" icon={faUser} />
                        <p>Đăng nhập</p>
                    </Link>
                    <Link href={'/signUp'} className="flex my-1 items-center">
                        <FontAwesomeIcon className="mr-2" icon={faUserPlus} />
                        <p>Đăng ký</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavbarItemAuth;
