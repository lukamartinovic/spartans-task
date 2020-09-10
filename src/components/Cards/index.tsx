import React from 'react';
import {useSelector} from "react-redux";
import {UserCard} from "./UserCard";
import {IStore} from "../../state/types";
import {IUserCard} from "./types";
import "./index.css";

export const UserCardsContainer = () => {
    const state = useSelector((state: IStore) => state);

    return (
        <div className="user-cards-container">
            {state.userReducer.fetchedUsers?.map((user: IUserCard, index: number) =>
                <UserCard key={index} {...user}/>)}
        </div>
    )
};


