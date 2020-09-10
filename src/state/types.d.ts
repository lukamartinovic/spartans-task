export interface IStore {
    userReducer: {
        fetchedUsers: [];
        usersFetching: boolean;
        userFetching: boolean;
        fetchedUser: IFetchedUser
        isError: boolean;
        error: IError;
    }
}

export interface IError {
    data: {
        message: string;
        documentation_url: string;
    };
    status: number;
}

interface IFetchedUser {
    login: string;
    avatar_url: string;
    name: string;
    following: number;
    followers: number;
    repos: [];
    url: string;
}