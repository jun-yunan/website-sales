import Link from 'next/link';
import { FunctionComponent } from 'react';

interface ButtonProps {
    children: React.ReactNode;
    href: string;
}

const Button: FunctionComponent<ButtonProps> = ({ children, href }) => {
    return (
        <div className="px-4 py-2 bg-slate-300 text-black rounded-md">
            <Link href={href}>{children}</Link>
        </div>
    );
};

export default Button;
