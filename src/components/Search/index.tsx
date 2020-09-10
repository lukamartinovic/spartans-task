import React, {ChangeEvent} from 'react';
import {debounce} from 'lodash';
import {useDispatch, useSelector} from "react-redux";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from 'react-bootstrap/Form'
import {fetchUsers} from "state/users/thunks";
import {IStore} from "state/types";
import {clearUser} from "state/users/actions";

export const Search = () => {
    const dispatch = useDispatch();
    const fetchedUser = useSelector((store: IStore) => store.userReducer.fetchedUser);
    const debounceInput = debounce(query => {
        dispatch(fetchUsers(query))
    }, 500);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        value && debounceInput(value);
    };

    return (
        <Jumbotron>
            <h1>GitHub User Search</h1>
            <p>
                Start typing the name of a GitHub user you're looking for
            </p>
            <Form inline>
                {fetchedUser && <Button onClick={() => dispatch(clearUser())}>⇦</Button>}
                <Form.Control onChange={onChange} type="text" placeholder="Enter username"/>
            </Form>
        </Jumbotron>
    )
};