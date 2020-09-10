import {actionTypes} from "../actionTypes";

export const usersFetching = (fetching: boolean) => ({
    type: actionTypes.usersFetching,
    fetching
});

export const usersFetchingError = (isError: boolean, error: string) => ({
    type: actionTypes.usersFetchingError,
    isError,
    error
});

export const usersFetched = (fetchedUsers: []) => ({
    type: actionTypes.usersFetched,
    fetchedUsers
});

export const userFetched = (fetchedUser: object) => ({
    type: actionTypes.userFetched,
    fetchedUser
});

export const userFetching = (fetching: boolean) => ({
    type: actionTypes.userFetching,
    fetching
});

export const userFetchingError = (isError: boolean, error: string) => ({
    type: actionTypes.userFetchingError,
    isError,
    error
});

export const clearUser = () => ({
    type: actionTypes.clearUser
});