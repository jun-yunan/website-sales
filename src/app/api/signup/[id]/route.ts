// import { verifyJwt } from '@/lib/jwt';
// // import User from '@/models/user';
// import { error } from 'console';
// import { NextResponse } from 'next/server';

// export async function GET(request: Request, { params }: { params: { id: number } }) {
//     const accessToken = request.headers.get('authorization');
//     if (!accessToken || !verifyJwt(accessToken)) {
//         return new Response(
//             JSON.stringify({
//                 error: 'unauthorized',
//             }),
//             {
//                 status: 401,
//             }
//         );
//     }
//     const allUser = await User.find({}).catch((error) => NextResponse.json({ error }));

//     return NextResponse.json({ params, allUser });
// }
