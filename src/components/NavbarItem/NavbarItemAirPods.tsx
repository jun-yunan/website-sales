import Link from 'next/link';
import { FunctionComponent } from 'react';

interface NavbarItemAirPodsProps {}

const NavbarItemAirPods: FunctionComponent<NavbarItemAirPodsProps> = () => {
    return (
        <div className="w-[60%] h-full flex pb-[30px] justify-between">
            <div className="flex flex-col">
                <h2 className="text-sm font-light my-4">Khám Phá AirPods</h2>
                <Link href={'#'} className="text-2xl font-medium leading-normal">
                    Khám Phá Tất Cả AirPods
                </Link>
                <Link href={'#'} className="text-2xl font-medium leading-normal">
                    AirPods (thế hệ thứ 2)
                </Link>
                <Link href={'#'} className="text-2xl font-medium leading-normal">
                    AirPods (thế hệ thứ 3)
                </Link>
                <Link href={'#'} className="text-2xl font-medium leading-normal">
                    AirPods Pro (thế hệ thứ 2)
                </Link>
                <Link href={'#'} className="text-2xl font-medium leading-normal">
                    AirPods Max
                </Link>
            </div>
            <div className="flex flex-col">
                <h2 className="text-sm font-light my-4">Mua AirPods</h2>
                <Link href={'#'}>Mua AirPods</Link>
                <Link href={'#'}>Phụ Kiện AirPods</Link>
            </div>
            <div className="flex flex-col">
                <h2 className="text-sm font-light my-4">Tìm Hiểu Thêm Về AirPods</h2>
                <Link href={'#'}>Hỗ Trợ AirPods</Link>
                <Link href={'#'}>Apple Music</Link>
            </div>
        </div>
    );
};

export default NavbarItemAirPods;
