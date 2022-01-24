import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Meals = ({ meal }) => {
const key = meal.strCategory;
    return (
        <Link to={'/details/' + key}>
            <Col md={3}>
                <div style={{ margin: "10px" }}>
                    <Card.Img variant="top" src={meal.strCategoryThumb} />

                </div>
                <p style={{ color: "white", textAlign: "center" }}>{meal.strCategory}</p>
            </Col>
        </Link>
    );
};

export default Meals;