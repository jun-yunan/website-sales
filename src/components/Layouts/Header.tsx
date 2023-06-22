/* eslint-disable @next/next/no-img-element */
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
import { useGetUserByIdQuery } from '@/redux/services/userApi';
import DropdownNavbar from '../Tippy/DropdownNavbar';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
    const { data: session, status } = useSession();

    const { data, isError, isFetching, isLoading } = useGetUserByIdQuery(
        { _id: session?.user._id as string },
        { skip: !session?.user._id }
    );

    return (
        <div className="flex items-center justify-between h-[60px] w-[70%] tablet:w-[100%] text-white phone:w-[100%] bg-[#161617] overflow-hidden">
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
            <div className="hidden phone:block">
                <DropdownNavbar></DropdownNavbar>
            </div>
            <div className="flex items-center">
                <DropdownTippy type="auth">
                    {status === 'loading' ? (
                        <SkeletonAvatar />
                    ) : (
                        <>
                            {data?.user?.avatar || session?.user.image ? (
                                <div className="flex items-center justify-center w-[35px] h-[35px] rounded-[50%] overflow-hidden border-2 border-white hover:opacity-75 transition-all duration-500 ease-in-out">
                                    <img
                                        src={(data?.user?.avatar as string) || session?.user.image}
                                        alt=""
                                        className="object-cover h-full w-full"
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
