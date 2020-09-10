import React from 'react';
import {Search} from "./Search/Search";
import {UserCardsContainer} from "./Cards/CardContainer";
import {User} from "./User/User";
import Container from "react-bootstrap/Container";
import {IStore} from "../State/types";
import {useSelector} from "react-redux";
import {ErrorDisplay} from "./ErrorDisplay";
import Spinner from "react-bootstrap/Spinner";
import Navbar from "react-bootstrap/Navbar";

export const Layout = () => {

    const store = useSelector((store: IStore) => store.userReducer);
    const {fetchedUser, isError, error} = store;

    const fetching = store.usersFetching || store.userFetching;

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
                    <img
                        src={require('../Images/spartan.png')}
                        width="30"
                        height="30"
                        className="navbar-logo-image d-inline-block align-top"
                        alt="Spartans logo"
                    />
                    <span>Spartans</span>
                </Navbar.Brand>
            </Navbar>
            <Container>
                <div>
                    <Search/>
                    {isError ? <ErrorDisplay {...error}/> :

                        fetching ? <Spinner animation="border"/> :
                            <div>
                                {!fetchedUser && <UserCardsContainer/>}
                                {fetchedUser && <User/>}
                            </div>
                    }
                </div>
            </Container>
        </div>
    )
}