export interface WindowSize {
    width: number;
    height: number;
}

export interface IUser {
    _id?: string;
    email: string;
    fullName: string;
}

export interface LoginUserParams {
    email: string;
    password: string;
}

export interface NavLinkProps {
    route: string;
    children: React.ReactNode;
    color?: string;
    large?: boolean;
    onClick?: React.MouseEventHandler<Element>;
}

export interface InputProps {
    placeholder: string;
    icon: React.ReactNode;
    type: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    name?: string;
    error?: string;
}

export interface ButtonProps {
    title: string;
    type?: 'submit' | 'button' | 'reset';
    disabled?: boolean;
    onClick?: () => void;
}
