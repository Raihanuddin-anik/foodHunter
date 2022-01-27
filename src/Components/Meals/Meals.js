import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Meals = ({ meal }) => {
    const key = meal.strCategory;
    return (

        <Col md={3}>
            <Link to={'/details/' + key}>
                <div style={{ margin: "10px" }}>
                    <Card.Img variant="top" src={meal.strMealThumb} />
                    <p style={{ color: "white", textAlign: "center" }}>{meal.strMeal}</p>
                </div>
            </Link>
        </Col >

    );
};

export default Meals;