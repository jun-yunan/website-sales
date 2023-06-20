/* eslint-disable @next/next/no-img-element */
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent } from 'react';

interface CoverImageProps {}

const CoverImage: FunctionComponent<CoverImageProps> = () => {
    return (
        <div className="w-full h-[200px] phone:h-[130px] flex items-center justify-center relative">
            <img
                src={
                    'https://images.pexels.com/photos/1111318/pexels-photo-1111318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                }
                alt="background"
                className="w-full h-full object-cover"
            />
            <div className="absolute top-[2%] right-[2%] py-3 px-4 hover:bg-slate-700 transition-all duration-500 ease-in-out cursor-pointer rounded-full text-white text-3xl">
                <FontAwesomeIcon icon={faCamera} />
            </div>
        </div>
    );
};

export default CoverImage;
