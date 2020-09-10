export interface IStore {
    userReducer: {
        fetchedUsers: [],
        usersFetching: boolean,
        userFetching: boolean,
        fetchedUser: {},
        isError: boolean,
        error: IError
    }
}

export interface IError {
    data: {
        message: string,
        documentation_url: string
    },
    status: number
}