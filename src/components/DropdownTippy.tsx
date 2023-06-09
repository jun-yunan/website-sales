import React, { FunctionComponent } from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import Link from 'next/link';
import NavbarItemStore from './NavbarItem/NavbarItemStore';
import NavbarItemMac from './NavbarItem/NavbarItemMac';
import NavbarItemIpad from './NavbarItem/NavbarItemIpad';
import NavbarItemIphone from './NavbarItem/NavbarItemIphone';
import NavbarItemWatch from './NavbarItem/NavbarItemWatch';
import NavbarItemTv from './NavbarItem/NavbarItemTv';
import NavbarItemAirPods from './NavbarItem/NavbarItemAirPods';
import NavbarItemComponent from './NavbarItem/NavbarItemComponent';
import Auth from './Auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBagShopping,
    faBookmark,
    faBox,
    faUser,
    faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface DropdownTippyProps {
    children: React.ReactNode;
    type?: string;
}

const DropdownTippy: FunctionComponent<DropdownTippyProps> = ({ children, type }) => {
    return (
        <Tippy
            // duration={[300, 500]}
            interactive
            // interactiveBorder={30}
            render={(attrs) => (
                <div
                    className="bg-[#161617] min-h-[300px] w-screen translate-x-[-6px] flex justify-center translate-y-[-2px]"
                    tabIndex={-1}
                    {...attrs}
                >
                    {type === 'store' && <NavbarItemStore />}
                    {type === 'mac' && <NavbarItemMac />}
                    {type === 'ipad' && <NavbarItemIpad />}
                    {type === 'iphone' && <NavbarItemIphone />}
                    {type === 'watch' && <NavbarItemWatch />}
                    {type === 'tv' && <NavbarItemTv />}
                    {type === 'airpods' && <NavbarItemAirPods />}
                    {type === 'component' && <NavbarItemComponent />}
                    {type === 'auth' && (
                        <div className="w-[60%] h-full flex flex-col pb-[30px]">
                            <div className="flex flex-col">
                                <h2 className="text-2xl font-semibold text-white">
                                    Túi của bạn trống.
                                </h2>
                                <p>
                                    <Link href={'/signIn'} className="text-sky-500">
                                        Đăng nhập
                                    </Link>{' '}
                                    để xem sản phẩm trong giỏ hàng của bạn.
                                </p>
                            </div>
                            <div className="mt-8">
                                <p className="mb-4">Hồ sơ của tôi</p>
                                <Link href={'/cart'} className="flex my-2 items-center">
                                    <FontAwesomeIcon className="mr-2" icon={faBox} />
                                    <p>Đơn hàng</p>
                                </Link>
                                <Link href={'#'} className="flex my-2 items-center">
                                    <FontAwesomeIcon className="mr-2" icon={faBookmark} />
                                    <p>Mục đã lưu</p>
                                </Link>
                                <Auth />
                            </div>
                        </div>
                    )}
                </div>
            )}
        >
            <button className="p-2">{children}</button>
        </Tippy>
    );
};

export default DropdownTippy;
