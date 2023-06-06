import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from './InputField';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { userService } from '@/services';

const schema = yup
    .object({
        fullName: yup
            .string()
            .required('Full name is a required field')
            .min(10, 'Full name must be at least 10 characters'),
        // .matches(/^[a-zA-Z0-9 ]*$/, 'Full name should not contain special characters'),
        email: yup.string().email().required(),
        password: yup
            .string()
            .min(8, 'Password should be 8-20 characters')
            .max(20, 'Password should be 8-20 characters')
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
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export interface FormDataState {
    fullName: string;
    email: string;
    password: string;
}

function Form() {
    const router = useRouter();
    const [formData, setFormData] = useState<FormDataState | undefined>(undefined);
    const [signUp, setSignUp] = useState(null);
    const form = useForm<Inputs>({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        resolver: yupResolver(schema),
    });

    const submitForm: SubmitHandler<Inputs> = (data) => {
        const { confirmPassword, ...InfoUser } = data;
        setFormData(InfoUser);
        // try {
        //     const response = await fetch('http://localhost:3000/api/signup', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(InfoUser),
        //     });
        //     const result = await response.json();
        //     setSignUp(result);
        //     if (!result.error) router.push('/signIn');
        // } catch (error) {
        //     console.error(error);
        // }

        const fetchApi = async () => {
            const response = await userService.signUp(InfoUser);
            console.log(response);
            return response;
        };
        fetchApi();
    };

    return (
        <div className="w-[350px] ">
            <div className="m-3">
                <h2 className="font-bol text-slate-700 text-5xl">Sign Up</h2>
            </div>
            <div>
                <form onSubmit={form.handleSubmit(submitForm)} className="flex flex-col">
                    <div className="m-3 bg-slate-50">
                        <InputField type="text" name="fullName" label="Full Name" form={form} />
                    </div>
                    <div className="m-3 bg-slate-50">
                        <InputField type="text" name="email" label="Email" form={form} />
                    </div>
                    <div className="m-3 bg-slate-50">
                        <InputField type="password" name="password" label="Password" form={form} />
                    </div>
                    <div className="m-3 bg-slate-50">
                        <InputField
                            type="password"
                            name="confirmPassword"
                            label="Confirm Password"
                            form={form}
                        />
                    </div>
                    <button className="btn-primary m-3">Đăng ký</button>
                </form>
            </div>
        </div>
    );
}

export default Form;
