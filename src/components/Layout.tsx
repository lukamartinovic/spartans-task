import React from 'react';
import {useSelector} from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import {Search} from "./Search";
import {UserCardsContainer} from "./Cards";
import {User} from "./User/user";
import {ErrorDisplay} from './ErrorDisplay';
import {IStore} from "state/types";
import logo from 'images/spartan.png'

export const Layout = () => {
    const state = useSelector((store: IStore) => store.userReducer);
    const {fetchedUser, isError, error} = state;
    const loading = state.usersFetching || state.userFetching;

    const user = (
        <div>
            {!fetchedUser && <UserCardsContainer/>}
            {fetchedUser && <User/>}
        </div>);
    const content = isError ? <ErrorDisplay {...error}/> : user;

    return (
        <div className="layout">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
                    <img
                        src={logo}
                        className="navbar-logo-image d-inline-block align-top"
                        alt="Spartans logo"
                    />
                    <span>Spartans</span>
                </Navbar.Brand>
            </Navbar>
            <Container>
                <div>
                    <Search/>
                    {loading ? <Spinner animation="border"/> : content}
                </div>
            </Container>
        </div>
    )
};
