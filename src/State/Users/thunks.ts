import axios from "axios";
import {userFetched, userFetching, userFetchingError, usersFetched, usersFetching, usersFetchingError} from "./actions";

export const fetchUsers = (searchQuery: string) => {
    return async (dispatch: Function) => {
        if (searchQuery !== "") {
            dispatch(usersFetching(true));
            //todo izvući url kao konstantu

            try {
                const response = await axios.get(`https://api.github.com/search/users?q=${searchQuery}`);
                const searchResults = response.data.items;
                console.log(searchResults);
                dispatch(usersFetched(searchResults));
                dispatch(usersFetching(false))
            } catch (error) {
                dispatch(usersFetchingError(true, error.response))
            }

        } else
            dispatch(usersFetched([]))

    }
};

export const fetchUser = (userlogin: string) => {
    return async (dispatch: Function) => {
        dispatch(userFetching(true));
        try {
            const getUser = await axios.get(`https://api.github.com/users/${userlogin}`);
            const getRepos = await axios.get(`https://api.github.com/users/${userlogin}/repos`);
            const user = getUser.data;
            user.repos = getRepos.data;
            console.log(user);
            dispatch(userFetched(user));
            dispatch(userFetching(false));
        } catch (error) {
            dispatch(userFetchingError(true, error.response))
        }
    }
};
