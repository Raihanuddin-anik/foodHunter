import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const RecipeDetails = ({ data }) => {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Image src={data.strMealThumb} className='w-75' />
                </Col>
                <Col>
                    <h2>This is meal service</h2>
                </Col>
            </Row>
        </Container>
    );
};

export default RecipeDetails;