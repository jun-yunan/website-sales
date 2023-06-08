import Link from 'next/link';
import { FunctionComponent } from 'react';

interface NavbarItemStoreProps {}

const NavbarItemStore: FunctionComponent<NavbarItemStoreProps> = () => {
    return (
        <div className="w-[60%] h-full flex pb-[30px] justify-between">
            <div className="flex flex-col">
                <h2 className="text-sm font-light my-4">Mua Hàng</h2>
                <Link href={'#'} className="text-3xl font-medium leading-normal ">
                    Mua sản phẩm mới nhất
                </Link>
                <Link href={'#'} className="text-3xl font-medium leading-normal ">
                    Mac
                </Link>
                <Link href={'#'} className="text-3xl font-medium leading-normal">
                    iPad
                </Link>
                <Link href={'#'} className="text-3xl font-medium leading-normal ">
                    iPhone
                </Link>
                <Link href={'#'} className="text-3xl font-medium leading-normal ">
                    Apple Watch
                </Link>
                <Link href={'#'} className="text-3xl font-medium leading-normal ">
                    Phụ Kiện
                </Link>
            </div>
            <div className="flex flex-col">
                <h2 className="text-sm font-light my-4">Liên kết nhanh</h2>
                <Link href={'#'}>Tình trạng đơn hàng</Link>
                <Link href={'#'}>Apple trade in</Link>
                <Link href={'#'}>Tài chính</Link>
            </div>
            <div className="flex flex-col">
                <h2 className="text-sm font-light my-4">Mua tại cửa hàng đặc biệt</h2>
                <Link href={'#'}>Giáo Dục</Link>
                <Link href={'#'}>Doanh Nghiệp</Link>
            </div>
        </div>
    );
};

export default NavbarItemStore;
