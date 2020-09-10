import React, {FC} from 'react';
import {IUserCard} from './types'
import Card from 'react-bootstrap/Card'
import {useDispatch} from "react-redux";
import {fetchUser} from "../../State/Users/thunks";

export const UserCard: FC<IUserCard> = (user: IUserCard) => {
    const {login, avatar_url} = user;
    const dispatch = useDispatch()

    return (
        <Card onClick={() => {dispatch(fetchUser(login))}}>
            <Card.Img src={avatar_url}/>
            <Card.Title>
                {user.name}
            </Card.Title>
            <Card.Body>
                <Card.Title>
                    {login}
                </Card.Title>

            </Card.Body>
        </Card>
    )
};
