'use client';

import { FunctionComponent, useState, CSSProperties } from 'react';
import { ClipLoader, MoonLoader } from 'react-spinners';

interface LoadingProps {}

const Loading: FunctionComponent<LoadingProps> = () => {
    // <div className="w-full h-full flex flex-col items-center justify-center">
    //     <h2 className="title-sm-dark">Loading...</h2>
    // </div>
    // <div className="w-full h-full flex justify-center items-center">
    //     <div className="rounded-full border-4 border-t-4 border-gray-500 h-20 w-20 animate-spin"></div>
    // </div>
    return (
        <div className="flex justify-center flex-col items-center  w-full h-full">
            <MoonLoader color="#6c757d" loading size={120} speedMultiplier={0.5} />
            <h2 className="title-sm-dark mt-6 animate-pulse">Loading...</h2>
        </div>
    );
};

export default Loading;
