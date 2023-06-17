import NextAuth from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            _id: string;
            name: string;
            email: string;
            accessToken: string;
            avatar: string;
            image: string;
            address: string;
            numberPhone: string;
            gender: string;
            birthDay: string;
        };
    }
}
