import { FunctionComponent } from 'react';

interface FieldInfoProps {
    children: string;
    label?: string;
}

const FieldInfo: FunctionComponent<FieldInfoProps> = ({ children, label }) => {
    return (
        <div className="flex flex-col justify-between text-color w-full mt-4">
            <div className="flex justify-between p-2 border-b-[3px] border-y-gray-400 hover:border-y-gray-800 transition-all duration-300 ease-in-out">
                <p className="text-base font-semibold">{children}</p>
                <label>{label}</label>
            </div>
        </div>
    );
};

export default FieldInfo;
