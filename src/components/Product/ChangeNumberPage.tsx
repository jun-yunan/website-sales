'use client';

import Link from 'next/link';
import { FunctionComponent, MutableRefObject, useEffect, useRef, useState } from 'react';

interface ChangeNumberPageProps {
    children?: React.ReactNode;
    pageNumber?: number;
    limit?: number;
    isActive?: boolean;
    isDisable?: boolean;
}

const ChangeNumberPage: FunctionComponent<ChangeNumberPageProps> = ({
    children,
    pageNumber,
    limit,
    isActive,
    isDisable,
}) => {
    const [show, setShow] = useState(false);

    const button = useRef<HTMLButtonElement | null>(null);

    // const handleClick = () => {
    //     if (button.current) {
    //         button.current.classList.toggle('button-number-active');
    //     }
    // };

    // useEffect(() => {
    //     if (button.current) {
    //         button.current.classList.remove('button-number-active');
    //         button.current.classList.add('button-number');
    //     }
    // }, [pageNumber]);

    return (
        <Link href={{ pathname: '/store/products', query: { pageNumber, limit } }}>
            <button
                ref={button}
                // onClick={handleClick}
                className={'button-number'}
                disabled={isDisable}
            >
                {children}
            </button>
        </Link>
    );
};

export default ChangeNumberPage;
