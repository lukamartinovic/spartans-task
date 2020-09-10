import React from 'react';
import {useSelector} from "react-redux";
import Card from "react-bootstrap/Card";
import {Repos} from './Repos';
import {IStore} from "../../state/types";
import './index.css';

export const User = () => {
    const state = useSelector((store: IStore) => store.userReducer.fetchedUser);
    const {login, avatar_url, name, following, followers, repos} = state;
    const loginUrl = `https://github.com/${login}`;
    return (
        <div className="user">
            <Card>
                <a href={loginUrl}>
                    <Card.Img className="user__img" src={avatar_url}/>
                </a>
                <Card.Body>
                    <Card.Title>
                        {login}
                    </Card.Title>
                    <Card.Subtitle>
                        {name}
                    </Card.Subtitle>
                    <Card.Text>
                        <p className="user__follow">
                            <span>Followers: {followers}</span>
                            <span>Following: {following}</span>
                        </p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Repos repos={repos}/>
        </div>
    )
};