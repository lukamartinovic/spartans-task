import React, { FC } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../State/thunks";

export const Search = () => {
    const dispatch = useDispatch()
    const state = useSelector((state: any) => state)

    return(<div>
        <button onClick={() => {dispatch(fetchUsers("asd"))}}>Fetch users</button>
        <p>{JSON.stringify(state.usersFetched)}</p>
        <p>{state.usersFetching === true && "Fetching..."}</p>
    </div>)
}