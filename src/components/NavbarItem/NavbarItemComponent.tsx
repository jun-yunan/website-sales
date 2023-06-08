import Link from 'next/link';
import { FunctionComponent } from 'react';

interface NavbarItemComponentProps {}

const NavbarItemComponent: FunctionComponent<NavbarItemComponentProps> = () => {
    return (
        <div className="w-[60%] h-full flex pb-[30px]">
            <div className="flex flex-col mr-[100px]">
                <h2 className="text-sm font-light my-4">Mua Phụ Kiện</h2>
                <Link href={'#'} className="text-3xl font-medium leading-normal">
                    Mac
                </Link>
                <Link href={'#'} className="text-3xl font-medium leading-normal">
                    iPad
                </Link>
                <Link href={'#'} className="text-3xl font-medium leading-normal">
                    iPhone
                </Link>
                <Link href={'#'} className="text-3xl font-medium leading-normal">
                    Apple Watch
                </Link>
                <Link href={'#'} className="text-3xl font-medium leading-normal">
                    AirPods
                </Link>
                <Link href={'#'} className="text-3xl font-medium leading-normal">
                    TV
                </Link>
            </div>
            <div className="flex flex-col">
                <h2 className="text-sm font-light my-4">Khám Phá Phụ Kiện</h2>
                <Link href={'#'}>Sản Xuất Bởi Apple</Link>
                <Link href={'#'}>Beats by Dr. Dre</Link>
                <Link href={'#'}>AirTag</Link>
            </div>
        </div>
    );
};

export default NavbarItemComponent;
