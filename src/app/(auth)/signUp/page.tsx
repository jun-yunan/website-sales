'use client';

import ButtonLogin from '@/components/Button/ButtonLogin';
import { FunctionComponent } from 'react';
import Form from '@/components/Form/Form';

interface SignUpProps {}

const SignUp: FunctionComponent<SignUpProps> = () => {
    return (
        <div className="w-full min-h-[500px] bg-white flex items-center flex-col">
            <Form />
            <ButtonLogin />
        </div>
    );
};

export default SignUp;
