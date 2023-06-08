'use client';

import { FunctionComponent } from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import React from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import Auth from './Auth';
import DropdownTippy from './DropdownTippy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
    const router = useRouter();

    const handleNavigation = () => {
        router.push('/');
    };
    return (
        <div className="flex items-center justify-between h-[60px] w-[70%] text-white  phone:bg-cyan-200 bg-[#161617] overflow-hidden">
            <div className="cursor-pointer" onClick={handleNavigation}>
                <ShoppingBagIcon style={{ fontSize: '40px' }} />
            </div>
            <Link href={'/store'} className=" phone:hidden text-sm font-medium">
                <DropdownTippy>Cửa hàng</DropdownTippy>
            </Link>
            <div className=" phone:hidden text-sm font-medium">
                <DropdownTippy>Mac</DropdownTippy>
            </div>
            <div className=" phone:hidden text-sm font-medium">
                <DropdownTippy>iPad</DropdownTippy>
            </div>
            <div className=" phone:hidden text-sm font-medium">
                <DropdownTippy>iPhone</DropdownTippy>
            </div>
            <div className=" phone:hidden text-sm font-medium">
                <DropdownTippy>Watch</DropdownTippy>
            </div>
            <div className=" phone:hidden text-sm font-medium">
                <DropdownTippy>AirPods</DropdownTippy>
            </div>
            <div className=" phone:hidden text-sm font-medium">
                <DropdownTippy>Tv</DropdownTippy>
            </div>
            <div className=" phone:hidden text-sm font-medium">
                <DropdownTippy>Phụ kiện</DropdownTippy>
            </div>

            <div className=" text-black flex focus-within:w-[200px] w-[100px] items-center bg-white overflow-hidden rounded-xl transition-all duration-500 ease-in-out">
                <input
                    type="search"
                    className="text-black py-2 w-[80%]  focus:w-full outline-none px-2 text-sm rounded-xl"
                    placeholder="Search..."
                />
                <SearchIcon style={{ color: '#000' }} />
            </div>

            <div className="flex items-center">
                <div className="text-lg mr-2">
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <Tippy
                    interactive
                    render={(attrs) => (
                        <div
                            className="bg-[#161617] h-[350px] w-screen translate-x-[-6px]"
                            tabIndex={-1}
                            {...attrs}
                        >
                            <Auth />
                        </div>
                    )}
                >
                    <button>
                        {/* fdsfsfd */}
                        <AccountCircleIcon />
                    </button>
                </Tippy>
            </div>
        </div>
    );
};

export default Header;
