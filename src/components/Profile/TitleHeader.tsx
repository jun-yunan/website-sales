import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface TitleHeaderProps {}

const TitleHeader: FunctionComponent<TitleHeaderProps> = () => {
    return (
        <div className="flex w-full justify-between items-center">
            <p className="text-2xl font-semibold">Edit Post</p>
            <Link href={'/profile'}>
                <FontAwesomeIcon
                    icon={faXmark}
                    className="text-3xl px-4 py-3 hover:bg-neutral-300 rounded-full hover-smooth cursor-pointer"
                />
            </Link>
        </div>
    );
};

export default TitleHeader;
