import Link from 'next/link';
import { FunctionComponent } from 'react';

interface NavbarItemWatchProps {}

const NavbarItemWatch: FunctionComponent<NavbarItemWatchProps> = () => {
    return (
        <div className="w-[60%] h-full flex pb-[30px] justify-between">
            <div className="flex flex-col">
                <h2 className="text-sm font-light my-4">Khám Phá Watch</h2>
                <Link href={'#'} className="text-2xl font-medium leading-normal">
                    Khám Phá Tất Cả Apple Watch
                </Link>
                <Link href={'#'} className="text-2xl font-medium leading-normal">
                    Apple Watch Ultra
                </Link>
                <Link href={'#'} className="text-2xl font-medium leading-normal">
                    Apple Watch Series 8
                </Link>
                <Link href={'#'} className="text-2xl font-medium leading-normal">
                    Apple Watch SE
                </Link>
                <Link href={'#'} className="text-2xl font-medium leading-normal">
                    Apple Watch NIKE
                </Link>
            </div>
            <div className="flex flex-col">
                <h2 className="text-sm font-light my-4">Mua Watch</h2>
                <Link href={'#'}>Mua Apple Watch</Link>
                <Link href={'#'}>Dây Đeo Apple Watch</Link>
                <Link href={'#'}>Phụ Kiện Apple Watch</Link>
                <Link href={'#'}>Apple Trade In</Link>
                <Link href={'#'}>Tài chính</Link>
            </div>
            <div className="flex flex-col">
                <h2 className="text-sm font-light my-4">Tìm Hiểu Thêm Về Watch</h2>
                <Link href={'#'}>Hỗ Trợ Apple Watch</Link>
                <Link href={'#'}>watchOS 9</Link>
            </div>
        </div>
    );
};

export default NavbarItemWatch;
