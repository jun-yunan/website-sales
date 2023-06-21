import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from './InputField';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { userService } from '@/services';
import { ResultSignUp } from '@/types/users';
import { useSignUpMutation } from '@/redux/services/userApi';
import { ToastContainer, toast } from 'react-toastify';
import { isEntityError } from '@/utils/helpers';

const schema = yup
    .object({
        name: yup
            .string()
            .required('Full name is a required field')
            .min(10, 'Full name must be at least 10 characters'),
        // .matches(/^[a-zA-Z0-9 ]*$/, 'Full name should not contain special characters'),
        email: yup.string().email().required(),
        password: yup
            .string()
            .min(
                8,
                'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!'
            )
            .max(
                20,
                'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!'
            )
            .required('Password is a required field')
            .matches(
                /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/,
                'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!'
            ),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password'), null || undefined], 'Passwords must match')
            .required('Confirm password is required'),
    })
    .required();

type Inputs = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export interface FormDataState {
    name: string;
    email: string;
    password: string;
}

function Form() {
    const router = useRouter();
    const [formData, setFormData] = useState<FormDataState | undefined>(undefined);
    const [signUp, resultSignUp] = useSignUpMutation();
    // const [signUp, setSignUp] = useState(null);
    const form = useForm<Inputs>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        resolver: yupResolver(schema),
    });

    const submitForm: SubmitHandler<Inputs> = async (data) => {
        const { confirmPassword, ...InfoUser } = data;
        setFormData(InfoUser);

        try {
            if (InfoUser) {
                await signUp(InfoUser).unwrap();
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (resultSignUp.isSuccess) {
            toast.success('Tạo tài khoản thành công');

            setTimeout(() => {
                router.push('/signIn');
            }, 4000);
        }

        if (isEntityError(resultSignUp.error)) {
            toast.error(resultSignUp.error.data.error as string);
        }
    }, [resultSignUp, router]);

    return (
        <div className="w-full">
            <form
                onSubmit={form.handleSubmit(submitForm)}
                className="flex flex-col w-[40%] phone:w-full"
            >
                <div className="mt-8">
                    <InputField type="text" name="name" label="Full Name" form={form} />
                </div>
                <div className="mt-8">
                    <InputField type="text" name="email" label="Email" form={form} />
                </div>
                <div className="mt-8">
                    <InputField type="password" name="password" label="Password" form={form} />
                </div>
                <div className="my-8">
                    <InputField
                        type="password"
                        name="confirmPassword"
                        label="Confirm Password"
                        form={form}
                    />
                </div>
                <button className="bg-[#0a66c2] hover:bg-opacity-90 transition-all duration-300 ease-in-out text-white w-[100%] p-2 rounded-lg shadow-md text-xl font-bold mb-4">
                    Đăng ký
                </button>
            </form>
        </div>
    );
}

export default Form;
