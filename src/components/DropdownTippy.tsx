import React, { FunctionComponent } from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

interface DropdownTippyProps {
    children: React.ReactNode;
}

const DropdownTippy: FunctionComponent<DropdownTippyProps> = ({ children }) => {
    return (
        <Tippy
            // duration={[300, 500]}
            interactive
            // interactiveBorder={30}
            render={(attrs) => (
                <div
                    className="bg-[#161617] h-[350px] w-screen translate-x-[-6px]"
                    tabIndex={-1}
                    {...attrs}
                >
                    {children}
                </div>
            )}
        >
            <button className="p-2">{children}</button>
        </Tippy>
    );
};

export default DropdownTippy;
