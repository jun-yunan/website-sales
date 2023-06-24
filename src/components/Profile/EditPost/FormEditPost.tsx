'use client';

import { useSession } from 'next-auth/react';
import { FunctionComponent } from 'react';

interface FormEditPostProps {}

const FormEditPost: FunctionComponent<FormEditPostProps> = () => {
    const { data: session } = useSession();

    return <div>fdsfsdf</div>;
};

export default FormEditPost;
