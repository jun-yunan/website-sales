'use client';
import { userService } from '@/services';
import { verifyJwt } from '@/lib/jwt';
import Cookies from 'js-cookie';

// import { useSession } from 'next-auth/react';

export default function Home() {
    const token = Cookies.get('next-auth.session-token');
    console.log(token);

    // const { data: session, update } = useSession();

    // async function updateSession() {
    //     // if (session) session.user.accessToken = "dddd";

    //     await update({
    //         ...session,
    //         user: {
    //             ...session?.user,
    //             accessToken: 'dddd',
    //             name: 'john',
    //         },
    //     });
    // }
    const handleClick = async () => {
        const response = await userService.getAllUser();
        console.log(response);
    };
    return (
        <div className="flex flex-wrap gap-5 min-h-[500px] items-center justify-center w-full">
            {/* <button
                className="border bg-violet-600 text-white rounded px-4 py-2"
                onClick={updateSession}
            >
                Update Session
            </button>
            <button
                className="border bg-violet-600 text-white rounded px-4 py-2"
                onClick={() => console.log({ session })}
            >
                Log Session
            </button> */}
            <p>{token}</p>
            <button onClick={handleClick}>Fetch API</button>

            <h2 className="text-5xl font-bold">Next JS app</h2>
        </div>
    );
}
