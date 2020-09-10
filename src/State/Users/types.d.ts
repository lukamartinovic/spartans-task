export interface IUserAction {
    type: string,
    payload: object,
    fetching: boolean,
    fetchedUsers: any,
    isError: boolean,
    error: object,
    errorDescription: string,
    searchQuery: string
    fetchedUser: object
}