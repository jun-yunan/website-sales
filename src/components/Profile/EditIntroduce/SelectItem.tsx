import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent } from 'react';

interface SelectItemProps {
    children: React.ReactNode;
    interests: string;
}

const SelectItem: FunctionComponent<SelectItemProps> = ({ children, interests }) => {
    return (
        <div className="flex items-center">
            {children}
            <p>{interests}</p>
        </div>
    );
};

export default SelectItem;
