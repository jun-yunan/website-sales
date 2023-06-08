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
                    className="bg-[#161617] min-h-[300px] w-screen translate-x-[-6px] flex justify-center"
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
                </div>
            )}
        >
            <button className="p-2">{children}</button>
        </Tippy>
    );
};

export default DropdownTippy;
