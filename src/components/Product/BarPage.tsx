'use client';

import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { productSlice } from '@/redux/features/productSlice';

interface BarPageProps {}

const BarPage: FunctionComponent<BarPageProps> = () => {
    const dispatch = useDispatch<AppDispatch>();
    const handleClick = (pageNumber: string) => {
        dispatch(productSlice.actions.changeNumberPageProduct(pageNumber));
    };
    return (
        <div className="flex items-center justify-between min-w-[800px]">
            <button className="button-number">
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button className="button-number" onClick={() => handleClick('1')}>
                1
            </button>
            <button className="button-number" onClick={() => handleClick('2')}>
                2
            </button>
            <button className="button-number" onClick={() => handleClick('3')}>
                3
            </button>
            <button className="button-number" onClick={() => handleClick('4')}>
                4
            </button>
            <button className="button-number">...</button>
            <button className="button-number">57</button>
            <button className="button-number">
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
        </div>
    );
};

export default BarPage;
