// import User from '@/models/user';
// import { hash } from 'bcrypt';
// import { connectToMongoDB } from '@/lib/mongodb';
// import { NextResponse } from 'next/server';
// import mongoose from 'mongoose';

// interface RequestBody {
//     fullName: string;
//     email: string;
//     password: string;
// }

// interface user {
//     fullName: string;
//     email: string;
//     password: string;
// }

// export async function POST(request: Request) {
//     try {
//         await connectToMongoDB();
//         const body: RequestBody = await request.json();

//         if (!body) {
//             return NextResponse.json({ error: 'Data is missing' }, { status: 400 });
//         }

//         const { email, password, fullName } = body;

//         const userExists = await User.exists({ email });

//         if (userExists) {
//             return NextResponse.json({ error: 'User Already exists' }, { status: 201 });
//         }

//         if (password.length < 6) {
//             return NextResponse.json(
//                 { error: 'Password should be 6 characters long' },
//                 { status: 409 }
//             );
//         }

//         const hashedPassword = await hash(password, 10);

//         const user: user = await User.create({
//             fullName,
//             email,
//             password: hashedPassword,
//         });

//         if (!user) {
//             return NextResponse.json({ error: 'Create account fail' }, { status: 409 });
//         }

//         return NextResponse.json({ fullName: user.fullName, email: user.email }, { status: 201 });
//     } catch (error) {
//         if (error instanceof mongoose.Error.ValidationError) {
//             for (let field in error.errors) {
//                 const msg = error.errors[field].message;
//                 return NextResponse.json({ error: msg }, { status: 409 });
//             }
//         }
//         return NextResponse.json({ error });
//     }
// }
