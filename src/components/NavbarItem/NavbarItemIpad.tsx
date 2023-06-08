import Link from 'next/link';
import { FunctionComponent } from 'react';

interface NavbarItemIpadProps {}

const NavbarItemIpad: FunctionComponent<NavbarItemIpadProps> = () => {
    return (
        <div className="w-[60%] h-full flex pb-[30px] justify-between">
            <div className="flex flex-col">
                <h2 className="text-sm font-light my-4">Khám Phá iPad</h2>
                <Link href={'#'} className="text-3xl font-medium leading-normal">
                    Khám Phá Tất Cả iPad
                </Link>
                <Link href={'#'} className="text-3xl font-medium leading-normal">
                    iPad Pro
                </Link>
                <Link href={'#'} className="text-3xl font-medium leading-normal">
                    iPad Air
                </Link>
                <Link href={'#'} className="text-3xl font-medium leading-normal">
                    iPad
                </Link>
                <Link href={'#'} className="text-3xl font-medium leading-normal">
                    iPad mini
                </Link>
                <Link href={'#'} className="text-3xl font-medium leading-normal">
                    Apple Pencil
                </Link>
                <Link href={'#'} className="text-3xl font-medium leading-normal">
                    Bàn Phím
                </Link>
            </div>
            <div className="flex flex-col">
                <h2 className="text-sm font-light my-4">Mua iPad</h2>
                <Link href={'#'}>Mua iPad</Link>
                <Link href={'#'}>Phụ Kiện iPad</Link>
                <Link href={'#'}>Apple Trade In</Link>
                <Link href={'#'}>Tài chính</Link>
            </div>
            <div className="flex flex-col">
                <h2 className="text-sm font-light my-4">Tìm Hiểu Thêm Về iPad</h2>
                <Link href={'#'}>Hỗ Trợ iPad</Link>
                <Link href={'#'}>iPadOS 16</Link>
                <Link href={'#'}>Tính Liên Tục</Link>
                <Link href={'#'}>iclound</Link>
                <Link href={'#'}>Giáo Dục</Link>
            </div>
        </div>
    );
};

export default NavbarItemIpad;
