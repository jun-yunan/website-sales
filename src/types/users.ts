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
}

export type UploadImage = ResponseServer;
