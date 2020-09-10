import {IFetchedUser} from "../types";

export interface IUserAction {
    type: string,
    payload: object,
    fetching: boolean,
    fetchedUsers: IFetchedUser[],
    isError: boolean,
    error: object,
    errorDescription: string,
    searchQuery: string
    fetchedUser: object
};
