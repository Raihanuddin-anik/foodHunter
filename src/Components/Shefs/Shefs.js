import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';


const Shefs = () => {
    const [shefs, setShefs] = useState([]);
  
   console.log(shefs)
    useEffect(() => {
        fetch('https://floating-springs-68465.herokuapp.com/shefs')
            .then((response) => response.json())
            .then((json) => setShefs(json));
    }, [])

    return (
        <Container>
            <div style={{ textAlign: "center", paddingTop: "20px" }}>
                <h5>Our Awesome Team</h5>
                <h2 >Met Our Shef</h2>
            </div>
            <Row>
                {shefs.map((person) => (
                <Col md={4}>
                    <Card className="my-5">
                        <Card.Img variant="top" src={person.img} />
                        <Card.Body>
                            <Card.Title className="text-center">{person.Name}</Card.Title>
                            <Card.Text className="text-center">
                                {person.description}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>))}
            </Row>
        </Container>
    );
};

export default Shefs;