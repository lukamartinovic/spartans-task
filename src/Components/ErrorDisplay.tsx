import React from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import {IError} from "../State/types";

export const ErrorDisplay = (error: IError) => {

    const {documentation_url, message} = error.data;

    return(
        <Container>
            <Row>
                <Col className="col-md-12">
                <div className="error-text">
                    <h1>
                        Oops!</h1>
                    <h2>
                        {error.status}
                    </h2>
                    <div className="error-details">
                        <h5>Sorry, an error has occurred:</h5>
                        <br/>
                        {message}
                        <br/>
                        {<a href={documentation_url}>Documentation</a>}
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    )
};