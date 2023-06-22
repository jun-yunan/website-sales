import { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import FormEditInfo from '@/components/Profile/EditProfile/FormEditInfo';

interface EditInfoUserProps {}

const EditInfoUser: FunctionComponent<EditInfoUserProps> = () => {
    return (
        <div className="fixed top-[60px] left-0 w-full z-20 h-full flex flex-col items-center justify-center bg-[#444] bg-opacity-40">
            <div className="relative flex flex-col w-[40%] phone:min-w-[80%] phone:h-[65%] h-[80%] bg-white translate-y-[-32px] rounded-xl shadow-xl px-6 overflow-auto">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl my-6 phone:text-xl">Edit Info</h2>
                    <Link
                        href={'/profile'}
                        className="text-3xl phone:text-2xl hover:bg-slate-200 py-2 px-4 rounded-full transition-all duration-500 ease-in-out"
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </Link>
                </div>
                <div className="w-full border-b-2 border-y-slate-600"></div>
                <div className="mt-6 flex flex-col w-full">
                    <h2 className="text-2xl phone:text-xl font-semibold">Basic info</h2>
                    <FormEditInfo />
                </div>
                <label
                    className="btn-light mt-12 phone:mt-6 phone:text-xl cursor-pointer self-end w-[50%]"
                    htmlFor="submitForm"
                >
                    Save
                </label>
            </div>
        </div>
    );
};

export default EditInfoUser;
