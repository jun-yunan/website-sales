/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent } from 'react';

interface ImagePreviewProps {
    children?: React.ReactNode;
    background?: string;
    image?: string;
    text?: string;
}

const ImagePreview: FunctionComponent<ImagePreviewProps> = ({
    children,
    background,
    image,
    text,
}) => {
    return (
        <main className="w-screen h-[800px] relative flex flex-col items-center justify-center">
            <img src={background} alt="apple" className="object-cover w-full h-full" />
            {children && (
                <div className="flex flex-col items-center justify-center absolute">
                    <img src={image} alt="apple" className="object-cover phone:w-1/2" />
                    <div>{children}</div>
                    <div className="mt-10 py-4 px-8 rounded-full border-2 border-white hover:bg-white hover:first-line:text-black transition-all duration-500 ease-in-out hover:cursor-pointer ">
                        <p className="text-xl text-white font-semibold ">{text}</p>
                    </div>
                </div>
            )}
        </main>
    );
};

export default ImagePreview;
