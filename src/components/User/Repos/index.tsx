import React, {FC} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import Card from 'react-bootstrap/Card'
import {IRepo, IRepoContainer} from "./types";
import './index.css'

export const Repos: FC<IRepoContainer> = ({repos}: IRepoContainer) => {
    const noRepoWarning = (
        <ListGroup.Item variant="danger">
            User has no repositories currently
        </ListGroup.Item>);

    return (
        <div className="repo">
            {repos.length === 0 ? noRepoWarning : repos.map(({url, name, description}: IRepo) => (
                    <Card className="repo__item">
                        <Card.Body>
                            <a href={url}><Card.Title>{name}</Card.Title></a>
                            <Card.Subtitle className="repo__description">
                                {description}
                            </Card.Subtitle>
                        </Card.Body>
                    </Card>
                )
            )}
        </div>
    )
};

