import Link from 'next/link';
import { FunctionComponent } from 'react';

interface NavbarItemTvProps {}

const NavbarItemTv: FunctionComponent<NavbarItemTvProps> = () => {
    return (
        <div className="w-[60%] h-full flex pb-[30px] justify-between">
            <div className="flex flex-col">
                <h2 className="text-sm font-light my-4">Khám Phá TV</h2>
                <Link href={'#'} className="text-2xl font-medium leading-normal">
                    Khám Phá Tất Cả TV
                </Link>
                <Link href={'#'} className="text-2xl font-medium leading-normal">
                    Apple TV 4K
                </Link>
            </div>
            <div className="flex flex-col">
                <h2 className="text-sm font-light my-4">Mua TV</h2>
                <Link href={'#'}>Mua Apple TV 4K</Link>
                <Link href={'#'}>Phụ Kiện Apple TV</Link>
            </div>
            <div className="flex flex-col">
                <h2 className="text-sm font-light my-4">Tìm Hiểu Thêm Về TV</h2>
                <Link href={'#'}>Hỗ Trợ Apple TV</Link>
                <Link href={'#'}>Ứng Dụng Apple TV</Link>
                <Link href={'#'}>Apple TV+</Link>
                <Link href={'#'}>Apple Music</Link>
                <Link href={'#'}>AirPlay</Link>
            </div>
        </div>
    );
};

export default NavbarItemTv;
