'use client';

import { FunctionComponent } from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import React from 'react';
import DropdownTippy from '../Tippy/DropdownTippy';
import Link from 'next/link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import SkeletonAvatar from '../Skeleton/SkeletonAvatar';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
    const { data: session, status } = useSession();

    return (
        <div className="flex items-center justify-between h-[60px] w-[60%] text-white  phone:bg-cyan-200 bg-[#161617] overflow-hidden">
            <Link href={'/'} className="cursor-pointer">
                <ShoppingBagIcon style={{ fontSize: '40px' }} />
            </Link>
            <Link
                scroll={true}
                href={{ pathname: '/store', query: { pageNumber: '1', limit: '8' } }}
                className=" phone:hidden text-sm font-medium"
            >
                <DropdownTippy type="store">Cửa hàng</DropdownTippy>
            </Link>
            <Link href={'/mac'} className=" phone:hidden text-sm font-medium">
                <DropdownTippy type="mac">Mac</DropdownTippy>
            </Link>
            <div className=" phone:hidden text-sm font-medium">
                <DropdownTippy type="ipad">iPad</DropdownTippy>
            </div>
            <div className=" phone:hidden text-sm font-medium">
                <DropdownTippy type="iphone">iPhone</DropdownTippy>
            </div>
            <div className=" phone:hidden text-sm font-medium">
                <DropdownTippy type="watch">Watch</DropdownTippy>
            </div>
            <div className=" phone:hidden text-sm font-medium">
                <DropdownTippy type="airpods">AirPods</DropdownTippy>
            </div>
            <div className=" phone:hidden text-sm font-medium">
                <DropdownTippy type="tv">Tv</DropdownTippy>
            </div>
            <div className=" phone:hidden text-sm font-medium">
                <DropdownTippy type="component">Phụ kiện</DropdownTippy>
            </div>

            <div className=" text-black flex focus-within:w-[200px] w-[100px] items-center bg-white overflow-hidden rounded-xl transition-all duration-500 ease-in-out">
                <input
                    type="search"
                    className="text-black py-2 w-[80%]  focus:w-full outline-none px-2 text-sm rounded-xl"
                    placeholder="Search..."
                />
                <Link href={'#'}>
                    <SearchIcon />
                </Link>
            </div>

            <div className="flex items-center">
                <DropdownTippy type="auth">
                    {status === 'loading' ? (
                        <SkeletonAvatar />
                    ) : (
                        <>
                            {session?.user.image ? (
                                <div className="flex flex-col items-center justify-center w-[40px] h-[40xp] rounded-full overflow-hidden border-2 border-white hover:opacity-75 transition-all duration-500 ease-in-out">
                                    <Image
                                        width={40}
                                        height={40}
                                        className="object-cover"
                                        src={session.user.image}
                                        alt={session?.user.name}
                                    />
                                </div>
                            ) : (
                                <AccountCircleIcon />
                            )}
                        </>
                    )}
                </DropdownTippy>
            </div>
        </div>
    );
};

export default Header;
