import React from 'react';
import {useSelector} from "react-redux";
import {IUserCard} from "./types";
import {UserCard} from "./UserCard";
import "./Cards.css";
import {IStore} from "../../State/types";

export const UserCardsContainer = () => {
    const state = useSelector((state: IStore) => state);

    return (
        <div className="user-cards-container">
            {state.userReducer.fetchedUsers?.map((user: IUserCard, index: number) =>
                <UserCard key={index} {...user}/>)}
        </div>
    )
};


