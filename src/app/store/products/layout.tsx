import { FunctionComponent } from 'react';
import Category from '@/components/Product/Category';
import PageNumber from '@/components/Product/PageNumber';
import Resizable from '@/components/Product/Resizable';
import BarPage from '@/components/Product/BarPage';

interface StoreLayoutProps {
    children: React.ReactNode;
}

const StoreLayout: FunctionComponent<StoreLayoutProps> = ({ children }) => {
    return (
        <div className="w-full min-h-[700px] bg-[#f5f5f7] flex flex-col">
            <div className="w-full bg-white mx-auto py-[150px] flex flex-col items-center">
                <h2 className="text-5xl font-bold text-color">Cửa Hàng. Cách tốt nhất để</h2>
                <h2 className="text-5xl font-bold text-color mb-24">mua sản phẩm bạn thích.</h2>
                <Category />
            </div>

            <div className="flex flex-col items-center py-[150px] mx-auto">
                <h2 className="title-sm-dark mr-2">Thế hệ mới nhất.</h2>
                <h2 className="title-sm-dark text-[#6e6e73] mb-10">Xem ngay có gì mới.</h2>
                <Resizable />
            </div>

            <div className="w-full flex flex-col items-center min-h-[500px] pb-[150px]  relative">
                {children}
                {/* <PageNumber /> */}
                {/* <BarPage /> */}
            </div>
        </div>
    );
};

export default StoreLayout;
