import axios from "axios";
import {userFetched, userFetching, userFetchingError, usersFetched, usersFetching, usersFetchingError} from "./actions";
import {userRepos, userSearchURL, userURL} from "./consts";

export const fetchUsers = (searchQuery: string) => (
    async (dispatch: Function) => {
        dispatch(usersFetching(true));
        try {
            const {data} = await axios.get(userSearchURL(searchQuery));
            dispatch(usersFetched(data.items));
        } catch (error) {
            dispatch(usersFetchingError(true, error.response))
        }
        dispatch(usersFetching(false));
    }
);

export const fetchUser = (userLogin: string) => (
    async (dispatch: Function) => {
        dispatch(userFetching(true));
        try {
            const {data} = await axios.get(userURL(userLogin));
            const getRepos = await axios.get(userRepos(userLogin));
            const user = {...data, repos: getRepos.data};
            dispatch(userFetched(user));
        } catch (error) {
            dispatch(userFetchingError(true, error.response))
        }
        dispatch(userFetching(false));
    }
);
