import Link from 'next/link';
import { FunctionComponent } from 'react';

interface NavbarItemIphoneProps {}

const NavbarItemIphone: FunctionComponent<NavbarItemIphoneProps> = () => {
    return (
        <div className="w-[60%] h-full flex pb-[30px] justify-between">
            <div className="flex flex-col">
                <h2 className="text-sm font-light my-4">Khám Phá iPhone</h2>
                <Link href={'#'} className="text-3xl font-medium leading-normal">
                    Khám Phá Tất Cả iPhone
                </Link>
                <Link href={'#'} className="text-3xl font-medium leading-normal">
                    iPhone 14 Pro
                </Link>
                <Link href={'#'} className="text-3xl font-medium leading-normal">
                    iPhone 14
                </Link>
                <Link href={'#'} className="text-3xl font-medium leading-normal">
                    iPhone 13
                </Link>
                <Link href={'#'} className="text-3xl font-medium leading-normal">
                    iPhone 12
                </Link>
                <Link href={'#'} className="text-3xl font-medium leading-normal">
                    iPhone SE
                </Link>
            </div>
            <div className="flex flex-col">
                <h2 className="text-sm font-light my-4">Mua iPhone</h2>
                <Link href={'#'}>Mua iPhone</Link>
                <Link href={'#'}>Phụ Kiện iPhone</Link>
                <Link href={'#'}>Apple Trade In</Link>
                <Link href={'#'}>Tài chính</Link>
            </div>
            <div className="flex flex-col">
                <h2 className="text-sm font-light my-4">Tìm Hiểu Thêm Về iPhone</h2>
                <Link href={'#'}>Hỗ Trợ iPhone</Link>
                <Link href={'#'}>iOS 16</Link>
                <Link href={'#'}>Quyền Riêng Tư Trên</Link>
                <Link href={'#'}>iclound</Link>
                <Link href={'#'}>Giáo Dục</Link>
            </div>
        </div>
    );
};

export default NavbarItemIphone;
