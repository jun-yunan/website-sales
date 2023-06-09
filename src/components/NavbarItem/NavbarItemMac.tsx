import Link from 'next/link';
import { FunctionComponent } from 'react';

interface NavbarItemMacProps {}

const NavbarItemMac: FunctionComponent<NavbarItemMacProps> = () => {
    return (
        <div className="w-[60%] h-full flex pb-[30px] justify-between">
            <div className="flex flex-col">
                <h2 className="text-sm font-light my-4">Khám Phá Mac</h2>
                <Link href={'#'} className="text-2xl font-medium leading-normal">
                    Khám Phá Tất Cả Mac
                </Link>
                <Link href={'#'} className="text-2xl font-medium leading-normal">
                    MacBook Air
                </Link>
                <Link href={'#'} className="text-2xl font-medium leading-normal">
                    MacBook Pro
                </Link>
                <Link href={'#'} className="text-2xl font-medium leading-normal">
                    iMac
                </Link>
                <Link href={'#'} className="text-2xl font-medium leading-normal">
                    Mac mini
                </Link>
                <Link href={'#'} className="text-2xl font-medium leading-normal">
                    Mac Studio
                </Link>
                <Link href={'#'} className="text-2xl font-medium leading-normal">
                    Mac Pro
                </Link>
                <Link href={'#'} className="text-2xl font-medium leading-normal">
                    Màn Hình
                </Link>
            </div>
            <div className="flex flex-col">
                <h2 className="text-sm font-light my-4">Mua Mac</h2>
                <Link href={'#'}>Mua Mac</Link>
                <Link href={'#'}>Phụ Kiện Mac</Link>
                <Link href={'#'}>Apple Trade In</Link>
                <Link href={'#'}>Tài chính</Link>
            </div>
            <div className="flex flex-col">
                <h2 className="text-sm font-light my-4">Tìm Hiểu Thêm Về Mac</h2>
                <Link href={'#'}>Hỗ Trợ Mac</Link>
                <Link href={'#'}>macOS Ventura</Link>
                <Link href={'#'}>Tính Liên Tục</Link>
                <Link href={'#'}>iclound</Link>
                <Link href={'#'}>Mac Cho Doanh Nghiệp</Link>
                <Link href={'#'}>Giáo Dục</Link>
            </div>
        </div>
    );
};

export default NavbarItemMac;
