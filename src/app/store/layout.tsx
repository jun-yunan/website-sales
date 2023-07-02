import Category from '@/components/Product/Category';
import Resizable from '@/components/Product/Resizable';
import { FunctionComponent } from 'react';

interface LayoutStoreProps {
    children: React.ReactNode;
}

const LayoutStore: FunctionComponent<LayoutStoreProps> = ({ children }) => {
    return (
        <div className="w-full min-h-[700px] bg-[#f5f5f7] flex flex-col items-center">
            <Category />
            <Resizable />
            {children}
        </div>
    );
};

export default LayoutStore;
