import { ResponseServer } from './users';

export interface Posts {
    error?: any;
    status?: boolean;
    message?: string;
    request?: any;
    posts?: GetPost[];
}

interface Author {
    avatar: string;
    name: string;
}

export interface GetPost {
    author: Author;
    content: string;
    createdAt: string;
    updatedAt: string;
    _id: string;
    image: string;
    title: string;
}
