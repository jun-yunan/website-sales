/* eslint-disable @next/next/no-img-element */

import { FunctionComponent } from 'react';

interface LayoutAuthProps {
    children: React.ReactNode;
}

const LayoutAuth: FunctionComponent<LayoutAuthProps> = ({ children }) => {
    return (
        <div className="bg-white w-full min-h-[700px] flex justify-center relative">
            <div className="w-[70%] h-full flex items-center flex-col mt-10 phone:mt-6 phone:z-10">
                <div className="">
                    <p className="text-3xl phone:text-xl font-medium text-[#8f5849] phone:hidden">
                        Chào mừng bạn đến với trang web bán hàng công nghệ hàng đầu. Hãy khám phá và
                        mua sắm thông minh cùng chúng tôi!
                    </p>
                    <div className="hidden phone:block text-xl font-medium text-[#8f5849] items-center flex-col">
                        <p>Welcome to your</p>
                        <p>professional community</p>
                    </div>
                </div>
                <div className="self-start phone:z-10 w-full">{children}</div>
            </div>
            <img
                src="/bg.svg"
                alt=""
                className="w-[40%] min-h-[50%] absolute right-[5%] mt-28 phone:m-auto phone:right-[50%] phone:w-[100%] phone:translate-x-[50%] phone:top-[15%]"
            />
        </div>
    );
};

export default LayoutAuth;
