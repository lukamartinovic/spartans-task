import React, { FC } from 'react';
import {IUser, IUserCard} from './types'

export const UserCard: FC<IUserCard> = (user) => {

    return(<></>)
}

type TOnClick = (user: IUser) => void;

const onClick: TOnClick = (user) => {
    return "fsdfsd";
};

onClick({login: "5", public_repos: 5, created_at: new Date()});