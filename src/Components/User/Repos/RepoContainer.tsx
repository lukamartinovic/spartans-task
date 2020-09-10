import React, {FC} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import Card from 'react-bootstrap/Card'
import {IRepo, IRepoContainer} from "./types";

export const RepoContainer: FC<IRepoContainer> = (repos: IRepoContainer) => {
    console.log(repos.repos);

    const noRepoWarning = () => {
            return(
                <ListGroup.Item variant="danger">
                    User has no repositories currently
                </ListGroup.Item>
            )
    }

    return(
            <div className="repo-list-container">

            {repos.repos.length === 0 ? noRepoWarning() : repos.repos.map((repo: IRepo) => {
                return(
                    <Card className="repo-item">
                        <Card.Body>
                            <a href={repo.url}><Card.Title>{repo.name}</Card.Title></a>
                            <Card.Subtitle className="repo-description-text">
                                {repo.description}
                            </Card.Subtitle>
                        </Card.Body>
                    </Card>
                )
            })}
            </div>
    )
}

