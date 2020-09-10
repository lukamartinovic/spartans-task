import {actionTypes} from "../actionTypes";

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
        error: error
    }
};

export const usersFetched = (users: []) => {
    return {
        type: actionTypes.usersFetched,
        fetchedUsers: users
    }
};

export const userFetched = (user: object) => {
    return {
        type: actionTypes.userFetched,
        fetchedUser: user
    }
};

export const userFetching = (bool: boolean) => {
    return {
        type: actionTypes.userFetching,
        fetching: bool
    };
};

export const userFetchingError = (bool: boolean, error: string) => {
    return {
        type: actionTypes.userFetchingError,
        isError: bool
    }
}

export const clearUser = () => {
    return {
        type: actionTypes.clearUser
    }
}