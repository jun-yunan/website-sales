import { FunctionComponent } from 'react';

interface LayoutProfileProps {
    children: React.ReactNode;
}

const LayoutProfile: FunctionComponent<LayoutProfileProps> = ({ children }) => {
    return <div className="container-light min-h-[700px] bg-[#f5f5f7]">{children}</div>;
};

export default LayoutProfile;
