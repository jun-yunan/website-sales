import { FunctionComponent } from 'react';

interface CardContentProps {
    children: React.ReactNode;
}

const CardContent: FunctionComponent<CardContentProps> = ({ children }) => {
    return <div>{children}</div>;
};

export default CardContent;
