import { FunctionComponent } from 'react';

interface SkeletonProductProps {}

const SkeletonProduct: FunctionComponent<SkeletonProductProps> = () => {
    return (
        <div className="w-[80%] min-h-[500px] flex flex-col justify-center items-center">
            <div className="animate-pulse flex space-x-4 flex-col w-full h-full justify-center">
                {/* <div className="title-sm-dark mx-auto mb-10 bg-slate-700"></div> */}
                <div className="h-8 w-[50%] mb-[50px] bg-slate-700 mx-auto"></div>
                <div className="flex items-center justify-between">
                    <div className="w-[250px] h-[440px] p-[30px] rounded-2xl shadow-lg flex flex-col items-center bg-slate-700">
                        <div className="h-[230px] w-[200px] flex-shrink-0 bg-slate-300 rounded-xl"></div>
                        <div className="flex flex-col w-full justify-between flex-1 mt-[30px]">
                            <div className="h-5 bg-slate-300 rounded-md"></div>
                            <div className="h-5 bg-slate-300 rounded-md"></div>
                            <div className="h-5 bg-slate-300 rounded-md"></div>
                        </div>
                    </div>
                    <div className="w-[250px] h-[440px] p-[30px] rounded-2xl shadow-lg flex flex-col items-center bg-slate-700">
                        <div className="h-[230px] w-[200px] flex-shrink-0 bg-slate-300 rounded-xl"></div>
                        <div className="flex flex-col w-full justify-between flex-1 mt-[30px]">
                            <div className="h-5 bg-slate-300 rounded-md"></div>
                            <div className="h-5 bg-slate-300 rounded-md"></div>
                            <div className="h-5 bg-slate-300 rounded-md"></div>
                        </div>
                    </div>
                    <div className="w-[250px] h-[440px] p-[30px] rounded-2xl shadow-lg flex flex-col items-center bg-slate-700">
                        <div className="h-[230px] w-[200px] flex-shrink-0 bg-slate-300 rounded-xl"></div>
                        <div className="flex flex-col w-full justify-between flex-1 mt-[30px]">
                            <div className="h-5 bg-slate-300 rounded-md"></div>
                            <div className="h-5 bg-slate-300 rounded-md"></div>
                            <div className="h-5 bg-slate-300 rounded-md"></div>
                        </div>
                    </div>
                    <div className="w-[250px] h-[440px] p-[30px] rounded-2xl shadow-lg flex flex-col items-center bg-slate-700">
                        <div className="h-[230px] w-[200px] flex-shrink-0 bg-slate-300 rounded-xl"></div>
                        <div className="flex flex-col w-full justify-between flex-1 mt-[30px]">
                            <div className="h-5 bg-slate-300 rounded-md"></div>
                            <div className="h-5 bg-slate-300 rounded-md"></div>
                            <div className="h-5 bg-slate-300 rounded-md"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonProduct;
