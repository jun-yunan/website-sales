import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface EditProfileProps {
    children?: React.ReactNode;
}

const EditProfile: FunctionComponent<EditProfileProps> = ({ children }) => {
    return (
        <div className="flex flex-col items-center phone:absolute phone:right-0 phone:top-0">
            <Link
                href={'/profile/editProfile'}
                className="w-[50px] h-[50px] p-3 rounded-full bg-transparent hover:bg-slate-300 transition-all duration-500 ease-in-out cursor-pointer flex items-center justify-center"
            >
                <FontAwesomeIcon icon={faPen} className="text-xl" />
            </Link>
            <p className="font-semibold phone:hidden">Chỉnh sửa thông tin</p>
        </div>
    );
};

export default EditProfile;
