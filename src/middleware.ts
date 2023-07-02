import { AnyAction, Middleware, MiddlewareAPI, isRejectedWithValue } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export function isPayloadErrorMessage(payload: unknown): payload is {
    data: {
        error: string | {};
    };
    status: number;
} {
    return (
        typeof payload === 'object' &&
        payload !== null &&
        'data' in payload &&
        typeof (payload as any).data?.error === 'string'
    );
}

export const rtkQueryErrorLogger: Middleware =
    (api: MiddlewareAPI) => (next) => (action: AnyAction) => {
        if (isRejectedWithValue(action)) {
            // console.log(action);

            if (isPayloadErrorMessage(action.payload)) {
                toast.error(action.payload.data.error as string);
                // console.log(action);
            }
        }
        return next(action);
    };

const middleware = () => {};
export default middleware;
