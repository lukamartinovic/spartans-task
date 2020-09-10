import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from 'react-bootstrap/Form'
import {fetchUsers} from "../../State/Users/thunks";
import {debounce} from 'lodash';
import Button from "react-bootstrap/Button";
import {IStore} from "../../State/types";
import {clearUser} from "../../State/Users/actions";

export const Search = () => {

    const dispatch = useDispatch();
    const store = useSelector((store: IStore) => store);
    const debounceInput = debounce(query => {
        dispatch(fetchUsers(query))
    }, 500);
    //TODO tip za onchange event
    const handleInput = (e: any) => {
        debounceInput(e.target.value)
    };

    return (
        <Jumbotron>
            <h1>GitHub User Search</h1>
            <p>
                Start typing the name of a GitHub user you're looking for
            </p>
            <Form inline>
                <Form.Control onChange={(e) => {
                    handleInput(e)
                }} type="text" placeholder="Enter username"/>
                {store.userReducer.fetchedUser && <Button onClick={() => {dispatch(clearUser())}}>Back</Button>}
            </Form>
        </Jumbotron>
    )
};