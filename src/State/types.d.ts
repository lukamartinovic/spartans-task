export interface IAction {
    type: string,
    payload: object,
    fetching: boolean,
    fetchedUsers: any,
    isError: boolean,
    errorDescription: string
}