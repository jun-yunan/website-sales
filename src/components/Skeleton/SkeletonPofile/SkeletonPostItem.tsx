import { faComment, faEllipsis, faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent } from 'react';

interface SkeletonPostItemProps {}

const SkeletonPostItem: FunctionComponent<SkeletonPostItemProps> = () => {
    return (
        <div className="my-4 animate-pulse bg-white w-full phone:w-full rounded-2xl shadow-xl flex flex-col relative p-6 h-full">
            <div>
                <FontAwesomeIcon
                    icon={faEllipsis}
                    className="absolute text-3xl phone:text-xl text-neutral-300 top-0 right-0 px-3 py-2  m-2"
                />
            </div>
            <div className="flex items-center ">
                <div className="flex items-center bg-neutral-300 mr-3 justify-center rounded-[50%] overflow-hidden phone:w-[50px] phone:h-[50px] w-[80px] h-[80px]"></div>

                <div className="flex flex-col items-start h-[65px] phone:h-[45px] justify-between">
                    <div className="text-xl bg-neutral-300 py-3 phone:py-2  rounded-md w-[200px] phone:w-[100px] font-medium phone:text-base"></div>
                    <div className="text-xl bg-neutral-300 py-3 phone:py-2 rounded-md w-[75px] phone:w-[50px] font-medium phone:text-base"></div>
                </div>
            </div>

            <div className="flex flex-col">
                <div className=" mt-6 text-lg bg-neutral-300 rounded-lg w-full py-3 phone:py-2 font-normal"></div>
                <div className=" mt-3 text-lg bg-neutral-300 rounded-lg w-[80%] py-3 phone:py-2 font-normal"></div>
                <div className=" mt-3 text-lg bg-neutral-300 rounded-lg w-[60%] py-3 phone:py-2 font-normal"></div>

                <div className="w-full h-[400px] phone:h-[200px] bg-neutral-300 mt-6 rounded-lg">
                    {/* image */}
                </div>
            </div>

            <div className="border border-y-slate-300 mt-8 mb-1"></div>

            {/* //icon */}
            <div className=" w-full flex text-neutral-300 justify-around">
                <FontAwesomeIcon
                    className="phone:text-lg text-xl p-3 rounded-[50%] hover:bg-slate-200 transition-all duration-300 ease-in-out cursor-pointer"
                    icon={faThumbsUp}
                />
                <FontAwesomeIcon
                    className="phone:text-lg text-xl p-3 rounded-[50%] hover:bg-slate-200 transition-all duration-300 ease-in-out cursor-pointer"
                    icon={faComment}
                />
                <FontAwesomeIcon
                    className="phone:text-lg text-xl p-3 rounded-[50%] hover:bg-slate-200 transition-all duration-300 ease-in-out cursor-pointer"
                    icon={faShare}
                />
            </div>
        </div>
    );
};

export default SkeletonPostItem;
