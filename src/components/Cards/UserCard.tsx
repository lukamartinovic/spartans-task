import React, {FC} from 'react';
import Card from 'react-bootstrap/Card'
import {useDispatch} from "react-redux";
import {fetchUser} from "../../state/users/thunks";
import {IUserCard} from './types'

export const UserCard: FC<IUserCard> = (user: IUserCard) => {
    const {login, avatar_url, name} = user;
    const dispatch = useDispatch();

    return (
        <Card onClick={() => dispatch(fetchUser(login))}>
            <Card.Img src={avatar_url}/>
            <Card.Title>
                {name}
            </Card.Title>
            <Card.Body>
                <Card.Title>
                    {login}
                </Card.Title>
            </Card.Body>
        </Card>
    )
};
