import {actionTypes} from "./actionTypes";

export const usersFetching = (bool: boolean) => {
    return {
        type: actionTypes.usersFetching,
        fetching: bool
    };
};

export const usersFetchingError = (bool: boolean, error: string) => {
    return {
        type: actionTypes.usersFetchingError,
        isError: bool,
        errorDescription: error
    }
};

export const usersFetched = (users: []) => {
    return {
        type: actionTypes.usersFetched,
        fetchedUsers: users
    }
};