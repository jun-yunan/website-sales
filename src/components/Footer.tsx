import { FunctionComponent } from 'react';

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
    return (
        <div className="w-full h-[300px] bg-slate-700">
            <h2>Footer</h2>
        </div>
    );
};

export default Footer;
