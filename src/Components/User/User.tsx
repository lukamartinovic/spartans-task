import React from 'react';
import {useSelector} from "react-redux";
import Card from "react-bootstrap/Card";
import './User.css';
import {RepoContainer} from './Repos/RepoContainer';

//todo wtf
export const User = () => {

    const userData = useSelector((store: any) => store.userReducer.fetchedUser);
    console.log(userData)

    const {login, avatar_url, name, following, followers, repos, url} = userData;

    return (
            <div className="user-profile-container">
                <Card>
                    <a href={`https://github.com/${login}`}>
                    <Card.Img className="user-profile-image" src={avatar_url}/>
                    </a>
                    <Card.Body>
                        <Card.Title>
                            {login}
                        </Card.Title>
                        <Card.Subtitle>
                            {name}
                        </Card.Subtitle>
                        <Card.Text>
                            <p>
                                Followers: {followers} <br/>
                                Following: {following}
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <RepoContainer repos={repos}/>
            </div>
    )
};