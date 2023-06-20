import { faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

interface TransitionAlertsProps {
    children?: string;
    handleClose?: () => void;
}

export default function TransitionAlerts({ children, handleClose }: TransitionAlertsProps) {
    const [open, setOpen] = React.useState(true);

    return (
        <div className="fixed m-w-[30%] h-[30%] bg-[#388e3c] animate-wiggle z-30 text-white flex items-center self-center justify-center rounded-xl shadow-2xl">
            <FontAwesomeIcon
                icon={faXmark}
                onClick={handleClose}
                className="text-3xl absolute top-0 right-0 py-3 px-4  mr-2 mt-2 transition-all duration-500 ease-in-out cursor-pointer hover:bg-slate-400 rounded-full"
            />

            <div className="flex flex-col items-center p-5">
                <FontAwesomeIcon icon={faCircleCheck} className="text-3xl mb-4" />
                <p className="text-xl font-semibold">{children}</p>
            </div>
        </div>
    );
}
