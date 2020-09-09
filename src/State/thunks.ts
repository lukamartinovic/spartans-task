import axios from "axios";
import {usersFetched, usersFetching, usersFetchingError} from "./actions";

export const fetchUsers = (searchQuery: string) => {
    return (dispatch: Function) => {
        dispatch(usersFetching(true));
        axios.get(`https://api.github.com/search/users?q=${searchQuery}`)
            .then(response => {
                dispatch(usersFetched(response.data.items));
                dispatch(usersFetching(false));
            })
            .catch(err => {
                console.log(err)
                dispatch(usersFetchingError(true, err.response.data))
            })
    }
};