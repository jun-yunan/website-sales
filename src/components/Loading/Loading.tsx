'use client';

import { FunctionComponent, useState, CSSProperties } from 'react';
import { BarLoader, ClipLoader, MoonLoader } from 'react-spinners';

interface LoadingProps {}

const Loading: FunctionComponent<LoadingProps> = () => {
    // <div className="w-full h-full flex flex-col items-center justify-center">
    //     <h2 className="title-sm-dark">Loading...</h2>
    // </div>
    // <div className="w-full h-full flex justify-center items-center">
    //     <div className="rounded-full border-4 border-t-4 border-gray-500 h-20 w-20 animate-spin"></div>
    // </div>
    return (
        <div className="flex  justify-center flex-col items-center  w-full h-full">
            <BarLoader color="#6c757d" speedMultiplier={0.8} width={250} />
            <h2 className="title-sm-dark mt-6 animate-pulse">Loading...</h2>
        </div>
    );
};

export default Loading;
