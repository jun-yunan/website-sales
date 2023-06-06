import { signJwtAccessToken } from '@/lib/jwt';
import { connectToMongoDB } from '@/lib/mongodb';
import User from '@/models/user';
import { compare } from 'bcrypt';
import { NextResponse } from 'next/server';

interface RequestBody {
    fullName: string;
    password: string;
    email: string;
}

export async function POST(request: Request) {
    try {
        await connectToMongoDB();

        const body: RequestBody = await request.json();
        const user = await User.findOne({ email: body.email });

        if (user && (await compare(body.password, user.password))) {
            const { password, ...userWithoutPass } = user;
            const accessToken = signJwtAccessToken(userWithoutPass);
            // const result = {
            //     ...userWithoutPass,
            //     accessToken,
            // };
            return NextResponse.json({
                accessToken,
                email: user.email,
                fullName: user.fullName,
                image: user.image || '',
            });
        }

        return NextResponse.json(null);
    } catch (error) {
        return NextResponse.json({
            error,
            message: 'Login account fail',
        });
    }
}
