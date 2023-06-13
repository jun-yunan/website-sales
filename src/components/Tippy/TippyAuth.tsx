import { FunctionComponent } from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

interface TippyAuthProps {}

const TippyAuth: FunctionComponent<TippyAuthProps> = () => {
    return (
        <Tippy
            // duration={[300, 500]}
            interactive
            // interactiveBorder={30}
            render={(attrs) => (
                <div
                    className="bg-[#161617] min-h-[300px] w-screen translate-x-[-6px] flex justify-center translate-y-[-9px]"
                    tabIndex={-1}
                    {...attrs}
                ></div>
            )}
        >
            <button className="p-2"></button>
        </Tippy>
    );
};

export default TippyAuth;
