import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

interface ErrorFormObject {
    [key: string | number]: string | ErrorFormObject | ErrorFormObject[];
}

interface EntityError {
    status: 401;
    // status: number;
    data: {
        error: ErrorFormObject | string;
    };
}

export function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
    return typeof error === 'object' && error !== null && 'status' in error;
}

export function isErrorWithMessage(error: unknown): error is { message: string } {
    return (
        typeof error === 'object' &&
        error !== null &&
        'message' in error &&
        typeof error.message === 'string'
    );
}

export function isEntityError(error: unknown): error is EntityError {
    return (
        isFetchBaseQueryError(error) &&
        error.status === 401 &&
        typeof error.data === 'object' &&
        error.data !== null &&
        !(error.data instanceof Array)
    );
}
