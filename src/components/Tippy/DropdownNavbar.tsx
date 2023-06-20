import { FunctionComponent } from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faClock,
    faHeadphones,
    faLaptop,
    faMobileScreenButton,
    faScrewdriverWrench,
    faStore,
    faT,
    faTabletScreenButton,
    faTv,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface DropdownNavbarProps {}

const DropdownNavbar: FunctionComponent<DropdownNavbarProps> = () => {
    return (
        <Tippy
            // duration={[300, 500]}
            interactive
            // interactiveBorder={30}
            render={(attrs) => (
                <div
                    className="bg-white text-color overflow-hidden flex flex-col items-center min-w-[250px]  min-h-[300px] rounded-xl shadow-2xl"
                    tabIndex={-1}
                    {...attrs}
                >
                    <Link
                        className="flex items-center transition-all duration-300 ease-in-out text-base font-semibold w-full px-4 py-2 hover:bg-slate-100"
                        href={'/store'}
                    >
                        <FontAwesomeIcon icon={faStore} />
                        <p className="ml-2">Cửa hàng</p>
                    </Link>
                    <Link
                        className="flex items-center transition-all duration-300 ease-in-out text-base font-semibold w-full px-4 py-2 hover:bg-slate-100"
                        href={'#'}
                    >
                        <FontAwesomeIcon icon={faLaptop} />
                        <p className="ml-2">Mac</p>
                    </Link>
                    <Link
                        className="flex items-center transition-all duration-300 ease-in-out text-base font-semibold w-full px-4 py-2 hover:bg-slate-100"
                        href={'#'}
                    >
                        <FontAwesomeIcon icon={faTabletScreenButton} />
                        <p className="ml-2">iPad</p>
                    </Link>
                    <Link
                        className="flex items-center transition-all duration-300 ease-in-out text-base font-semibold w-full px-4 py-2 hover:bg-slate-100"
                        href={'#'}
                    >
                        <FontAwesomeIcon icon={faMobileScreenButton} />
                        <p className="ml-2">iPhone</p>
                    </Link>
                    <Link
                        className="flex items-center transition-all duration-300 ease-in-out text-base font-semibold w-full px-4 py-2 hover:bg-slate-100"
                        href={'#'}
                    >
                        <FontAwesomeIcon icon={faClock} />
                        <p className="ml-2">Watch</p>
                    </Link>
                    <Link
                        className="flex items-center transition-all duration-300 ease-in-out text-base font-semibold w-full px-4 py-2 hover:bg-slate-100"
                        href={'#'}
                    >
                        <FontAwesomeIcon icon={faHeadphones} />
                        <p className="ml-2">AirPods</p>
                    </Link>
                    <Link
                        className="flex items-center transition-all duration-300 ease-in-out text-base font-semibold w-full px-4 py-2 hover:bg-slate-100"
                        href={'#'}
                    >
                        <FontAwesomeIcon icon={faTv} />
                        <p className="ml-2">Tv</p>
                    </Link>
                    <Link
                        className="flex items-center transition-all duration-300 ease-in-out text-base font-semibold w-full px-4 py-2 hover:bg-slate-100"
                        href={'#'}
                    >
                        <FontAwesomeIcon icon={faScrewdriverWrench} />
                        <p className="ml-2">Phụ Kiện</p>
                    </Link>
                    {/* <div className="flex flex-col justify-between h-[90%] w-[90%] bg-red-200"></div> */}
                </div>
            )}
        >
            <button className="">
                <FontAwesomeIcon
                    icon={faBars}
                    className="text-2xl hover:bg-blue-400 px-4 py-3 rounded-full transition-colors duration-500 ease-linear"
                />
            </button>
        </Tippy>
    );
};

export default DropdownNavbar;
