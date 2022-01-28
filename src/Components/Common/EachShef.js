import React from 'react';
import { Card,Col } from 'react-bootstrap';

const EachShef = ({ person }) => {
    return (
        <Col md={4}>
            <Card className="my-5">
                <Card.Img variant="top" src={person.img} />
                <Card.Body>
                    <Card.Title  className="text-center">{person.Name}</Card.Title>
                    <Card.Text className="text-center">
                        {person.description}
                    </Card.Text>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default EachShef;