import React, {useState, ChangeEvent, KeyboardEvent} from 'react';
import {debounce} from 'lodash';
import {useDispatch, useSelector} from "react-redux";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import {fetchUsers} from "state/users/thunks";
import {clearUser} from "state/users/actions";
import {IStore} from "state/types";

export const Search = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const {fetchedUser, fetchedUsers, usersFetching, isError} = useSelector((store: IStore) => store.userReducer);
    const debounceInput = debounce(query => {
        dispatch(fetchUsers(query))
    }, 500);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(clearUser());
        setQuery(e.target.value);
        const value = e.target.value;
        value && debounceInput(value);
    };

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter')
            e.preventDefault()
    };

    const warningCheck = ((fetchedUsers?.length === 0) && (query !== "") && !usersFetching && !isError);

    return (
        <div>
        <Jumbotron>
            <h1>GitHub User Search</h1>
            <p>
                Start typing the name of a GitHub user you're looking for
            </p>
            <Form inline>
                {fetchedUser && <Button onClick={() => dispatch(clearUser())}>⇦</Button>}
                <input className="form-control" onKeyDown={onKeyDown} onChange={onChange} type="text" placeholder="Enter username"/>
            </Form>
        </Jumbotron>
        {warningCheck && <Alert variant="warning">{`No results found for ${query}`}</Alert>}
        </div>
)
};