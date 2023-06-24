import { FormEditIntroduce } from '@/app/profile/edit-introduce/page';

export interface ResultSignUp {
    error: string;
    email: string;
    name: string;
    message: string;
    status: boolean;
}

export interface InfoUser {
    name?: string;
    image?: string;
    email?: string;
    address?: string;
    gender?: string;
    accessToken?: string;
    numberPhone?: string;
    avatar?: string;
    birthDay?: string;
}

export interface UserSignIn {
    status: boolean;
    _id: string;
    email: string;
    name: string;
    avatar: string;
    address: string;
    numberPhone: string;
    gender: string;
    birthDay: string;
    accessToken: string;
}

export interface ResultGetUserById {
    error?: any;
    status?: boolean;
    message?: string;
    request?: any;
    user?: InfoUser;
}

export interface ResponseServer {
    error?: any;
    status?: boolean;
    message?: string;
    request?: any;
    user?: InfoUser;
    posts?: any;
}

export interface ErrorToServer {
    error: string;
}

export type CreatePost = ResponseServer;

export type UploadImage = ResponseServer;

export type GetIntroduce = {
    error?: any;
    status?: boolean;
    message?: string;
    request?: any;
    introduce: FormEditIntroduce;
};
