import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface EditProfileProps {
    children?: React.ReactNode;
}

const EditProfile: FunctionComponent<EditProfileProps> = ({ children }) => {
    return (
        <Link
            href={'/profile/editProfile'}
            className="flex items-center hover-smooth hover:bg-[#161617] hover:text-white py-2 px-6 self-start border-2 border-[#161617] rounded-xl phone:absolute phone:right-0 phone:top-0"
        >
            <FontAwesomeIcon
                icon={faPen}
                className="text-lg phone:text-base tablet:text-base mr-2"
            />
            <p className="font-semibold phone:hidden text-lg phone:text-base tablet:text-base">
                Edit profile
            </p>
        </Link>
    );
};

export default EditProfile;
